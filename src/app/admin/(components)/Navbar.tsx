"use client";

import { Button, Navbar } from "flowbite-react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AppNavbar() {
  const router = useRouter();

  const logout = () => {
    deleteCookie("admin-key");
    router.replace("/admin/login");
  };

  return (
    <Navbar fluid>
      <Navbar.Brand href="/admin">
        <picture>
          <img
            alt="app logo"
            className="mr-3 h-6 sm:h-9"
            src="./../../favicon.ico"
          />
        </picture>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Transcom
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button color="failure" onClick={logout}>
          Logout
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/banners">Banner</Link>
        <Link href="/admin/users">Users</Link>
        <Link href="/admin/orders">Orders</Link>
        <Link href="/admin/categories">Categories</Link>
        <Link href="/admin/brands">Brands</Link>
        <Link href="/admin/products">Products</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
