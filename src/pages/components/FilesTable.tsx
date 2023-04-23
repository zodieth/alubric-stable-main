"use client";
import { Cotizacion } from "../../../types";
import { BsDownload, BsFillTrashFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";

const API_KEY = "f8f1e0d6ae9924a3331ac71108507015abbf0369";

const ths = [
  "Id",
  "Name",
  "Asunto",
  "Email",
  "Number",
  "Status",
  "File",
  "Date",
];

const FilesTable = ({ cotizacion }: { cotizacion: Cotizacion[] }) => {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const deleteFile = (filename: string, id: string) => {
    axios.delete(`http://localhost:3001/uploads/${filename}?apikey=${API_KEY}`);
    axios.put(`http://localhost:3001/file/${id}/update?apikey=${API_KEY}`);
  };

  cotizacion?.sort((a, b) => {
    if (a.active === true && b.active !== true) {
      return -1;
    } else if (a.active === true && b.active !== true) {
      return 1;
    } else {
      return 0;
    }
  });

  cotizacion?.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else if (b.createdAt > a.createdAt) {
      return 1;
    } else {
      return 0;
    }
  });

  const tableBody = cotizacion?.map((item, index) => {
    const colorClass = index % 2 === 0 ? "bg-white" : "bg-gray-50";

    const date = new Date(item.createdAt);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dateString = `${day}/${month + 1}/${year}`;

    return (
      <tr
        className={item.active === false ? "bg-gray-100" : `${colorClass}`}
        key={item._id}
      >
        <td
          className={
            item.active
              ? "p-3 text-sm font-bold text-blue-500 hover:underline"
              : "p-3 text-sm font-bold text-blue-200 "
          }
        >
          {item._id.substring(0, 5)}...
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          {item.firstName} {item.lastName}
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          <AiFillEye className="" />
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          {item.email}
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          {item.phoneNumber}
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          <BsFillTrashFill
            className={item.active ? `cursor-pointer` : ""}
            onClick={() =>
              item.active ? deleteFile(item.fileName, item._id) : ""
            }
          />
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          <Link
            className={
              item.active ? "p-3 mt-3" : "p-3 mt-3 pointer-events-none"
            }
            href={`http://localhost:3001/download/${item.fileName}?apikey=${API_KEY}`}
          >
            <BsDownload />
          </Link>
        </td>
        <td
          className={
            item.active
              ? "p-3 text-sm text-gray-700"
              : "p-3 text-sm text-gray-300"
          }
        >
          {dateString}
        </td>
      </tr>
    );
  });

  return (
    <div className="overflow-x-auto rounded-md">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {ths
              ? ths.map((e, index) => (
                  <th
                    key={index}
                    className="p-3 text-sm font-semibold tracking-wide text-left"
                  >
                    {e}
                  </th>
                ))
              : ""}
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default FilesTable;
