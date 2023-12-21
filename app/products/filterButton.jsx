const FilterButton = ({ menuItems, filterItems, setItems, products }) => {
  return (
    <div className="flex justify-center gap-4 mb-2">
      {menuItems.map((item, id) => (
        <button
          key={id}
          className="btn btn-info btn-sm p-2"
          onClick={() => filterItems(item)}
        >
          {item}
        </button>
      ))}
      <button
        className="btn btn-info btn-sm p-2"
        onClick={() => setItems(products)}
      >
        semua
      </button>
    </div>
  );
};

export default FilterButton;
