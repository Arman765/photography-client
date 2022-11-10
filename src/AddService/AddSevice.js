import React from "react";
import { useLoaderData } from "react-router-dom";

const AddSevice = () => {
  const services = useLoaderData();

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image = form.image.value;
    const price = form.price.value;
    const description = form.description.value;
    const count = services.length + 1;
    console.log(count);
    const newService = {
      service_id: count.toString(),
      title,
      img: image,
      price,
      description,
    };

    fetch("http://localhost:5000/services/allservices", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleAddService} className="card-body">
        <h1 className="text-5xl font-bold text-center">Add New Service!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="tilte"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Link</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="image link"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            name="description"
            placeholder="description"
            className="input input-bordered"
          ></input>
        </div>

        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Add"></input>
        </div>
      </form>
    </div>
  );
};

export default AddSevice;
