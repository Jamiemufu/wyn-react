import Image from "next/image";
import Link from "next/link";

export default function SocialContacts() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-10 justify-items-center py-5">
      <Link href="mailto:#">
        <Image
          src={"/gmail-96.png"}
          width={48}
          height={48}
          alt={"Email link"}
        />
      </Link>
      <Link href="tel:#">
        <Image
          src={"/phone-64.png"}
          width={48}
          height={48}
          alt={"Phone link"}
        />
      </Link>
      <Link href="tel:#">
        <Image
          src={"/whatsapp-96.png"}
          width={48}
          height={48}
          alt={"WhatsApp link"}
        />
      </Link>
      <Link href="https://www.facebook.com/#">
        <Image
          src={"/facebook-96.png"}
          width={48}
          height={48}
          alt={"Facebook link"}
        />
      </Link>
      <Link href="https://www.instagram.com/#">
        <Image
          src={"/insta-96.png"}
          width={48}
          height={48}
          alt={"Instagram link"}
        />
      </Link>
      <Link href="https://www.linkedin.com/#">
        <Image
          src={"/linkedin-96.png"}
          width={48}
          height={48}
          alt={"LinkedIn link"}
        />
      </Link>
    </div>
  );
}
