export default function NavButton() {
  return (
    <button className="flex items-center px-3 py-2 border rounded text-brandGray border-brandGray hover:brandOrange hover:border-brandOrange">
      <svg
        className="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path
          fillRule="evenodd"
          d="M2 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 4h16a1 1 0 010 2H2a1 1 0 010-2zm0
                4h16a1 1 0 010 2H2a1 1 0 010-2z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
