import Image from "next/image";
import Regulated from "../regulated/regulated";

export default function IntroPartLeft({
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
    <div className={"flex flex-col justify-center sm:grid sm:grid-cols-6 gap-5"}>
      <div className="grid sm:col-span-4 self-center justify-around py-5">
        <h2 className="text-4xl font-bold py-5">{title}</h2>
        <p>{text}</p>
        {regulated && <Regulated />}
      </div>
      <Image
        src={image}
        width={400}
        height={400}
        alt={title}
        className={
          "w-full col-span-2 rounded-lg self-center justify-self-center sm:self-auto "
        }
      />
    </div>
  );
}
