import React from "react";
import { useTheme } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { LogoButton, ToggleButton } from "../buttons";

export default function SideBar() {
  const { theme, key } = useTheme();
  return (
    <div
      style={theme}
      className="flex flex-row w-36 h-screen drop-shadow border-r-2"
    >
      <ul className="flex flex-col font-bold gap-8 items-center w-full py-8">
        <li>
          <Link to="/error">
            <LogoButton fill={theme.color} width={50} height={50} />
          </Link>
        </li>
        <li className="px-4">
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li style={{ fontSize: 0 }} className="absolute bottom-10">
          <p>{key === "dark" ? "Light" : "Dark"}</p>
          <ToggleButton width={24} height={24} />
        </li>
      </ul>
    </div>
  );
}
