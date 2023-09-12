import React from "react";
import { ErrorLayout } from "../layouts";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <div className="flex flex-col items-center gap-10">
        <p className="font-bold text-9xl">┬─┬ノ(ಠ_ಠノ)</p>
        <div className="text-3xl absolute bottom-32">
          <Link to="/">Back</Link>
        </div>
      </div>
    </ErrorLayout>
  );
}
