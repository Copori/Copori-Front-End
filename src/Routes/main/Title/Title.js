import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import { AiOutlineRead, AiOutlineKey } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Title() {
  const [toggle, setToggle] = useState(true);
  let isAuthorized = localStorage.getItem("JWT");
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem('JWT')
    window.location.replace("/")
  };


  return (
    <div className="main__title">
      <div className="main__title__box-text">
        <span>Read&Review</span>
      </div>
      <div className="main__title__box-icon">
        <div className="box-icon__contents">
          <Link to="/Detail">
          <AiOutlineRead />
          <span>서재</span>
          </Link>
        </div>
        <div>
          {toggle ? (
            <div className="box-icon__contents">
              {!isAuthorized 
              ? 
              <Link to="/login">
                <AiOutlineKey />
                <span onClick={()=>
                {navigate("/login", { replace: true })}
                }>로그인</span>
                </Link>
              : 
                <span onClick={onClickLogout}>
                <AiOutlineKey />
                로그아웃
                </span>
                
              }
            </div>
          ) : (
            <div className="box-icon__contents">
              <BsFillPersonFill />
              <span>내 정보</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Title;
