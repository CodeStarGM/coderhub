import React from "react";
import { Link } from "react-router-dom";
import { PROTECTED } from "../../lib/routes";

export default function Developer({ developer }) {
  return (
    <>
      {/* card end */}
      <div className="rounded-md card border h-40 max-h-44 w-80 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
        <div className="w-full h-20 max-h-20 opacity-80 absolute top-0 Zandox bg-black"></div>
        <div className="profile w-full flex m-3 ml-4 text-white">
          <img
            className="w-28 h-28 p-1 bg-white rounded-full"
            src={developer.avatar}
            alt=""
          />
          <div className="title mt-11 ml-3 font-bold flex flex-col">
            <div className="name  break-words">{developer.name}</div>

            <div className="text-black add font-semibold text-sm italic dark">
              {developer.profession}
            </div>
          </div>
        </div>
        <div className=" buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
          <Link to={`${PROTECTED}/profile/${developer.id}`}>
            <div className="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-green-500 hover:text-white">
              Profile
            </div>
          </Link>
          {/* <div class="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Bio</div> */}
        </div>
      </div>
      {/* card end */}
    </>
  );
}
