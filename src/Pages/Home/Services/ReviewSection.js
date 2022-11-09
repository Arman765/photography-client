import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext/AuthProvider";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      {user?.email ? (
        <form>
          <div className="flex ">
            <div>
              <img className="w-1/2" src={user.photoURL} alt=""></img>
            </div>
            <div>
              <p className="text-xl ml-0">{user.displayName}</p>
              <textarea
                name="message"
                className="textarea textarea-bordered h-10 w-full"
              ></textarea>
              <input className="btn" type="submit" value="Comment"></input>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <p className="text-2xl font-semibold">
            Please Login to place a review!
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
