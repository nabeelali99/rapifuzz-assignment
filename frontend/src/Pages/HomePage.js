import React, { useState } from "react";
import { RegisterPage } from "../Components/RegisterPage";
import { LoginPage } from "../Components/LoginPage";

export const HomePage = () => {
  const [formType, setFormType] = useState("signup");

  const handleButtonClick = (type) => {
    window.scrollTo(0, 0);
    setFormType(type);
  };

  return (
    <div>
      <div className="buttons">
        <button
          className={`button ${formType === "login" ? "active" : ""}`}
          onClick={() => handleButtonClick("login")}
        >
          Login
        </button>
        <button
          className={`button ${formType === "signup" ? "active" : ""}`}
          onClick={() => handleButtonClick("signup")}
        >
          Sign Up
        </button>
      </div>

      <div className="form">
        {formType === "signup" ? <RegisterPage /> : <LoginPage />}
      </div>
    </div>
  );
};
