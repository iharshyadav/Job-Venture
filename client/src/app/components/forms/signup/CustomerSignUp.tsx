import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Submit from "../../Submit";
import { useFormState } from "react-dom";
import signup from "@/app/actions/signUp";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const CustomerSignUp = () => {
  const [state, formAction] = useFormState(signup, null as any);
  const [token, setToken] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      toast.success(state.data.message);
      // router.push("/dashboard/customer");
    } else if (!state?.success && state?.error) {
      toast.warning(state.error?.message);
    }
    setRefresh(true);
  }, [state, router]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-4xl">Get more for company</h1>
      <Button variant="bordered" radius="sm" className="border-1">
        <FcGoogle />
        <span className="font-bold text-bold text-[#4640DE]">
          Sign Up with Google
        </span>
      </Button>
      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <span className="mx-2 text-black/40">or sign up with email</span>
      </div>
      <form action={formAction} className="flex flex-col gap-6">
        <Input
          name="full_name"
          variant="bordered"
          radius="sm"
          placeholder="Enter your full name"
          required
          isRequired
          label="Full Name"
          labelPlacement="outside"
          classNames={{
            inputWrapper: "border-[1px]",
            label: "font-bold",
          }}
        />
        <Input
          name="email"
          variant="bordered"
          radius="sm"
          placeholder="Enter your email address"
          required
          isRequired
          label="Email Address"
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
        <Input className="hidden" value={token} name="token" />
        <GoogleReCaptcha refreshReCaptcha={refresh} onVerify={setToken} />
        <Submit name="Sign Up" />
      </form>
      <span className="text-sm mr-auto">
        Already have an account?{" "}
        <Link
          href="https://localhost:3000/login"
          className="text-[#4640DE] font-bold"
        >
          Login
        </Link>
      </span>
      <span className="text-xs mr-auto">
        By clicking &rsquo;Continue&rsquo;, you acknowledge that you have read and accept{" "}
        <br className="sm:flex hidden" />
        the
        <Link href="" className="text-[#4640DE]">
          {" "}
          Terms Of Service{" "}
        </Link>
        and
        <Link href="" className="text-[#4640DE]">
          {" "}
          Privacy Policy
        </Link>
      </span>
    </div>
  );
};

export default CustomerSignUp;
