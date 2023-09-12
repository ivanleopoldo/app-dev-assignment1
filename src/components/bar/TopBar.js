import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../utils/hooks";
import { LogoButton, ToggleButton } from "../buttons";

export default function TopBar() {
  const { theme, key } = useTheme();
  return (
    <div
      style={theme}
      className="flex w-screen h-20 drop-shadow border-b-2 items-center justify-start px-8"
    >
      <ul className="flex flex-row font-bold gap-5 items-center">
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
        <li style={{ fontSize: 0 }} className="absolute right-10 p-0">
          <div className="flex flex-row gap-5 items-center">
            <p style={{ fontSize: 13 }}>
              {key === "dark" ? "Toggle Light" : "Toggle Dark"}
            </p>
            <ToggleButton width={24} height={24} />
          </div>
        </li>
      </ul>
    </div>
  );
}
