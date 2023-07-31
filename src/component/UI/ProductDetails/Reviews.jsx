import { Avatar, Rate } from "antd";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { toast } from "react-toastify";

const Reviews = ({ singleData }) => {
  const { data: session } = useSession();
  // console.log("session user", session?.user?.name);

  const [review, setReview] = useState("");
  const [value, setValue] = useState(3);

  const handleReview = async () => {
    // console.log(review);
    // console.log(value);
    const data = {
      name: session?.user?.name,
      individualRating: value,
      comment: review,
    };

    console.log("data", data);

    try {
      await fetch(
        `https://pc-wizard-auth-service.vercel.app/api/v1/products/${singleData?.data?.id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      toast.success("Review submitted successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Review days count
  const calculateDaysAgo = (date) => {
    const currentDate = new Date();
    const reviewDate = new Date(date);
    const timeDifference = currentDate.getTime() - reviewDate.getTime();

    // Calculate days, hours, and minutes
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));

    if (daysAgo >= 1) {
      return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
    } else if (hoursAgo >= 1) {
      return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
    } else if (minutesAgo >= 1) {
      return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
    } else {
      return "Less than a minute ago";
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
        <div key={i}>
          {" "}
          <div className=" flex  flex-wrap gap-5">
            <Avatar icon={<BsPersonCircle className="text-3xl" />} />
            <div className="text-base text-primary font-medium font-primary">
              <p>{review.name}</p>
              <div className="text-sm text-gray-500 font-medium font-primary mb-3">
                <p>
                  {(() => {
                    try {
                      const createdAtDate = new Date(review?.date);
                      return format(createdAtDate, "MMM dd, yyyy - hh:mm a");
                    } catch (error) {
                      return "Review Time Not Found";
                    }
                  })()}
                </p>
              </div>
              <div className="text-sm text-gray-500 font-medium font-primary mb-3">
                <p>{calculateDaysAgo(review?.date)}</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-400  ml-12 mb-5">
            <Rate allowHalf disabled defaultValue={review.individualRating} />{" "}
            {review.individualRating} out of 5
          </div>
          <div className="my-3 mx-12">{review.comment}</div>
          <hr className="my-5" />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
