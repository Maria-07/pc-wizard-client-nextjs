import React from "react";
import img from "../../../assets/img/cooler.jpg";
import Image from "next/image";
import { Rate } from "antd";

const ProductInfo = ({ singleData }) => {
  console.log(singleData);
  const {
    name,
    price,
    category,
    status,
    description,
    keyFeatures,
    individualRating,
    averageRating,
  } = singleData?.data;

  return (
    <div>
      <h1 className="text-2xl font-semibold font-secondary border-b-2 py-2">
        {name}
      </h1>
      <div className="flex my-10 gap-4 flex-wrap sm:flex-nowrap ">
        <div>
          <Image
            src={img}
            width={"550"}
            height={"400"}
            alt="Picture of the component"
          ></Image>
        </div>

        <div className="px-8 py-4">
          <h1 className="text-xl text-accent font-secondary mb-5">{name}</h1>
          <div className="mb-8 flex items-center gap-3 flex-wrap">
            <button className=" px-2 py-1 border shadow-md bg-white rounded-xl text-sm font-semibold">
              <span className="text-accent font-semibold">Status : </span>{" "}
              {status}
            </button>
            <button className=" px-2 py-1 border shadow-md bg-white rounded-xl text-sm font-semibold">
              <span className="text-accent font-semibold">Brand : </span>{" "}
              {keyFeatures.Brand}
            </button>
            <button className=" px-2 py-1 border shadow-md bg-white rounded-xl text-sm font-semibold">
              <span className="text-accent font-semibold">
                Regular Price :{" "}
              </span>{" "}
              {price + 100}$
            </button>
            <button className=" px-2 py-1 border shadow-md bg-white rounded-xl text-sm font-semibold">
              <span className="text-accent font-semibold">Offer Price : </span>{" "}
              {price}$
            </button>
            <button className=" px-2 py-1 border shadow-md bg-white rounded-xl text-sm font-semibold">
              <span className="text-accent font-semibold">Product Code : </span>{" "}
              16037
            </button>
          </div>
          <div className="text-sm text-gray-400 mb-2">
            <Rate allowHalf disabled defaultValue={averageRating} />{" "}
            {averageRating} out of 5
          </div>
          <h1 className="text-xl text-accent border-b-2 border-gray-200 pb-2">
            Key Features
          </h1>
          <ul className="ml-4 list-disc">
            <li>
              <div className="flex items-center gap-2 text-base mt-5">
                <div className="flex items-center text-base font-semibold text-primary">
                  Category :
                </div>
                {category}
              </div>
            </li>
            <li>
              {" "}
              <div className="flex items-center gap-2 text-base mt-1">
                <div className="flex items-center text-base font-semibold text-primary">
                  Rating :
                </div>
                {individualRating}
              </div>
            </li>

            <li>
              {" "}
              <div className="flex items-center gap-2 text-base mt-1">
                <div className="flex items-center text-base font-semibold text-primary">
                  Average Rating :
                </div>
                {individualRating + 1}
              </div>
            </li>
            <li>
              <div className="flex gap-2 text-base mt-1">
                <div className="text-base font-semibold text-primary">
                  Description :
                </div>
                {description}
              </div>
            </li>
          </ul>
          <div className="mt-5">
            <h1 className="text-lg text-sky-600 border-gray-200 pb-2">
              MORE INFO :
            </h1>
            <div>
              <span className="font-semibold text-gray-500">Clockspeed : </span>
              3.5 GHz Up to 5.3 GHz,
            </div>
            <div>
              <span className="font-semibold text-gray-500">Cache: : </span>
              16 MB,
            </div>
            <div>
              <span className="font-semibold text-gray-500">Socket: </span>
              LGA 1200,
            </div>
            <div>
              <span className="font-semibold text-gray-500">CPU Cores: </span>8,
            </div>
            <div>
              <span className="font-semibold text-gray-500">CPU Threads:</span>
              16 ,
            </div>
            <div>
              <span className="font-semibold text-gray-500">GPU name:</span>
              Intel Iris Xe Graphics 32
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
