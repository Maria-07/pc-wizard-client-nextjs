import { Card } from "antd";
import Link from "next/link";

const Categories = [
  {
    link: "/pc-components/processor",
    name: "CPU / Processor",
  },
  {
    link: "/pc-components/motherboard",
    name: "Motherboard",
  },
  {
    link: "/pc-components/ram",
    name: "RAM",
  },
  {
    link: "/pc-components/powerSupplyUnit",
    name: "Power Supply Unit",
  },
  {
    link: "/pc-components/storageDevice",
    name: "Storage Device",
  },
  {
    link: "/pc-components/monitor",
    name: "Monitor",
  },
  {
    link: "/pc-components/others",
    name: "Others ",
  },
];

const Components = () => {
  return (
    <div className="sm:w-[80%] px-1 sm:mx-auto py-2 mt-10 mb-24">
      <div className="grid sm:grid-cols-4 md:grid-cols-7 grid-cols-1 gap-4">
        {Categories?.map((c, i) => (
          <Link href={c.link} key={i}>
            <Card hoverable>
              <div className="text-center py-8 font-secondary text-primary font-semibold text-xl">
                {c.name}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Components;
