import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { useLoaderData } from 'react-router-dom';
import ServicesCard from "./ServicesCard";

const Services = () => {
  // const services=useLoaderData()
  // console.log(services)

  const [services, setServices] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-omarabdullah99.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        return setServices(data);
      });
  }, []);
  console.log(services);
  if (loader) {
   return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-4/5 mx-auto my-10">
      {services?.map((service) => (
        <ServicesCard key={service._id} service={service}></ServicesCard>
      ))}
    </div>
  );
};

export default Services;
