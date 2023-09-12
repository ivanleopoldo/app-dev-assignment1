import React from "react";
import { TopBar } from "../components/bar";
import { useTheme } from "../utils/hooks";

export default function UserLayout({ children }) {
  const { theme } = useTheme();
  return (
    <div style={theme} className="flex flex-col w-screen h-screen">
      <TopBar />
      <div className="flex h-screen w-screen justify-center items-center">
        {children}
      </div>
    </div>
  );
}
