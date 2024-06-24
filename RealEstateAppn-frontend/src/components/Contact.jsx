import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="title">
        <h1 style={{ textAlign: "center" }}>Contact Us</h1>
      </div>
      <div className="content">
        <h2>Head Office Address</h2>
        <span>
          <b>Pune</b>: RealEstate.com, 7th Floor, IT Knowledge Park, Blueridge Hinjewadi Phase 1, Wakad, Pune, Maharashtra 400093
          <br />
          Tel: 1860-123-4567
        </span>
        <br />
        <span>
          <b>Bangalore</b>: RealEstate.com, Prestige Meridian Tower, 5th Floor, 30 Mahatma Gandhi Road, Bengaluru, Karnataka 560001
          <br />
          Tel: 1860-123-4568
        </span>
        <br />
        <span>
          <b>Delhi</b>: RealEstate.com, Building No. 10, 2nd Floor, DLF Cyber City, Phase II, Gurugram, Haryana 122002
          <br />
          Tel: 1860-123-4569
        </span>
        <br />
        <br />
        <span>Email: contact@realestate.com</span>
      </div>
    </div>
  );
};

export default Contact;
