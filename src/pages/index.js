import RootLayout from "@/component/Layout/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <>
        <Head>
          <title>PC WIZARD</title>
          <meta
            name="description"
            content="This is PC building application made by next-js"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <div className="bg-primary pt-8 pb-36 px-3">
          <div className="sm:w-[80%] sm:mx-auto flex flex-wrap items-center justify-between">
            <div className="text-4xl font-bold font-primary text-white">
              Welcome to
              <span className="text-secondary"> Boikoi</span> <br /> Your
              Gateway to Endless Knowledge
            </div>
            <div></div>
          </div>
        </div>
      </>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
