import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const ReviewSection = ({ serviceDetails }) => {
  const { _id, service_id, title, img, price, description } = serviceDetails;
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const name = user?.displayName;
    const profilePic = user?.photoURL;
    const email = user?.email || "unregistered";
    const review = {
      service: _id,
      serviceName: title,
      price,
      customerName: name,
      email,
      profilePic,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Review placed");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [_id]);

  return (
    <div>
      {user?.email ? (
        <div>
          <div>
            <form onSubmit={handleReview}>
              <div className="flex mb-10">
                <div>
                  <img
                    className="w-1/2 rounded-3xl"
                    src={user.photoURL}
                    alt=""
                  ></img>
                </div>
                <div>
                  <p className="text-xl ml-0">{user.displayName}</p>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered h-10 w-full mt-2"
                  ></textarea>
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Comment"
                  ></input>
                </div>
              </div>
              <hr className="mb-10"></hr>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-semibold border-4 p-6 ">
            Please Login to place a review!{" "}
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </p>
        </div>
      )}

      <div className="mt-12">
        {reviews.map((review) => {
          return (
            <div className="mb-10" key={review._id}>
              <div className="flex ">
                <div>
                  <img
                    className="w-1/2 rounded-3xl"
                    src={review.profilePic}
                    alt=""
                  ></img>
                </div>
                <div>
                  <p className="text-xl ml-0">{review.customerName}</p>

                  <p>{review.message}</p>
                </div>
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewSection;
