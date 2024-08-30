"use client";
import { Tab, Tabs } from "@nextui-org/react";
import React from "react";
import EmployeeLogin from "./EmployeeLogin";
import CustomerLogin from "./CustomerLogin";

const LoginFormTabs = () => {
  return (
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
        <EmployeeLogin />
      </Tab>
      <Tab key="company" title="Company">
        <CustomerLogin />
      </Tab>
    </Tabs>
  );
};

export default LoginFormTabs;
