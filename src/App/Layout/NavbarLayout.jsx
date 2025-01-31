import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './LayoutStyle.css'
import imgweb from '../../../public/iconDoc/nav icon.png'
import Footer from '../footer/Footer'
function NavbarLayout() {
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
  return (
    <div>
      <nav className={scrolled ? "scroled" : ""}>
        <Link to={'/'}><img src={imgweb} alt="" /></Link>
        <ul>
          <Link to={'/'}><li>Home<span></span></li></Link>
          <Link to={'/course'}><li>Kurslar<span></span></li></Link>
          <Link to={'/about'}><li>About<span></span></li></Link>
          <Link to={'/news'}><li>News<span></span></li></Link>
          <Link to={'/contact'}><li>Contact<span></span></li></Link>
        </ul>
        <Link to={'/log_in'}><button>Log in</button></Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default NavbarLayout