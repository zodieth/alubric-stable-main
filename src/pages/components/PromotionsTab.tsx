import { FC } from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

interface PromotionsTabProps {}

const PromotionsTab: FC<PromotionsTabProps> = ({}) => {
  return (
    <div className="flex justify-between h-12 bg-[#212529] lg:pl-80 lg:pr-80">
      <div className="flex">
        {/* ------------ */}
        <div className="flex flex-row justify-start items-center m-2 ">
          <AiOutlineWhatsApp className="m-1 text-[#3667A1]" />
          <h1 className="text-white text-sm hover:underline">
            +54 91136780776
          </h1>
        </div>
        {/* --------- */}
        <div className="flex flex-row justify-start items-center m-2">
          <AiOutlineMail className="m-1 text-[#3667A1]" />
          <h1 className="text-white text-sm hover:underline">
            info@alubric.com
          </h1>
        </div>
        {/* ------------ */}
      </div>

      <div className="hidden lg:flex items-center justify-center text-white  ">
        |
        <div className="flex  items-center justify-center text-[1.15rem] m-1">
          <AiOutlineInstagram className="cursor-pointer m-1" />
          <FaFacebookF className="cursor-pointer m-1" />
          <FaLinkedinIn className="cursor-pointer m-1" />
          <AiFillYoutube className="cursor-pointer m-1" />
        </div>
      </div>
    </div>
  );
};

export default PromotionsTab;
