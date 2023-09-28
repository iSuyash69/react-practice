import { useState } from "react";
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const AddPage = () => {
  const data = {
    name: '',
    college: '',
    address: ''
  };

  const [inputData, setInputData] = useState(data);

  const handleData = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("")
  }

  return (
    <div className="add-page-main-container">
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={inputData.name} onChange={handleData} />
      </div>
      <div>
        <label>College: </label>
        <input type="text" name="college" value={inputData.college} onChange={handleData} />
      </div>
      <div>
        <label>Address: </label>
        <input type="text" name="address" value={inputData.address} onChange={handleData} />
      </div>
      <div>
        <button onClick={handleSubmit}>
          <Link to="/">Submit</Link>
        </button>
      </div>
    </div>
  );
}

export default AddPage;

