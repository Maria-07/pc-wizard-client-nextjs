import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";
import ProductCardVertical from "@/component/UI/Product/ProductCardVertical";

const PcComponentsPage = ({ products }) => {
  return (
    <>
      {" "}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
        {products?.data.map((product, i) => (
          <ProductCardVertical key={i} product={product}></ProductCardVertical>
        ))}{" "}
      </div>
    </>
  );
};

export default PcComponentsPage;

PcComponentsPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products");
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      products: data,
    },
  };
};
