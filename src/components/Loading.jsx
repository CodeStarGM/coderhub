import React from "react";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-200 w-screen h-screen">
        <div className="spinnerLoad"></div>
        <div className="py-2 font-semibold text-lg text-indigo-700">
          Loading..
        </div>
      </div>
    </>
  );
}
