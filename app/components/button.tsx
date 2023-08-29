export default function Button({ text, close } : { text: string, close?: () => void }) {
  return (
    <button className="bg-brandOrange rounded p-4 text-white sm:mb-0" onClick={close}>
      <p>{text}</p>
    </button>
  );
}
