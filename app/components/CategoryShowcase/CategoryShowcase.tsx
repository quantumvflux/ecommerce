import Image from "next/image";
import image from "./../../products/productCard/assets/bg.webp";

const CategoryShowcase = () => {
  return (
    <div className="pt-20 px-52 flex justify-center gap-4 ">
      <div className="relative h-96 w-72">
        <Image src={image} alt="Category" fill style={{ objectFit: "cover" }} />
        <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
          Category
        </p>
        <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-0 hover:cursor-pointer"></div>
      </div>
      <div className="relative h-96 w-72">
        <Image src={image} alt="Category" fill style={{ objectFit: "cover" }} />
        <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
          Category
        </p>

        <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-0 hover:cursor-pointer"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative h-full w-72">
          <Image
            src={image}
            alt="Category"
            fill
            style={{ objectFit: "cover" }}
          />
          <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
            Category
          </p>

          <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-0 hover:cursor-pointer"></div>
        </div>
        <div className="relative h-full w-72">
          <Image
            src={image}
            alt="Category"
            fill
            style={{ objectFit: "cover" }}
          />
          <p className="absolute bottom-0 text-white text-xl font-bold ml-4 mb-4 z-10">
            Category
          </p>
          <div className="absolute bg-black h-full w-full opacity-20 transition-opacity hover:opacity-0 hover:cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShowcase;
