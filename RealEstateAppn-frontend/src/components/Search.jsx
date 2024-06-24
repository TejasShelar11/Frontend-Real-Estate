import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Search() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = async () => {
    try {
      let response;
      if (keyword && !category && !address && !price) {
        response = await axios.get(`http://localhost:8080/prodName/${keyword}`);
      } else if (!keyword && category && !address && !price) {
        response = await axios.get(`http://localhost:8080/category/${category}`);
      } else if (!keyword && !category && address && !price) {
        response = await axios.get(`http://localhost:8080/products/${address}`);
      } else if (!keyword && !category && !address && price) {
        response = await axios.get(`http://localhost:8080/price/${price}`);
      } else if (address && category && price) {
        response = await axios.get(`http://localhost:8080/prods/${address}/${category}/${price}`);
      } else {
        console.error("Invalid search criteria");
        return;
      }

      navigate('/searchpage', { state: { results: response.data } });
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  return (


    <div className="container-fluid mb-5" style={{ padding: '35px' }}>    <div className="container">
        <div className="row g-2">
            <div className="col-md-10">
                <div className="row g-2">
                    <div className="col-md-4">
                        <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" onClick={handleSearch} />
                    </div>
                    <div className="col-md-4">
                        <select className="form-select border-0 py-3"  value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option selected>Property Type</option>
                            <option value="1">Apartments</option>
                            <option value="2">Villa</option>
                            <option value="3">House</option>
                            <option value="4">Office</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        <select className="form-select border-0 py-3" value={address} onChange={(e) => setAddress(e.target.value)}>
                            <option selected>Location</option>
                            <option value="1">Pune</option>
                            <option value="2">Bangalore</option>
                            <option value="3">Mumbai</option>
                            <option value="4">Hyderabad</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-md-2">
                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
            </div>
        </div>
    </div>
</div>



  );
}

export default Search;
