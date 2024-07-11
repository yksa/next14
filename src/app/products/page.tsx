// export const fetchCache = "default-cache";

import { cookies } from "next/headers";

type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default async function ProductsPage() {
  const response = await fetch("http://localhost:3001/products");
  const products = await response.json();

  const cookieStore = cookies();
  cookieStore.get("theme");

  const detailsResponse = await fetch("http://localhost:3001/products/1");
  const details = await detailsResponse.json();

  return (
    <ul className="space-y4 p-4">
      {products.map((product: TProduct) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700 mb-2"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <p>{details.price}</p>
        </li>
      ))}
    </ul>
  );
}
