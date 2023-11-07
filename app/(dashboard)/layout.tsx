import Topbar from "@/components/topbar";
import React from "react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      {children}
    </div>
  );
}

export default DashboardLayout;
