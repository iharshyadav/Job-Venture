import { Button, Chip } from "@nextui-org/react";
import React from "react";

interface Prop {
  logo: any;
  type: string;
  title: string;
  place: string;
  description: string;
  skills: Array<string>;
}

const Featured = (props: Prop) => {
  return (
    <div className="hover:bg-[#e4e4e8] group border-1 p-6 flex flex-col gap-6 justify-between items-start cursor-pointer rounded-lg max-w-72">
      <div className="flex justify-between items-center w-full">
        {props.logo}
        <Button
          variant="bordered"
          radius="none"
          className="border-[#4640DE] text-[#4640DE]"
          size="sm"
        >
          {props.type}
        </Button>
      </div>
      <div className="flex flex-col items-start">
        <h2 className="font-bold">{props.title}</h2>
        <p className="text-black/40">{props.place}</p>
      </div>
      <p>{props.description}</p>
      <div className="flex gap-2">
        {props.skills.map((item, i) => (
          <Chip color="warning" key={i}>{item}</Chip>
        ))}
      </div>
    </div>
  );
};

export default Featured;
