import React from "react";
import { SideBar } from "../components/bar";
import { useTheme } from "../utils/hooks";

export default function DashboardLayout({ children }) {
  const { theme } = useTheme();
  return (
    <div style={theme} className="flex flex-row w-screen h-screen">
      <SideBar />
      <div className="flex h-screen w-screen justify-center items-center">
        {children}
      </div>
    </div>
  );
}
