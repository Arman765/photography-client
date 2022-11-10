import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext/AuthProvider";
import useTitle from "../../Hooks/Hooks/useTitle";

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  useTitle("Login");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const currentUser = {
          email: user.email,
        };

        fetch("https://sports-photographer-server-beta.vercel.app/jwt", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(currentUser),
        }).then((res) =>
          res.json().then((data) => {
            console.log(data);
            localStorage.setItem("vmtoken", data.token);
          })
        );

        alert("logged in Successfully");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;

        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
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
          <form onSubmit={handleLogin} className="card-body">
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
                value="Login"
              ></input>
            </div>
          </form>
          <div className="flex justify-center mb-3">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-wide btn-primary "
            >
              Google
            </button>
          </div>
          <div className="text-center mb-5">
            New to{" "}
            <span className=" font-semibold text-green-500">Vision Maker</span>{" "}
            ?
            <Link to="/signup" className=" font-bold text-blue-700">
              {" "}
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
