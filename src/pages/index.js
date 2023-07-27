import RootLayout from "@/component/Layout/RootLayout";

const HomePage = () => {
  return <div>This is home page</div>;
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
