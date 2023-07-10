"use client";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import CartCard from "./CartCard/CartCard";

interface Props {
  showCart: boolean;
  handleShow: () => void;
}

const Cart = ({ showCart, handleShow }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [transitionClass, setTransitionClass] = useState("translate-x-full");

  useEffect(() => {
    setTransitionClass(showCart ? "" : "translate-x-full");
  }, [showCart]);

  return (
    <div
      className={`${transitionClass} transition-all flex flex-col bg-white shadow-2xl absolute top-0 right-0 w-96 h-screen`}
    >
      <button
        onClick={handleShow}
        className="text-black hover:bg-gray-200 rounded-full text-xl absolute m-2 p-2 transition-all"
      >
        <AiOutlineClose />
      </button>
      <div>
        <h4 className="text-center text-xl font-semibold p-4">Cart</h4>
      </div>
      <div className="scrollbar-thin scrollbar-thumb-inherit flex flex-col gap-4 w-11/12 mx-auto justify-start overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id}>
            <CartCard quantity={item.quantity} product={item} />
          </div>
        ))}
      </div>
      <button className="absolute bottom-0 left-0 right-0 bg-red-600 rounded-full mb-4 px-4 py-2 text-white m-auto w-32">
        Checkout
      </button>
    </div>
  );
};

export default Cart;
