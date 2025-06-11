import CateDropdownMenuItems from "../components/CateDropdownMenuItems";

interface Category {
  categoryId: number;
  categoryName: string;
  imageUrl: string;
  subCategories: Category[];
}

interface NavigationBarProps {
  categories: Category[] | null;
}

export default function NavigationBar({ categories }: NavigationBarProps) {
  return (
    <div className="bg-white">
      <div className="container mx-auto relative">
        <nav className="flex gap-8">
          {categories && Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category) => (
              <CateDropdownMenuItems
                key={category.categoryId}
                title={category.categoryName}
                categories={category.subCategories.map((sub) => ({
                  id: sub.categoryId.toString(),
                  name: sub.categoryName,
                  icon: sub.imageUrl || "/images/placeholder.png",
                  items: sub.subCategories.map((subSub) => ({
                    name: subSub.categoryName,
                    image: subSub.imageUrl || "/images/placeholder.png",
                  })),
                }))}
              />
            ))
          ) : (
            <div className="text-black py-3">Không có danh mục nào</div>
          )}
        </nav>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:5000/api/categories");
    console.log("API response status:", res.status);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const categories: Category[] = await res.json();
    console.log("Categories fetched:", categories);
    return {
      props: {
        categories,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        categories: null,
      },
    };
  }
}