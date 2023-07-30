import { Card } from "antd";
import Image from "next/image";
import React from "react";
import img from "../../../assets/img/cooler.jpg";
import Link from "next/link";

const ProductCardVertical = ({ product }) => {
  return (
    <Card hoverable>
      <div className="flex">
        <div>
          <Image
            priority={true}
            src={img}
            width={"200"}
            height={"200"}
            alt="Picture of the component"
          ></Image>
        </div>
        <div className="">
          <div className="py-3 ">
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
            </div>{" "}
            <div className="flex flex-wrap gap-2 items-center justify-between mt-5 sm:w-[400px]">
              {/* <Link href={`/product-details`}> */}
              <Link href={`pc-components/${product._id}`}>
                <button className="input-button">More Details</button>
              </Link>{" "}
              <div className=" mr-5 font-primary text-primary text-2xl font-bold">
                {product.price}$
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCardVertical;
