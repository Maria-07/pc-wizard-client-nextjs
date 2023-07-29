import RootLayout from "@/component/Layout/RootLayout";
import { HomeOutlined, InboxOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const ProductDetails = () => {
  return (
    <div className="sm:w-[80%] px-1 sm:mx-auto py-2  min-h-[100vh]">
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
              title: <div className="mt-[2px]">{`Cooler`}</div>,
            },
          ]}
        />
      </div>
      <div className="my-5">
        <div className="text-sm">
          <span className="text-sky-600">Intel</span>{" "}
          <span className="text-primary font-semibold"> SKU: </span> 362020{" "}
          <span className="text-primary font-semibold"> Mfr Part #: </span>
          BX8071512400
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
