import classNames from "classnames";
import React from "react";
import "./logo.css";

export default function Logo({ lg, className }) {
 
  return (
    <div className={classNames({className, logo: true, lg })}>
      <img src={"/images/KONEK K logo w bg.png"} />
    </div>
  );
}
