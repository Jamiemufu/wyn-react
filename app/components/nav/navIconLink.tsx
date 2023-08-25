import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function navIconLink({
  image,
  text,
}: {
  image: StaticImport | string;
  text: string;
}) {
  return (
    <div className="flex flex-row justify-center items-center sm:pr-5 p-1">
      <Image src={image} height={30} width={30} alt={text} />
      <p className="p-1">{text}</p>
    </div>
  );
}
