import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import logo from "../../../assets/img/logo.png";
import Image from "next/image";
import NavbarSD from "./NavbarSD";
import Hamburger from "hamburger-react";
import { Dropdown } from "antd";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentRoute = usePathname();

  const { data: session } = useSession();
  // console.log("session user", session);

  const items = [
    {
      key: "1",
      label: (
        <Link href="/pc-components/processor">
          <button className="text-primary font-semibold">
            CPU / Processor
          </button>
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

  return (
    <div>
      {" "}
      <div className="hidden md:block border border-b-1">
        <div className="sm:w-[80%] px-1 sm:mx-auto py-2 flex justify-between">
          <div>
            {" "}
            <Image
              priority={true}
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div className="flex items-center gap-5">
            <Link
              className={
                currentRoute === "/" ? "active custom_link" : "custom_link"
              }
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={
                currentRoute === "/pc-components"
                  ? "active custom_link"
                  : "custom_link"
              }
              href={"/pc-components"}
            >
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
              >
                <button className="">Catagories</button>
              </Dropdown>
            </Link>

            <Link className="input-button" href={"/pcBuilder"}>
              <button>PC Builder</button>
            </Link>

            {/* {session?.user && (
              <button onClick={() => signOut()}>Sign Out</button>
            )} */}
          </div>
        </div>
      </div>
      {/* for small device  */}
      <div className="md:hidden block border border-b-1">
        <div className="flex items-center justify-between gap-2">
          {" "}
          <Hamburger size={20} toggled={open} toggle={setOpen} />
          <div className="mr-2">
            {" "}
            <Image
              priority={true}
              src={logo}
              width={"130"}
              height={"auto"}
              alt="Picture of the author"
            />
          </div>
        </div>

        <NavbarSD session={session} isOpen={open} setOpen={setOpen}></NavbarSD>
      </div>
      <div className="bg-accent py-1">
        <div className="sm:w-[80%] sm:mx-auto flex flex-wrap items-center justify-between px-1">
          <div className="text-base font-semibold ">Build Your pc with us</div>

          <div className="flex items-center gap-2">
            {!session?.user && (
              <div className="flex items-center gap-2">
                <Link
                  className={
                    currentRoute === "/login"
                      ? "text-secondary hover:text-black text-base font-medium "
                      : "text-primary hover:text-secondary text-base font-medium "
                  }
                  href={"/login"}
                >
                  Login
                </Link>
                |
                <Link
                  className={
                    currentRoute === "/signUp"
                      ? "text-secondary hover:text-black text-base font-medium "
                      : "text-primary hover:text-secondary text-base font-medium "
                  }
                  href={"/signUp"}
                >
                  Sign Up
                </Link>
              </div>
            )}

            {session?.user && (
              <button
                className="text-secondary hover:text-black text-base font-medium "
                onClick={() => signOut()}
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
