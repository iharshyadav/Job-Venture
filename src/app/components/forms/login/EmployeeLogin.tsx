import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import login from "@/app/actions/login";
import Submit from "../../Submit";

const EmployeeLogin = () => {
  const [state, formAction] = useFormState(login, null as any);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success(state.data.message);
      router.push("/dashboard");
    } else if (!state?.success && state?.error) {
      toast.warning(state.error?.message);
    }
  }, [state, router]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-4xl">Welcome back, Buddy!</h1>
      <Button variant="bordered" radius="sm" className="border-1">
        <FcGoogle />
        <span className="font-bold text-bold text-[#4640DE]">
          Login with Google
        </span>
      </Button>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <span className="mx-2 text-black/40">or login with email</span>
      </div>
      <form action={formAction} className="flex flex-col gap-6">
        <Input
          name="username"
          variant="bordered"
          radius="sm"
          placeholder="Enter your username"
          required
          isRequired
          label="Username"
          labelPlacement="outside"
          classNames={{
            inputWrapper: "border-[1px]",
            label: "font-bold",
          }}
        />
        <Input
          name="password"
          variant="bordered"
          radius="sm"
          placeholder="Enter your password"
          required
          isRequired
          label="Password"
          labelPlacement="outside"
          classNames={{
            inputWrapper: "border-[1px]",
            label: "font-bold",
          }}
        />
        <span className="text-sm ml-auto">
          Forgot password?{" "}
          <Link href={""} className="text-[#4640DE] underline">
            Click here
          </Link>
        </span>
        <Submit name="Login" />
      </form>
      <span className="text-sm mr-auto">
        Don't have an account?{" "}
        <Link
          href="https://localhost:3000/signUp"
          className="text-[#4640DE] font-bold"
        >
          Sign Up
        </Link>
      </span>
    </div>
  );
};

export default EmployeeLogin;
