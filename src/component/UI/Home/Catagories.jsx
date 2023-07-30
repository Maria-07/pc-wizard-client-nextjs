import CatagoriesCard from "./CatagoriesCard";

const Catagories = ({ products }) => {
  return (
    <div className="sm:w-[80%] px-1  py-2 sm:mx-auto mx-10 mb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 grid-cols-1 gap-4 ">
        {products?.data.map((product, i) => (
          <CatagoriesCard key={i} product={product}></CatagoriesCard>
        ))}{" "}
      </div>
    </div>
  );
};

export default Catagories;
