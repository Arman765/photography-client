import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import TailwindToaster from "./TailwindToaster";

const ReviewsRow = ({ reviewEmail, handleDelete }) => {
  const {
    _id,
    service,
    profilePic,
    customerName,
    email,
    message,
    serviceName,
    price,
  } = reviewEmail;
  // const {} =reviewEmail
  console.log(reviewEmail);
  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn btn-ghost"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {profilePic && (
                <img src={profilePic} alt="Avatar Tailwind CSS Component" />
              )}
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-xl">{serviceName}</p>
        <p>Service No : {service}</p>
      </td>
      <td>{message}</td>
      <th>
        <label>
          <Link to={`/edit/${_id}`} className="btn btn-ghost">
            Edit Review
          </Link>
        </label>
      </th>
    </tr>
  );
};

export default ReviewsRow;
