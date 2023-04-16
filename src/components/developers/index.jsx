import React, { useState } from "react";
import { useDevelopers } from "../../hooks/users";
import Developer from "./Developer";

export default function Developers() {
  const { developers, isLoading } = useDevelopers();

  if (isLoading) return;

  return (
    <>
      <div className="max-h-[100px] h-[18vh] w-full"></div>
      <div className=" flex items-center justify-center w-[100vw] h-auto py-2">
        <div className="grid grid-cols-2 gap-2 place-content-center place-items-center  py-4 max-w-[1000px] w-[50%] ">
          {developers?.map((developer) => (
            <Developer key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </>
  );
}
