import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/login/style.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  let [jwt, setJwt] = useState("");
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("JWT", jwt);
    console.log("jwt : " + jwt);
  }, [jwt]);

  const onClickLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/login", {
        //   headers: {
        //     Authorization : `Bearer ${jwt}`,
        // },
        username: inputId,
        password: inputPw,
      })
      .then(function (response) {
        setJwt(response.data.token);
        localStorage.setItem("JWT", jwt);
        navigate("/", { replace: true });
      });
  };

  // async function onClickLogin(e) {
  //     e.preventDefault();

  //     try {
  //         const response = await axios.post(
  //             'http://localhost:8080/api/login',
  //             {
  //                 username: inputId,
  //                 password: inputPw,
  //             }
  //         );
  //         console.log('data정보: ' + JSON.stringify(response.data));
  //         console.log('header정보 : ' + JSON.stringify(response.headers));
  //         setJwt(response.data.token);
  //         navigate('/', { replace: true });
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

  const onClickSignin = () => {
    navigate("/signUp", { replace: true });
  };

  return (
    <form>
      <div className="login">
        <div className="login__box">
          <div className="login__header">
            <span className="login__header--logo">Read&amp;Review</span>
          </div>
          <div className="login__body">
            <div className="login__body--id">
              <label htmlFor="input_id" className="login__body--id-icon">
                {" "}
              </label>
              <input
                type="text"
                name="input_id"
                value={inputId}
                className="login__body--id-input"
                id="input_id"
                placeholder="아이디를 입력하세요."
                onChange={handleInputId}
              />
            </div>
            <div className="login__body--pw">
              <label htmlFor="input_pw" className="login__body--pw-icon">
                {" "}
              </label>
              <input
                type="password"
                name="input_pw"
                value={inputPw}
                className="login__body--pw-input"
                id="input_pw"
                placeholder="비밀번호를 입력하세요."
                onChange={handleInputPw}
              />
            </div>
          </div>
          <div className="login__btn">
            <button
              type="submit"
              className="login__btn--signin"
              onClick={onClickLogin}
            >
              로그인
            </button>
            {/* <Link to="/signUp"> */}
            <button
              type="submit"
              className="login__btn--signup"
              onClick={onClickSignin}
            >
              회원가입
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
