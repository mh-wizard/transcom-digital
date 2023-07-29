'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import prisma from "../../../../prisma/prisma";

export async function addCategory(data: FormData) {
  const img = cookies().get('category-img')?.value

  try {
    const category = await prisma.category.create({
      data: {
        name: data.get("name") as string,
        img: img,
      },
    });

    if (category) {
      cookies().set('category-submit', 'DONE')
    }
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath("/admin/categories")
}