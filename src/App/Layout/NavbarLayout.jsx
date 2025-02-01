import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './LayoutStyle.css'
import imgweb from '../../../public/iconDoc/nav icon.png'
import Footer from '../footer/Footer'

function NavbarLayout({ showButton, onButtonClick }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div>
      <nav className={scrolled ? "scroled" : ""}>
        <Link to={'/'}><img src={imgweb} alt="" /></Link>
        <ul>
          <Link to={'/'}><li>Home<span></span></li></Link>
          <Link to={'/course'}><li>Kurslar<span></span></li></Link>
          <Link to={'/dashboard'}><li>Dashboard</li></Link>
          <Link to={'/contact'}><li>Contact<span></span></li></Link>
        </ul>
        <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        <Link to={'/sing_in'}><button>sing in</button></Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default NavbarLayout