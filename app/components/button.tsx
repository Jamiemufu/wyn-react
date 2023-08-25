export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-brandOrange rounded p-4 hidden text-white sm:mb-0 sm:flex">
      <p>{text}</p>
    </button>
  );
}
