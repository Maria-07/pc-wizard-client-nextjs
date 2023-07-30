import React from "react";
import banner from "../../../assets/video/Firmware.gif";
import Image from "next/image";

const PcWizard = () => {
  return (
    <div className="bg-secondary py-10">
      {" "}
      <div className="flex items-center flex-wrap sm:w-[80%] px-1 sm:mx-auto py-2 mt-10 mb-24 ">
        <div>
          <Image
            src={banner}
            width={"auto"}
            height={"auto"}
            alt="Picture of the author"
          />
        </div>
        <div className="lg:w-1/2 p-10">
          <h1 className="text-3xl font-primary my-5 text-primary ">
            Why Choose PC Wizard?
          </h1>
          <p>
            {" "}
            Building a PC can be a daunting task, especially for newcomers. PC
            Wizard simplifies the entire process, offering a user-friendly
            platform where even novices can create high-performance systems.
            Whether it&apos;s a gaming powerhouse or a productivity workhorse,
            PC Wizard guides users through every step, ensuring a smooth and
            rewarding journey. <br /> With a vast array of top-tier PC
            components, detailed information, and a vibrant user community, PC
            Wizard is more than just a PC builder—it&apos;s an interactive hub
            where PC enthusiasts come together to share their passion for
            technology. <br />
            Unleash your creativity, find the best components, and build your
            dream PC with PC Wizard today. Empowering you to achieve peak
            performance and experience unparalleled gaming and computing
            adventures!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcWizard;
