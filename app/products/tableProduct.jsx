import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

const TableProduct = ({ items, categorys, stats }) => {
  return (
    <>
      <table className="table table-xs">
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th>Kategori</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item.id_produk}>
              <td>{index + 1}</td>
              <td>{item.nama_produk}</td>
              <td>{item.harga}</td>
              <td>{item.kategori?.nama_kategori}</td>
              <td>{item.status?.nama_status}</td>
              <td className="flex justify-center gap-2">
                <UpdateProduct
                  categorys={categorys}
                  stats={stats}
                  product={item}
                />
                <DeleteProduct product={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableProduct;
