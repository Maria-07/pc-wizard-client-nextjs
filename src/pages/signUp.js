import RootLayout from "@/component/Layout/RootLayout";
import SigUpFrom from "@/component/UI/Auth/SigUpFrom";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import SignUp from "../assets/video/SignUp.gif";
import { Divider } from "antd";

const signUp = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="sm:w-[70%] min-h-[100vh] sm:mx-auto mt-[8%] my-10 px-5">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="mx-auto">
              <Image
                src={SignUp}
                width={"auto"}
                height={"auto"}
                alt="Picture of the author"
              />
            </div>
            <div className="sm:mx-auto">
              <h1 className="font-primary text-2xl font-bold text-primary">
                WELCOME To <span className="text-accent">PC Wizard</span>
              </h1>
              <h3 className="text-base font-normal text-gray-500">
                Create your account
              </h3>
              <div>
                <SigUpFrom></SigUpFrom>
              </div>
              <div className="">
                <Divider>Or Login with</Divider>
              </div>
              <div className="my-5">
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() =>
                      signIn("google", {
                        callbackUrl: "http://localhost:3000/",
                      })
                    }
                    className="flex items-center gap-2 input-button"
                  >
                    <BsGoogle />
                    Google
                  </button>
                  <button
                    onClick={() =>
                      signIn("github", {
                        callbackUrl: "http://localhost:3000/",
                      })
                    }
                    className="flex items-center gap-2 input-button"
                  >
                    <BsGithub /> Github
                  </button>
                  <button className="flex items-center gap-2 input-button">
                    <BsFacebook /> Facebook
                  </button>
                </div>
              </div>

              <div className="text-sm font-medium text-gray-600 flex gap-2 my-5">
                Already have an account ?
                <Link href={"/login"}>
                  <button className="text-primary font-semibold">
                    {" "}
                    Login{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp;

signUp.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
