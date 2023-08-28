import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export default function NavIconLink({
  image,
  text,
}: {
  image: StaticImport | string;
  text: string;
}) {
  return (
    <Link
      href={text === "Email Us" ? "mailto:#" : "tel:" + text}
      className="flex flex-row justify-center items-center p-1 sm:mx-3"
    >
      <Image src={image} height={30} width={30} alt={text} />
      <p className="p-1">{text}</p>
    </Link>
  );
}
