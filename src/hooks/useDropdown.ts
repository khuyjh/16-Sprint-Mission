import { useCallback, useEffect, useRef, useState } from "react";

const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!isDropdownOpen || !(e.target instanceof Node)) {
        return;
      }

      if (
        !dropdownButtonRef.current?.contains(e.target) &&
        !dropdownMenuRef.current?.contains(e.target)
      ) {
        setIsDropdownOpen((prev) => false);
      }
    },
    [isDropdownOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    dropdownButtonRef,
    dropdownMenuRef,
  };
};

export default useDropdown;
