import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useUpdateInfo } from "../../hooks/users";

export default function EditInfo() {
  const { user, isLoading: authLoading } = useAuth();
  const { updateInfo, isLoading } = useUpdateInfo(user?.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUpdateInfo = async (data) => {
    const succeeded = await updateInfo({
      name: data.name,
      profession: data.profession,
      country: data.country,
    });

    if (succeeded) reset();
  };

  if (authLoading) return "...";

  return (
    <>
      <form
        onSubmit={handleSubmit(handleUpdateInfo)}
        className="py-10 w-full max-w-sm"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Ghous Muhammad"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Profession
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("profession", { required: true })}
              placeholder="Frontend developer"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Country
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("country", { required: true })}
              placeholder="Pakistan"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
