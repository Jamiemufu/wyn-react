import Image from "next/image";

export default function ReviewsItem({
  review,
}: {
  review: { name: string; picture: string; review: string; rating: number };
}) {
  return (
    <div className="rounded-lg border-brandOrange border w-26">
      <div className="grid auto-rows-auto p-3">
        <Image
          src="/quote-open-50.png"
          height={30}
          width={30}
          alt={review.name}
          className="justify-self-start self-center"
        />
        <p className="text-l justify-self-center content-center m-auto">
          {review.review}
        </p>
        <Image
          src="/quote-close-50.png"
          height={30}
          width={30}
          alt={review.name}
          className=" justify-self-end self-center"
        />
      </div>
      <p className="p-1 text-black text-center text-sm italic">{review.name}</p>
      <div className="flex flex-row pb-5 flex-wrap justify-center">
        {[...Array(review.rating)].map((star, i) => {
          return (
            <Image
              key={i}
              src="/rating-90.png"
              alt="star"
              width={20}
              height={20}
            />
          );
        })}
      </div>
    </div>
  );
}
