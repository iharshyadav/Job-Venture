import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";

const Submit: FC<{ name: string }> = ({ name }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      className="bg-[#4640DE] text-white font-bold"
      radius="sm"
      isLoading={pending}
      type="submit"
    >
      {pending ? "" : name}
    </Button>
  );
};

export default Submit;
