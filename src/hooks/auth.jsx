import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../lib/firebase";
import { DASHBOARD, LOGIN } from "../lib/routes";
import isUsernameExists from "../utils/isUsernameExists";

export function useAuth() {
  const [authUser, authLoading, error] = useAuthState(auth); //auth is coming from firebase

  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const ref = doc(db, "users", authUser.uid);
      const docSnap = await getDoc(ref);
      setUser(docSnap.data());
      setLoading(false);
    };

    if (!authLoading) {
      if (authUser) {
        fetchData();
      } else {
        setLoading(false);
      }
      fetchData();
    }
  }, [authLoading]);

  return { user, isLoading, error };
}

export function useLogin() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login({ email, password, redirectTo = DASHBOARD }) {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate(redirectTo);
    } catch (error) {
      setLoading(false);
      console.log(error.message, "NO User Existed");
      return false; // if login failed return false
    }
    setLoading(false);
    return true; // if login success return true
  }

  return { login, isLoading };
}

export function useRegister() {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const register = async ({
    name,
    username,
    email,
    password,
    redirectTo = DASHBOARD,
  }) => {
    setLoading(true);

    const usernameExists = await isUsernameExists(username);

    if (usernameExists) {
      setLoading(false);
      return false;
    } else {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", res.user.uid), {
          id: res.user.uid,
          username: username.toLowerCase(),
          avatar: "",
          name,
          profession: "software engineer",
          country: "!Country",
          date: Date.now(),
        });

        navigate(redirectTo);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return { register, isLoading };
}

export function useLogout() {
  const [signOut, isLoading, error] = useSignOut(auth);
  const navigate = useNavigate();

  const logout = async () => {
    if (await signOut()) {
      navigate(LOGIN);
    } else {
      console.log("ERROR");
    }
  };

  return { logout, isLoading };
}
