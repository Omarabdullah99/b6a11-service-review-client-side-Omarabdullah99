import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import HomeCart from "./HomeCart";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-omarabdullah99.vercel.app/serviceshome"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <div>
      <div className="my-10">
        <Banner></Banner>
      </div>

      <h1 className="text-3xl text-center font-bold tracking-wide text-blue-600 ">
        Here is my Services.You can visti it
      </h1>
      <Link to="/services">
        {" "}
        <button className="btn btn-outline btn-primary mt-5 ml-10 ">
          See All Services
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <HomeCart key={service._id} service={service}></HomeCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
