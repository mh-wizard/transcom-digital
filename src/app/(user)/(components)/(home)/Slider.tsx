"use client";

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  const [images, setImages] = useState([
    {
      id: "",
      img: "" || null,
    },
  ]);

  useEffect(() => {
    const getImages = async () => {
      const res = await fetch("/api/shared/banners");

      const data = await res.json();
      setImages(data);
    };

    getImages();
  }, []);

  return (
    <section className="slider-area my-5">
      <div className="container">
        <Carousel>
          {images.map((item) => {
            return (
              <Carousel.Item key={item.id}>
                {item.img && (
                  <picture>
                    <img className="d-block" src={item.img} alt="First slide" />
                  </picture>
                )}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
