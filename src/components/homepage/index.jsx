import React from "react";

export default function Homepage() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Coding made social.
              <strong className="font-extrabold text-green-700 sm:block">
                Discover CodersHub.
              </strong>
            </h1>
            <p className="mt-4 text-sm">
              the ultimate social network for programmers and coders. Connect
              with like-minded individuals, collaborate, and share your
              knowledge and expertise in programming.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
                href="/login"
              >
                Login
              </a>
              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
                href="/register"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
