import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { LOGIN } from "../../lib/routes";
import Loading from "../Loading";
import Navbar from "./Navbar";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && pathname.startsWith("/protected") && !user) {
      navigate(LOGIN);
    }
  }, [pathname, user, isLoading]);

  if (isLoading) return <Loading />;

  return (
    <>
      <Navbar />
      <Outlet />

      <div className="">
        <main className=" w-[300px] absolute left-4 lg:top-24  hidden lg:flex items-start justify-around">
          <Sidebar />
        </main>
      </div>
    </>
  );
}
