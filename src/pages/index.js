import RootLayout from "@/component/Layout/RootLayout";
import Head from "next/head";
import banner from "../assets/img/banner.png";
import Image from "next/image";
import Catagories from "@/component/UI/Home/Catagories";
import Components from "@/component/UI/Home/Components";
import PcWizard from "@/component/UI/Home/PcWizard";

const HomePage = ({ products }) => {
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
          <div className="sm:w-[80%] sm:mx-auto flex sm:flex-nowrap flex-wrap items-center justify-between">
            <div className="text-2xl font-bold font-primary text-secondary lg:w-1/2">
              Welcome to
              <span className="text-accent text-3xl">
                {" "}
                PC-Wizard
              </span> <br /> PC Wizard is a state-of-the-art online platform
              designed to empower PC enthusiasts and gamers to build their dream
              custom PCs effortlessly.
            </div>
            <div>
              {" "}
              <Image
                priority={true}
                src={banner}
                width={"auto"}
                height={"auto"}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-primary my-16 text-accent text-center">
          Catagories
        </h1>
        <Components></Components>
        <PcWizard></PcWizard>
        <h1 className="text-3xl font-primary my-16 text-accent text-center">
          PC components
        </h1>
        <div>
          <Catagories products={products}></Catagories>
        </div>
      </>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-wizard-auth-service.vercel.app/api/v1/products?page=1&limit=6"
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      products: data,
    },
  };
};
