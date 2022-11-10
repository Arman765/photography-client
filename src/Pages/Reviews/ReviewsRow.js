import React from "react";

const ReviewsRow = ({ reviewEmail }) => {
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
          {/* onClick={() => handleDelete(_id)} */}
          <button className="btn btn-ghost">X</button>
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

      <td>{reviewEmail.message}</td>
    </tr>
  );
};

export default ReviewsRow;
