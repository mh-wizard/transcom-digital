import BrandsTable from "./Table";
import AddNewBrand from "./AddNew";
import prisma from "../../../../prisma/prisma";

const getBrands = async () => {
  try {
    const brands = await prisma.brand.findMany({
      orderBy: {
        popularity: "desc",
      },
      include: {
        products: true,
        category: true,
      },
    });

    return brands.map((brand) => {
      const products = brand.products.length;
      const category = brand.category?.name;

      return {
        ...brand,
        category,
        products,
      };
    });
  } catch (err) {
    return new Error("Failed to fetch brands");
  } finally {
    await prisma.$disconnect();
  }
};

export default async function Brands() {
  const brands = await getBrands();

  return (
    <div className="m-10">
      <AddNewBrand />
      <BrandsTable brands={brands} />
    </div>
  );
}
