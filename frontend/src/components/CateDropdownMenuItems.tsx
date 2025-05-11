"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface SubCategoryItem {
  name: string;
  image: string;
}

interface SubCategory {
  id: string;
  name: string;
  items: SubCategoryItem[];
  icon: string;
}

interface Props {
  title: string;
  categories: SubCategory[];
}

export default function CateDropdownMenuItems({ title, categories }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

  return (
    <div
      className=""
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`group relative flex items-center gap-1 text-sm font-medium py-3 transition-colors duration-300 ${
          isOpen ? "text-blue-600" : "text-black"
        }`}
      >
        {title}
        <FaChevronDown
          className={`w-3 h-3 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
          }`}
        />
        {/* Gạch chân động */}
        <span
          className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${
            isOpen ? "w-full" : "group-hover:w-full w-0"
          }`}
        />
      </button>

      {isOpen && (
        
        <div className="absolute left-0 top-full w-full z-50">
          <div className="container mx-auto flex bg-white shadow-lg border rounded-b-lg">
            {/* Cột trái: danh mục */}
            <div className="w-1/3 p-4 border-r">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                    activeCategory === cat.id
                      ? "bg-gray-100 text-blue-600"
                      : "text-black"
                  }`}
                >
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span>{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Cột phải: sản phẩm tương ứng */}
            <div className="w-2/3 p-4 grid grid-cols-2 gap-3">
              {categories
                .find((c) => c.id === activeCategory)
                ?.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 cursor-pointer"
                  >
                    {/* Hình ảnh sản phẩm */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />

                    {/* Tên sản phẩm */}
                    <span className="text-sm font-medium text-gray-800">
                      {item.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
