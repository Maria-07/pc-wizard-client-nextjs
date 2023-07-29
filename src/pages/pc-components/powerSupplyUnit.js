import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";

const powerSupplyUnit = () => {
  return <div>powerSupplyUnit powerSupplyUnit</div>;
};

export default powerSupplyUnit;

powerSupplyUnit.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  );
};
