import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../lib/firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useAddPost() {
  const [isLoading, setLoading] = useState(false);

  const addPost = async (post) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "posts", id), {
      ...post,
      id,
      date: Date.now(),
      likes: [],
      dislikes: [],
    });

    setLoading(false);
  };

  return { addPost, isLoading };
}

export function usePosts(uid = null) {
  const q = uid
    ? query(
        collection(db, "posts"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "posts"), orderBy("date", "desc"));
  const [posts, isLoading, error] = useCollectionData(q);

  if (error) throw error;

  return { posts, isLoading };
}

export function useToggleLike({ id, isLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  const toggleLike = async () => {
    setLoading(true);

    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });

    setLoading(false);
  };

  return { toggleLike, isLoading };
}

export function useToggleDislike({ id, isDisLiked, uid }) {
  const [isLoading, setLoading] = useState(false);

  const toggleDislike = async () => {
    setLoading(true);

    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      dislikes: isDisLiked ? arrayRemove(uid) : arrayUnion(uid),
    });

    setLoading(false);
  };

  return { toggleDislike, isLoading };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);

  const deletePost = async () => {
    const res = window.confirm("Are you sure!");

    if (res) {
      setLoading(true);
      // delete post document
      await deleteDoc(doc(db, "posts", id));
      // delete all comments documents

      const deleteAllComments = async (docRef) => {
        deleteDoc(docRef);
      };

      const q = query(collection(db, "comments"), where("postID", "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (doc) => deleteDoc(doc.ref));

      setLoading(false);
    }
  };

  return { deletePost, isLoading };
}

export function usePost(id) {
  const q = doc(db, "posts", id);

  const [post, isLoading, error] = useDocumentData(q);
  return { post, isLoading };
}
