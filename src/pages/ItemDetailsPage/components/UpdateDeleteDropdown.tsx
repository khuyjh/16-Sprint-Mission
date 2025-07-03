import DropDown from "@/common/DropDown";
import kebabIcon from "@/assets/icons/ic_kebab.svg";

const UpdateDeleteDropdown = () => {
  return (
    <DropDown imgSrc={kebabIcon} clickableArea={24}>
      <ul>
        <li>수정하기</li>
        <li>삭제하기</li>
      </ul>
    </DropDown>
  );
};

export default UpdateDeleteDropdown;
