import logoImg from "../assets/logo/panda-face_small.svg";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <div className={styles["link-container"]}>
        <div className={styles["logo-container"]}>
          <img
            src={logoImg}
            alt="판다마켓 로고"
            className={styles["logo-img"]}
          />
          <button className={styles.logo} type="button">
            판다마켓
          </button>
        </div>
        <button className={`${styles.link}`} type="button">
          자유게시판
        </button>
        <button className={`${styles.link} ${styles.selected}`} type="button">
          중고마켓
        </button>
      </div>
      <button className={`btn ${styles["login-btn"]}`} type="button">
        로그인
      </button>
    </nav>
  );
};

export default Nav;
