import logoImg from "../assets/logo/panda-face_small.svg";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container container--nav">
      <div className="nav__btn--home">
        <img src={logoImg} alt="판다마켓 로고" className="nav__logo" />
        <button className="btn btn--home" type="button">
          판다마켓
        </button>
      </div>
      <button className="btn btn--login btn--interactions" type="button">
        로그인
      </button>
    </div>
  );
};

export default Nav;
