import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  price: number;
  image: StaticImageData;
}

const productCard = ({ id, title, price, image }: Props) => {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-64 h-80 pb-8 m-auto border-2 border-solid border-gray-400 hover:border-gray-800 hover:cursor-pointer transition-all overflow-hidden relative">
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt={title}
            fill
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4">
          <p>{title}</p>
          <span className="font-bold">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default productCard;
