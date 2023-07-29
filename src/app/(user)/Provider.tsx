"use client";

// import Footer from "@/components/shared/Footer";
import React, { createContext } from "react";
import { useState } from "react";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { Product } from "@prisma/client";

interface contextInterface {
  cart: Product[];
  setCart: (arg0: Product[]) => void;
}

export const CartContext = createContext<contextInterface>({
  cart: [],
  setCart: () => {},
});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Header />
      {children}
      <Footer />
    </CartContext.Provider>
  );
}
