"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddProduct = ({ categorys, stats }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [kategori, setKategori] = useState("");
  const [status, setStatus] = useState("");

  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama) return alert("Nama harus diisi");
    if (!Number(harga)) return alert("Harga harus Number");
    await axios.post("/api/products", {
      nama: nama,
      harga: Number(harga),
      kategori: Number(kategori),
      status: Number(status),
    });
    setNama("");
    setHarga("");
    setKategori("");
    setStatus("");
    setIsOpen(false);
    window.location.reload();
    router.refresh();
  };
  return (
    <div>
      <button className="btn" onClick={handleModal}>
        Tambah Produk
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Tambahkan Produk</h3>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setHarga(e.target.value)}
                className="input input-bordered"
                placeholder="Harga"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Kategori</label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value)}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Pilih Kategori
                </option>
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
                onChange={(e) => setStatus(e.target.value)}
                className="select select-bordered"
              >
                <option value="" disabled>
                  Pilih Status
                </option>
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
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;
