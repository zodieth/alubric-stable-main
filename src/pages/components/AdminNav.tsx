"use client";
import { FC } from "react";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

interface NavBarProps {}

const navigation = [
  { name: "Home", href: "#" },
  { name: "Obras", href: "#" },
  { name: "Catálogo", href: "#" },
  { name: "Contacto", href: "#" },
  { name: "Cotizar", href: "#" },
];

const NavBar: FC<NavBarProps> = ({}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="  ">
            <img
              className="h-10  w-auto"
              src="https://media.discordapp.net/attachments/470413233681989642/1097186846687101010/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center  cursor-pointer ">
          <h1 className="pr-4">Bienvenido {session?.user?.name}</h1>
          <FaUserCircle size={30} onClick={() => signOut()} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
