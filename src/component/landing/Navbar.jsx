import React, { useState } from "react";

import Icon_helper from "../../asset/landing/icon_helper.png";
import Icon_grandemedia from "../../asset/landing/icon_grandemedia.jpg";
import Icon_cart from "../../asset/landing/icon_cart.png";

import "./Landing.css";

const Navbar = () => {
	const [isActive, setActive] = useState(false);

	const toggleClass = () => {
		setActive(!isActive);
	};
	return (
		<div className="section-navbar fixed-top">
			<div className="helper">
				<div className="container text-end">
					<img className="m-0 pb-1 " src={Icon_helper} alt="" width="18px"></img>
					Bantuan
				</div>
			</div>
			<nav className="navbar navbar-expand-lg bg-white">
				<div className="container">
					<div className="navbar-brand p-0">
						<a className="navbar-brand" href="index.html">
							<img src={Icon_grandemedia} alt=""></img>
						</a>
					</div>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
						<div className="navbar-category">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item dropdown" onClick={toggleClass}>
									Kategori
								</li>
							</ul>
						</div>
						<form className="d-flex search" role="search">
							<input className="form-control search-box me-2" type="search" placeholder="Cari Produk, Judul Buku, Penulis" aria-label="Search"></input>
						</form>
						<div className="navbar-buttons">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item me-5">
									<div className="nav-link login-button">Masuk</div>
								</li>
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="index.html">
										<img src={Icon_cart} alt=""></img>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div id="category-content" className={isActive ? "d-content d-block" : "d-content d-none"}>
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
							<div class="row">
								<div class="col-6 category-item">Pertanian</div>
								<div class="col-6 category-item">Seni & Desain</div>
								<div class="col-6 category-item">Bisnis & Ekonomi</div>
								<div class="col-6 category-item">Anak-anak</div>
								<div class="col-6 category-item">Komik</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
