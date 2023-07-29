import { Card } from "antd";
import Image from "next/image";
import React from "react";
import img from "../../../assets/img/cooler.jpg";
import Link from "next/link";

const ProductCardVertical = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 ">
      <Card hoverable>
        <div className="flex">
          <div>
            <Image
              src={img}
              width={"200"}
              height={"auto"}
              alt="Picture of the component"
            ></Image>
          </div>
          <div className="py-3">
            <h1 className="text-primary font-primary font-semibold mb-3 text-lg">
              DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler
            </h1>
            <div className="text-popover text-base">
              <span className="font-semibold">Catagories :</span> Power Supply
              Unit
            </div>
            <div className="text-popover text-base">
              <span className="font-semibold">Status :</span> In Stock
            </div>
            <div className="text-popover text-base">
              <span className="font-semibold">Ratting :</span> 4.5
            </div>
            <div className="flex items-center justify-between mt-5">
              <Link href={"/product-details"}>
                <button className="input-button">More Details</button>
              </Link>

              <div className=" mr-8 font-primary text-primary text-2xl font-bold">
                800৳
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card hoverable>
        <div className="flex">
          <div>
            <Image
              src={img}
              width={"200"}
              height={"auto"}
              alt="Picture of the component"
            ></Image>
          </div>
          <div className="py-3">
            <h1 className="text-primary font-primary font-semibold mb-3 text-lg">
              DeepCool ICE EDGE MINI FS V2.0 CPU Air Cooler
            </h1>
            <div className="text-popover text-base">
              <span className="font-semibold">Catagories :</span> Power Supply
              Unit
            </div>
            <div className="text-popover text-base">
              <span className="font-semibold">Status :</span> In Stock
            </div>
            <div className="text-popover text-base">
              <span className="font-semibold">Ratting :</span> 4.5
            </div>
            <div className="flex items-center justify-between mt-5">
              <button className="input-button">More Details</button>
              <div className=" mr-8 font-primary text-primary text-2xl font-bold">
                800৳
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductCardVertical;
