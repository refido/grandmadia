import React from "react";

import Icon_helper from "../../asset/landing/icon_helper.png";
import Icon_grandemedia from "../../asset/landing/icon_grandemedia.jpg";
import Icon_cart from "../../asset/landing/icon_cart.png";

const Navbar = () => {
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
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Kategori
									</a>
								</li>
							</ul>
						</div>
						<form className="d-flex search" role="search">
							<input className="form-control search-box me-2" type="search" placeholder="Cari Produk, Judul Buku, Penulis" aria-label="Search"></input>
						</form>
						<div className="navbar-buttons">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item me-5">
									<a className="nav-link login-button active" aria-current="page" href="index.html">
										Masuk
									</a>
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
		</div>
	);
};

export default Navbar;
