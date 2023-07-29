import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";
import ProductCardVertical from "@/component/UI/Product/ProductCardVertical";

const PcComponentsPage = () => {
  return (
    // <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
    <ProductCardVertical></ProductCardVertical>
    // </div>
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
