import { UserButton } from "@clerk/nextjs";
import React from "react";

export function RightSidebar() {
  return (
    <aside className="right_sidebar">
      <p className="text-white-3">RightSidebar</p>
      <UserButton />
    </aside>
  );
}
