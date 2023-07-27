import RootLayout from "@/component/Layout/RootLayout";

const login = () => {
  return <div>login</div>;
};

export default login;

login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
