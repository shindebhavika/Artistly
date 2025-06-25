const FilterBlock = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select name="category" onChange={handleChange} className="border px-4 py-2 rounded">
        <option value="">All Categories</option>
        <option value="Comedian">Comedian</option>
        <option value="DJ">DJ</option>
            <option value="Singer">Singer</option>
      </select>

      <select name="location" onChange={handleChange} className="border px-4 py-2 rounded">
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

   <select name="priceRange" onChange={handleChange} className="border px-4 py-2 rounded">
  <option value="">All Prices</option>
  <option value="0-100000">₹0–₹1L</option>
  <option value="100001-200000">₹1L–₹2L</option>
  <option value="200001-500000">₹2L–₹5L</option>
  <option value="500001-99999999">₹5L+</option>
</select>

    </div>
  );
};

export default FilterBlock;
