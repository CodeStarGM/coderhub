import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";
import { useAddService } from "../../hooks/service";

function AddService() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user, isLoading: isUserLoading } = useAuth();
  const { addService, isLoading } = useAddService();

  const handleAddService = async (data) => {
    const uploaded = await addService({
      uid: user.id,
      role: data.title,
      description: data.description,
      salary: data.salary,
      link: data.link,
    });

    if (uploaded) reset();
  };

  if (isUserLoading) return;
  return (
    <>
      <form
        onSubmit={handleSubmit(handleAddService)}
        className="py-10 w-full max-w-sm"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Job Title
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("title", { required: true, maxLength: 35 })}
              placeholder="Frontend Engineer"
            />
            <p className="text-red-400">{errors?.title?.message}</p>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Description
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("description", { required: true, maxLength: 46 })}
              placeholder="Senior Frontend developer / software engineer"
            />
            <p className="text-red-400">{errors?.description?.message}</p>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Salary
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="number"
              {...register("salary", { required: true, maxLength: 10 })}
              placeholder="72,000"
            />
            <p className="text-red-400">{errors?.salary?.message}</p>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Linkedin
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
              id="inline-full-name"
              type="text"
              {...register("link", { required: true })}
              placeholder="https:portfolio.com"
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              type="submit"
              class="py-2 px-8 rounded-full text-white bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 "
            >
              {isLoading ? "uploading..." : "Save Changes"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddService;
