"use client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="bg-white shadow-md bg-[url('/images/default/header_desktop.png')] bg-cover w-fulls">
      <div className="mx-auto">
        <div className="container mx-auto py-3">
          <div className="flex justify-between items-center text-sm font-extralight text-white">
            <div>
              <i className="fa-solid fa-bullhorn"></i>
              Chào mừng bạn đến với nhà thuốc Long Châu Phake
            </div>
            <div>
              <span className="mr-4">
                <i className="fa-solid fa-inbox mr-2"></i> Email:
                cskh@longchauphake.vn
              </span>
              <span>
                <i className="fa-solid fa-phone mr-2"></i> Hotline:
                028.3636.7777
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="py-4 flex justify-between items-center">
          <div className="w-1/5">
            <a href="#">
              <Image
                className="md:h-[56px] md:w-[183px]"
                src="/images/default/header_logo_brand.png"
                alt="Logo"
                width={150}
                height={48}
              />
            </a>
          </div>
          <form className="w-1/2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 rounded-4xl text-sm text-blue-600 placeholder-gray-400 border border-gray-300 bg-white focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </form>
          {/* <SearchBar /> */}
          <div className="w-1/5 flex items-center space-x-4">
            <a href="#" className="flex items-center">
              <FaUser className="w-5 h-5 text-white" />
              <div className="ml-2 text-body1 font-medium">Đăng nhập</div>
            </a>
            <a
              href="#"
              className="flex items-center px-5 py-2 bg-[#1250DC] rounded-3xl font-medium"
            >
              <FaCartShopping className="w-5 h-5 text-white" />
              <span className="ml-2 text-white font-medium">Giỏ hàng</span>
            </a>
          </div>
        </div>
        <div className="pb-3">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="#">Thực phẩm chức năng</a>
            </li>
            <li>
              <a href="#">Dược mỹ phẩm</a>
            </li>
            <li>
              <a href="#">Chăm sóc cá nhân</a>
            </li>
            <li>
              <a href="#">Thuốc</a>
            </li>
            <li>
              <a href="#">Thiết bị y tế</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
