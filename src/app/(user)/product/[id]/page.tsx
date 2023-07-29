"use client";

import { useState } from "react";
import ProductOverview from "./(options)/Overview";
import ProductFeature from "./(options)/Feature";
import ProductSpecification from "./(options)/Specification";
import ProductReview from "./(options)/Review";
import ProductPolicy from "./(options)/Policy";
import ProductNavigation from "./Navigation";
import RelatedProducts from "./RelatedProducts";

export default function Home({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview");

  const getActivePage = () => {
    if (activeTab === "overview") {
      return <ProductOverview id={params.id} />;
    } else if (activeTab === "feature") {
      return <ProductFeature />;
    } else if (activeTab === "specification") {
      return <ProductSpecification />;
    } else if (activeTab === "review") {
      return <ProductReview />;
    } else return <ProductPolicy />;
  };

  return (
    <>
      <ProductNavigation
        id={params.id}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {getActivePage()}
      <RelatedProducts id={params.id} />
    </>
  );
}
