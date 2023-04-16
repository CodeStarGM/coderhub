import { collection, doc, query, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../lib/firebase";

export function useUsers(id) {
  const q = query(doc(db, "users", id));
  const [user, isLoading, error] = useDocumentData(q);

  return { user, isLoading };
}
// fetch all developers here
export function useDevelopers() {
  const [developers, isLoading] = useCollectionData(collection(db, "users"));
  return { developers, isLoading };
}

export function useUpdateInfo(uid) {
  const [isLoading, setLoading] = useState(false);

  const updateInfo = async ({ name, profession, country }) => {
    setLoading(true);
    const taskDocRef = doc(db, "users", uid);
    await updateDoc(taskDocRef, {
      name,
      profession,
      country,
    });

    setLoading(false);
  };

  return { updateInfo, isLoading };
}

export function useUpdateAvatar(uid) {
  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const updateAvatar = async () => {
    if (!file) {
      alert("please select atleast 1 image");
      return;
    }
    setLoading(true);
    const fileRef = ref(storage, "avatars/" + uid);
    await uploadBytes(fileRef, file);

    const avatarURL = await getDownloadURL(fileRef);

    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, { avatar: avatarURL });

    setFile(null);
    setLoading(false);

    navigate(0);
  };

  return {
    fileURL: file && URL.createObjectURL(file),
    setFile,
    updateAvatar,
    isLoading,
  };
}
