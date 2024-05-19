export default function NavButton(props: { onClick: () => void }) {
  return (
    <button
      className="flex items-center px-3 py-2"
      onClick={props.onClick}
    >
      <svg
        className="fill-current h-10 w-10 text-brandGray"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
      </svg>
    </button>
  );
}
{/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"> */}
