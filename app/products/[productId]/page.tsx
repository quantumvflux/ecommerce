"use client";
import Image, { StaticImageData } from "next/image";
import QuantityCounter from "../components/QuantityCounter/QuantityCounter";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import Trending from "../components/Trending/Trending";
import { useParams } from "next/navigation";
import { data } from "@/app/db/data";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/redux/store/cartSlice";
import { AppDispatch } from "@/app/redux/store/store";
import { Product } from "@/app/db/data";

const ProductId = () => {
  const id = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = (
    id: number,
    title: string,
    price: number,
    description: string,
    image: StaticImageData,
    weight: string,
    size: string,
    material: string,
    category: "electronics" | "fashion" | "home" | "beauty" | "sports"
  ) => {
    const newItem: Product = {
      id,
      title,
      price,
      description,
      image,
      weight,
      size,
      material,
      category,
    };
    dispatch(addToCart(newItem));
  };

  return (
    <div className="grid place-content-center py-20">
      {data
        .filter((product) => product.id === Number(id.productId))
        .map((product) => (
          <div key={product.id}>
            <h2 className="text-center font-bold text-2xl pt-8 pb-4">
              {product.title}
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 mb-8">
              <div className="relative h-96 w-80">
                <Image
                  alt="Product"
                  src={product.image}
                  fill
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
              <div className="w-11/12 md:w-1/4 flex flex-col">
                <div className="mb-6">
                  <p className="text-md">{product.description}</p>
                  <p className="my-4 text-center">Quantity</p>
                  <QuantityCounter price={product.price} />
                </div>

                <button
                  onClick={() => {
                    handleAddToCart(
                      product.id,
                      product.title,
                      product.price,
                      product.description,
                      product.image,
                      product.size,
                      product.material,
                      product.weight,
                      product.category
                    );
                  }}
                  className="bg-red-600 hover:bg-red-500 transition-all hover:border-black hover:border-2 w-48 m-auto p-4 text-white rounded-full"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-center">
              <ProductInfo label="Weight" description={product.weight} />
              <ProductInfo label="Size" description={product.size} />
              <ProductInfo label="Material" description={product.material} />
            </div>
          </div>
        ))}
      <Trending />
    </div>
  );
};

export default ProductId;
