import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon_facebook from "../../asset/login/Facebook_icon.svg.png";
import Icon_google from "../../asset/login/Google__G__Logo.svg.png";
import Icon_myvalue from "../../asset/login/myvalue.png";


const Content = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const getAccount = async () => {
        try {
            await axios.get('http://localhost:3001/accounts', { email, password })
            setEmail(this.email)
            setPassword(this.password)            
        } catch (e) {
            console.log(e)
        }
    }
    const handleChangeEmail = event => {
        setEmail(event.target.value)
    }
    const handleChangePassword = event => {
        setPassword(event.target.value)
    }
    const handleLogin = event => {
        event.preventDefault() // prevent reloading while submitting
        if (!email && password) return
        getAccount()
        navigate('/cart')
    }
    return (
        <div className="section-header container">
            <div className="row">
                <h1 className="text-primary">Masuk</h1>
                <div className="col-5 text-center">
                    <div class="form-floating mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Email"
                            value={email}
                            onChange={handleChangeEmail}>
                        </input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input
                            type="password"
                            class="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            value={password}
                            onChange={handleChangePassword}>
                        </input>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-4"><a href="/">Lupa kata sandi?</a></div>
                    <button type="button" class="btn btn-light w-100 mb-4 text-primary" onClick={handleLogin}>Masuk</button>
                    <p>Belum Mendaftar? <a href="/register">Daftar</a></p>
                </div>
                <div className="col-2 text-center" style={{ width: "55px", marginLeft: "50px", marginRight: "50px", color: "GrayText" }}>
                    <div class="vr" style={{ height: "150px" }}></div>
                    atau
                    <div class="vr" style={{ height: "150px" }}></div>
                </div>
                <div className="col-5 text-center">
                    <div>
                        <button type="button" class="btn border border-dark w-100 mb-4 text-primary">
                            <img src={Icon_facebook} alt="" style={{ width: "30px", height: "30px", marginRight: "10px" }}></img>
                            Masuk dengan Facebook
                        </button>
                        <button type="button" class="btn border border-dark w-100 mb-4 text-primary">
                            <img src={Icon_google} alt="" style={{ width: "30px", height: "30px", marginRight: "10px" }}></img>
                            Masuk dengan Google
                        </button>
                    </div>
                    <div className="row" style={{ marginTop: "5px", marginBottom: "25px" }}>
                        <div style={{ width: "100%", height: "15px", borderBottom: "1px solid grey", textAlign: "center" }}>
                            <span style={{ fontSize: "10px", backgroundColor: "#FFFFFF", padding: "0 10px" }}>
                                Akun Lainnya
                            </span>
                        </div>
                    </div>
                    <div>
                        <button type="button" class="btn border border-dark w-100 mb-4 text-primary">
                            <img src={Icon_myvalue} alt="" style={{ width: "30px", height: "30px", marginRight: "10px" }}></img>
                            Masuk dengan MyValue
                        </button>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Content;