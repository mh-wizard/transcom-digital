"use client";

import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import { authLogin } from "./form-action";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const checkAdmin = () => {
    setLoading(true);

    setTimeout(() => {
      const admin = getCookie("admin-key");
      if (admin) {
        router.replace("/admin");
      }
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-12">
      <p className="text-3xl font-bold">Sign in to continue</p>
      <form action={authLogin} className="w-96 flex flex-col gap-8">
        <div>
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="admin"
          />
        </div>
        <div>
          <label
            htmlFor="helper-text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="12345"
          />
        </div>
        <Button
          color="success"
          type="submit"
          onClick={checkAdmin}
          isProcessing={loading}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
