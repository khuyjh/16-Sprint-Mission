import useDropdown from "@/hooks/useDropdown";
import { type ReactNode } from "react";

interface Props {
  imgSrc: string;
  clickableWidth: number;
  clickableHeight: number;
  children: ReactNode;
}

const DropDown = ({
  imgSrc,
  clickableWidth,
  clickableHeight,
  children,
}: Props) => {
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
        style={{
          width: `${clickableWidth}px`,
          height: `${clickableHeight}px`,
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
