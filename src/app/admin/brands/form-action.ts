'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import prisma from "../../../../prisma/prisma";

export async function addBrand(data: FormData) {
  const img = cookies().get('brand-img')?.value

  try {
    const category = await prisma.brand.create({
      data: {
        name: data.get("name") as string,
        img: img,
      },
    });

    if (category) {
      cookies().set('brand-submit', 'DONE')
    }
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath("/admin/brands")
}