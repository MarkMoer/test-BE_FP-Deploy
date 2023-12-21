"use client";

import { useState } from "react";
import AddProduct from "./addProduct";
import FilterButton from "./filterButton";
import TableProduct from "./tableProduct";

const ShowProduct = ({ products, categorys, stats }) => {
  const [items, setItems] = useState(products);
  const menuItems = [
    ...new Set(products.map((product) => product.status.nama_status)),
  ];
  const filterItems = (status) => {
    const newStatus = products.filter(
      (newStatus) => newStatus.status.nama_status === status
    );
    setItems(newStatus);
  };
  return (
    <>
      <div className="mb-2">
        <AddProduct categorys={categorys} stats={stats} />
      </div>
      <FilterButton
        menuItems={menuItems}
        filterItems={filterItems}
        setItems={setItems}
        products={products}
      />
      <TableProduct categorys={categorys} items={items} stats={stats} />
    </>
  );
};

export default ShowProduct;
