import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiCircuitry } from "react-icons/gi";

const PcBuildDetails = ({ data }) => {
  return (
    <div>
      {" "}
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
          <div>Total : {data?.data?.length}</div>
          <button disabled className="input-button ">
            Submit
          </button>
        </div>
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
  );
};

export default PcBuildDetails;
