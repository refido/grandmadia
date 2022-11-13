import React from "react";
// import { Link } from "react-router-dom";
import Icon_helper from "../asset/landing/icon_helper.png";
import Icon_grandemedia from "../asset/landing/icon_grandemedia.jpg";
import Icon_cart from "../asset/landing/icon_cart.png";

import Icon_category_alat_tulis from "../asset/landing/Icon_category_Alat_Tulis.png";
import Icon_category_Buku_Baru from "../asset/landing/Icon_category_Buku_Baru.png";
import Icon_category_Buku_Pilihan from "../asset/landing/Icon_category_Buku_Pilihan.png";
import Icon_category_Buku_Import from "../asset/landing/Icon_category_Buku_Import.png";
import Icon_category_ebook from "../asset/landing/Icon_category_ebook.png";
import Icon_category_Mainan from "../asset/landing/Icon_category_Mainan.png";
import Icon_category_Print_on_Demand from "../asset/landing/Icon_category_Print_on_Demand.png";
import Icon_category_Voucher_Gramedia_Academy_2 from "../asset/landing/Icon_category_Voucher_Gramedia_Academy_2.png";

import Cover_28 from "../asset/landing/28_cov.jpg";

import Icon_instagram from "../asset/landing/instagram.png";
import Icon_twitter from "../asset/landing/twitter.png";
import Icon_facebook from "../asset/landing/facebook.png";

const LandingPage = () => {
	return (
		<div>
			{/* <Link to="/detail">Detail</Link> */}
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

			<div className="section-header container">
				<div className="row">
					<div className="col-8">
						<div className="carousel-1"></div>
					</div>
					<div className="col-4">
						<div className="row">
							<div className="col-12">
								<div className="promo-item"></div>
							</div>
							<div className="col-12">
								<div className="promo-item mt-3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-category container mt-4">
				<div className="row">
					<div className="col-6">
						<div className="row">
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Buku_Baru} alt=""></img>
									<p className="text-center">Buku Baru Andalan</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Buku_Pilihan} alt=""></img>
									<p className="text-center">Buku Pilihan</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Buku_Import} alt=""></img>
									<p className="text-center">Buku Import</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_ebook} alt=""></img>
									<p className="text-center">E-Book & Paket Premium</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="row">
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Voucher_Gramedia_Academy_2} alt=""></img>
									<p className="text-center">Gramedia Academy</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Print_on_Demand} alt=""></img>
									<p className="text-center">Print On Demand</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_alat_tulis} alt=""></img>
									<p className="text-center">Stationery</p>
								</div>
							</div>
							<div className="col-3">
								<div className="icon text-center">
									<img src={Icon_category_Mainan} alt=""></img>
									<p className="text-center">Mainan</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="section-recomendation container my-5">
				<h2>Rekomendasi Gramedia Untukmu</h2>
				<div className="row book-list mt-3">
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt="Book Cover"></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt=""></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt=""></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt=""></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt=""></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="book-item">
							<div className="book-cover">
								<img src={Cover_28} alt=""></img>
							</div>
							<div className="book-identity">
								<p className="author p-0 mb-1">Author</p>
								<p className="title p-0 m-0">Title</p>
								<p className="price p-0 m-0">Rp.000</p>
								<p className="original-price p-0 m-0">Rp.000</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer>
				<div className="footer-1 d-flex align-items-center">
					<div className="container">
						<div className="row">
							<div className="col-6">
								<h2>Kejutan spesial dari kami hanya untukmu</h2>
							</div>
							<div className="col-6">
								<input className="email-input" type="text"></input>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-2">
					<div className="container">
						<div className="row">
							<div className="col-3">
								<p>Belanja</p>
								<ul>
									<li>Berbelanja</li>
									<li>Pembayaran</li>
									<li>Pengiriman</li>
								</ul>
							</div>
							<div className="col-3">
								<p>Tentang Gramedia</p>
								<ul>
									<li>Tentang Kami</li>
									<li>Toko Kami</li>
									<li>Kerjasama</li>
								</ul>
							</div>
							<div className="col-3">
								<p>Lainnya</p>
								<ul>
									<li>Syarat & Ketentuan</li>
									<li>Kebijakan dan Privasi</li>
									<li>Bantuan</li>
									<li>Hubungi Kami</li>
								</ul>
							</div>
							<div className="col-3">
								<p>Aplikasi Seluler Kami</p>
								<span>Download aplikasi Grandemedia.com yang tersedia di seluruh perangkat iOS dan Android</span>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-3 d-flex align-items-center">
					<div className="container">
						<div className="row d-flex align-items-center">
							<div className="col-3">
								<a className="navbar-brand" href="index.html">
									<img src={Icon_grandemedia} alt=""></img>
								</a>
							</div>
							<div className="col-6 pt-2">
								<p>Toko buku online terbesar, terlengkap dan terpercaya di Indonesia</p>
							</div>
							<div className="col-3">
								<div className="social-icon float-end">
									<a className="me-4" target="_blank" rel="noreferrer" href="https://www.instagram.com/gramedia.com">
										<img src={Icon_instagram} alt=""></img>
									</a>
									<a className="me-4" target="_blank" rel="noreferrer" href="https://twitter.com/gramediadotcom">
										<img src={Icon_twitter} alt=""></img>
									</a>
									<a className="me-4" target="_blank" rel="noreferrer" href="https://www.facebook.com/gramediacom">
										<img src={Icon_facebook} alt=""></img>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-4 text-center">© 2022 PT. Grande Media</div>
			</footer>
		</div>
	);
};

export default LandingPage;
