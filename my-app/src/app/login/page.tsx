"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { authState, setAuthState } = useContext(AuthContext);
  const router = useRouter();
  const login = async () => {
    const data = { username, password };
    try {
      const response = await axios
        .post("http://localhost:3001/auth/login", data)
        .then((response) => {
          console.log("Login successful:", response.data.user);
          localStorage.setItem("accessToken", response.data.token);

          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
          console.log(authState.username);
        });
        router.push("/");
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      console.log(error);
      alert("WRONG USER");
    }
  };

  return (
    <div className="loginContainer">
      <h2 className="mb-10 font-semibold">Login to Create Posts</h2>
      <label>Username:</label>
      <input
        className="px-3"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        className="px-3"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login</button>

      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
    </div>
  );
}

export default Login;
