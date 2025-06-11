"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaCartShopping,
  FaEnvelope,
  FaPhone,
  FaBullhorn,
} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white shadow-md bg-[url('/images/default/header_desktop.png')] bg-cover">
      {/* Header Top */}
      <div className="hidden lg:block container mx-auto py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm font-extralight text-white">
          <div className="flex items-center">
            <FaBullhorn className="mr-2" /> Chào mừng bạn đến với nhà thuốc Long
            Châu Phake
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <FaEnvelope className="mr-1" /> Email: cskh@longchauphake.vn
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-1" /> Hotline: 028.3636.7777
            </div>
          </div>
        </div>
      </div>

      {/* Header Main */}
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <Link href="/" className="w-full md:w-1/5 flex justify-center md:justify-start">
            <Image
              src="/images/default/header_logo_brand.png"
              alt="Logo"
              width={183}
              height={56}
              className="h-[40px] sm:h-[56px] w-auto"
            />
          </Link>

          {/* Search Box */}
          <form className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 20 20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search Mockups, Logos..."
                className="w-full p-4 pl-10 rounded-4xl text-sm text-blue-600 border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>
          </form>

          {/* Cart and Login */}
          <div className="w-full md:w-1/4 flex items-center justify-center md:justify-end space-x-4">
            <Link href="/auth" className="flex items-center text-body1 font-medium">
              <FaUser className="w-5 h-5 text-white" />
              <span className="ml-2">Đăng nhập</span>
            </Link>
            <Link
              href="/cart"
              className="flex items-center px-5 py-2 bg-[#1250DC] rounded-3xl font-medium"
            >
              <FaCartShopping className="w-5 h-5 text-white" />
              <span className="ml-2 text-white">Giỏ hàng</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
