import { Table } from "antd";
import React from "react";
import SimilarProduct from "./SimilarProduct";

const SimilarProducts = ({ singleData, similarData }) => {
  console.log(similarData);

  const { keyFeatures } = singleData?.data;

  const columns = [
    {
      title: "Features",
      dataIndex: "feature",
      key: "feature",
      width: 100,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-primary font-semibold  text-base">
            {record?.feature}
          </div>
        );
      },
      rowScope: "row",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: 200,
      render: (_, record) => {
        //console.log("tags : ", lock);
        return (
          <div className=" text-primary font-semibold font-secondary text-base">
            {record?.value}
          </div>
        );
      },
    },
  ];

  const data = [
    {
      key: 1,
      value: keyFeatures?.Brand,
      feature: "Brand",
    },
    {
      key: 2,
      value: keyFeatures?.Model,
      feature: "Model",
    },
    {
      key: 3,
      value: keyFeatures?.Specification,
      feature: "Specification",
    },
    {
      key: 4,
      value: keyFeatures?.Port,
      feature: "Port",
    },
    {
      key: 5,
      value: keyFeatures?.Type,
      feature: "Type",
    },
    {
      key: 6,
      value: keyFeatures?.Resolution,
      feature: "Resolution",
    },
    {
      key: 7,
      value: keyFeatures?.Voltage,
      feature: "Voltage",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        <div className="sm:col-span-2">
          <div>
            <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2">
              Specific Details
            </h1>
          </div>
          <div className="overflow-x-scroll ">
            <Table
              pagination={false}
              columns={columns}
              dataSource={data}
              bordered
            />
          </div>
        </div>
        <div className="border-l-2 px-8">
          <h1 className="text-lg text-accent font-semibold border-gray-200 pb-2">
            Related Product
          </h1>
          {similarData?.data.map((product, i) => (
            <SimilarProduct key={i} product={product}></SimilarProduct>
          ))}
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
