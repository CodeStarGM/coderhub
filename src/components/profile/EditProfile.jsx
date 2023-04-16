import React from "react";
import { useAuth } from "../../hooks/auth";
import { useUpdateAvatar } from "../../hooks/users";
import ProfilePicture from "../elements/ProfilePicture";

export default function EditProfile() {
  const { user, isLoading } = useAuth();
  const {
    fileURL,
    setFile,
    updateAvatar,
    isLoading: uploadingAvatar,
  } = useUpdateAvatar(user?.id);

  const handleImageUpload = (e) => {
    setFile(e.target.files[0]);
  };

  if (isLoading) return <div className="spinnerTiny"></div>;

  return (
    <>
      {uploadingAvatar ? (
        <div className="spinnerTiny"></div>
      ) : (
        <div className="py-4 px-4 w-full space-y-2">
          <div className="pl-4">
            <img
              className="rounded-full w-16 h-16"
              src={user.avatar || fileURL}
              alt=""
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 "
              htmlFor="file_input"
            >
              Upload new image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
              onChange={handleImageUpload}
              accept="image/*"
              type="file"
            />
          </div>

          <div>
            <button
              onClick={updateAvatar}
              className="flex items-center py-2 px-4 rounded-lg text-sm bg-green-600 text-white shadow-lg"
            >
              Upload Image
            </button>
          </div>
        </div>
      )}
    </>
  );
}
