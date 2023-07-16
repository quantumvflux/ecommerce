"use client";
import { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import Cart from "../Cart/Cart";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => {
    setShowCart((prevShow) => !prevShow);
  };

  return (
    <nav className="font-poppins w-screen h-16 fixed flex justify-around items-center bg-gray-200 z-20">
      <Link href={"/"}>
        <h1 className="font-bold text-3xl ">
          <span className="text-red-600 italic">Vibe</span>commerce
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <button onClick={handleShow}>
          <BsFillCartFill className="text-black h-6 w-6" />
        </button>
      </div>
      <Cart showCart={showCart} handleShow={handleShow} />
    </nav>
  );
};

export default Nav;
