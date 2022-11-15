import React from "react";

const Content = () => {
    return (
        <div className="section-header container">
            <div className="row">
                <h1>Masuk</h1>
                <div className="col-6 text-center">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-4"><a href="/">Lupa kata sandi?</a></div>
                    <button type="button" class="btn btn-secondary w-100 mb-4">Masuk</button>
                    <p>Belum Mendaftar? <a href="/register">Daftar</a></p>
                </div>
                <div className="col-6">
                    <div className="carousel-1"></div>
                </div>
            </div>
        </div >
    );
};

export default Content;