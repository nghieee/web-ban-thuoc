import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const aboutItems = [
    "Giới thiệu",
    "Giấy phép kinh doanh",
    "Quy chế hoạt động",
    "Chính sách đặt cọc",
    "Chính sách nội dung",
    "Chính sách đổi trả",
    "Chính sách giao hàng",
    "Chính sách bảo mật",
    "Chính sách thanh toán",
    "Kiểm tra hóa đơn điện tử",
    "Chính sách thu thập và xử lý dữ liệu cá nhân",
    "Thông tin trung tâm bảo hành thiết bị y tế từng hãng",
  ];

  const categoryItems = [
    "Thực phẩm chức năng",
    "Dược mỹ phẩm",
    "Chăm sóc cá nhân",
    "Thuốc",
    "Thiết bị y tế",
  ];

  const contactItems = [
    { label: "Tư vấn mua hàng", number: "18006928", branch: "Nhánh 1" },
    { label: "Trung tâm tư vấn", number: "18006928", branch: "Nhánh 2" },
    { label: "Góp ý, khiếu nại", number: "18006928", branch: "Nhánh 3" },
  ];

  const socialItems = [
    { src: "/images/social/facebook_logo.png", alt: "Facebook" },
    { src: "/images/social/zalo_logo.png", alt: "Zalo" },
  ];

  const certificationItems = [
    { src: "/images/certifications/bo_cong_thuong.png", alt: "Bo Cong Thuong" },
    { src: "/images/certifications/dmca.png", alt: "DMCA" },
  ];

  return (
    <footer className="bg-white">
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

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* About Us Section */}
          <div>
            <h4 className="text-base font-medium text-gray-600 pb-2">
              Về chúng tôi
            </h4>
            <ul className="space-y-1 text-blue-600">
              {aboutItems.map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h4 className="text-base font-medium text-gray-600 pb-2">
              Danh mục
            </h4>
            <ul className="space-y-1 text-blue-600">
              {categoryItems.map((item) => (
                <li key={item}>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-base font-medium text-gray-600 pb-2">
              Tổng đài
            </h4>
            <div className="space-y-2">
              {contactItems.map((item) => (
                <div key={item.label}>
                  <p className="text-gray-700">{item.label}</p>
                  <p className="text-blue-600">
                    <Link href="#">
                      {item.number}{" "}
                      <span className="text-gray-600">({item.branch})</span>
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-base font-medium text-gray-600 pb-2">
              Kết nối với chúng tôi
            </h4>
            <div className="flex space-x-2">
              {socialItems.map((item) => (
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  width={28}
                  height={28}
                />
              ))}
            </div>
            <h4 className="text-base font-medium text-gray-600 pb-2 mt-5">
              Tải ứng dụng Long Châu phake
            </h4>
            <Image
              src="/images/social/download_qr.png"
              alt="QR Code"
              width={100}
              height={100}
            />
          </div>

          {/* Certifications Section */}
          <div>
            <h4 className="text-base font-medium text-gray-600 pb-2">
              Chứng nhận bởi
            </h4>
            <div className="flex gap-x-3">
              {certificationItems.map((item) => (
                <Image
                  key={item.alt}
                  src={item.src}
                  alt={item.alt}
                  width={70}
                  height={45}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm">
        <div className="container border-t border-gray-300 py-4 mx-auto">
          <p>
            © 2007 - 2025 Công ty Cổ Phần Dược Phẩm FPT Long Châu Số ĐKKD
            0315275368 cấp ngày 17/09/2018 tại Sở Kế hoạch Đầu tư TPHCM
          </p>
          <p>
            GP thiết lập TTTĐTTH số 538/GP-TTĐT do Sở TTTT Hồ Chí Minh cấp ngày
            27 tháng 03 năm 2025
          </p>
          <ul className="list-disc list-inside space-y-1">
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
