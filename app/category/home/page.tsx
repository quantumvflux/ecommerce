import { Product, data } from "@/app/db/data";
import ProductCard from "@/app/products/productCard/ProductCard";

const page = () => {
  return (
    <>
      <h2 className="pt-24 pb-4 font-semibold text-center text-2xl">
        Home products
      </h2>
      <div className="w-3/4 m-auto font-poppins flex flex-wrap justify-center md:justify-normal gap-4">
        {data
          .filter((product) => product.category === "home")
          .map((product: Product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              id={product.id}
            />
          ))}
      </div>
    </>
  );
};

export default page;
