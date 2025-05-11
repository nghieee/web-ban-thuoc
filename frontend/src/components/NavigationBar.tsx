import CateDropdownMenuItems from "../components/CateDropdownMenuItems";

export default function NavigationBar() {
  return (
    <div className="bg-white">
      <div className="container mx-auto relative">
        <nav className="flex gap-8">
          <CateDropdownMenuItems
            title="Thực phẩm chức năng"
            categories={[
              {
                id: "vitamin",
                name: "Vitamin & Khoáng chất",
                icon: "/images/cateIcons/ChamSocDaMat.png",
                items: [
                  {
                    name: "Bổ sung Canxi & Vitamin D",
                    image: "/images/products/Vitamin_VienSuiKudosDo.png",
                  },
                  {
                    name: "Vitamin tổng hợp",
                    image: "/images/products/Vitamin_VienSuiKudosDo.png",
                  },
                  {
                    name: "Dầu cá, Omega 3, DHA",
                    image: "/images/products/Vitamin_VienSuiKudosDo.png",
                  },
                  {
                    name: "Vitamin C các loại",
                    image: "/images/products/Vitamin_VienSuiKudosDo.png",
                  },
                  {
                    name: "Bổ sung Sắt & Axit Folic",
                    image: "/images/products/Vitamin_VienSuiKudosDo.png",
                  },
                ],
              },
              {
                id: "heart",
                name: "Sức khỏe tim mạch",
                icon: "/images/cateIcons/DinhDuong.png",
                items: [
                  {
                    name: "Giảm cholesterol",
                    image: "/images/products/Vitamin_VienSuiKudosHong.png",
                  },
                  {
                    name: "Tăng tuần hoàn",
                    image: "/images/products/Vitamin_VienSuiKudosHong.png",
                  },
                  {
                    name: "Hạ huyết áp",
                    image: "/images/products/Vitamin_VienSuiKudosHong.png",
                  },
                ],
              },
            ]}
          />

          <CateDropdownMenuItems
            title="Tim mạch"
            categories={[
              {
                id: "blood",
                name: "Huyết áp & Máu",
                icon: "/images/cateIcons/ThanKinhNao.png",
                items: [
                  {
                    name: "Hạ huyết áp",
                    image: "/images/products/Vitamin_VienSuiKudosVang.png",
                  },
                  {
                    name: "Tăng tuần hoàn",
                    image: "/images/products/Vitamin_VienSuiKudosVang.png",
                  },
                ],
              },
            ]}
          />
        </nav>
      </div>
    </div>
  );
}
