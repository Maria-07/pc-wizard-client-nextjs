import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import img from "../../../assets/img/cooler.jpg";

const SimilarProduct = ({ product }) => {
  return (
    <div className="mb-5 ">
      <Link href={`${product._id}`}>
        <Card hoverable>
          <div className="flex">
            <div>
              <Image
                priority={true}
                src={img}
                width={"100"}
                height={"100"}
                alt="Picture of the component"
              ></Image>
            </div>
            <div className="">
              <div className="py-3 flex justify-between">
                <div>
                  {" "}
                  <h1 className="text-primary font-primary font-semibold mb-1 text-lg">
                    {product.name}
                  </h1>
                  <div className="text-popover text-base">
                    <span className="font-semibold">Catagories : </span>
                    {product.category}
                  </div>
                  <div className="text-popover text-base">
                    <span className="font-semibold">Status :</span>{" "}
                    {product.status}
                  </div>
                  <div className=" mr-5 font-primary text-accent text-xl font-bold">
                    {product.price}$
                  </div>
                </div>

                <div className="flex items-end justify-end ">
                  {/* <Link href={`/product-details`}> */}

                  {/* <div className=" mr-5 font-primary text-primary text-2xl font-bold">
                  {product.price}$
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>{" "}
    </div>
  );
};

export default SimilarProduct;
