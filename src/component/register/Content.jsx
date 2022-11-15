import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Content = () => {
    const navigate=useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createAccount = async () => {
        try {
            await axios.post('http://localhost:3001/accounts', { name, email, password })
            setName('')
            setEmail('')
            setPassword('')
            navigate('/cart')
        } catch (e) {
            console.log(e)
        }
    }
    const handleChangeName = event => {
        setName(event.target.value)
    }
    const handleChangeEmail = event => {
        setEmail(event.target.value)
    }
    const handleChangePassword = event => {
        setPassword(event.target.value)
    }
    const handleRegister = event => {
        event.preventDefault() // prevent reloading while submitting
        if (!name && email && password) return
        createAccount()
    }
    return (
        <div className="section-header container">
            <div className="row">
                <h1>Daftar</h1>
                <div className="col-6 text-center">
                    <div class="form-floating mb-3">
                        <input
                            type="nama"
                            class="form-control"
                            id="floatingInput"
                            placeholder="Nama Lengkap"
                            value={name}
                            onChange={handleChangeName}>
                        </input>
                        <label for="floatingInput">Nama Lengkap</label>
                    </div>
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
                    {/* <div class="list-group mx-0 w-auto">
                        <label class="list-group-item d-flex gap-2">
                            <input class="form-check-input" type="checkbox">
                                <span>
                                    Dengan pembuatan akun, Anda menyetujui Syarat & Ketentuan serta Kebijakan Privasi Gramedia.com
                                </span>
                            </input>
                        </label>
                    </div> */}
                    <button type="button" class="btn btn-secondary w-100 mb-4" onClick={handleRegister}>Daftar</button>
                    <p>Sudah Mendaftar? <a href="/login">Masuk</a></p>
                </div>
                <div className="col-6">
                    <div className="carousel-1"></div>
                </div>
            </div>
        </div >
    );
};

export default Content;