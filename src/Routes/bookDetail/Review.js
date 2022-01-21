import {useRef, useState} from "react";

// react Icon
import {BsFillStarFill} from "react-icons/bs";
import {MdOutlineCancel} from "react-icons/md";
import {BsPencilSquare} from "react-icons/bs";
import {AiOutlineCheckCircle} from "react-icons/ai";

const Review = () => {
    const [star, setStar] = useState(0);
    const [text,setText] = useState("");
    const [toggle, setToggle] = useState(true);
    // 수정 버튼 활성화/비 활성화
    const onRewrite = () => {
        setToggle((toggle)=>!toggle);
    }

    const onChange = e => setText(e.target.value);
    console.log(text);

    // 별 표시 함수
    const onStar5Click =() => {
        setStar(5);
        starPick.current.children[0].style.opacity="1";
        starPick.current.children[2].style.opacity="1";
        starPick.current.children[4].style.opacity="1";
        starPick.current.children[6].style.opacity="1";
        starPick.current.children[8].style.opacity="1";
    }
    const onStar4Click =() => {
        setStar(4);
        starPick.current.children[0].style.opacity="1";
        starPick.current.children[2].style.opacity="1";
        starPick.current.children[4].style.opacity="1";
        starPick.current.children[6].style.opacity="1";
        starPick.current.children[8].style.opacity="0.3";
    }
    const onStar3Click =() => {
        setStar(3);
        starPick.current.children[0].style.opacity="1";
        starPick.current.children[2].style.opacity="1";
        starPick.current.children[4].style.opacity="1";
        starPick.current.children[6].style.opacity="0.3";
        starPick.current.children[8].style.opacity="0.3";
    }
    const onStar2Click =() => {
        setStar(2);
        starPick.current.children[0].style.opacity="1";
        starPick.current.children[2].style.opacity="1";
        starPick.current.children[4].style.opacity="0.3";
        starPick.current.children[6].style.opacity="0.3";
        starPick.current.children[8].style.opacity="0.3";
    }
    const onStar1Click =() => {
        setStar(1);
        starPick.current.children[0].style.opacity="1";
        starPick.current.children[2].style.opacity="0.3";
        starPick.current.children[4].style.opacity="0.3";
        starPick.current.children[6].style.opacity="0.3";
        starPick.current.children[8].style.opacity="0.3";
    }

    const starPick = useRef();
  
    return(
        <div className="BookDetail__Review">
        <span className="BookDetail__Review__title">Review</span>
        <div className="BookDetail__Reivew__contents">
          <div className="BookDetail__Reivew__contents__box">
            {/* 수정 시 별 선택 */}
            {toggle?
            <div className="BookDetail__Reivew__contents__box--star" ref={starPick}>
                <label onClick={onStar1Click} htmlFor="1"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="1" value="1" />
                <label onClick={onStar2Click} htmlFor="2"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="2" value="2"/>
                <label onClick={onStar3Click} htmlFor="3"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="3" value="3" />
                <label onClick={onStar4Click} htmlFor="4"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="4" value="4" />
                <label onClick={onStar5Click} htmlFor="5"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="pos5" value="5" />
            </div>
            :
            <div className="BookDetail__Reivew__contents__box--star">
                 <label htmlFor="1"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="1" value="1" />
                <label htmlFor="2"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="2" value="2"/>
                <label htmlFor="3"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="3" value="3" />
                <label htmlFor="4"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="4" value="4" />
                <label htmlFor="5"><BsFillStarFill/></label>
                <input type="radio" name="pos" id="pos5" value="5" />
            </div>}

            {/* 닉네임 표시 부분 */}
            <div className="BookDetail__Reivew__contents__box--id">
              <span>닉네임: insu</span>
            </div>

            {/* 리뷰 내용 부분 */}
            {toggle?
            <div className="BookDetail__Reivew__contents__box--text">
                <span><input onChange ={onChange} type="text" placeholder="리뷰를 입력하세요" /></span>
            </div>
            :
            <div className="BookDetail__Reivew__contents__box--text">
              <span>{text}</span>
            </div>
            }
            <div onClick = {onRewrite} className='BookDetail__Reivew__contents--renew'>
                {toggle?
                <AiOutlineCheckCircle/>
                :
                <BsPencilSquare/>
                }
            </div>
            <div className='BookDetail__Reivew__contents--cancel'><MdOutlineCancel/></div>
          </div>
        </div>
      </div>
    );
}

export default Review;