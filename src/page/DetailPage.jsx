import "../component/detail/Detail.css";
import Navbar from "../component/landing/Navbar";
import Footer from "../component/landing/Footer";
import Recomendation from "../component/landing/Recomendation";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getDetails } from "../redux/modules/detailSlice";
import { __getStores } from "../redux/modules/storeSlice";
import { __addCartItem } from "../redux/modules/addCartSlice";

const DetailPage = () => {
	const navigate = useNavigate();
	const { details: detail, isLoading, error } = useSelector((state) => state.details);
	const { bookstores, isLoading1, error1 } = useSelector((state) => state.stores);
	const { message, isLoading2, error2 } = useSelector((state) => state.addCartItems);
	const [store, setStore] = useState({});
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(__getDetails(id));
		dispatch(__getStores(id));
	}, [dispatch, id]);

	useEffect(() => {
		if (quantity < 1) {
			setQuantity(1);
		} else if (quantity > store.stokBuku) {
			setQuantity(store.stokBuku)
		}
	}, [quantity]);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		return (
			<div className="section-recomendation container my-5">
				<h1>Error in requesting data...</h1>
			</div>
		);
	}

	if (isLoading1) {
		return <h1>Loading</h1>;
	}

	if (error1) {
		return (
			<div className="section-recomendation container my-5">
				<h1>Error in requesting data...</h1>
			</div>
		);
	}

	// if (isLoading2) {
	// 	return <h1>Loading</h1>;
	// }

	// if (error2) {
	// 	navigate("/login");
	// }

	const selectStore = (toko) => {
		document.getElementById("selected-book").style.display = "flex";
		document.getElementById("default").style.display = "none";
		setStore(toko);
		setQuantity(1);
	}

	const tokobookId = store.tokobookId;
	const jumlah = quantity;

	const addtoCart = () => {
		dispatch(__addCartItem({tokobookId, jumlah}))
	}

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
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
											</svg>
										</button>
									</div>
								</div>

								{/* Modal box */}
								<div className="modal fade" id="TokoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div className="modal-dialog modal-dialog-scrollable">
										<div className="modal-content">
											<div className="modal-header1">
												<div className="top-container">
													<button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
													<h5 className="modal-title" id="exampleModalLabel">Pilih Toko</h5>
													<div></div>
												</div>
												<div className="searchbox">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
														<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
													</svg>
													<input placeholder="Cari Toko"></input>
												</div>
												<div className="filter">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
														<path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
													</svg>
													<span>Filter</span>
												</div>
											</div>
											<div className="modal-body">
												{bookstores.map((toko) => (
													<div className="modalcard-body" key={toko.tokobookId} onClick={() => { selectStore(toko) }} data-bs-dismiss="modal" aria-label="Close">
														<img className="card-img-2" alt="" src={toko.cover}></img>
														<div className="right-modalbox">
															<div className="topbox-container">
																<div className="store-container">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" className="bi bi-shop" viewBox="0 0 16 16">
																		<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
																	</svg>
																	<span>{toko.storeName}</span>
																</div>
																<div className="store-container">
																	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
																		<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
																	</svg>
																	<span>{toko.storeLocation}</span>
																</div>
															</div>
															<div className="bottombox-container">
																<div className="card-text1">{`Rp ` + toko.price}</div>
																<div className="card-text2">{toko.stok}</div>
															</div>
														</div>
													</div>
												))}
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
						</div >

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-2">
								<div className="card-body  col-10" id="default">
									<p className="card-text">Mohon pilih format terlebih dahulu</p>
								</div>
								<div className="card-body cb1 col-10" id="selected-book" style={{ "display": "none" }}>
									<div className="cb2">Ingin beli berapa?</div>
									<div className="cb3">Jumlah Barang</div>
									<div className="cb4">
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0060ae" class="bi bi-dash-circle-fill" viewBox="0 0 16 16" onClick={() => setQuantity(quantity - 1)}>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
										</svg>
										<span>{quantity}</span>
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0060ae" className="bi bi-plus-circle-fill" viewBox="0 0 16 16" onClick={() => setQuantity(quantity + 1)}>
											<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
										</svg>
									</div>
									<hr />
									<div className="cb5">
										<span style={{ "color": "gray" }}>Subtotal</span>
										<span style={{ "color": "#0060ae" }}>{`Rp ` + store.price * quantity}</span>
									</div>
									<div className="btn-container">
										<button className="btn-cart" onClick={addtoCart}>
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0060ae" class="bi bi-handbag" viewBox="0 0 16 16">
												<path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
											</svg>
											<span>Keranjang</span>
										</button>
										<button className="btn-checkout">Beli Sekarang</button>
									</div>
								</div>
							</div>
						</div>
					</div >

					<div className="recomendation">
						<Recomendation />
					</div>
				</div >
			</div >
			<Footer />
		</div >
	);
};

export default DetailPage;
