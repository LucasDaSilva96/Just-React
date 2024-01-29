import { useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);

  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (!visible) return;
  return (
    <div
      role="button"
      onClick={handleScroll}
      className="bg-[#000000] rounded-[50%] py-2 px-2 fixed z-20 bottom-8 right-4 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="#FFF"
        viewBox="0 0 256 256"
      >
        <path d="M205.66,138.34a8,8,0,0,1-11.32,11.32L136,91.31V224a8,8,0,0,1-16,0V91.31L61.66,149.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0ZM216,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </svg>
    </div>
  );
}

export default ScrollToTopButton;
