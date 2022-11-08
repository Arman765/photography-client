import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <p className="text-3xl mr-6 py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
                value="Login"
              ></input>
            </div>
            <div className="text-center">
              New to{" "}
              <span className=" font-semibold text-green-500">
                Vision Maker
              </span>{" "}
              ?
              <Link to="/signup" className=" font-bold text-blue-700">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
