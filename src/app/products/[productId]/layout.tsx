"use client";

import React from "react";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  console.log({ random });

  if (random === 1) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Feature products</h2>
      {/* Carousel here */}
    </>
  );
}
