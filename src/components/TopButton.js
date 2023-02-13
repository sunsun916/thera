import React, { useEffect, useState } from 'react';

import "./topButton.css"


function TopButton( ) {

  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      })

  }
  useEffect(() => {
      const handleShowButton = () => {
          if (window.scrollY > 50) {
              setShowButton(true)
          } else {
              setShowButton(false)
          }
      }

      console.log(window.scrollY)
      window.addEventListener("scroll", handleShowButton)
      return () => {
          window.removeEventListener("scroll", handleShowButton)
      }
  }, [])

  return showButton && (
        <div className="scrollContainer">
            <button id="top" onClick={scrollToTop} type="button" > </button>
        </div>
  );
}

export default TopButton;