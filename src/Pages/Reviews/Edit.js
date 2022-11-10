import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Edit = () => {
  const storedUser = useLoaderData();
  const [user, setUser] = useState(storedUser);
  console.log(storedUser);
  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`http://localhost:5000/reviews/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    console.log(field, value);
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <p className="text-xl ml-0 w-1/2">{storedUser.customerName}</p>
          <textarea
            type="text"
            onBlur={handleInputBlur}
            name="message"
            className="textarea textarea-bordered h-10 w-full mt-2"
            defaultValue={storedUser.message}
          ></textarea>
          <button type="submit" className="btn ">
            Update
          </button>
        </div>

        <hr className="mb-10"></hr>
      </form>
    </div>
  );
};

export default Edit;
