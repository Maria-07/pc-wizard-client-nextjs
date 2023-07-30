import { Avatar, Rate } from "antd";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";

const Reviews = ({ singleData }) => {
  const { data: session } = useSession();
  const currentDate = new Date();
  console.log("session user", session?.user?.name, currentDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1 to get the correct month
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date as a string in a desired format
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log("Current Date:", formattedDate);

  const [review, setReview] = useState("");
  const [value, setValue] = useState(3);

  const handleReview = async () => {
    // console.log(review);
    // console.log(value);
    const data = {
      name: session?.user?.name,
      individualRating: value,
      comment: review,
      date: formattedDate,
    };

    console.log("data", data);

    try {
      await fetch(
        `http://localhost:5000/api/v1/products/${singleData?.data?.id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="my-10">
      <h1 className="text-lg text-gray-600 font-semibold border-gray-200 pb-2">
        Reviews ({singleData?.data?.reviews.length})
      </h1>
      <p className="text-gray-500 text-base mb-5">
        Get specific details about this product from customers who own it.
      </p>
      <hr />
      <div>
        <div className="my-8">
          <div className="text-sm text-gray-400 my-5">
            <Rate allowHalf onChange={setValue} value={value} /> {value} out of
            5
          </div>
          <textarea
            className="min-h-[30px] border sm:w-1/2 w-full p-2"
            rows={4}
            placeholder="maxLength is 6"
            onChange={(e) => setReview(e.target.value)}
            value={review}
          />
          <br />
          <button onClick={handleReview} className="input-button my-5">
            Submit
          </button>
        </div>
      </div>
      {singleData?.data?.reviews.map((review, i) => (
        <>
          {" "}
          <div key={i} className=" flex items-center flex-wrap gap-5">
            <Avatar icon={<BsPersonCircle className="text-3xl" />} />
            <div className="text-base text-primary font-medium font-primary">
              <p>{review.name}</p>
              <div className="text-sm text-gray-500 font-medium font-primary">
                <p>{review.date}</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400  ml-12 mb-5">
            <Rate allowHalf disabled defaultValue={review.individualRating} />{" "}
            {review.individualRating} out of 5
          </div>
          <div className="my-3 mx-12">{review.comment}</div>
          <hr className="my-5" />
        </>
      ))}
    </div>
  );
};

export default Reviews;
