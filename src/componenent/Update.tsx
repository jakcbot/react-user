import axios from "axios";
import React, { useState,ChangeEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.pathname.split("/")[2];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/userlist/${userId}`, user);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
};

  return (
    <div className="form">
      <h1>Update  </h1>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <br></br>
      <Link to="/">See all users</Link>
    </div>
  );
};

export default Update;
