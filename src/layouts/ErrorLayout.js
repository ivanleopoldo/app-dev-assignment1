import React from "react";
import { Colors } from "../config";

export default function ErrorLayout({ children }) {
  return (
    <div style={Colors.error} className="flex flex-row w-screen h-screen">
      <div className="flex h-screen w-screen justify-center items-center">
        {children}
      </div>
    </div>
  );
}
