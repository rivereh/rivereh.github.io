'use client'

import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  // Button entrance and exit
  function scrollDownFunction() {
    if (window.scrollY > 1000) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollDownFunction)
  }, [])

  // Back to top button
  function backToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <button
        className={`back-to-top flex justify-center ${showButton ? '' : 'hide'}`}
        onClick={backToTop}
      >
        <FaArrowUp className='h-[3.5rem] text-lg' />
      </button>
    </>
  )
}
export default BackToTopButton
