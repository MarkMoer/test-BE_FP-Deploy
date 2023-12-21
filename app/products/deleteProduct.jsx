"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteProduct = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (productId) => {
    await axios.delete(`/api/products/${productId}`);
    window.location.reload();
    router.refresh();
    setIsOpen(false);
  };
  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Hapus Produk
      </button>
      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hapus {product.nama_produk} ?</h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              Tidak
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(product.id_produk)}
            >
              Ya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteProduct;
