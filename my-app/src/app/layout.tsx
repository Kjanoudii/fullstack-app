"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

interface AuthContextType {
  authState: {
    username: string;
    id: number;
    status: boolean;
  };
  setAuthState: React.Dispatch<
    React.SetStateAction<{
      username: string;
      id: number;
      status: boolean;
    }>
  >;
}

const defaultAuthState = {
  username: "",
  id: 0,
  status: false,
};

export const AuthContext = createContext<AuthContextType>({
  authState: defaultAuthState,
  setAuthState: () => {},
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState(defaultAuthState);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState((prevState) => ({ ...prevState, status: false }));
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <NavBar />
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
