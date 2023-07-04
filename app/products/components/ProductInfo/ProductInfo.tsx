interface Props {
  label: string;
  description: string;
}

const ProductInfo = ({ label, description }: Props) => {
  return (
    <div className="bg-gray-300 py-4 px-6 w-48">
      <p className="font-semibold text-lg">{label}</p>
      <p>{description}</p>
    </div>
  );
};

export default ProductInfo;
