const FilterBlock = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {/* 🔍 Search by name */}
      <input
        type="text"
        name="search"
        placeholder="Search by artist name..."
        value={filters.search || ""}
        onChange={handleChange}
        className="w-full sm:w-64 border px-4 py-2 rounded-md shadow-sm focus:ring-1 focus:ring-orange-500 outline-none"
      />

      {/* Category Filter */}
      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
      >

        <option value="">All Categories</option>
          <option value="Dancer">Dancer</option>
           <option value="Speaker">Speaker</option>
        <option value="Comedian">Comedian</option>
        <option value="DJ">DJ</option>
     
        <option value="Singer">Singer</option>
      </select>

      {/* Location Filter */}
      <select
        name="location"
        value={filters.location}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
      >
        <option value="">All Locations</option>
    <option value="Delhi">Delhi</option>
<option value="Mumbai">Mumbai</option>
<option value="Bangalore">Bangalore</option>
<option value="Hyderabad">Hyderabad</option>
<option value="Pune">Pune</option>
      </select>

      {/* Price Filter */}
      <select
        name="priceRange"
        value={filters.priceRange}
        onChange={handleChange}
        className="border px-4 py-2 rounded"
      >
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
