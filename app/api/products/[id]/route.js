import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const DELETE = async (request, { params }) => {
  const product = await prisma.produk.delete({
    where: {
      id_produk: Number(params.id),
    },
  });
  return NextResponse.json(product, { status: 200 });
};

export const PATCH = async (request, { params }) => {
  const body = await request.json();
  const product = await prisma.produk.update({
    where: {
      id_produk: Number(params.id),
    },
    data: {
      nama_produk: body.nama,
      harga: body.harga,
      kategori_id: body.kategori,
      status_id: body.status,
    },
  });
  return NextResponse.json(product, { status: 200 });
};
