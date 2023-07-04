import ProductCard from "./products/productCard/ProductCard";
import { data, Product } from "./db/data";

const page = () => {
  return (
    <div className="pt-24 px-80 font-poppins flex flex-wrap gap-4">
      {data.map((product: Product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default page;
