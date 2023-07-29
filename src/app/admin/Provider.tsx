"use client";

import { usePathname } from "next/navigation";
import AppNavbar from "./(components)/Navbar";

export default function Provider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/admin/login" ? (
        <>{children}</>
      ) : (
        <>
          <AppNavbar />
          <>{children}</>
        </>
      )}
    </>
  );
}
