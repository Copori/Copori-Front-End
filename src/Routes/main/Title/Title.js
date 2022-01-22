import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineRead, AiOutlineKey } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Title() {
  const [toggle, setToggle] = useState(true);
  let isAuthorized = localStorage.getItem("JWT");
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("JWT");
    localStorage.removeItem("userId");
    window.location.replace("/");
  };

  return (
    <div className="main__title">
      <div className="main__title__box-text">
        <span>Read&Review</span>
      </div>
      <div className="main__title__box-icon">
        <div className="box-icon__contents">
          <Link to="/Profile">
            <div className="box-icon__contents--myicon">
              <AiOutlineRead />
              <span className="box-icon__contents--myinfo">내 정보</span>
            </div>
          </Link>
        </div>
        <div>
          <div className="box-icon__contents">
            {!isAuthorized ? (
              <span
                onClick={() => {
                  navigate("/login", { replace: true });
                }}
                className="box-icon__contents--login"
              >
                <AiOutlineKey />
                로그인
              </span>
            ) : (
              <span
                onClick={onClickLogout}
                className="box-icon__contents--logout"
              >
                <AiOutlineKey />
                로그아웃
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
