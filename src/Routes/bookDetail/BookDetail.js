import Review from './Review';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';

// 쿼리 뽑는 함수
function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const BookDetail = () => {
  // 쿼리 불러오기
  let query = useQuery();
  let bookUrl = query.get('query');
  console.log(query.get('query'));
  console.log(bookUrl.slice(-3));
  const querylist = query.get('query');

  //API Constants
  const API_URL = 'http://api.kcisa.kr/openapi/service/rest/meta4/getKCPG0506';
  const SECRET_KEY = process.env.REACT_APP_RECOMMEND_SERVICE_KEY;

  //API variables
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  let data = [];

  // 책 Data 가져오기
  const getBooks = async () => {
    const json = await (
      await fetch(`${API_URL}?serviceKey=${SECRET_KEY}&numOfRows=825&pageNo=1`, {
        headers: {
          accept: 'application/json',
        },
      })
    ).json();
    setBooks(json.response.body.items.item);
    setLoading(false);
  };

  // 해당 bookId(url) 을 조회해서 해당 객체를 반환
  data = data.concat(books.filter(book => book.url == querylist));
  console.log(data);

  // useEffect
  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="BookDetail">
      {loading ? (
        'Loding'
      ) : (
        <div className="BookDetail">
          <div className="BookDetail__Containter">
            <Link to="/">
              <span className="BookDetail__Container--title">Read&Review</span>
            </Link>
            <div className="BookDetail__Container__box">
              <div className="BookDetail__Container__box--img">
                <div>
                  <img src={data[0].referenceIdentifier}></img>
                </div>
              </div>
              <div className="BookDetail__Container__box__text">
                <div>
                  <span className="BookDetail__Container__box__text--title">{data[0].title}</span>
                  <span className="BookDetail__Container__box__text--rights">저/역자 : {data[0].rights}</span>
                  <span className="BookDetail__Container__box__text--subDescription">추천자 : {data[0].subDescription}</span>
                  <span className="BookDetail__Container__box__text--issuedDate">출판일 : {data[0].issuedDate}</span>
                </div>
              </div>
            </div>
            <div className="BookDetail__Container__subTitle">
              <div className="BookDetail__Container__subTitle--title">Book Description</div>
              <div className="BookDetail__Container__subTitle--heart">
                <FaHeart />
              </div>
              <div className="BookDetail__Container__subTitle--number">3</div>
              <div className="BookDetail__Container__subTitle--star">
                <BsFillStarFill />
              </div>
              <div className="BookDetail__Container__subTitle--number">3</div>
            </div>
            <div className="BookDetail__Container__subContents">
              <p>{data[0].description}</p>
            </div>
          </div>
          <Review />
        </div>
      )}
    </div>
  );
};

export default BookDetail;
