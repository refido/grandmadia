import React from "react";

import Icon_grandemedia from "../../asset/landing/icon_grandemedia.jpg";
import Icon_playstore from "../../asset/landing/play-store.png";
import Icon_appstore from "../../asset/landing/app-store.png";
import Icon_instagram from "../../asset/landing/instagram.png";
import Icon_twitter from "../../asset/landing/twitter.png";
import Icon_facebook from "../../asset/landing/facebook.png";

import "./Landing.css";

const Footer = () => {
	return (
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
							<div className="row download-icon">
								<div className="col-6">
									<a className="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.gramedia.retail&pli=1">
										<img src={Icon_playstore} alt="Play Store"></img>
									</a>
								</div>
								<div className="col-6">
									<a target="_blank" rel="noreferrer" href="https://itunes.apple.com/id/app/gramedia/id1422591223?mt=8">
										<img src={Icon_appstore} alt="App Store"></img>
									</a>
								</div>
							</div>
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
	);
};

export default Footer;
