import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";

const PcComponentsPage = () => {
  return <div>PcComponentsPage</div>;
};

export default PcComponentsPage;

PcComponentsPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  );
};
