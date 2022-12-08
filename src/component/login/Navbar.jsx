import React from "react";
import Icon_grandemedia from "../../asset/login/gramedia-icon-2.png";

const Navbar = () => {
  return (
    <div className="section-navbar sticky-top">
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <div className="navbar-brand p-0">
          <a className="navbar-brand" href="/">
            <img src={Icon_grandemedia} alt=""></img>
          </a>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
