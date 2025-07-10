import useOutsideClick from "@/hooks/useOutsideClick";
import clsx from "clsx";
import styles from "./DropDown.module.css";
import { useRef, useState, type ReactNode } from "react";

interface Props {
  imgSrc: string;
  // 버튼 종류에 따른 클릭영역을 css className으로 전달
  buttonType: "kebab";
  children: ReactNode;
}

const DropDown = ({ imgSrc, buttonType, children }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick([dropdownButtonRef, dropdownMenuRef], {
    isActive: isDropdownOpen,
    onOutsideClick: () => setIsDropdownOpen(false),
  });

  return (
    <>
      <button
        className={clsx("btn", styles[`${buttonType}`])}
        type="button"
        ref={dropdownButtonRef}
        style={{
          position: "relative",
        }}
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
      >
        <img src={imgSrc} alt="드롭다운 메뉴 아이콘" />
        {isDropdownOpen ? <div ref={dropdownMenuRef}>{children}</div> : null}
      </button>
    </>
  );
};
export default DropDown;
