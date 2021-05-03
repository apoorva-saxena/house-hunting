import React, { useEffect, useState } from "react";
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import queryString from 'query-string'

const App = () => {
    const [properties, setProperties] = useState([]);
    const [filter, setFilter] = useState({
        price: ''
    })
   
    const handleChangeDropdown = (value, label) => {
        console.log(value, label)
        filter[label] = value
        setFilter(filter)
    }
    const getProperties = (query) => {
        fetch(query, {
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
        const params = queryString.stringify(filter)
        const query = params.length > 0 ? `/api/properties?${params}` : '/api/properties'
        getProperties(query);
      },[]);
    return (
        <div className="App">
            <Header/>
            <main>
                <SortAndFilter handleChangeDropdown={handleChangeDropdown}/>
                <PropertyListing properties={properties}/>
            </main>
        </div>
    );
};

export default App;
