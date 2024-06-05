import React, { useState } from "react";

const Contactform = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  console.log("all user details Here ", user);
  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, message } = user;

    const res = await fetch(
      "https://reactproject-55c7f-default-rtdb.firebaseio.com/reactprojects.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          message,
        }),
      }
    );

    if (res.ok) {
      // Reset the form fields after successful submission
      setUser({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <>
      <h1>Online Registration</h1>
      <form className="form" onSubmit={postData}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={user.name}
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={user.phone}
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            name="address"
            value={user.address}
            onChange={getUserData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Anything Write"
            name="message"
            value={user.message}
            onChange={getUserData}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contactform;
