import ProductsTable from "./Table";
import sortByPopularity from "@/utils/sort-by-popularity";
import AddNewProducts from "./AddNew";
import prisma from "../../../../prisma/prisma";

const getProducts = async () => {
  try {
    return await prisma.product.findMany({
      include: {
        brand: {
          include: {
            category: true,
          },
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch products");
  } finally {
    await prisma.$disconnect();
  }
};

export default async function Products() {
  const products = await getProducts();
  return (
    <div className="m-10">
      <AddNewProducts />
      <ProductsTable products={sortByPopularity(products)} />
    </div>
  );
}
