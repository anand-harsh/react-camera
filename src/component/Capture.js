import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Capture = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userForm, id: new Date().getTime().toString() };

    setRecords([...records, newRecord]);
    setUserForm({
      username: "",
      phone: "",
      email: "",
      gender: "",
      address: "",
    });
  };

  const navigate = useNavigate();
  function handleClick() {
    navigate("/display");
  }

  return (
    <div class="form-box">
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="tag">Name</label>
          <input
            type="text"
            className="form-elem"
            autoComplete="off"
            value={userForm.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="phone" className="tag">Phone Number</label>
          <input
            type="text"
            className="form-elem"
            autoComplete="off"
            value={userForm.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="email" className="tag">Email</label>
          <input
            type="email"
            autoComplete="off"
            className="form-elem"
            value={userForm.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="gender" className="tag">Gender</label>
          <input
            type="text"
            autoComplete="off"
            className="form-elem"
            value={userForm.gender}
            onChange={handleInput}
            name="gender"
            id="gender"
          />
        </div>
        <div>
          <label htmlFor="address" className="tag">Address</label>
          <input
            type="text"
            className="form-elem"
            value={userForm.address}
            onChange={handleInput}
            name="address"
            id="address"
          />
        </div>

        <button type="submit" onClick={handleClick} className="submit-btn">
          Submit
        </button>
      </form>
      <div>
        {records.map((currElem) => {
          const { id, username, phone, email, gender, address } = currElem;
          return (
            <div className="showDataStyle">
              <p>{username}</p>
              <p>{phone}</p>
              <p>{email}</p>
              <p>{gender}</p>
              <p>{address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Capture;
