import "../component/detail/Detail.css";
import Navbar from "../component/landing/Navbar";
import Footer from "../component/landing/Footer";
import Recomendation from "../component/landing/Recomendation";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import Popup from 'reactjs-popup';

const DetailPage = () => {
	const [detail, setDetail] = useState({});
	const { id } = useParams();

	const getPost = async () => {
		const { data } = await axios.get(`https://grandmadia-api.azurewebsites.net/books/${id}`);
		setDetail(data);
	};

	useEffect(() => {
		getPost();
		// console.log('getpost');
	}, []);

	const handleClick = () => {
		createOrder();
	};
	const navigate = useNavigate();
	const createOrder = async () => {
		try {
			await axios.post("https://grandemedia-clone-server.herokuapp.com/orders", { title: detail.title, weight: detail.berat, price: detail.newPrice, cover: detail.cover, count: 1 });
			navigate("/cart");
		} catch (e) {
			console.log(e);
		}
	};

	console.log(detail, 'mk');

	return (
		<div className="containerDetail">
			<Navbar />
			<div className="body">
				<div className="container">
					<div className="grid grid-cols-3">
						<div className="grid grid-rows-1 grid-flow-col gap-4">
							<div className="row-span-4">
								<div className="card main-card">
									<img className="card-img-top" alt="" src={detail.cover}></img>
								</div>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4">
							<div className="row-span-8">
								<h4>{detail.author}</h4>
								<h2>{detail.title}</h2>
								<div className="tabs-book">
									<a href=" " className="active">Pilih Format Buku</a>
									<a href=" ">Deskripsi Buku</a>
									<a href=" ">Detail Buku</a>
								</div>

								{/* <Link to={'/cart'} style={{ textDecoration: "none" }}> */}
								<div className="col-10">
									<h5 className="formatbuku-text">Pilih format Buku yang Tersedia</h5>
									<div className="card-format">
										<div>
											<p className="card-text-format">SOFT COVER</p>
											<p className="card-text-start">mulai dari</p>
											<p className="card-text-prices">{`Rp ` + detail.price}</p>
										</div>
										<button className="modal-button" data-bs-toggle="modal" data-bs-target="#TokoModal">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
											</svg>
										</button>
									</div>
								</div>

								{/* Modal box */}
								<div className="modal fade" id="TokoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog modal-dialog-scrollable">
										<div className="modal-content">
											<div className="modal-header1">
												<div className="top-container">
													<button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													<h5 className="modal-title" id="exampleModalLabel">Pilih Toko</h5>
													<div></div>
												</div>
												<div className="searchbox">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
														<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
													</svg>
													<input placeholder="Cari Toko"></input>
												</div>
												<div className="filter">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
														<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
													</svg>
													<span>Filter</span>
												</div>
											</div>
											<div className="modal-body">
												<div className="modalcard-body" onClick={handleClick}>
													<img className="card-img-2" alt="" src={detail.cover}></img>
													<div className="right-modalbox">
														<div className="topbox-container">
															<div className="store-container">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" class="bi bi-shop" viewBox="0 0 16 16">
																	<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
																</svg>
																<span>{detail.storeName}</span>
															</div>
															<div className="store-container">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
																	<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
																</svg>
																<span>{detail.storeLocation}</span>
															</div>
														</div>
														<div className="bottombox-container">
															<div className="card-text1">{`Rp ` + detail.price}</div>
															<div className="card-text2">{detail.stok}</div>
														</div>
													</div>
												</div>
												<div className="modalcard-body" onClick={handleClick}>
													<img className="card-img-2" alt="" src="https://cdn.gramedia.com/uploads/items/9786020523316_Melangkah_UV_Spot_R4-1__w82_hauto.jpg"></img>
													<div className="right-modalbox">
														<div className="topbox-container">
															<div className="store-container">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" class="bi bi-shop" viewBox="0 0 16 16">
																	<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
																</svg>
																<span>Matraman</span>
															</div>
															<div className="store-container">
																<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
																	<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
																</svg>
																<span>Jakarta Timur</span>
															</div>
														</div>
														<div className="bottombox-container">
															<div className="card-text1">Rp 32.000</div>
															<div className="card-text2">Stok Tersedia</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* </Link> */}

								<h3 className="title-desc">Deskripsi Buku</h3>
								<p className="desc">{detail.description}</p>
							</div>
							<div className="detailPage">
								<h3>Detail</h3>
								<table className="table table-borderless">
									<thead>
										<tr>
											<th>Jumlah Halaman</th>
											<th>Penerbit</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>{detail.jumlahHalaman}</td>
											<td>{detail.penerbit}</td>
										</tr>
										<tr>
											<th>Tanggal Terbit</th>
											<th>Berat</th>
										</tr>
										<tr>
											<td>{detail.tanggalTerbit}</td>
											<td>{detail.berat}</td>
										</tr>
										<tr>
											<th>ISBN</th>
											<th>Lebar</th>
										</tr>
										<tr>
											<td>{detail.isbn}</td>
											<td>{detail.panjang}</td>
										</tr>
										<tr>
											<th>Bahasa</th>
											<th>Panjang</th>
										</tr>
										<tr>
											<td>{detail.bahasa}</td>
											<td>{detail.panjang}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-2">
								<div className="card-body  col-10">
									<p className="card-text">Mohon pilih format terlebih dahulu</p>
								</div>
							</div>
						</div>
					</div>

					<div className="recomendation">
						<Recomendation />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default DetailPage;
