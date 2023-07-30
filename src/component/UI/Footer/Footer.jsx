import Link from "next/link";
import { RiFacebookBoxFill, RiInstagramLine } from "react-icons/ri";
import logo from "../../../assets/img/logo3.png";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="bg-primary text-secondary p-10 ">
        <div className="flex sm:w-[80%] px-1 sm:mx-auto flex-wrap justify-between gap-10">
          <div className="my-auto">
            <p>Privacy Policy</p>
            <p>Terms & Condition</p>
            <p className="my-10 text-gray-400"> &#169; PcWizard {year}</p>
          </div>
          <div className="sm:mx-auto my-auto">
            <div>
              {" "}
              <Image
                src={logo}
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
          </div>{" "}
          <div className="flex justify-between gap-10 flex-wrap">
            <div className=" ">
              <div className="flex items-center gap-4 my-5 flex-wrap">
                <Link href={"#"} className="hover:text-popover">
                  Upcoming
                </Link>

                <Link href={"#"} className="hover:text-popover">
                  Shipping
                </Link>

                <Link href={"#"} className="hover:text-popover">
                  How it works
                </Link>
              </div>
              <div className="flex items-center gap-4 my-5 flex-wrap">
                <Link href={"#"} className="hover:text-popover">
                  Support
                </Link>
                <Link href={"#"} className="hover:text-popover">
                  Careers
                </Link>
              </div>
              <div className="flex items-center gap-4 my-5 flex-wrap">
                {" "}
                <Link href={"#"} className="hover:text-popover">
                  List your gear
                </Link>
                <Link href={"#"} className="hover:text-popover">
                  Contact team
                </Link>
              </div>

              <div className="flex gap-2 text-2xl">
                <RiFacebookBoxFill />
                <RiInstagramLine />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20 gap-5"></div>
      </div>
    </div>
  );
};

export default Footer;
