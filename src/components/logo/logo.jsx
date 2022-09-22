import React from "react";
import "./logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={process.env.PUBLIC_URL + "images/logo.png"} />
      <span>KONEK</span>
    </div>
    
  );
}
