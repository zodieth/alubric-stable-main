"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
// import { toast } from "./ui/Toast";
import { BsGoogle } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      // toast({
      //   title: "Error signing in",
      //   message: "Please try again later",
      //   type: "error",
      // });
      console.log(error);
    }
  };

  return (
    <button
      disabled={isLoading ? true : false}
      className={
        isLoading
          ? "text-white bg-red-300 w-80 h-10 rounded-md"
          : "text-white bg-red-600 w-80 h-10 rounded-md"
      }
      onClick={signInWithGoogle}
    >
      <div className={"flex items-center justify-center"}>
        Sign In With Google
        <BsGoogle className="ml-2" />
        {isLoading ? <BiLoaderAlt className="animate-spin ml-2" /> : ""}
      </div>
    </button>
  );
};

export default SignInButton;
