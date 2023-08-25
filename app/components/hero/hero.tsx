import Button from "../button";
export default function hero() {
  return (
    <section
      className="bg-cover bg-center bg-black"
      style={{ backgroundImage: "url(" + "/van.jpg" + ")" }}
    >
      <div className="h-full text-white bg-black bg-opacity-70">
        <div className="flex flex-col justify-center items-center h-full m-auto p-6 w-full sm:p-14 sm:w-3/4">
          <h1 className="text-6xl p-7 text-center font-bold">Wyn Edwards Electrical</h1>
          <h2 className="text-l pb-10 w-full text-center sm:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Earum, ipsa aperiam.
            Commodi magnam hic aliquam, perspiciatis eveniet dignissimos, minus
            at magni accusantium dolorum, ipsam quam ea et fugiat error sunt.
          </h2>
          <Button text="Get a Free Quote!" />
        </div>
      </div>
    </section>
  );
}
