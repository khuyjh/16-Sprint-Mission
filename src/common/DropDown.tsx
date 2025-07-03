import useDropdown from "@/hooks/useDropdown";
import { type ReactNode } from "react";

interface Props {
  imgSrc: string;
  clickableArea: number;
  children: ReactNode;
}

const DropDown = ({ imgSrc, clickableArea, children }: Props) => {
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    dropdownButtonRef,
    dropdownMenuRef,
  } = useDropdown();
  return (
    <>
      <button
        className="btn"
        type="button"
        ref={dropdownButtonRef}
        style={{ width: `${clickableArea}px`, position: "relative" }}
        onClick={() => {
          setIsDropdownOpen((prev) => !prev);
        }}
      >
        <img src={imgSrc} alt="드롭다운 메뉴 아이콘" />
      </button>
      {isDropdownOpen ? <div ref={dropdownMenuRef}>{children}</div> : null}
    </>
  );
};
export default DropDown;
