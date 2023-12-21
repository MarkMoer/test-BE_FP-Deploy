import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request, res) => {
  const body = await request.json();
  const product = await prisma.produk.create({
    data: {
      nama_produk: body.nama,
      harga: body.harga,
      kategori_id: body.kategori,
      status_id: body.status,
    },
  });
  return NextResponse.json(product, { status: 201 });
};
