import React from "react";

export default function ProfilePicture({ size, user, margin = false }) {
  return (
    <>
      {user.avatar === "" ? (
        <div
          className={` ${size === "large" && "h-32 w-32"} ${
            size === "medium" && "h-12 w-12"
          } ${size === "card" && "h-28 w-28"} ${
            size === "small" && "h-6 w-6"
          } flex items-center justify-center bg-green-400  rounded-full ${
            margin && "mr-2"
          }`}
        >
          <h1
            className={`${size === "large" && "text-6xl"} ${
              size === "medium" && "text-2xl"
            } ${size === "card" && "text-4xl"} ${
              size === "small" && "text-sm"
            }  text-white font-semibold uppercase`}
          >
            {user.username.slice(0, 1)}
          </h1>
        </div>
      ) : (
        <img
          className={`${size === "large" && "h-32 w-32"} ${
            size === "medium" && "h-12 w-12"
          } ${size === "card" && "h-28 w-28"}  ${
            size === "small" && "h-8 w-8"
          } bg-white rounded-full border-[2px] border-green-500 ${
            margin && "mr-2"
          } `}
          src={user.avatar}
          alt=""
        />
      )}
    </>
  );
}
