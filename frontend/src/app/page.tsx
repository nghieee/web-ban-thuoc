"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  const fullWidthSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
    dotsClass: "slick-dots",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const categories = Array(12).fill({ name: "Thần kinh não", count: 106 });
  const products = Array(12).fill({
    title: "Viên uống Glucosamine And Chondroitin Jpanwell hỗ trợ bổ sung chất nhờn dịch khớp (120 viên)",
    price: "768.000đ",
    oldPrice: "960.000đ",
    unit: "Hộp 120 Viên",
  });

  return (
    <>
      <style jsx global>{`
        .slick-dots {
          position: absolute !important;
          bottom: 8px !important;
        }
      `}</style>

      {/* Full-Width Carousel */}
      <div className="w-full">
        <Slider {...fullWidthSettings}>
          <div>
            <Image
              src="/images/banners/banner_full_3.png"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              alt="Full Banner 1"
            />
          </div>
          <div>
            <Image
              src="/images/banners/banner_full_2.png"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              alt="Full Banner 2"
            />
          </div>
          <div>
            <Image
              src="/images/banners/banner_full_3.png"
              width={1920}
              height={600}
              className="w-full h-auto object-cover"
              alt="Full Banner 3"
            />
          </div>
        </Slider>
      </div>


      {/* Slider */}
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-12 gap-4 items-center">
          <div className="col-span-8">
            <Slider {...settings}>
              <div>
                <Image src="/images/banners/banner1.png" width={800} height={400} className="rounded-xl w-full" alt="Banner 1" />
              </div>
              <div>
                <Image src="/images/banners/banner2.png" width={800} height={400} className="rounded-xl w-full" alt="Banner 2" />
              </div>
              <div>
                <Image src="/images/banners/banner3.png" width={800} height={400} className="rounded-xl w-full" alt="Banner 3" />
              </div>
              <div>
                <Image src="/images/banners/banner4.png" width={800} height={400} className="rounded-xl w-full" alt="Banner 4" />
              </div>
            </Slider>
          </div>
          <div className="col-span-4 space-y-3">
            <Image src="/images/banners/banner5.png" width={400} height={200} className="rounded-xl w-full" alt="Banner 5" />
            <Image src="/images/banners/banner6.png" width={400} height={200} className="rounded-xl w-full" alt="Banner 6" />
          </div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="container mx-auto py-6">
        <div className="flex items-center mb-2 font-medium text-black text-lg">
          <Image src="/images/danh_muc_noi_bat.png" width={24} height={24} className="mr-2" alt="Danh mục nổi bật" />
          Danh mục nổi bật
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, index) => (
            <Link key={index} href="#" className="bg-white p-4 rounded-xl shadow-sm text-center text-black no-underline hover:no-underline hover:bg-gray-100 transition">
              <Image className="justify-self-center" src="/images/categories/level_2/than_kinh_nao_level_2.png" width={24} height={24} alt={cat.name} />
              <div className="mt-2 font-medium">{cat.name}</div>
              <div className="text-gray-500 text-sm opacity-50">{cat.count} sản phẩm</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="py-6">
        <div className="container mx-auto">
          <div className="flex items-center mb-2 font-medium text-black text-lg">
          <Image src="/images/danh_muc_noi_bat.png" width={24} height={24} className="mr-2" alt="Danh mục nổi bật" />
          Sản phẩm nổi bật
        </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:border hover:border-blue-500">
                <Image src="/images/sanpham.png" width={200} height={200} className="p-3 w-full" alt={product.title} />
                <div className="px-3 pb-3">
                  <h5 className="text-sm line-clamp-3 text-black h-[60px]">{product.title}</h5>
                  <div className="mt-1 text-blue-600 text-sm">
                    {product.price} / Hộp
                  </div>
                  <div className="text-gray-500 text-sm line-through opacity-50">{product.oldPrice}</div>
                  <p className="mt-1 px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs w-fit opacity-50">{product.unit}</p>
                  <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-full text-sm">Chọn mua</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctor Section */}
      <div className="container mx-auto mt-4 pb-4">
        <div className="relative bg-[url('/images/home_bgdoctor.png')] h-[276px] rounded-3xl overflow-hidden">
          <Image src="/images/home_bgdoctor2.png" className="absolute bottom-0 right-0" width={350} height={100} alt="Doctor" />
          <div className="pt-4 pl-6 text-white">
            <h3 className="text-xl font-medium">Chuyên trang bệnh & sức khỏe</h3>
            <p className="text-base">Tổng hợp thông tin và kiến thức chuyên sâu về các lĩnh vực sức khỏe</p>
            <Link href="/doctor" className="mt-3 inline-block px-4 py-2 bg-white text-blue-600 rounded-full text-sm no-underline hover:no-underline">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}