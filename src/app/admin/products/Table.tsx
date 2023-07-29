"use client";

import {Table} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductsTable({products}: { products: any }) {
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Brand</Table.HeadCell>
        <Table.HeadCell>Model</Table.HeadCell>
        <Table.HeadCell>Popularity</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {products.map((item: any, index: number) => {
          return (
            <Table.Row
              key={item.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.name}
              </Table.Cell>
              <Table.Cell>
                {
                  item.img ? <Image src={item.img} width={48} height={54} alt={item.name}/> : <p>No Image</p>
                }
              </Table.Cell>
              <Table.Cell>{item.brand?.category?.name}</Table.Cell>
              <Table.Cell>{item.brand?.name}</Table.Cell>
              <Table.Cell>{item.model}</Table.Cell>
              <Table.Cell>{item.popularity}</Table.Cell>
              <Table.Cell>{item.price}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href={`/products/${item.id}`}
                >
                  <p>Edit</p>
                </Link>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
