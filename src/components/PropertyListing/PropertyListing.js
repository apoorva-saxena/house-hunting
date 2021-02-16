import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard";
import "./PropertyListing.scss";

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  const getProperties = () => {
    fetch("api/properties", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((properties) => {
        setProperties(properties);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProperties();
  });

  return (
    <div className="PropertyListing">
      {properties.length > 0 &&
        properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
    </div>
  );
};

export default PropertyListing;
