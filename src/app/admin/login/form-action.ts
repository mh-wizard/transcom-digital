'use server'

import { cookies } from "next/headers";
import prisma from "../../../../prisma/prisma";

export async function authLogin(data: FormData) {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        username: data.get("username") as string,
        password: data.get("password") as string
      }
    })

    if (admin) {
      cookies().set("admin-key", admin.username)
    }
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect()
  }
}