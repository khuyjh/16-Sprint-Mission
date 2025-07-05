import DropDown from "@/common/DropDown";
import kebabIcon from "@/assets/icons/ic_kebab.svg";
import React, { useState, type SetStateAction } from "react";

interface Props {
  onEdit: React.Dispatch<SetStateAction<boolean>>;
}

const UpdateDeleteDropdown = ({ onEdit }: Props) => {
  return (
    <DropDown imgSrc={kebabIcon} clickableArea={24}>
      <ul>
        <li
          onClick={() => {
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
