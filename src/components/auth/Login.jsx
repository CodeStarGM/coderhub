import React from "react";
import { Link } from "react-router-dom";
import { DASHBOARD, REGISTER } from "../../lib/routes";
import { useLogin } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import { emailValidate, passwordValidate } from "../../utils/form.validate";

export default function Login() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const succeeded = await login({
      email: data.email,
      password: data.password,
      redirectTo: DASHBOARD,
    });

    if (succeeded) reset();
  };

  return (
    <>
      <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-gray-900">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login</h1>
            <p className="text-sm text-gray-400">
              login to access your account
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="GM@gmail.com"
                  {...register("email", emailValidate)}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                <p className="text-red-400">{errors?.email?.message}</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Password
                  </label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  placeholder="*****"
                  {...register("password", passwordValidate)}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                <p className="text-red-400">{errors?.password?.message}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  disabled={isLoading ? true : false}
                  className="disabled:bg-opacity-75 w-full px-8 py-3 font-semibold rounded-md bg-green-400 text-gray-900"
                >
                  {isLoading ? "Loading..." : " Login"}
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Don't have an account yet? &nbsp;
                <Link to={REGISTER} className="hover:underline text-green-400">
                  Register
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
