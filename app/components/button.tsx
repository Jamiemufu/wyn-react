export default function Button({ text }: { text: string }) {
  return (
    <button className="bg-brandOrange rounded p-4 text-white sm:mb-0">
      <p>{text}</p>
    </button>
  );
}
