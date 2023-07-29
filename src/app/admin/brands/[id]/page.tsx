import Link from "next/link";
import Image from "next/image";
import Delete from "../../(components)/Delete";
import prisma from "../../../../../prisma/prisma";

const getBrand = async (id: string) => {
  const res = await prisma.brand.findUnique({
    where: {
      id: id,
    },
    include: {
      products: true,
    },
  });
  return res;
};

export default async function Brand({ params }: { params: { id: string } }) {
  const brand = await getBrand(params.id);

  return (
    <div className="m-10">
      <div className="flex justify-center gap-2">
        <p className="text-4xl text-pink-600 font-bold">{brand?.name}</p>
        <Delete url={`/api/admin/brands/${params.id}`} redirect="/brands" />
      </div>
      <p className="text-center text-xs text-gray-500">Id: {brand?.id}</p>
      <div className="mt-10">
        <p className="text-2xl text-gray-600 font-bold">Products</p>
        <div className="grid grid-cols-3 gap-4 w-full mt-8">
          {brand?.products.map((product) => {
            return (
              <Link
                href={`/products/${brand.id}`}
                key={brand.id}
                className="bg-white shadow-md rounded-md p-4 flex flex-col justify-center items-center"
              >
                <p className="text-xl font-bold text-gray-600">
                  {product.name}
                </p>
                <p className="text-gray-500 text-xs">Id: {product.id}</p>
                <Image
                  className="mt-2"
                  src={product?.img as string}
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
