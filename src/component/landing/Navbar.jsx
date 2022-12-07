import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Icon_helper from "../../asset/landing/icon_helper.png";
import Icon_grandemedia from "../../asset/landing/icon_grandemedia.jpg";
import Icon_cart from "../../asset/landing/icon_cart.png";

import "./Landing.css";

const Navbar = () => {
	const [Input, setInput] = useState("");

	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	let navigate = useNavigate();
	const submitHandler = (event) => {
		event.preventDefault();
		navigate("/search", { state: { query: Input } });
	};

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <div className="section-navbar sticky-top">
      <div className="helper">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.gramedia.com/help"
        >
          <div className="container text-end">
            <img
              className="m-0 pb-1 "
              src={Icon_helper}
              alt=""
              width="18px"
            ></img>
            Bantuan
          </div>
        </a>
      </div>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <div className="navbar-brand p-0">
            <Link to={`/`} style={{ textDecoration: "none" }}>
              <div className="navbar-brand">
                <img src={Icon_grandemedia} alt=""></img>
              </div>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div className="navbar-category">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown" onClick={toggleClass}>
                  Kategori
                </li>
              </ul>
            </div>
            <form
              className="d-flex search"
              role="search"
              onSubmit={submitHandler}
            >
              <input
                className="form-control search-box me-2"
                type="search"
                placeholder="Cari Produk, Judul Buku, Penulis"
                value={Input}
                onChange={onInputChange}
                aria-label="Search"
              ></input>
            </form>
            <div className="navbar-buttons">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item me-5">
                  <Link to={`login`} style={{ textDecoration: "none" }}>
                    <div className="nav-link login-button">Masuk</div>
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    <img src={Icon_cart} alt=""></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="category-content"
        className={isActive ? "d-content d-block" : "d-content d-none"}
      >
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ul>
                <li>Mega Best Seller</li>
                <li>Buku</li>
                <li>ETICKET</li>
                <li>Stationery, Sekolah & Kantor</li>
                <li>Ebook</li>
                <li>Majalah</li>
                <li>Fashion & Aksesoris</li>
                <li>Teknologi</li>
                <li>Mainan & Hobi</li>
                <li>Makanan & Minuman</li>
                <li>Olahraga</li>
                <li>Peralatan Kesehatan</li>
              </ul>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 category-item">Pertanian</div>
                <div className="col-6 category-item">Seni & Desain</div>
                <div className="col-6 category-item">Bisnis & Ekonomi</div>
                <div className="col-6 category-item">Anak-anak</div>
                <div className="col-6 category-item">Komik</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
