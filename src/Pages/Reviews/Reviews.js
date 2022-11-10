import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useTitle from "../../Hooks/Hooks/useTitle";
import ReviewsRow from "./ReviewsRow";
import TailwindToaster from "./TailwindToaster";

const Reviews = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [reviewsEmail, setReviewsEmail] = useState([]);
  useTitle("Reviews");

  let toastVariable = 0;

  useEffect(() => {
    // always user ase kina check korte hobe
    fetch(
      `https://sports-photographer-server-beta.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("vmtoken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviewsEmail(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete this item");
    if (proceed) {
      fetch(
        `https://sports-photographer-server-beta.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Review is deleted successfully");
            const remaining = reviewsEmail.filter((rev) => rev._id !== id);
            setReviewsEmail(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviewsEmail.length === 0 ? (
        <p className="text-5xl font-bold text-center border-8  p-12 mb-12 mt-12">
          No Reviews To Show
        </p>
      ) : (
        <div className=" w-full mt-12 mb-12">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Service</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reviewsEmail?.map((reviewEmail) => (
                <ReviewsRow
                  key={reviewEmail._id}
                  reviewEmail={reviewEmail}
                  handleDelete={handleDelete}
                  // handleStatusUpdate={handleStatusUpdate}
                ></ReviewsRow>
              ))}
              <TailwindToaster></TailwindToaster>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reviews;
