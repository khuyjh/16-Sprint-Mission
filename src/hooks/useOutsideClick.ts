import { useCallback, useEffect } from "react";

interface OutsideClickOptions {
  isActive?: boolean;
  onOutsideClick?: () => void;
}

const useOutsideClick = (
  refs: React.RefObject<HTMLElement | null>[],
  options: OutsideClickOptions = {}
) => {
  const { isActive = true, onOutsideClick } = options;

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!isActive || !(e.target instanceof Node)) {
        return;
      }

      const isOutsideAllRefs = refs.every(
        (ref) => !ref.current?.contains(e.target as Node)
      );

      if (isOutsideAllRefs) {
        onOutsideClick?.();
      }
    },
    [isActive, onOutsideClick, refs]
  );

  useEffect(() => {
    if (!isActive) {
      return;
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick, isActive]);
};

export default useOutsideClick;
