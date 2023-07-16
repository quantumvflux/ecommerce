import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { BsFillTrashFill } from "react-icons/bs";
import { removeFromCart } from "@/app/redux/store/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "@/app/db/data";

interface Props {
  product: Product;
  quantity: number;
}

const CartCard = ({ product, quantity }: Props) => {
  const [prodQuantity, setProdQuantity] = useState(quantity);

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="border-2 border-gray-400 flex w-full ">
      <Link href={`/products/${product.id}`} className="flex items-center">
        <div className="h-32 w-32 relative">
          <Image
            src={product.image}
            fill
            alt="Product Cart"
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h5 className="mb-4 font-semibold">
            {product.title} <span className="font-normal">x{quantity}</span>
          </h5>
          <p>
            Total:
            <span className="font-semibold">
              $
              {Number(product.price * quantity)
                .toString()
                .slice(0, 6)}
            </span>
          </p>
        </div>
      </Link>
      <div className="m-auto text-2xl rounded-full w-1/4 hover:cursor-pointer">
        <BsFillTrashFill onClick={handleRemoveFromCart} />
      </div>
    </div>
  );
};

export default CartCard;
