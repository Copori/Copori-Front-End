import React, { useState } from "react";
import useForm from "./useForm";
import { useNavigate } from "react-router-dom";
import validate from "./validate";
import "../style/signUp/style.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  let [username, setId] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [success, setSuccess] = useState(true);
  let [pwCheck, setPwCheck] = useState("");

  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();

  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { Vid: "", Vemail: "", Vpassword: "", Vpasswordcheck: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });

  return (
    <div className="signup">
      <div className="signup__box">
        <div className="signup__header">
          <span className="signup__header--logo">Read&amp;Review</span>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            //유효성 검증
            if (username === "") {
              alert("아이디를 입력하세요.");
            } else if (email === "") {
              alert("이메일을 입력하세요.");
            } else if (password === "") {
              alert("비밀번호를 입력하세요.");
            } else if (pwCheck === "") {
              alert("비밀번호를 다시 입력해주세요.");
            } else if (password !== pwCheck) {
              alert("비밀번호가 일치하지 않습니다.");
            } else {
              if (toggle === false) {
                axios
                  .post("http://localhost:8080/api/signup", {
                    username: username,
                    password: password,
                    email: email,
                  })
                  .then(function (response) {
                    console.log("response" + response);
                    navigate("/login", { replace: true });
                    // setSuccess(response.data.isSuccess);
                    // setMessage(response.data.message);
                  });
              } else {
                alert("입력된 값이 유효하지 않습니다.");
              }
            }
          }}
        >
          <div className="signup__body">
            <div className="signup__body--input">
              <span className="signup__body--id-title">아이디</span>
              <input
                type="text"
                name="username"
                className="signup__body--input-id"
                placeholder="아이디를 입력하세요."
                onChange={(e) => {
                  console.log(e.target.value);
                  setId(e.target.value);
                }}
              />
              {errors.Vid && (
                <span className="signup__body--id-error">{errors.Vid}</span>
              )}

              <span className="signup__body--email-title">이메일</span>
              <input
                type="email"
                name="email"
                className="signup__body--input-email"
                placeholder="이메일을 입력하세요."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.Vemail && (
                <span className="signup__body--email-error">
                  {errors.Vemail}
                </span>
              )}

              <span className="signup__body--pw-title">비밀번호</span>
              <input
                type="password"
                name="password"
                className="signup__body--input-pw"
                placeholder="비밀번호를 입력하세요."
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errors.Vpassword && (
                <span className="signup__body--pw-error">
                  {errors.Vpassword}
                </span>
              )}

              <span className="signup__body--pwcheck-title">비밀번호 확인</span>
              <input
                type="password"
                name="passwordcheck"
                className="signup__body--input-pwcheck"
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={(e) => {
                  setPwCheck(e.target.value);
                }}
              />
              {errors.Vpasswordcheck && (
                <span className="signup__body--pwck-error">
                  {errors.Vpasswordcheck}
                </span>
              )}
            </div>
          </div>
          <div className="signup__btn">
            {/* <Link to="/login"> */}
            <button type="submit" className="signup__btn--join">
              가입하기
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
