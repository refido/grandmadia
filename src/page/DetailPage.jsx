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
									<img className="card-img-top" src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"></img>
								</div>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-8">
								<h2>{detail.title}</h2>
								{/* <hr></hr> */}
								<h4>Description</h4>
								<p className="desc">{detail.description}</p>
							</div>
							<div className="detailPage">
								<h4>Detail</h4>
								<table class="table table-borderless">
									<thead>
										<tr>
											<th>Jumlah Halaman</th>
											<th>Penerbit</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Otto</td>
											<td>{detail.author}</td>
										</tr>
										<tr>
											<th>Tanggal Terbit</th>
											<th>Berat</th>
										</tr>
										<tr>
											<td>ISBN</td>
											<td>Lebar</td>
										</tr>
										<tr>
											<th>ISBN</th>
											<th>Lebar</th>
										</tr>
										<tr>
											<td>Bahasa</td>
											<td>Panjang</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="grid grid-rows-1 grid-flow-col gap-4 ">
							<div className="row-span-2">
								<div className="card-body  col-10 border border-dark">
									<h5 className="card-title"> Information </h5>
									<p className="card-text">{detail.information}</p>
								</div>
							</div>
						</div>
					</div>

					{/* end grid 3 */}

					{/* start grid 5 */}
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
