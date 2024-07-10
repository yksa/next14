"use client";

import React, { useState } from "react";
import { NavLinks } from "./NavLinks";
import { NavSearch } from "./NavSearch";

// It will convert NavLinks and NavSearch to client component

export const Navbar = () => {
  console.log("Navbar rendered");

  const [search, setSearch] = useState("");

  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
