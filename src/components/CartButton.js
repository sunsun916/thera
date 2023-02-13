import React, { useEffect, useState } from 'react';
import "./cartButton.css"

function Cart( ) {

  const [showCart, setShowCart] = useState(false);

  const scrollToTop = () => {
      window.scroll({
          top: 0,
          behavior: 'smooth'
      })

  }
  useEffect(() => {
      const handleShowButton = () => {
          if (window.scrollY > 50) {
              setShowCart(true)
          } else {
              setShowCart(false)
          }
      }

      console.log(window.scrollY)
      window.addEventListener("scroll", handleShowButton)
      return () => {
          window.removeEventListener("scroll", handleShowButton)
      }
  }, [])

  return showCart && (
    <div className="scrollCartContainer">
            <button id="cart" onClick={scrollToTop} type="button" > </button>
        </div>
  );
}

export default Cart;