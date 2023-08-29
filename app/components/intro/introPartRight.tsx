import Image from "next/image";
import Regulated from "../regulated/regulated";

export default function IntroPartRight({
  image,
  title,
  text,
  regulated,
}: {
  image: string;
  title: string;
  text: string;
  regulated: boolean;
}) {
  return (
    <div
      className={
        "flex flex-col-reverse justify-center sm:grid sm:grid-cols-6 gap-5 py-5"
      }
    >
      <Image
        src={image}
        width={400}
        height={400}
        alt={title}
        className={
          " w-full col-span-2 rounded-lg self-center justify-self-center sm:self-auto "
        }
      />
      <div className="flex flex-col justify-center py-5 sm:grid sm:col-span-4 self-center sm:justify-around">
        <h2 className="text-4xl font-bold py-5">{title}</h2>
        <p>{text}</p>
        {regulated && <Regulated />}
      </div>
    </div>
  );
}
