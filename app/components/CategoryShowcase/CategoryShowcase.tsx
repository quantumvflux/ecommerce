import Image from "next/image";
import technology from "./../../category/electronics/assets/technology.jpg";
import beauty from "./../../category/beauty/assets/beauty.jpg";
import fashion from "./../../category/fashion/assets/fashion.jpg";
import home from "./../../category/home/assets/home.jpg";

import Link from "next/link";

const CategoryShowcase = () => {
  return (
    <div className="pt-20 w-3/4 m-auto flex flex-col md:flex-row justify-center flex-wrap gap-4">
      <Link href={"/category/electronics"}>
        <div className="relative h-96 w-11/12 md:w-96 mx-auto">
          <Image
            src={technology}
            alt="Technology category"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
            Electronics
          </p>
          <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-40 hover:cursor-pointer"></div>
        </div>
      </Link>

      <Link href={"/category/beauty"}>
        <div className="relative h-96 w-11/12 md:w-64 mx-auto">
          <Image
            src={beauty}
            alt="Beauty category"
            fill
            style={{ objectFit: "cover" }}
            loading="lazy"
          />
          <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
            Beauty
          </p>

          <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-40 hover:cursor-pointer"></div>
        </div>
      </Link>

      <div className="flex flex-col gap-4">
        <div className="relative h-96 md:h-full w-11/12 md:w-80 mx-auto">
          <Link href={"/category/fashion"}>
            <Image
              src={fashion}
              alt="Fashion category"
              fill
              style={{ objectFit: "cover" }}
            />
            <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
              Fashion
            </p>

            <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-40 hover:cursor-pointer"></div>
          </Link>
        </div>
        <div className="relative h-96 md:h-full w-11/12 md:w-80 mx-auto">
          <Link href={"/category/home"}>
            <Image
              src={home}
              alt="Home products"
              fill
              style={{ objectFit: "cover" }}
            />
            <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
              Home
            </p>
            <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-40 hover:cursor-pointer"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
