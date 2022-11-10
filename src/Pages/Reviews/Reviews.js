import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import ReviewsRow from "./ReviewsRow";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [reviewsEmail, setReviewsEmail] = useState([]);

  useEffect(() => {
    // always user ase kina check korte hobe
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviewsEmail(data);
      });
  }, [user?.email]);

  return (
    <div>
      <div className=" w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviewsEmail.map((reviewEmail) => (
              <ReviewsRow
                key={reviewEmail._id}
                reviewEmail={reviewEmail}
                // handleDelete={handleDelete}
                // handleStatusUpdate={handleStatusUpdate}
              ></ReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
