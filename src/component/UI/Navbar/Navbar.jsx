import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import logo from "../../../assets/img/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const currentRoute = usePathname();

  //   const { data: session } = useSession();
  //   console.log("session user", session);

  return (
    <div>
      {" "}
      <div className="hidden md:block border border-b-1">
        <div className="sm:w-[80%] px-1 sm:mx-auto py-1 flex justify-between">
          <div>
            {" "}
            <Image
              src={logo}
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div className="flex items-center gap-5">
            <Link
              className={
                currentRoute === "/"
                  ? "text-primary text-base font-semibold border-b-[2px] border-accent h-8"
                  : "text-dark text-base font-semibold h-8 hover:text-primary hover:border-primary hover:border-b-[2px] transition-all duration-100"
              }
              href={"/"}
            >
              Home
            </Link>
            <button className="text-primary text-base font-semibold mb-2 ">
              Catagories
            </button>

            <Link className="input-button" href={"/pcBuilder"}>
              <button>PC Builder</button>
            </Link>

            {/* {session?.user && (
              <button onClick={() => signOut()}>Sign Out</button>
            )} */}
          </div>
        </div>
      </div>
      <div className="bg-accent py-1">
        <div className="sm:w-[80%] sm:mx-auto flex flex-wrap items-center justify-between px-1">
          <div className="text-base font-semibold ">Build Your pc with us</div>

          <div className="flex items-center gap-2">
            <Link
              className="text-primary hover:text-secondary text-base font-medium "
              href={"/login"}
            >
              Login
            </Link>
            |
            <Link
              className="hover:text-secondary text-primary text-base font-medium "
              href={"/signUp"}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
