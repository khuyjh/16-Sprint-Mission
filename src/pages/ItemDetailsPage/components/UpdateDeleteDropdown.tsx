import DropDown from "@/common/DropDown";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import React, { useState, type SetStateAction } from "react";

interface Props {
  onEdit?: React.Dispatch<SetStateAction<boolean>>;
  //상품 정보 수정 기능은 없기 때문에 임시로 optional 처리
}

const UpdateDeleteDropdown = ({ onEdit }: Props) => {
  return (
    <DropDown imgSrc={kebabIcon} clickableArea={24}>
      <ul>
        <li
          onClick={() => {
            //optional type에 따른 타입 가드
            if (!onEdit) {
              return;
            }
            onEdit((prev) => true);
          }}
        >
          수정하기
        </li>
        <li>삭제하기</li>
      </ul>
    </DropDown>
  );
};

export default UpdateDeleteDropdown;
