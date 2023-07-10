"use client";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => {
    setShowCart((prevShow) => !prevShow);
  };

  return (
    <nav className="font-poppins w-screen h-16 fixed flex justify-around items-center bg-gray-200 z-10">
      <Link href={"/"}>
        <h1 className="font-bold text-3xl ">
          <span className="text-red-600">i</span>comers
        </h1>
      </Link>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 transition-all flex justify-center items-center">
          <button onClick={handleShow}>
            <AiOutlineShoppingCart className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
      <Cart showCart={showCart} handleShow={handleShow} />
    </nav>
  );
};

export default Nav;
