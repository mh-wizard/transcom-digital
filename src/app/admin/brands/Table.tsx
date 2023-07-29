"use client";

import {Table} from "flowbite-react";
import Link from "next/link";
import Image from 'next/image'

export default function BrandsTable({brands}: {brands : any}) {
  console.log(brands)
  
  return (
    <Table striped>
      <Table.Head>
        <Table.HeadCell>Number</Table.HeadCell>
        <Table.HeadCell>Brand Name</Table.HeadCell>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Products</Table.HeadCell>
        <Table.HeadCell>Popularity</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {brands.map((item: any, index: number) => {
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
                  item.img ? <Image src={item.img} width={36} height={36} alt={item.name}/> : <p>No Image</p>
                }
              </Table.Cell>
              <Table.Cell>{item?.category}</Table.Cell>
              <Table.Cell>{item.products}</Table.Cell>
              <Table.Cell>{item.popularity}</Table.Cell>
              <Table.Cell>
                <Link
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href={`/brands/${item.id}`}
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
