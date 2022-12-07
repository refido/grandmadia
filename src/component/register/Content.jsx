import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon_facebook from "../../asset/login/Facebook_icon.svg.png";
import Icon_google from "../../asset/login/Google__G__Logo.svg.png";

const Content = () => {
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const createAccount = async () => {
		try {
			await axios.post("https://grandemedia-clone-server.herokuapp.com/accounts", { name, email, password });
			setName("");
			setEmail("");
			setPassword("");
			navigate("/cart");
		} catch (e) {
			console.log(e);
		}
	};
	const handleChangeName = (event) => {
		setName(event.target.value);
	};
	const handleChangeEmail = (event) => {
		setEmail(event.target.value);
	};
	const handleChangePassword = (event) => {
		setPassword(event.target.value);
	};
	const handleRegister = (event) => {
		event.preventDefault(); // prevent reloading while submitting
		if (!name && email && password) return;
		createAccount();
	};
	return (
		<div className="section-header container">
			<div className="row">
				<h1 className="text-primary">Daftar</h1>
				<div className="col-5 text-center">
					<div className="form-floating mb-3">
						<input type="nama" className="form-control" id="floatingInput" placeholder="Nama Lengkap" value={name} onChange={handleChangeName}></input>
						<label for="floatingInput">Nama Lengkap</label>
					</div>
					<div className="form-floating mb-3">
						<input type="email" className="form-control" id="floatingInput" placeholder="Email" value={email} onChange={handleChangeEmail}></input>
						<label for="floatingInput">Email</label>
					</div>
					<div className="form-floating mb-4">
						<input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handleChangePassword}></input>
						<label for="floatingPassword">Password</label>
					</div>
					<div className="form-check mb-4 text-start text-primary">
						<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
						<label className="form-check-label" for="flexCheckDefault">
							Dengan pembuatan akun, Anda menyetujui <u>Syarat & Ketentuan</u> serta <u>Kebijakan Privasi</u> Gramedia.com
						</label>
					</div>
					<button type="button" className="btn btn-light w-100 mb-4 text-primary" onClick={handleRegister}>
						Daftar
					</button>
					<p>
						Sudah Mendaftar? <a href="/login">Masuk</a>
					</p>
				</div>
				<div className="col-2 text-center" style={{ width: "55px", marginLeft: "50px", marginRight: "50px", color: "GrayText" }}>
					<div className="vr" style={{ height: "150px" }}></div>
					atau
					<div className="vr" style={{ height: "150px" }}></div>
				</div>
				<div className="col-5 text-center">
					<div>
						<button type="button" className="btn border border-dark w-100 mb-4 text-primary">
							<img src={Icon_facebook} alt="" style={{ width: "30px", height: "30px", marginRight: "10px" }}></img>
							Masuk dengan Facebook
						</button>
						<button type="button" className="btn border border-dark w-100 mb-4 text-primary">
							<img src={Icon_google} alt="" style={{ width: "30px", height: "30px", marginRight: "10px" }}></img>
							Masuk dengan Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
