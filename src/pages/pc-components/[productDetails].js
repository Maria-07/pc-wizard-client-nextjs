import RootLayout from "@/component/Layout/RootLayout";
import Description from "@/component/UI/ProductDetails/Description";
import ProductInfo from "@/component/UI/ProductDetails/ProductInfo";
import Reviews from "@/component/UI/ProductDetails/Reviews";
import SimilarProducts from "@/component/UI/ProductDetails/SimilarProducts";
import { HomeOutlined, InboxOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { AiFillPrinter, AiOutlineShareAlt } from "react-icons/ai";

const ProductDetailPage = ({ singleData, similarData }) => {
  // console.log(similarData, "similarData");
  return (
    <div className="sm:w-[80%] px-3 sm:mx-auto py-2 min-h-[100vh]">
      <div>
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              href: "/pc-components",
              title: (
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <InboxOutlined />
                  <span>Product List</span>
                </div>
              ),
            },
            {
              title: <div className="mt-[2px]">{singleData?.data?.name}</div>,
            },
          ]}
        />
      </div>

      <div className="my-5 flex items-center justify-between flex-wrap">
        <div className="text-base">
          <span className="text-sky-600">Intel</span>{" "}
          <span className="text-primary font-semibold"> SKU: </span> 362020{" "}
          <span className="text-primary font-semibold"> Mfr Part #: </span>
          BX8071512400
        </div>
        <div className="flex items-center gap-2">
          <button className="text-base font-semibold flex items-center gap-2">
            <AiFillPrinter className="text-popover" /> Print
          </button>
          <button className="text-base font-semibold flex items-center gap-2">
            <AiOutlineShareAlt className="text-popover" /> Share
          </button>
        </div>
      </div>
      <ProductInfo singleData={singleData}></ProductInfo>
      <SimilarProducts
        singleData={singleData}
        similarData={similarData}
      ></SimilarProducts>
      <Description></Description>
      <Reviews singleData={singleData}></Reviews>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://pc-wizard-auth-service.vercel.app/api/v1/products"
  );
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productDetails: product.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://pc-wizard-auth-service.vercel.app/api/v1/products/${params.productDetails}`
  );
  const data = await res.json();

  console.log("catagories", data?.data?.category);

  const similarDataRes = await fetch(
    `https://pc-wizard-auth-service.vercel.app/api/v1/products?category=${data?.data?.category}`
  );
  const similarData = await similarDataRes.json();

  console.log("similarData", similarData);

  // Pass post data to the page via props
  return { props: { singleData: data, similarData: similarData } };
}
