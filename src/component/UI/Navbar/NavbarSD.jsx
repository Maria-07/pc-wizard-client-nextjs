import Hamburger from "hamburger-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../assets/img/logo2.png";
import { Dropdown } from "antd";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const items = [
  {
    key: "1",
    label: (
      <Link href="/pc-components/processor">
        <button className="text-primary font-semibold">CPU / Processor</button>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/pc-components/motherboard">
        <button className="text-primary font-semibold">Motherboard</button>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/pc-components/ram">
        <button className="text-primary font-semibold">RAM</button>
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link href="/pc-components/powerSupplyUnit">
        <button className="text-primary font-semibold">
          Power Supply Unit
        </button>
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link href="/pc-components/storageDevice">
        <button className="text-primary font-semibold">Storage Device</button>
      </Link>
    ),
  },
  {
    key: "6",
    label: (
      <Link href="/pc-components/monitor">
        <button className="text-primary font-semibold">Monitor</button>
      </Link>
    ),
  },
  {
    key: "7",
    label: (
      <Link href="/pc-components/others">
        <button className="text-primary font-semibold">Others</button>
      </Link>
    ),
  },
];

const NavbarSD = ({ isOpen, setOpen, session }) => {
  const currentRoute = usePathname();
  return (
    <motion.div
      animate={{
        width: isOpen ? "300px" : "0px",
        transition: {
          duration: 0.5,
          type: "spring",
          // damping: 8,
        },
      }}
      className={`fixed w-[300px] top-0 left-0 z-50 bg-accent h-screen overflow-x-hidden`}
    >
      <header className="flex justify-between items-center m-2">
        <div className="text-xl font-bold">
          {" "}
          <Image
            src={logo}
            width={"130"}
            height={"auto"}
            alt="Picture of the author"
          />
        </div>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={24}
          color={isOpen ? "white" : "black"}
          label="Toggle Menu"
        />
      </header>
      <div className="min-h-[80vh]">
        <div className=" my-10 ">
          <div className="flex items-center justify-center my-5">
            <Link
              className={
                currentRoute === "/"
                  ? "text-secondary font-medium text-lg"
                  : "text-primary font-semibold text-lg"
              }
              href={"/"}
            >
              Home
            </Link>
          </div>

          <div className="flex items-center justify-center my-5">
            {" "}
            <Link
              className={
                currentRoute === "/pc-components"
                  ? "text-secondary font-medium text-lg"
                  : "text-primary font-semibold text-lg"
              }
              href={"/pc-components"}
            >
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomCenter"
                arrow
              >
                <button className="">Catagories</button>
              </Dropdown>
            </Link>
          </div>
          <div className="flex items-center justify-center my-5">
            <Link
              className="px-3 py-1 bg-secondary rounded-md font-semibold border"
              href={"/pcBuilder"}
            >
              <button>PC Builder</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="">
          {!session?.user && (
            <div className="flex items-center gap-2 justify-center">
              <Link
                className="px-3 py-1 bg-secondary rounded-md font-semibold border"
                href={"/login"}
              >
                Login
              </Link>
              |
              <Link
                className="px-3 py-1 bg-secondary rounded-md font-semibold border"
                href={"/signUp"}
              >
                Sign Up
              </Link>
            </div>
          )}

          {session?.user && (
            <div className="flex items-center gap-2 justify-center">
              {" "}
              <button
                className="px-3 py-1 bg-secondary rounded-md font-semibold border "
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NavbarSD;
