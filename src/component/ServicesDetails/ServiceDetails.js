import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import AllReview from "../AllReview/AllReview";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const notify = () =>
    toast.success("review added", {
      position: toast.POSITION.TOP_CENTER,
    });
  const data = useLoaderData();
  const { title, _id, img, price, description } = data;
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      ReviwerName: user?.displayName,
      ReviewrImage: user?.photoURL,
      email,
      phone,
      message,
      timeset: date + time,
    };
    fetch(
      "https://b6a11-service-review-server-side-omarabdullah99.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // alert("Review  placed");
          notify();
          setUpdate(!update);
          form.reset();
        }
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-omarabdullah99.vercel.app/reviews/${data?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, [data?._id, update]);

  return (
    <div className="w-5/6 mx-auto">
      <div className="reviews">
        {users?.map((userdata) => (
          <AllReview key={userdata._id} userdata={userdata}></AllReview>
        ))}
      </div>
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <img src={img} alt="" className="w-80 my-5" />
        <p className="text-xl font-bold ">{price} </p>
        <p className="my-5 text-justify">{description} </p>
      </div>
      {user?.email ? (
        <div className="mb-10">
          <form onSubmit={handlePlaceReview}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input
                name="phone"
                type="text"
                placeholder="Your Phone"
                className="input input-ghost w-full  input-bordered"
                required
              />
              <input
                name="email"
                type="text"
                placeholder="Your email"
                defaultValue={user?.email}
                className="input input-ghost w-full  input-bordered"
                readOnly
              />
            </div>
            <textarea
              name="message"
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Your Message"
              required
            />

            <input className="btn" type="submit" value="Place Your Review" />
          </form>
        </div>
      ) : (
        <Link to="/login">
          <p className="text-xl font-bold m">Please login to add a review</p>
        </Link>
      )}
      <ToastContainer />
    </div>
  );
};

export default ServiceDetails;
