import React from "react";

const Content = () => {
    return (
        <div className="section-header container">
            <div className="row">
                <h1>Daftar</h1>
                <div className="col-6 text-center">
                    <div class="form-floating mb-3">
                        <input type="nama" class="form-control" id="floatingInput" placeholder="Nama Lengkap"></input>
                        <label for="floatingInput">Nama Lengkap</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
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
                    <button type="button" class="btn btn-secondary w-100 mb-4">Daftar</button>
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