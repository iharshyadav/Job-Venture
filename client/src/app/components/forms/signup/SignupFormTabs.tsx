"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import EmployeeSingUp from "./EmployeeSingUp";
import CustomerSignUp from "./CustomerSignUp";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const LoginFormTabs = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LcqgC4qAAAAAIod_iH-l6R1qu4EiTVEE6lgh76N">
      <Tabs
        variant="light"
        color="primary"
        radius="sm"
        classNames={{
          cursor: "w-full bg-[#E9EBFD]",
          tabContent: "group-data-[selected=true]:text-[#4640DE]",
        }}
        className="font-bold"
      >
        <Tab key="seeker" title="Job Seeker">
          <EmployeeSingUp />
        </Tab>
        <Tab key="company" title="Company">
          <CustomerSignUp />
        </Tab>
      </Tabs>
    </GoogleReCaptchaProvider>
  );
};

export default LoginFormTabs;
