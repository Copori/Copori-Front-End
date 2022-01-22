import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../style/profile/style.css";

function Profile() {
  const navigate = useNavigate();
  let [toggle, setToggle] = useState(false);
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");

  const accessToken = localStorage.getItem("JWT");
  const userId = localStorage.getItem("userId");
  console.log(userId);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const ChangeValue = () => {
    if (toggle === false) {
      setToggle(true);
    } else if (username === "") {
      alert("아이디를 입력해주세요.");
      setToggle(true);
    } else if (email === "") {
      alert("이메일을 입력해주세요.");
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const handleDelete = () => {
    axios

      .patch(`http://localhost:8080/api/profile/delete/${userId}`, {
        headers: headers,
      })
      .then(function (response) {
        console.log("delete : " + response);
        localStorage.removeItem("JWT");
        localStorage.removeItem("userId");
        navigate("/");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/profile/${userId}`, {
        headers: headers,
      })
      .then(function (response) {
        console.log(response);
        setUsername(response.data.data.username);
        setEmail(response.data.data.email);
      });
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        axios
          .patch(
            `http://localhost:8080/api/profile/${userId}`,
            {
              username: username,
              email: email,
            },
            {
              headers: headers,
            }
          )
          .then(function (response) {
            console.log(username);
            console.log(email);
            console.log(response);
          });
      }}
    >
      <div className="profile">
        <div className="profile__box">
          <div className="profile__header">
            <Link to="/">
              <span className="profile__header--logo">Read&amp;Review</span>
            </Link>
          </div>
          <div className="profile__body">
            <img className="profile__body--img" />
            <div className="profile__body--input">
              <input
                type="text"
                name="id"
                placeholder="아이디"
                className="profile__body--input-id"
                disabled={toggle ? "" : "disabled"}
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                className="profile__body--input-email"
                disabled={toggle ? "" : "disabled"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="footer">
            <div className="profile__info">
              <div className="profile__info--textarea">
                <textarea className="profile__info--textarea-info" />
                <div className="profile__btn">
                  <button
                    type="submit"
                    className="profile__btn--save"
                    onClick={ChangeValue}
                  >
                    {toggle ? "수정하기" : "회원정보 수정"}
                  </button>
                  <Link to="/">
                    <button
                      type="submit"
                      className="profile__btn--save"
                      onClick={handleDelete}
                    >
                      회원탈퇴
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Profile;
