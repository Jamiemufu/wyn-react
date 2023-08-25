export default function navLink({
  linkTo,
  text,
}: {
  linkTo: string;
  text: string;
}) {
  return (
    <li className="block mt-4 sm:inline-block sm:mt-0 mr-10">
      <a href={linkTo} className=" text-white">
        {text}
      </a>
    </li>
  );
}
