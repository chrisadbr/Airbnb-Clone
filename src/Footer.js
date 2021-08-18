import React from "react";
import "./Footer.css";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; {date} Airbnb clone! No rights - this is a demo</p>
      <p>Privarcy . Terms .Sitemap . Company Details</p>
    </div>
  );
}

export default Footer;
