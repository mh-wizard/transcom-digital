"use client";

import AddNew from "./AddNew";
import { Button, Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Delete from "../(components)/Delete";
import { MdDelete } from "react-icons/md";

export default function Banners() {
  const [banners, setBanners] = useState([
    {
      id: "",
      img: "",
    },
  ]);

  useEffect(() => {
    const getBanners = async () => {
      const res = await fetch("/api/shared/banners");

      const data = await res.json();
      setBanners(data);
    };

    getBanners();
  }, []);

  const onDeleteAction = async (id: string) => {
    alert("hello");
    const res = await fetch(`/api/admin/banners/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center m-10 gap-8">
      <div className="w-full flex flex-col justify-center items-center">
        <Carousel className="w-[50rem] h-[40rem]">
          {banners.map((banner) => {
            return (
              <div key={banner.id} className="flex flex-col items-center">
                <Image
                  key={banner.id}
                  src={banner.img}
                  className="rounded-md"
                  alt="banner"
                  width={1920}
                  height={1080}
                  priority
                />
                <MdDelete
                  onClick={() => onDeleteAction(banner.id)}
                  className="relative self-start cursor-crosshair left-2 bottom-11 border-2 border-red-400 rounded-full p-1"
                  color="red"
                  size={32}
                />
              </div>
            );
          })}
        </Carousel>
        <AddNew />
      </div>
    </div>
  );
}

//TODO: Delete Operation
