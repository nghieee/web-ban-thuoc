"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

interface FilterState {
  brands: string[];
  forms: string[];
  volumes: string[];
  prices: string[];
  audiences: string[];
  countries: string[];
  regions: string[];
}

export default function FilterSidebar() {
  const [filters, setFilters] = useState<FilterState>({
    brands: [],
    forms: [],
    volumes: [],
    prices: [],
    audiences: [],
    countries: [],
    regions: [],
  });

  const [openSections, setOpenSections] = useState({
    brands: true,
    forms: true,
    volumes: true,
    prices: true,
    audiences: true,
    countries: true,
    regions: true,
  });

  const [searchTerms, setSearchTerms] = useState({
    countries: "",
    audiences: "",
  });

  const filterData = {
    brands: ["Blackmores", "Nature's Way", "DHC"],
    forms: ["Viên uống", "Bột", "Nước"],
    volumes: ["30 viên", "60 viên", "100g"],
    prices: ["Dưới 200.000đ", "200.000đ - 500.000đ", "Trên 500.000đ"],
    audiences: ["Người lớn", "Trẻ em", "Phụ nữ", "Người cao tuổi", "Phụ nữ mang thai"],
    countries: ["Việt Nam", "Hàn Quốc", "Nhật Bản", "Hoa Kỳ", "Úc", "Pháp", "Thái Lan"],
    regions: ["Miền Bắc", "Miền Trung", "Miền Nam"],
  };

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const selected = prev[category];
      if (selected.includes(value)) {
        return { ...prev, [category]: selected.filter((item: string) => item !== value) };
      } else {
        return { ...prev, [category]: [...selected, value] };
      }
    });
  };

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSearch = (category: keyof typeof searchTerms, value: string) => {
    setSearchTerms((prev) => ({ ...prev, [category]: value }));
  };

  const filteredOptions = (category: keyof FilterState, options: string[]) => {
    const searchTerm = searchTerms[category as keyof typeof searchTerms] || "";
    return options.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="w-full lg:w-64 p-4 bg-white rounded-xl shadow-lg max-h-[900px] overflow-y-auto">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Bộ lọc sản phẩm</h3>

      {/* CSS tùy chỉnh cho checkbox, searchbox và thanh cuộn */}
      <style jsx global>{`
        input[type="text"] {
          color: #000000; /* Màu đen */
        }
        input[type="text"]::placeholder {
          color: #9ca3af; /* Màu xám mặc định, tương ứng text-gray-400 */
        }
        input[type="checkbox"]:checked {
          background-color: #3b82f6 !important; /* Màu blue-500 */
          border-color: #3b82f6 !important;
        }
        input[type="checkbox"]:checked:focus {
          background-color: #3b82f6 !important;
          border-color: #3b82f6 !important;
        }
        input[type="text"]:focus {
          outline: none !important; /* Bỏ viền đen mặc định */
        }
        /* Tùy chỉnh thanh cuộn */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px; /* Độ dày mỏng hơn */
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1; /* Màu nền thanh cuộn */
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888; /* Màu thanh cuộn */
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555; /* Màu khi hover */
        }
        /* Ẩn mũi tên lên/xuống (chỉ áp dụng cho Webkit) */
        .overflow-y-auto::-webkit-scrollbar-button {
          display: none;
        }
      `}</style>

      {/* Thương hiệu */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("brands")}
        >
          <span>Thương hiệu</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.brands ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.brands ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterData.brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleFilterChange("brands", brand)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Dạng bào chế */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("forms")}
        >
          <span>Dạng bào chế</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.forms ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.forms ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterData.forms.map((form) => (
            <label key={form} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.forms.includes(form)}
                onChange={() => handleFilterChange("forms", form)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{form}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Dung tích / Trọng lượng */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("volumes")}
        >
          <span>Dung tích / Trọng lượng</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.volumes ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.volumes ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterData.volumes.map((volume) => (
            <label key={volume} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.volumes.includes(volume)}
                onChange={() => handleFilterChange("volumes", volume)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{volume}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Giá tiền */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("prices")}
        >
          <span>Giá tiền</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.prices ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.prices ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterData.prices.map((price) => (
            <label key={price} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.prices.includes(price)}
                onChange={() => handleFilterChange("prices", price)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Đối tượng sử dụng */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("audiences")}
        >
          <span>Đối tượng sử dụng</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.audiences ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.audiences ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm đối tượng..."
              value={searchTerms.audiences}
              onChange={(e) => handleSearch("audiences", e.target.value)}
              className="w-full p-2 pl-8 mb-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 text-black"
            />
            <FiSearch className="absolute left-2 top-3 text-gray-400 text-sm" />
          </div>
          {filteredOptions("audiences", filterData.audiences).map((audience) => (
            <label key={audience} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.audiences.includes(audience)}
                onChange={() => handleFilterChange("audiences", audience)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{audience}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Nước sản xuất */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("countries")}
        >
          <span>Nước sản xuất</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.countries ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.countries ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm nước sản xuất..."
              value={searchTerms.countries}
              onChange={(e) => handleSearch("countries", e.target.value)}
              className="w-full p-2 pl-8 mb-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-200 text-black"
            />
            <FiSearch className="absolute left-2 top-3 text-gray-400 text-sm" />
          </div>
          {filteredOptions("countries", filterData.countries).map((country) => (
            <label key={country} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.countries.includes(country)}
                onChange={() => handleFilterChange("countries", country)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{country}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Địa chỉ */}
      <div className="mb-6">
        <h4
          className="text-sm font-semibold text-gray-700 mb-2 cursor-pointer bg-gradient-to-r from-blue-50 to-white p-2 rounded-lg flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-100 hover:to-white"
          onClick={() => toggleSection("regions")}
        >
          <span>Địa chỉ</span>
          <FaChevronDown
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.regions ? "rotate-180 text-blue-600" : "text-gray-500"
            }`}
          />
        </h4>
        <div
          className={`space-y-2 overflow-hidden transition-all duration-300 ${
            openSections.regions ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {filterData.regions.map((region) => (
            <label key={region} className="flex items-center space-x-2 py-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
              <input
                type="checkbox"
                checked={filters.regions.includes(region)}
                onChange={() => handleFilterChange("regions", region)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm text-gray-600">{region}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Nút reset */}
      <button
        onClick={() =>
          setFilters({
            brands: [],
            forms: [],
            volumes: [],
            prices: [],
            audiences: [],
            countries: [],
            regions: [],
          })
        }
        className="w-full py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 rounded-lg hover:from-blue-500 hover:to-blue-600 hover:text-white text-sm font-medium transition-all duration-300"
      >
        Xóa bộ lọc
      </button>
    </div>
  );
}