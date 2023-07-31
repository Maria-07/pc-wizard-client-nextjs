import { Card } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import img from "../../../assets/img/cooler.jpg";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const SimilarProductCard = ({ product }) => {
  const { data: session } = useSession();
  console.log(session);

  const [copiedProductId, setCopiedProductId] = useState(null);

  const handleCopyProductToMypc = async (productId) => {
    try {
      const response = await fetch(
        `https://pc-wizard-auth-service.vercel.app/api/v1/pcBuild`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            product: productId,
            userEmail: session?.user?.email,
          }),
        }
      );

      if (response.ok) {
        // Product data copied successfully
        setCopiedProductId(productId);
        toast.success("Successfully added product");
      } else {
        // Handle the error if necessary
        toast.error("Already added this product");
        console.error("Failed to copy product data:", response.statusText);
      }
    } catch (error) {
      console.error("Error while copying product data:", error.message);
    }
  };

  // const handleCopyProductToMypc = (id) => {
  //   alert(id);
  // };

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
              <div>
                {" "}
                <Link href={`${product._id}`}>
                  <button className="input-button">More Details</button>
                </Link>{" "}
                {!session?.user ? (
                  <></>
                ) : (
                  <button
                    className="input-button-black ml-2"
                    onClick={() => handleCopyProductToMypc(product?._id)}
                  >
                    Add To Build
                  </button>
                )}
              </div>
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

export default SimilarProductCard;
