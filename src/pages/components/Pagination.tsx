import React from "react";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function Paginado({ paginado, filesPerPage, files, current }: any) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(files?.length / filesPerPage); i++) {
    pageNumbers.push(i);
  }

  let mayor = pageNumbers[0];

  for (let i = 1; i < pageNumbers.length; i++) {
    if (pageNumbers[i] > mayor) {
      mayor = pageNumbers[i];
    }
  }

  return (
    <nav className="w-full bg-gray-50  border-gray-200 border-t-4 rounded-sm">
      <ul className="flex flex-row items-center justify-center  ">
        <li className="my-2 mx-1 flex justify-center items-center bg-slate-300 h-6 w-6 rounded-sm hover:bg-blue-400 text-white">
          <button
            className=""
            onClick={() => paginado(current === 1 ? 1 : current - 1)}
          >
            <FaLongArrowAltLeft />
          </button>
        </li>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number}>
              <li
                className={
                  number === current
                    ? "bg-blue-500 my-2 mx-1 flex justify-center items-center  h-full w-6  text-white rounded-sm cursor-pointer"
                    : `my-2 mx-1 flex justify-center items-center  h-full w-6 bg-blue-300 text-white rounded-sm cursor-pointer hover:bg-blue-400`
                }
                key={number}
                onClick={() => paginado(number)}
              >
                <button className="">{number}</button>
              </li>
            </div>
          ))}
        <li className="my-2 mx-1 flex justify-center items-center bg-slate-300 h-6 w-6 rounded-sm hover:bg-blue-400 text-white">
          <button
            className=""
            onClick={() => paginado(current === mayor ? mayor : current + 1)}
          >
            <FaLongArrowAltRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginado;
