import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useTitle from "../../Hooks/Hooks/useTitle";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  useTitle("SignUp");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const img = form.image.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUser(name, img);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdateUser = (name, img) => {
    const profile = {
      displayName: name,
      photoURL: img,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <p className="text-3xl mr-6 py-6">
            Login into the website to get all the features. There is something
            catchy waiting for you.So to get it login into the website
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Register!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ImageURL</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="imageURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign Up"
              ></input>
            </div>
            <div className="text-center">
              Already have an account ?
              <Link to="/login" className=" font-bold text-blue-700">
                {" "}
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
