import RootLayout from "@/component/Layout/RootLayout";
import LoginForm from "@/component/UI/Auth/LoginForm";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import logIn from "../assets/video/LogIn.gif";
import { signIn } from "next-auth/react";

const login = () => {
  return (
    <div>
      {" "}
      <div className="sm:w-[70%] min-h-[100vh] sm:mx-auto mt-[8%] my-10 px-5">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <div className="mx-auto">
            <Image
              src={logIn}
              width={"auto"}
              height={"auto"}
              alt="Picture of the author"
            />
          </div>
          <div className="sm:mx-auto">
            <h1 className="font-primary text-2xl font-bold text-primary">
              WELCOME BACK
            </h1>
            <h3 className="text-base font-normal text-gray-500">
              Login to continue
            </h3>
            <div>
              <LoginForm></LoginForm>
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
              Don&apos;t have any account ?
              <Link href={"/signUp"}>
                <button className="text-primary font-semibold"> Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
