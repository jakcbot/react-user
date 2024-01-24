import axios from "axios";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuid

import { User } from "./User";

const Add: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: "", 
    name: "",
    email: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // Generate a unique id using uuid
      const newUser = { ...user, id: uuidv4() };
      
      await axios.post("http://localhost:8800/userlist", newUser);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Add New user</h1>
  
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
      <button onClick={handleClick}>Add</button>
      {error && <div>Something went wrong!</div>}
      <br />
      <Link to="/">See all users</Link>
    </div>
  );
};

export default Add;
