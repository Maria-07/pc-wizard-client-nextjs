import Sidebar from "../UI/Sidebar/Sidebar";

const PcComponentLayout = ({ children }) => {
  return (
    <div className="sm:w-[80%] px-1 sm:mx-auto">
      <div className="min-h-[100vh] grid sm:grid-cols-5 grid-cols-1 py-8  gap-2">
        <Sidebar></Sidebar>
        <div className="border rounded-md p-2 py-5 shadow-md bg-white sm:col-span-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PcComponentLayout;
