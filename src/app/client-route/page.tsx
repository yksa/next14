"use client";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const result = clientSideFunction();

  return <h1>Client route {result}</h1>;
}
