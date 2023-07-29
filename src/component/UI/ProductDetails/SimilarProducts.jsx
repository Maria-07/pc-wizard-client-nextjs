import React from "react";

const SimilarProducts = ({ singleData }) => {
  console.log(singleData);
  return <div></div>;
};

export default SimilarProducts;

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products?category=${singleData?.data?.catagory}`
  );
  const data = await res.json();
  console.log("all data", data);

  return {
    props: {
      products: data,
    },
  };
};
