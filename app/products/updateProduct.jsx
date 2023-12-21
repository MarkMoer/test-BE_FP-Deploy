"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UpdateProduct = ({ categorys, stats, product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState(product.nama_produk);
  const [harga, setHarga] = useState(product.harga);
  const [kategori, setKategori] = useState(product.kategori_id);
  const [status, setStatus] = useState(product.status_id);

  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/products/${product.id_produk}`, {
      nama: nama,
      harga: Number(harga),
      kategori: Number(kategori),
      status: Number(status),
    });
    window.location.reload();
    router.refresh();
    setIsOpen(false);
  };
  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Update Produk
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update {product.nama_produk}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Nama Produk</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input input-bordered"
                placeholder="Name Produk"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Harga</label>
              <input
                type="text"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                className="input input-bordered"
                placeholder="Harga"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Kategori</label>
              <select
                value={kategori}
                onChange={(e) => setKategori(Number(e.target.value))}
                className="select select-bordered"
              >
                {categorys.map((category) => (
                  <option
                    value={category.id_kategori}
                    key={category.id_kategori}
                  >
                    {category.nama_kategori}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(Number(e.target.value))}
                className="select select-bordered"
              >
                {stats.map((stat) => (
                  <option value={stat.id_status} key={stat.id_status}>
                    {stat.nama_status}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleModal}>
                Kembali
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateProduct;
