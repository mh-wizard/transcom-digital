import CategoriesTable from "./Table";
import AddNewCategory from "./AddNew";
import prisma from "../../../../prisma/prisma";

const getCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        brands: {
          include: {
            products: true,
          },
        },
      },
      orderBy: {
        popularity: "desc",
      },
    });

    return categories.map((category) => {
      const brands = category.brands.length;
      const products = category.brands.reduce(
        (total, brand) => total + brand.products.length,
        0
      );

      return {
        ...category,
        brands,
        products,
      };
    });
  } catch (error) {
    throw new Error("Failed to fetch categories");
  } finally {
    await prisma.$disconnect();
  }
};

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div className="m-10">
      <AddNewCategory />
      <CategoriesTable categories={categories} />
    </div>
  );
}
