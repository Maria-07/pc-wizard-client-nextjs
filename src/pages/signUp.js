import RootLayout from "@/component/Layout/RootLayout";

const signUp = () => {
  return <div>signup</div>;
};

export default signUp;

signUp.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
