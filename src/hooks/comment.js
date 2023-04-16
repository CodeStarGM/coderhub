import { uuidv4 } from "@firebase/util";
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";

export function useAddComment({ postID, uid }) {
  const [isLoading, setLoading] = useState(false);
  const addComment = async (commentText) => {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { commentText, id, uid, postID, date });
  };
  return { addComment, isLoading };
}

export function useComments(postID) {
  const q = query(
    collection(db, "comments"),
    where("postID", "==", postID),
    orderBy("date", "asc")
  );
  const [comments, isLoading, error] = useCollectionData(q);

  if (error) throw error;

  return { comments, isLoading };
}

export function useDeleteComment(id) {
  const [isLoading, setLoading] = useState(false);

  const deleteComment = async () => {
    setLoading(true);

    const docRef = doc(db, "comments", id);
    await deleteDoc(docRef);

    setLoading(false);
  };

  return { deleteComment, isLoading };
}
