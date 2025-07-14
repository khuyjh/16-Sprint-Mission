import googleIcon from "@/assets/icons/ic_google.svg";
import kakaoIcon from "@/assets/icons/ic_kakaotalk.svg";

const SocialLogin = () => {
  return (
    <div>
      간편 로그인하기
      <div>
        <img src={googleIcon} alt="구글 아이콘" />
        <img src={kakaoIcon} alt="카카오 아이콘" />
      </div>
    </div>
  );
};

export default SocialLogin;
