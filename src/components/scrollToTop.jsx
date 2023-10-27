import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollButton = document.querySelector(".scroll-top-btn");

    const handleScroll = () => {
      if (window.scrollY > 500) {
        scrollButton.style.visibility = "visible";
      } else {
        scrollButton.style.visibility = "hidden";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll-top-btn scroll-top-btn1"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <i className="fas fa-angle-up arrow-up" />
      <i className="fas fa-circle-notch" />
    </div>
  );
};

export default ScrollToTop;
