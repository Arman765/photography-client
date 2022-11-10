import React from "react";
import toast from "react-hot-toast";
import TailwindToaster from "../../Reviews/TailwindToaster";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.fullname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const newContact = {
      name,
      email,
      phone,
    };

    fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newContact),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        form.reset();
        toast.success("Contact information sent");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hero mt-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleContact} className="card-body">
            <h1 className="text-5xl font-bold text-center">Contact Me!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="input input-bordered"
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
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <TailwindToaster></TailwindToaster>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
