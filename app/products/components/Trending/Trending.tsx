import ProductCard from "../../productCard/ProductCard";
import { data } from "@/app/db/data";

const Trending = () => {
  return (
    <div className="mt-8">
      <h4 className="font-semibold text-2xl text-center pt-8 pb-4">
        Trending now
      </h4>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2">
        {data.slice(0, 5).map((product) => (
          <div className="flex" key={product.id}>
            <ProductCard
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
