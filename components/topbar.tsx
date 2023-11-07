import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";

const Topbar = () => {
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30 topbar",
        "lg:hidden"
      )}
    >
      <Logo />
    </div>
  );
};

export default Topbar;
