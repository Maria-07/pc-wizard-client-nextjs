import { Card } from "antd";
import Image from "next/image";
import React from "react";
import img from "../../../assets/img/cooler.jpg";
import Link from "next/link";

const CatagoriesCard = ({ product }) => {
  return (
    <Card hoverable>
      <div className="">
        <div>
          <Image
            src={img}
            width={"200"}
            height={"200"}
            alt="Picture of the component"
          ></Image>
        </div>
        <div className="">
          <div className="py-3 ">
            <div className="h-[190px]">
              <h1 className="text-primary font-primary font-semibold mb-3 text-lg">
                {product.name}
              </h1>
              <div className="text-popover text-base">
                <span className="font-semibold">Catagories : </span>
                {product.category}
              </div>
              <div className="text-popover text-base">
                <span className="font-semibold">Status :</span> {product.status}
              </div>
              <div className="text-popover text-base">
                <span className="font-semibold">Ratting :</span>{" "}
                {product.individualRating}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center justify-center mt-5 ">
              <div className=" mr-5 font-primary text-primary text-2xl font-bold">
                {product.price}$
              </div>
              {/* <Link href={`/product-details`}> */}
              <Link href={`pc-components/${product._id}`}>
                <button className="input-button">More Details</button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CatagoriesCard;
