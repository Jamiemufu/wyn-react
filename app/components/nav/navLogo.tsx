import Image from "next/image";
import Link from "next/link";

export default function NavLogo() {
  return (
    <div className="flex items-center flex-shrink-0 text-grey mr-6">
      <Link href="/" >
        <Image
          src={"/logo.png"}
          height={91}
          width={275}
          alt="Wyn Edwards Logo"
        />
      </Link>
    </div>
  );
}
