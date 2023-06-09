"use client";
import AdminNav from "./components/AdminNav";
import SideBar from "./components/SideBar";
import axios from "axios";
import FilesTable from "./components/FilesTable";
import { Poppins } from "next/font/google";
import { useState } from "react";
import Paginado from "./components/Pagination";
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./components/Login";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Admin({ data }: any) {
  //--------------Paginado-----------------------
  const [currentPage, setCurrentPage] = useState(1);
  const [filesPerPage] = useState(10);
  const LastFile = currentPage * filesPerPage; //
  const FirstFile = LastFile - filesPerPage; //
  const currentFiles = data?.slice(FirstFile, LastFile);

  const paginado = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //---------------------------------------------

  const { data: session } = useSession();

  if (session?.user?.email === "sistemasalubric@gmail.com") {
    return (
      <div lang="en" className={poppins.className}>
        <AdminNav />
        <div className="flex bg-gray-200 h-screen">
          <SideBar />
          <div className="flex flex-col w-full">
            <div className=" m-4">
              <div>
                <FilesTable cotizacion={currentFiles} />
                <Paginado
                  paginado={paginado}
                  filesPerPage={filesPerPage}
                  files={data}
                  current={currentPage}
                />
              </div>
            </div>
            <div className="w-full bg-white h-full"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={poppins.className}>
      <Login />
    </div>
  );
}

export async function getServerSideProps() {
  const API_KEY = "f8f1e0d6ae9924a3331ac71108507015abbf0369";
  const files = await axios.get(
    `https://alubric-api.admin.alubric.com/file?apikey=${API_KEY}`
  );
  const data = files.data;
  return { props: { data } };
}
