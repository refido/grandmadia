import "../component/detail/Detail.css";
import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Footer from "../component/landing/Footer";
import Recomendation from "../component/landing/Recomendation";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
	const [detail, setDetail] = useState({});
	const { id } = useParams();

	const getPost = async () => {
		const { data } = await axios.get(`http://localhost:3001/books/${id}`);
		setDetail(data);
	};

	useEffect(() => {
		getPost();
	}, [id]);

	return (
		<div className="containerDetail">
			<Navbar />
			<h1 className="main-title">{detail.title}Book Detail Page</h1>
			<div className="body">
				<div className="container">
					<div className="grid grid-cols-3">
						<div className="grid grid-rows-1 grid-flow-col gap-4">
							<div className="row-span-4">
								<div className="card main-card">
									<img className="card-img-top" src={detail.cover}></img>
								</div>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-8">
								<h4>{detail.author}</h4>
								<h2>{detail.title}</h2>
                <div className="tabs-book">
                  <a className="active">Pilih Format Buku</a>
                  <a>Deskripsi Buku</a>
                  <a>Detail Buku</a>
                </div>
                <div className="card-format col-10">
									<p className="card-text-format">SOFT COVER</p>
									<p className="card-text-start">mulai dari</p>
									<p className="card-text-prices">{`Rp. ` + detail.newPrice}</p>
								</div>
								<h3 className="title-desc">Deskripsi Buku</h3>
								<p className="desc">{detail.description}</p>
							</div>
							<div className="detailPage">
								<h3>Detail</h3>
								<table class="table table-borderless">
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

					{/* end grid 3 */}
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
