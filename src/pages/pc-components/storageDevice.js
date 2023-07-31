import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";
import SimilarProductCard from "@/component/UI/Product/SimilarProductCard";

const storageDevice = ({ similarData }) => {
  return (
    <div>
      {" "}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
        {similarData?.data.map((product, i) => (
          <SimilarProductCard key={i} product={product}></SimilarProductCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default storageDevice;

storageDevice.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  );
};

export const getStaticProps = async () => {
  const similarDataRes = await fetch(
    `https://pc-wizard-auth-service.vercel.app/api/v1/products?category=Storage Device`
  );
  const similarData = await similarDataRes.json();
  // console.log("similarData", similarData);

  return {
    props: {
      similarData: similarData,
    },
  };
};
