import React from "react";
import { UserLayout } from "../layouts";
import { useTheme } from "../utils/hooks";

export default function UserPage() {
  const { key } = useTheme();
  return (
    <UserLayout>
      <p className="text-9xl">{key === "dark" ? "( ͡◡ ͜ʖ ͡◡)" : "( ͡ಠ ͜ʖ ͡ಠ)"}</p>
    </UserLayout>
  );
}
