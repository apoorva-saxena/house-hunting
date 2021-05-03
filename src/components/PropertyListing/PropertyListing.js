import React, { useEffect, useState } from "react";
import PropertyCard from "../PropertyCard";
import "./PropertyListing.scss";

const PropertyListing = ({properties}) => {
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
