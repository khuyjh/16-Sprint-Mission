import useOutsideClick from "@/hooks/useOutsideClick";
import useDropdown from "@/hooks/useOutsideClick";
import { useRef, useState, type ReactNode } from "react";

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
