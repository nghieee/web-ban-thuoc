import Link from 'next/link';

export default function AccountPage() {
  // Giả lập dữ liệu lỗi cho mục đích hiển thị giao diện
  const loginError = null; // Thay null bằng chuỗi lỗi nếu cần, ví dụ: "Email hoặc mật khẩu không đúng"
  const registerError = null; // Thay null bằng chuỗi lỗi nếu cần, ví dụ: "Đăng ký thất bại"

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="bg-white p-4 rounded-lg shadow-sm">
          <ol className="flex items-center text-sm text-gray-600">
            <li className="flex items-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                Trang Chủ
              </Link>
            </li>
            <li className="flex items-center mx-2">/</li>
            <li className="text-gray-800 font-medium" aria-current="page">
              Tài khoản
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Login Section */}
          <div className="lg:col-span-5 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Đăng nhập</h2>
            {loginError && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                {loginError}
              </div>
            )}
            <div className="text-sm text-gray-600 mb-4">
              <span className="text-red-500">*</span> Các trường bắt buộc
            </div>
            <form action="/Account/Login" method="post" className="space-y-5">
              <div>
                <label htmlFor="floatingInput" className="block text-sm font-medium text-gray-700 mb-1">
                  Địa chỉ email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                  id="floatingInput"
                  name="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="floatingPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                  id="floatingPassword"
                  name="Password"
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  name="RememberMe"
                  id="flexCheckChecked"
                  defaultChecked
                />
                <label htmlFor="flexCheckChecked" className="ml-2">
                  Ghi nhớ tôi
                </label>
              </div>
              <div className="text-sm text-gray-600">
                Trang này được bảo vệ bởi reCAPTCHA, Google{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Chính sách bảo mật
                </a>{' '}
                và{' '}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Điều khoản dịch vụ
                </a>
                .
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                ĐĂNG NHẬP
              </button>
            </form>
          </div>

          {/* Registration Section */}
          <div className="lg:col-span-7 bg-white p-6 rounded-lg shadow-md">
            <form action="/Account/Register" method="post" className="space-y-5">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tạo tài khoản</h2>
              {registerError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm">
                  {registerError}
                </div>
              )}
              <div className="text-sm text-gray-600 mb-4">
                <span className="text-red-500">*</span> Các trường bắt buộc
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="floatingInpuUserName" className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                    id="floatingInpuUserName"
                    name="userName"
                    placeholder="Họ và tên"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="floatingInputEmail" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                    id="floatingInputEmail"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="floatingInputPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Mật khẩu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                    id="floatingInputPassword"
                    name="password"
                    placeholder="Mật khẩu"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="floatingInputConfirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Xác nhận mật khẩu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                    id="floatingInputConfirmPassword"
                    name="confirmPassword"
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="floatingInputPhone" className="block text-sm font-medium text-gray-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-900 placeholder:text-gray-500"
                    id="floatingInputPhone"
                    name="phoneNumber"
                    placeholder="Số điện thoại"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="gridCheck1"
                    required
                  />
                  <label htmlFor="gridCheck1" className="ml-2">
                    Có, tôi đồng ý nhận email của LongChauPhake về các thông tin mới bao gồm ưu đãi độc quyền.
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="gridCheck3"
                    required
                  />
                  <label htmlFor="gridCheck3" className="ml-2">
                    Tôi đồng ý{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Chính sách bảo mật
                    </a>
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <button
                  type="submit"
                  id="registerButton"
                  className="w-full md:w-1/3 p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  THAM GIA NGAY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}