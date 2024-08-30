import React from "react";
import Image from "next/image";
import LoginFormTabs from "../components/forms/login/LoginFormTabs";

const page = () => {
  return (
    <div className="w-screen min-h-screen flex">
      <Image
        src="/leftHero.svg"
        alt="hero"
        width={550}
        height={100}
        className="h-screen float-left lg:flex hidden"
        priority
      />
      <div className="flex justify-center items-center flex-col w-full px-8">
        <LoginFormTabs />
      </div>
    </div>
  );
};

export default page;
