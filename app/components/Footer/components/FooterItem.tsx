import Link from "next/link";

interface Props {
  link: string;
}

const FooterItem = ({ link }: Props) => {
  return (
    <Link href={"/"} className="hover:underline underline-offset-2">
      {link}
    </Link>
  );
};

export default FooterItem;
