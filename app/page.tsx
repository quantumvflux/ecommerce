import ProductCard from "./products/productCard/ProductCard";
import { data, Product } from "./db/data";
import CategoryShowcase from "./components/CategoryShowcase/CategoryShowcase";
import Newsletter from "./components/Newsletter/Newsletter";

const page = () => {
  return (
    <>
      <CategoryShowcase />
      <h2 className="font-semibold text-2xl text-center pt-20">Our Products</h2>
      <div className="py-4 w-11/12 md:w-3/4 m-auto font-poppins flex justify-center md:justify-normal flex-wrap gap-4">
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
      <Newsletter />
    </>
  );
};

export default page;
