'use server'

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import prisma from "../../../../prisma/prisma";

export async function addProduct(data: any) {
  const imgUrl = cookies().get('product-img')?.value

  try {
    const product = await prisma.product.create({
      data: {
        name: data.get("name"),
        sku: data.get("sku"),
        img: imgUrl as string,
        price: Number(data.get("price")),
        model: data.get("model"),
        features: data.get("features").split(","),
        stockAvailable: data.get("stockAvailable") === "true",
        discount: Number(data.get("discount")),
        emiDuration: Number(data.get("emiDuration")),
        exchangeOffer: Number(data.get("exchangeOffer")),
        offerValidityTill: data.get("offerValidityTill"),
        warrentyOn: data.get("warrentyOn"),
        warrentyType: data.get("warrentyType")
      },
    });

    // return product
    if (product) {
      cookies().set('product-submit', 'DONE')
    }
  } catch (error) {
    console.log(error)
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath("/admin/products")
}