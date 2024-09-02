import React, { ReactNode } from "react";

interface Prop {
  icon: ReactNode;
  title: string;
  num: string;
}

const Category = (props: Prop) => {
  return (
    <div className="hover:bg-[#4640DE] group border-1 p-8 flex flex-col gap-8 justify-between items-start cursor-pointer rounded-lg">
      <div className="text-blue">{props.icon}</div>
      <div className="flex flex-col items-start">
        <h2 className="group-hover:text-white font-bold">{props.title}</h2>
        <p className="group-hover:text-white text-black/40">{props.num + " "}&#8594;</p>
      </div>
    </div>
  );
};

export default Category;
