import React from "react";

export default function Posts() {
  return (
    <>
      <article className="w-[50%]">
        <form className="bg-white shadow rounded-lg mb-6 p-4">
          <textarea
            name="message"
            placeholder="Type something..."
            className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
            defaultValue={""}
          />
          <footer className="flex justify-between mt-2">
            <div className="flex gap-2">
              <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </span>
              <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
              </span>
              <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <polyline points="4 17 10 11 4 5" />
                  <line x1={12} y1={19} x2={20} y2={19} />
                </svg>
              </span>
            </div>
            <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">
              Send
              <svg
                className="ml-1"
                viewBox="0 0 24 24"
                width={16}
                height={16}
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={22} y1={2} x2={11} y2={13} />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </footer>
        </form>

        {/* here */}

        <div className="bg-white shadow rounded-lg">
          <div className="flex flex-row px-2 py-3 mx-3">
            <div className="w-auto h-auto rounded-full border-2 border-green-500">
              <img
                className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
              />
            </div>
            <div className="flex flex-col mb-2 ml-4 mt-1">
              <div className="text-gray-600 text-sm font-semibold">
                Sara Lauren
              </div>
              <div className="flex w-full mt-1">
                <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                  UX Design
                </div>
                <div className="text-gray-400 font-thin text-xs">
                  • 1 day ago
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100" />
          <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
            {/* big text jagah */}
          </div>
          <div className="text-gray-600 font-semibold py-2 mb-2 mx-3 px-2">
            <p>
              {" "}
              Dummy text of the printing and typesetting industry Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Aperiam vel fuga
              provident, iste recusandae reiciendis non autem cumque commodi
              doloribus magnam, tenetur quasi culpa ab adipisci nisi quia
              molestias? Officiis.
            </p>
          </div>

          <div className="flex justify-start mb-4 border-t border-gray-100">
            <div className="flex w-full mt-1 pt-2 pl-5 space-x-2">
              <div className="flex items-center">
                <span className="hover:bg-blue-400 bg-white transition ease-out duration-300 hover:text-white border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                  </svg>
                </span>
                <div className=" text-gray-400 text-xs">120k</div>
              </div>
              <div className="flex items-center">
                <span className="hover:bg-red-400 bg-white transition ease-out duration-300 hover:text-white border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </span>
                <div className=" text-gray-400 text-xs">120k</div>
              </div>
              {/* img here */}
            </div>
            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
              <img
                className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full border-t border-gray-100">
            <div className="mt-3 mx-5 flex flex-row text-xs">
              <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">
                Comments:
                <div className="ml-1 text-gray-400 text-ms"> 30</div>
              </div>
            </div>
            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
              <div className="bg-blue-400 px-2 py-1 space-x-1 flex text-gray-700  rounded-md mb-2 mr-4 items-center">
                <button>Read Comments</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                  <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
            <img
              className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
              alt="User avatar"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
              >
                <svg
                  className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </span>
            <form className="w-full" action="">
              <input
                type="search"
                className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                style={{ borderRadius: 25 }}
                placeholder="Post a comment..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
