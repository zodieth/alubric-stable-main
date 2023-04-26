import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SignInButton from "./signInButton";

type Inputs = {
  email: string;
  password: string;
};

function Login() {
  const [login, setLogin] = useState(false);

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Link href="/">
        <img
          src="https://media.discordapp.net/attachments/470413233681989642/1097186846687101010/logo.png"
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        />
      </Link>

      <SignInButton />
    </div>
  );
}

export default Login;
