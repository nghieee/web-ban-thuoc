// Footer.jsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Footer Top Banner */}
      <div className="footer-top">
        <Image
          src="/images/default/footer_top_banner.png"
          alt="Footer Top"
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>
      {/* End Footer Top Banner */}

      {/* Footer Content  */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between text-sm pt-3">
            {/* About Us Section */}
            <div className="w-full md:w-1/5 mb-6">
              <div className="text-base text-gray-600 font-medium pb-2">
                Về chúng tôi
              </div>
              <ul className="text-blue-600">
                <li className="mb-1">
                  <Link href="#" className="">
                    Giới thiệu
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Giấy phép kinh doanh
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Quy chế hoạt động
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách đặt cọc
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách nội dung
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách đổi trả
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách giao hàng
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách thanh toán
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Kiểm tra hóa đơn điện tử
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chính sách thu thập và xử lý dữ liệu cá nhân
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Thông tin trung tâm bảo hành thiết bị y tế từng hãng
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories Section */}
            <div className="w-full md:w-1/5 mb-6">
              <div className="text-base text-gray-600 font-medium pb-2">
                Danh mục
              </div>
              <ul className="text-blue-600">
                <li className="mb-1">
                  <Link href="#" className="">
                    Thực phẩm chức năng
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Dược mỹ phẩm
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Chăm sóc cá nhân
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Thuốc
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" className="">
                    Thiết bị y tế
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full md:w-1/5 mb-6">
              <div className="text-base text-gray-600 font-medium pb-2">
                Tổng đài
              </div>
              <div>
                <p className="text-gray-700">Tư vấn mua hàng</p>
                <p className="mb-2 text-blue-600">
                  <Link href="#" className="">
                    18006928 <span className="text-gray-600">(Nhánh 1)</span>
                  </Link>
                </p>
                <p className="text-gray-700">Trung tâm tư vấn</p>
                <p className="mb-2 text-blue-600">
                  <Link href="#" className="">
                    18006928 <span className="text-gray-600">(Nhánh 2)</span>
                  </Link>
                </p>
                <p className="text-gray-700">Góp ý, khiếu nại</p>
                <p className="mb-2 text-blue-600">
                  <Link href="#" className="">
                    18006928 <span className="text-gray-600">(Nhánh 3)</span>
                  </Link>
                </p>
              </div>
            </div>

            {/* Connect Section */}
            <div className="w-full md:w-1/5 mb-6">
              <div>
                <div className="text-base font-medium pb-2 text-gray-600">
                  Kết nối với chúng tôi
                </div>
                <div className="flex space-x-2">
                  <Image
                    src="/images/social/facebook_logo.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                  <Image
                    src="/images/social/zalo_logo.png"
                    alt="Zalo"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="text-base font-medium pb-2 text-gray-600">
                  Tải ứng dụng Long Châu phake
                </div>
                <Image
                  src="/images/social/download_qr.png"
                  alt="QR Code"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Certifications Section */}
            <div className="w-full md:w-1/5 mb-6">
              <div className="text-base font-medium pb-2 text-gray-600">
                Chứng nhận bởi
              </div>
              <div className="flex justify-evenly items-center md:justify-start md:gap-x-3">
                <Image
                  src="/images/certifications/bo_cong_thuong.png"
                  alt="Bo Cong Thuong"
                  width={70}
                  height={45}
                />
                <Image
                  src="/images/certifications/dmca.png"
                  alt="DMCA"
                  width={70}
                  height={45}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Content */}

      {/* Footer Bottom */}
      <div className="bg-white">
        <div className="container mx-auto py-4 text-center text-gray-500 text-sm border-t-1 border-gray-300">
          <p>
            © 2007 - 2025 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD
            0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM
          </p>
          <p>
            GP thiết lập TTTĐTTH số 538/GP-TTĐT do Sở TTTT Hồ Chí Minh cấp ngày
            27 tháng 03 năm 2025
          </p>
          <ul className="list-disc list-inside flex flex-col items-center">
            <li>Địa chỉ: 379-381 Hai Bà Trưng, P. Võ Thị Sáu, Q.3, TP. HCM</li>
            <li>
              Số điện thoại:{" "}
              <a target="_blank" rel="nofollow" href="tel:0123456789">
                0123456789
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                target="_blank"
                rel="nofollow"
                href="mailto:sale@nhathuoclongchau.com.vn"
              >
                sale@nhathuoclongchau.com.vn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
