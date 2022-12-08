import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon_facebook from "../../asset/login/Facebook_icon.svg.png";
import Icon_google from "../../asset/login/Google__G__Logo.svg.png";
import Icon_myvalue from "../../asset/login/myvalue.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { loginUser, userSelector } from "../../redux/modules/userSlice";
const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not valid."),
    password: yup.string().required("Password is required"),
  })
  .required();

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const login = (data) => {
    const response = dispatch(loginUser(data));
    response.then((data) => {
      //   console.log("data disini", data.payload.status);
      if (data.payload.status === 400) {
        return toast.error(data.payload.data.errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      navigate("/");
    });
    // error.then((data) => {
    //   toast.error(data.payload, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // });
    // if (error) {
    //   //   toast.error("NOK: ", error);
    //   console.log(error);
    // }
  };

  //   useEffect(() => {
  //     return () => {
  //       dispatch(clearState());
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (isError) {
  //       toast.error(errorMessage);
  //       dispatch(clearState());
  //     }
  //     if (isSuccess) {
  //       dispatch(clearState());
  //       history.push("/");
  //     }
  //   }, [isError, isSuccess]);

  //   const getAccount = async () => {
  //     try {
  //       await axios.get(
  //         "https://grandemedia-clone-server.herokuapp.com/accounts",
  //         { email, password }
  //       );
  //       setEmail(this.email);
  //       setPassword(this.password);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const handleChangeEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  //   const handleChangePassword = (event) => {
  //     setPassword(event.target.value);
  //   };
  //   const handleLogin = (event) => {
  //     event.preventDefault(); // prevent reloading while submitting
  //     console.log("clicked login");
  //     // if (!email && password) return;
  //     // getAccount();
  //     // navigate("/cart");
  //   };

  return (
    <div className="section-header container">
      <div className="row">
        <h1 className="text-primary">Masuk</h1>
        <div className="col-5 text-center">
          <form onSubmit={handleSubmit(login)}>
            <div className="form-floating mb-3">
              <input
                {...register("email")}
                className={
                  errors.email?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInput"
                placeholder="example@mail.com"
              />
              {/* <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            ></input> */}

              {errors.email?.message ? (
                <label htmlFor="floatingInputInvalid">
                  {errors.email?.message}
                </label>
              ) : (
                <label htmlFor="floatingInput">Email</label>
              )}
            </div>
            {}
            <div className="form-floating mb-4">
              <input
                {...register("password")}
                className={
                  errors.password?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInput"
                placeholder="password"
              />
              {errors.email?.message ? (
                <label htmlFor="floatingInputInvalid">
                  {errors.password?.message}
                </label>
              ) : (
                <label htmlFor="floatingInput">Password</label>
              )}
            </div>
            <div className="form-floating mb-4">
              <a href="/">Lupa kata sandi?</a>
            </div>
            <button
              type="submit"
              className="btn btn-light w-100 mb-4 text-primary"
            >
              Masuk
            </button>
          </form>
          <p>
            Belum Mendaftar? <a href="/register">Daftar</a>
          </p>
        </div>
        <div
          className="col-2 text-center"
          style={{
            width: "55px",
            marginLeft: "50px",
            marginRight: "50px",
            color: "GrayText",
          }}
        >
          <div className="vr" style={{ height: "150px" }}></div>
          atau
          <div className="vr" style={{ height: "150px" }}></div>
        </div>
        <div className="col-5 text-center">
          <div>
            <button
              type="button"
              className="btn border border-dark w-100 mb-4 text-primary"
            >
              <img
                src={Icon_facebook}
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              ></img>
              Masuk dengan Facebook
            </button>
            <button
              type="button"
              className="btn border border-dark w-100 mb-4 text-primary"
            >
              <img
                src={Icon_google}
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              ></img>
              Masuk dengan Google
            </button>
          </div>
          <div
            className="row"
            style={{ marginTop: "5px", marginBottom: "25px" }}
          >
            <div
              style={{
                width: "100%",
                height: "15px",
                borderBottom: "1px solid grey",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  backgroundColor: "#FFFFFF",
                  padding: "0 10px",
                }}
              >
                Akun Lainnya
              </span>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn border border-dark w-100 mb-4 text-primary"
            >
              <img
                src={Icon_myvalue}
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              ></img>
              Masuk dengan MyValue
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Content;
