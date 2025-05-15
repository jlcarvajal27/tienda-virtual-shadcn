import coffeeCategories from "@/data/coffe-category";
import Link from "next/link";

const ChooseCategory = () => {
  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoría favorita
      </h3>
      <div className="grid gap-3 sm:grid-cols-3">
        {coffeeCategories.map((category) => (
          <Link
            key={category.id}
            href="/category"
            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
          >
            <img
              src={category.image}
              alt={category.categoryName}
              className="max-w-[270px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
