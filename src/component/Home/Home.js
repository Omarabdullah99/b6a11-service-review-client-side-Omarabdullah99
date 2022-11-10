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

      <h1 className="text-3xl text-center font-bold tracking-wide italic text-[tomato]">
       Feeling hungry!!! Try some new taste...
      </h1>
      <Link to="/services">
        {" "}
        <button className="btn btn-outline btn-primary mt-5 ml-10 ">
          See All Menu
        </button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <HomeCart key={service._id} service={service}></HomeCart>
        ))}
      </div>
      <div className="text-center my-5">
      <h1 className="text-3xl font-bold text-[tomato]">Hot Offer!!! Save 50TK...</h1>
      <div className="flex items-center flex-col md:flex-row gap-3 justify-center my-5">
      <div>
      <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-02-768x512.jpg.webp" alt="" className="w-80 rounded" />
      <h1 className="text-xl font-bold">Kacchi Biriyani (Mutton Biriyani)</h1>
      <p className="text-3xl text-[tomato] font-bold">Now  200TK</p>
      </div>
     <div>
     <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-10-1024x683.jpg.webp" alt="" className="w-80 rounded" />
     <h1 className="text-xl font-bold">Haleem (Mixed Lentil Soup and Meat)</h1>
      <p className="text-3xl text-[tomato] font-bold">Now  100TK</p>
     </div>
      </div>
      </div>

      <div className="my-10 text-center">
      <h1 className="text-3xl font-bold text-[tomato]">Popular Menu</h1>
      <div className="flex items-center flex-col md:flex-row gap-3 justify-center my-5">
      <div>
      <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-01-768x512.jpg.webp" alt="" className="w-80 rounded" />
      <h1 className="text-xl font-bold">Shorshe Ilish <br /> (Hilsa Fish with Mustard Curry)</h1>
      </div>
      <div>
      <img src="https://nomadparadise.com/wp-content/uploads/2021/03/bangladeshi-food-04-768x512.jpg.webp" alt="" className="w-80 rounded"  />
      <h1 className="text-xl font-bold">Bhuna Khichuri with Dim Bhaji <br /> (Yellow Rice with Omelette)</h1>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
