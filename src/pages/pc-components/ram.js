import PcComponentLayout from "@/component/Layout/PcComponentLayout";
import RootLayout from "@/component/Layout/RootLayout";

const ram = () => {
  return <div>ram</div>;
};

export default ram;

ram.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <PcComponentLayout>{page}</PcComponentLayout>
    </RootLayout>
  );
};
