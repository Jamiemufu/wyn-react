export default function ContactInput({
  label,
  name,
  stateSet,
  error,
  type,
}: {
  label: string;
  name: string;
  stateSet: (name: string) => void;
  error: string;
  type: string;
}) {
  if (type === "textarea") {
    return (
      <div className="grid row-span-6">
        <label htmlFor={name} className="capitalize row-span-1">
          {label} {error && <span className=" text-red-600">{error}</span>}
        </label>
        <textarea
          id={name}
          name={name}
          className={
            "border rounded border-brandOrange p-1 outline-brandOrange row-span-5" +
            (error ? " border-red-600 border-2" : "")
          }
          rows={5}
          cols={50}
          value={name}
          onChange={(e) => stateSet(e.target.value)}
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="grid row-span-6">
        <label htmlFor={name} className="capitalize">
          {label} {error && <span className=" text-red-600">{error}</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className={
            "border rounded border-brandOrange p-1 outline-brandOrange" +
            (error ? " border-red-600 border-2" : "")
          }
          value={name}
          onChange={(e) => stateSet(e.target.value)}
        />
      </div>
    );
  }
}
