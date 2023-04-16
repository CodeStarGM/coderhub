import { collection, doc, query, setDoc, where } from "firebase/firestore";
import { uuidv4 } from "@firebase/util";
import { useState } from "react";
import { db } from "../lib/firebase";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useAddService() {
  const [isLoading, setLoading] = useState(false);

  const addService = async (service) => {
    setLoading(true);
    const id = uuidv4();
    await setDoc(doc(db, "services", id), {
      ...service,
      id,
    });

    setLoading(false);
  };

  return { addService, isLoading };
}

export function useService() {
  const q = query(collection(db, "services"));
  const [service, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { service, isLoading };
}
