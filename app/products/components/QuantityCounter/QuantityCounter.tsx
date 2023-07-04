"use client";
import { useState } from "react";

interface Props {
  price: number;
}

const QuantityCounter = ({ price }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    quantity <= 1
      ? setQuantity(1)
      : setQuantity((prevQuantity) => prevQuantity - 1);
  };

  return (
    <div className="flex justify-between gap-8 items-center w-full">
      <div className="flex items-center rounded-full">
        <button
          className="rounded-full bg-red-600 text-white h-10 w-10"
          onClick={handleDecrease}
        >
          -
        </button>
        <p className="w-8 text-lg text-center">{quantity}</p>
        <button
          className="rounded-full bg-red-600 text-white h-10 w-10"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <p className="font-bold text-xl text-end">${price * quantity}</p>
    </div>
  );
};

export default QuantityCounter;
