import Image from "next/image";

export default function reviewsItem({
  review,
}: {
  review: { name: string; picture: string; review: string; rating: number };
}) {
  return (
    <div className="flex justify-center items-center flex-col p-5">
      <div className="flex flex-row justify-center p-3">
        <p className="text-2xl">
          <sup>
            <Image
              src="/quote-open-50.png"
              alt="quote open"
              width={50}
              height={50}
              className="inline-block"
            />
          </sup>
          {review.review}
          <sup>
            <Image
              src="/quote-close-50.png"
              alt="quote open"
              width={50}
              height={50}
              className="inline-block"
            />
          </sup>
        </p>
      </div>
      <p className="p-3">
        {review.name}
      </p>
      <div className="flex flex-row p-3 flex-wrap justify-center">
        {[...Array(review.rating)].map((star, i) => {
          return (
            <Image
              key={i}
              src="/rating-90.png"
              alt="star"
              width={60}
              height={60}
            />
          );
        })}
      </div>
    </div>
  );
}
