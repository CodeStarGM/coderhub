import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth, useLogout } from "../../hooks/auth";
import { DASHBOARD, PROTECTED, USERS } from "../../lib/routes";
import Loading from "../Loading";

export default function Navbar() {
  const { user, isLoading: userLoading, error } = useAuth();

  const { logout, isLoading } = useLogout();
  const [menu, setMenu] = useState(false);

  const toggleMenuBar = () => {
    setMenu(!menu);
  };
  if (userLoading) return;
  return (
    <>
      {/* navbar new */}
      <nav className="z-40 bg-white w-full flex fixed shadow justify-between items-center px-8 h-20">
        {/* logo */}
        <div className="inline-flex">
          <a className="_o6689fn" href={DASHBOARD}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
            >
              <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
            </svg>
          </a>
        </div>
        {/* end logo */}
        {/* search bar */}
        {/* <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2"> */}
        <div className="relative hidden sm:block flex-shrink flex-grow-0">
          <input
            type="text"
            className="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full"
            placeholder="Search somthing..."
            style={{ minWidth: 400 }}
          />
          <div className="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {/* end search bar */}
        {/* login */}
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <div className="block relative">
                <button
                  type="button"
                  className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative "
                >
                  <div className="flex items-center h-5">
                    <div className="_xpkakx">
                      <svg
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          height: 16,
                          width: 16,
                          fill: "currentcolor",
                        }}
                      >
                        <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="block">
              <div className="inline relative">
                <button
                  onClick={toggleMenuBar}
                  type="button"
                  className=" inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: 16,
                        width: 16,
                        stroke: "currentcolor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28" />
                        <path d="m2 24h28" />
                        <path d="m2 8h28" />
                      </g>
                    </svg>
                  </div>
                  <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                        fill: "currentcolor",
                      }}
                    >
                      <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end login */}
      </nav>

      {menu ? (
        <div
          onClick={toggleMenuBar}
          className="shadow-xl z-50 space-y-2 rounded-md border border-gray-200 px-2 right-10 top-[5.2rem] fixed h-auto py-4 w-[30vw] lg:w-[18vw] bg-white"
        >
          <Link to="/protected/dashboard">
            <div className="flex items-center space-x-2 cursor-pointer px-2 py-2 hover:bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <p>HomePage</p>
            </div>
          </Link>
          <Link to={USERS}>
            <div className="flex items-center space-x-2 cursor-pointer px-2 py-2 hover:bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <p>Community</p>
            </div>
          </Link>
          <Link to={`${PROTECTED}/profile/${user.id}`}>
            <div className="flex items-center space-x-2  cursor-pointer px-2 py-2 hover:bg-gray-200 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>

              <p>Edit Profile</p>
            </div>
          </Link>

          <div
            onClick={logout}
            className="flex items-center space-x-2 hover:text-white cursor-pointer px-2 py-2  hover:bg-red-600 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>

            <p>Logout</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
