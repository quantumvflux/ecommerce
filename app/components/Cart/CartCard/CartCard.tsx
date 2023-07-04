import QuantityCounter from "@/app/products/components/QuantityCounter/QuantityCounter";
import image from "./../../../db/assets/product.webp";
import Image from "next/image";

const CartCard = () => {
  return (
    <div className="border-2 border-gray-400 flex w-full">
      <div className="h-32 w-32 relative">
        <Image
          src={image}
          fill
          alt="Product Cart"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-4">
        <h5 className="mb-4 font-medium">Product Name</h5>
        <QuantityCounter price={9.99} />
      </div>
    </div>
  );
};

export default CartCard;
