import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          setUserInfo(null);
        } else {
          return response.json();
        }
      })
      .then((userInfo) => {
        if (userInfo) {
          setUserInfo(userInfo);
        }
      });
  }, []);

  async function logout() {
    const response = await fetch("http://localhost:4000/logout", {
      method: "POST",
    });
    if (response.ok) {
      setUserInfo(null);
      toast.success("Logged Out", {});
    }
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Rapifuzz
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/profile">Profile</Link>
            <span> | </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M14 4.75A2.75 2.75 0 0 0 11.25 2h-3A2.75 2.75 0 0 0 5.5 4.75v.5a.75.75 0 0 0 1.5 0v-.5c0-.69.56-1.25 1.25-1.25h3c.69 0 1.25.56 1.25 1.25v6.5c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-.5a.75.75 0 0 0-1.5 0v.5A2.75 2.75 0 0 0 8.25 14h3A2.75 2.75 0 0 0 14 11.25v-6.5Zm-9.47.47a.75.75 0 0 0-1.06 0L1.22 7.47a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06l-.97-.97h7.19a.75.75 0 0 0 0-1.5H3.56l.97-.97a.75.75 0 0 0 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
            <Link to="/HomePage" onClick={logout}>
              Logout
            </Link>
            <span> | </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{username}</span>
          </>
        )}
      </nav>
    </header>
  );
};
