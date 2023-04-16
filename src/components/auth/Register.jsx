import React from "react";
import { Link } from "react-router-dom";
import { DASHBOARD, LOGIN } from "../../lib/routes";
import { useRegister } from "../../hooks/auth";
import { useForm } from "react-hook-form";
import {
  emailValidate,
  passwordValidate,
  usernameValidate,
} from "../../utils/form.validate";

export default function Register() {
  const { register: signup, isLoading } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const succeeded = await signup({
      name: data.name,
      username: data.username,
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
            <h1 className="my-3 text-4xl font-bold">Register</h1>
            <p className="text-sm text-gray-400">Register to join Coders hub</p>
          </div>
          <form
            onSubmit={handleSubmit(handleRegister)}
            noValidate=""
            action=""
            className="space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Ghous Muhammad"
                  {...register("name", { required: true })}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                <p className="text-red-400">{errors?.name?.message}</p>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="codeking4"
                  {...register("username", usernameValidate)}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                <p className="text-red-400">{errors?.username?.message}</p>
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="GM@jenkins.com"
                  {...register("email", emailValidate)}
                  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
                />
                <p className="text-red-400">{errors?.email?.message}</p>
              </div>
              <div>
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
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
                  {isLoading ? "Loading..." : "Register"}
                </button>
              </div>
              <p className="px-6 text-sm text-center text-gray-400">
                Already have an account? &nbsp;
                <Link to={LOGIN} className="hover:underline text-green-400">
                  Login
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
