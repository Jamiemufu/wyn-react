export default function NavLink({
  linkTo,
  text,
}: {
  linkTo: string;
  text: string;
}) {
  return (
    <li>
      <a href={linkTo} className=" text-black">
        {text}
      </a>
    </li>
  );
}
