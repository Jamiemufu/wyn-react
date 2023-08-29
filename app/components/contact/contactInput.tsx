export default function ContactInput({
  label,
  name,
  error,
  type,
  validate,
  value,
}: {
  label: string;
  name: string;
  error: string;
  type: string;
  value: string;
  validate: (value: any, name: string) => void;
}) {
  if (type === "textarea") {
    return (
      <div className="grid row-span-6">
        <label htmlFor={name} className="pb-5 sm:pb-0">
          {label} {error && <span className=" text-red-600 text-sm">{error}</span>}
        </label>
        <textarea
          id={name}
          name={name}
          className={
            "border rounded border-brandOrange p-1 outline-brandOrange row-span-5 " +
            (error ? " border-red-600 border-2 focus:outline-red-600 text-sm" : "")
          }
          rows={5}
          cols={50}
          value={value}
          onChange={(e) => validate(e.target.value, name)}
          placeholder="Enter your message..."
          
        ></textarea>
      </div>
    );
  } else {
    return (
      <div className="grid row-span-6">
        <label htmlFor={name}>
          {label} {error && <span className=" text-red-600 text-sm">{error}</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          className={
            "border rounded border-brandOrange p-1 outline-brandOrange" +
            (error ? " border-red-600 border-2 focus:outline-red-600" : "")
          }
          value={value}
          placeholder={"Enter your " + label + "..."}
          onChange={(e) => validate(e.target.value, name)}
        />
      </div>
    );
  }
}
