import Link from "next/link";
import Image from "next/image";
import prisma from "../../../../../prisma/prisma";
import Delete from "../../(components)/Delete";

const getCategory = async (id: string) => {
  const res = await prisma.category.findUnique({
    where: {
      id: id,
    },
    include: {
      brands: {
        include: {
          products: true,
        },
      },
    },
  });
  return res;
};

export default async function Category({ params }: { params: { id: string } }) {
  const category = await getCategory(params.id);

  return (
    <div className="m-10">
      <div className="flex justify-center gap-2">
        <p className="text-4xl text-green-600 font-bold">{category?.name}</p>
        <Delete
          url={`/api/admin/categories/${params.id}`}
          redirect="/categories"
        />
      </div>
      <p className="text-center text-xs text-gray-500">Id: {category?.id}</p>
      <div className="mt-10">
        <p className="text-2xl text-gray-600 font-bold">Brands</p>
        <div className="grid grid-cols-3 gap-4 w-full mt-5">
          {category?.brands.map((brand) => {
            return (
              <Link
                href={`/brands/${brand.id}`}
                key={brand.id}
                className="bg-white shadow-md rounded-md p-4 flex flex-col justify-center items-center"
              >
                <p className="text-xl font-bold text-gray-600">{brand.name}</p>
                <p className="text-gray-500 text-xs">Id: {brand.id}</p>
                <p className="text-gray-500 text-xs">
                  Products: {brand.products.length}
                </p>
                <Image
                  className="mt-2"
                  src={brand?.img as string}
                  width={200}
                  height={200}
                  alt={brand.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
