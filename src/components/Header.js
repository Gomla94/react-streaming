import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        All Streams
      </Link>
      <div className="right menu">
        <GoogleAuth />
        <Link to="/" className="item">
          Streamy
        </Link>
      </div>
    </div>
  );
};

export default Header;
