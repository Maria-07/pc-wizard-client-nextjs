/* eslint-disable react-hooks/rules-of-hooks */
import RootLayout from "@/component/Layout/RootLayout";
import { Breadcrumb, Card } from "antd";
import { HomeOutlined, LaptopOutlined } from "@ant-design/icons";
import Image from "next/image";
import logo from "../assets/img/logo.png";
import Link from "next/link";
import { GiCircuitry } from "react-icons/gi";
import { getSession, useSession } from "next-auth/react";

const Categories = [
  {
    link: "/pc-components/processor",
    name: "CPU / Processor",
  },
  {
    link: "/pc-components/motherboard",
    name: "Motherboard",
  },
  {
    link: "/pc-components/ram",
    name: "RAM",
  },
  {
    link: "/pc-components/powerSupplyUnit",
    name: "Power Supply Unit",
  },
  {
    link: "/pc-components/storageDevice",
    name: "Storage Device",
  },
  {
    link: "/pc-components/monitor",
    name: "Monitor",
  },
  {
    link: "/pc-components/others",
    name: "Others",
  },
];

const pcBuilder = ({ data }) => {
  const { data: session } = useSession();
  console.log(session?.user?.email);

  const filteredPCBuilds = data?.data?.filter(
    (build) => build.userEmail === session?.user?.email
  );

  console.log("filteredPCBuilds", filteredPCBuilds);

  return (
    <div className="min-h-[100vh]">
      <div className="sm:w-[80%] sm:mx-auto ">
        <div className="mt-3 px-2">
          <Breadcrumb
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                title: (
                  <div className="flex items-center gap-2 mt-1 text-sm">
                    <LaptopOutlined />
                    <span>PC Build</span>
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="sm:w-[70%] sm:mx-auto p-8 border my-24 rounded-md shadow-md">
          <div className="flex items-center justify-between gap-4 flex-wrap border-b-2 pb-6 mb-10">
            {" "}
            <Image
              priority={true}
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <h1 className="text-primary font-secondary font-semibold text-base">
              PC Builder - Build Your Own Computer - PC Wizard
            </h1>
          </div>
          <div>
            <div>Total : {filteredPCBuilds.length}</div>
            <button disabled className="input-button ">
              Submit
            </button>
          </div>
          {filteredPCBuilds?.map((p, i) => (
            <div key={i}>{p?.product?.name}</div>
          ))}
          <div className="text-xs bg-primary text-secondary px-3 py-1 my-8">
            Core Component
          </div>
          <div>
            {Categories?.map((c, i) => (
              <Card hoverable key={i} className="my-4">
                <div className="flex flex-wrap items-center justify-between gap-4 my-1 pl-4">
                  <div className="flex items-center gap-2 ">
                    <GiCircuitry className="text-xl font-semibold text-gray-500 border" />
                    <div className="text-lg font-secondary">{c.name}</div>{" "}
                    {c.name == `Others` ? (
                      <></>
                    ) : (
                      <>
                        <button className=" px-1 py-[2px] border shadow-md bg-white text-accent rounded-lg text-xs font-semibold">
                          Required
                        </button>
                      </>
                    )}
                  </div>

                  <Link href={c.link}>
                    {" "}
                    <button className="catagories-button w-[170px] text-sm font-semibold bg-secondary">
                      {c.name}
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default pcBuilder;

pcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// This gets called on every request
export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("session", session);

  // Fetch data from external API
  const res = await fetch(
    `https://pc-wizard-auth-service.vercel.app/api/v1/pcBuild`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
