import FilterSidebar from "@/components/FilterSidebar";
import Image from "next/image";

// Dữ liệu sản phẩm mẫu (static)
const products = Array(12).fill({
  title: "Viên uống Glucosamine And Chondroitin Jpanwell hỗ trợ bổ sung chất nhờn dịch khớp (120 viên)",
  price: "768.000đ",
  oldPrice: "960.000đ",
  unit: "Hộp 120 Viên",
  image: "/images/sanpham.png",
});

export default function CategoryPage() {
  return (
    <div className="container mx-auto py-6 px-4">
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Bộ lọc bên trái */}
        <div className="col-span-1">
          <FilterSidebar />
        </div>

        {/* Danh sách sản phẩm bên phải */}
        <div className="col-span-1 lg:col-span-3">
          <h1 className="text-2xl font-semibold mb-6 text-black">Danh mục sản phẩm</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:border hover:border-blue-500"
              >
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  className="p-3 w-full h-auto object-contain"
                  alt={product.title}
                />
                <div className="px-3 pb-3">
                  <h5 className="text-sm line-clamp-3 text-black h-[60px]">{product.title}</h5>
                  <div className="mt-1 text-blue-600 text-sm">
                    {product.price} / Hộp
                  </div>
                  <div className="text-gray-500 text-sm line-through opacity-50">
                    {product.oldPrice}
                  </div>
                  <p className="mt-1 px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs w-fit opacity-50">
                    {product.unit}
                  </p>
                  <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-full text-sm">
                    Chọn mua
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}