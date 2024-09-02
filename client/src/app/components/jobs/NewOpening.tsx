import { Chip, Divider } from "@nextui-org/react";
import React from "react";

interface Prop {
  icon: any;
  title: string;
  place: string;
  type: string;
  skills: Array<string>;
}

const NewOpening = (props: Prop) => {
  return (
    <div className="hover:bg-[#e4e4e8] bg-white border-1 px-8 py-4 flex gap-6 justify-start items-start cursor-pointer rounded-xl">
      <div>{props.icon}</div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-xl">{props.title}</h2>
        <p className="text-black/40">{props.place}</p>
        <div className="flex gap-2">
          <Chip key={-1}>{props.type}</Chip>
          <Divider orientation="vertical" className="bg-black/40 w-[1px] h-7"/>
          {props.skills.map((item, i) => (
            <Chip color="warning" key={i}>
              {item}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewOpening;
