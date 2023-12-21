import { PrismaClient } from "@prisma/client";
import ShowProduct from "./showProduct";
const prisma = new PrismaClient();

export const dynamic = "force-dynamic";

const getProducts = async () => {
  const res = await prisma.produk.findMany({
    select: {
      id_produk: true,
      nama_produk: true,
      harga: true,
      kategori: true,
      kategori_id: true,
      status: true,
      status_id: true,
    },
  });
  return res;
};

const getCategorys = async () => {
  const res = await prisma.kategori.findMany();
  return res;
};

const getStats = async () => {
  const res = await prisma.status.findMany();
  return res;
};
const Product = async () => {
  const products = await getProducts();
  const categorys = await getCategorys();
  const stats = await getStats();
  return (
    <div className="overflow-x-auto">
      <ShowProduct products={products} categorys={categorys} stats={stats} />
    </div>
  );
};

export default Product;
