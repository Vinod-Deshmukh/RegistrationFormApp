import React, { useState } from "react";

function Registration() {
  const [registration, setRegistration] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    city: "",
    pin: "",
  });
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(true);
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    //console.log(name, value);
    setRegistration({ ...registration, [name]: value });
  }
  function handleSubmit(e) {
    setVisible(!visible);
    e.preventDefault();
    const displayData = {
      ...registration,
      id: new Date().getTime().toString(),
    };
    console.log(data);

    setData([...data, displayData]);
    setRegistration({
      first: "",
      last: "",
      email: "",
      phone: "",
      city: "",
      pin: "",
    });
  }
  return (
    <>
      <div style={{ display: `${visible ? "block" : "none"}` }}>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first">First Name</label>
            <input
              type="text"
              autoComplete="off"
              value={registration.first}
              onChange={handleInput}
              name="first"
              id="first"
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              autoComplete="off"
              value={registration.last}
              onChange={handleInput}
              name="last"
              id="last"
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoComplete="off"
              value={registration.email}
              onChange={handleInput}
              name="email"
              id="email"
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              autoComplete="off"
              value={registration.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              autoComplete="off"
              value={registration.city}
              onChange={handleInput}
              name="city"
              id="city"
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="pin">Pin Code</label>
            <input
              type="number"
              autoComplete="off"
              value={registration.pin}
              onChange={handleInput}
              name="pin"
              id="pin"
            ></input>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {data.map((curElement) => {
          const { first, last, email, phone, city, pin } = curElement;
          return (
            <div key={curElement.id}>
              <p>First Name {first}</p>
              <p>Last Name {last}</p>
              <p>Email {email}</p>
              <p>Phone {phone}</p>
              <p>City {city}</p>
              <p>Pin Code {pin}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Registration;
