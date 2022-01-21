import "../style/profile/style.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__box">
        <div className="profile__header">
          <span className="profile__header--logo">Read&amp;Review</span>
        </div>
        <div className="profile__body">
          <img src="/" className="profile__body--img"></img>
          <div className="profile__body--input">
            <input
              type="text"
              placeholder="닉네임"
              className="profile__body--input-name"
            />
            <input
              type="text"
              placeholder="이메일"
              className="profile__body--input-email"
            />
            <input
              type="text"
              placeholder="비밀번호"
              className="profile__body--input-pw"
            />
          </div>
        </div>
        <div className="footer">
          <div className="profile__info">
            <div className="profile__info--textarea">
              <textarea className="profile__info--textarea-info" />
              <div className="profile__btn">
                <button type="submit" className="profile__btn--save">
                  수정하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
