import React from "react";
import { DashboardLayout } from "../layouts";
import { useTheme } from "../utils/hooks";

export default function UserPage() {
  const { key } = useTheme();
  return (
    <DashboardLayout>
      <p className="text-9xl">{key === "dark" ? "( ͡◡ ͜ʖ ͡◡)" : "( ͡ಠ ͜ʖ ͡ಠ)"}</p>
    </DashboardLayout>
  );
}
