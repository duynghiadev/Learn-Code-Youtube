import { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [appear, setAppear] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setAppear(true);
      } else {
        setAppear(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-5 lg:bottom-14 right-5 z-40 h-12 w-12 rounded-lg text-white duration-300 bg-[#FF5A5F] hover:bg-[#9e3e4e] ${
        appear ? `visible opacity-100` : `invisible opacity-0`
      }`}
      onClick={scrollToTop}
      title='Click to return to top page'
    >
      <img src='https://cdn-icons-png.flaticon.com/512/608/608336.png' className='mx-auto flex h-5 grayscale invert' alt='' />
    </button>
  );
}

export default ScrollToTopButton;
