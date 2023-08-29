import Link from "next/link";

export default function NavLink({
  linkTo,
  text,
  onClick,
}: {
  linkTo: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <li>
      <Link href={linkTo} onClick={onClick}>
        {text}
      </Link>
    </li>
  );
}
