import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useService } from "../../hooks/service";

export default function Service({ authUser }) {
  const { id } = useParams();
  const { service, isLoading } = useService();

  if (isLoading) return;

  const filtered = service.filter((service) => {
    return service.uid === id;
  });

  return (
    <>
      {filtered.length < 1 ? (
        <div className="flex bg-white shadow mt-6  rounded-lg p-2">
          <img
            src="/job.jpg"
            alt="Just a flower"
            className=" w-16  object-cover  h-16 rounded-xl"
          />
          <div className="flex flex-col justify-center w-full px-2 py-1">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium">Unavailable!</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex bg-white shadow mt-6  rounded-lg p-2">
          <img
            src="/job.jpg"
            alt="Just a flower"
            className=" w-16  object-cover  h-16 rounded-xl"
          />
          <div className="flex flex-col justify-center w-full px-2 py-1">
            <div className="flex justify-between items-center ">
              <div className="flex flex-col">
                <h2 className="text-sm font-medium">{filtered[0]?.role}</h2>
              </div>
              <Link to={filtered[0]?.link} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400 hover:text-cyan-500 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex pt-2  text-sm text-gray-400">
              <div className="flex items-center mr-auto">
                <p className="font-normal">{filtered[0]?.description}</p>
              </div>
              <div className="flex items-center font-medium text-gray-900 ">
                ${filtered[0]?.salary}
                <span className="text-gray-400 text-sm font-normal"> /yr</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
