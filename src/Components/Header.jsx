import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className={`${scrolled ? "bg-black text-white" : "bg-yellow-200"} p-4 fixed w-[100%] z-50`}>
        {/* Larger Screens */}
        <div className='hidden sm:flex flex-row'>
            <div className="sm:text-xs lg:text-base pr-2 cursor-pointer" >HOME</div>
            <div className="sm:text-xs lg:text-base pr-2 cursor-pointer" >GAME DESIGN</div>
            <div className="sm:text-xs lg:text-base pr-2 cursor-pointer" >ANIMATION</div>
            <div className="sm:text-xs lg:text-base cursor-pointer" >COMPUTER SCIENCE</div>
        </div>

        {/* Smaller Screens */}
        <div className='sm:hidden'>Small Screens</div>
    </div>
  )
}
