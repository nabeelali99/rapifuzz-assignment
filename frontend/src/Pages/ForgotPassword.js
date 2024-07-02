import React from "react";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = () => {
  const Navigate = useNavigate();
  return (
    <form>
      <label style={{ fontWeight: "bold" }}>
        Please provide your registered Email Id to reset your password
      </label>
      <input type="email" placeholder="Email" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button type="submit">Reset</button>
        <button onClick={() => Navigate("/")}>Login/Sign up</button>
      </div>
    </form>
  );
};
