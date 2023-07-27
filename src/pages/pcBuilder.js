import RootLayout from "@/component/Layout/RootLayout";

const pcBuilder = () => {
  return <div>pc builder page</div>;
};

export default pcBuilder;

pcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
