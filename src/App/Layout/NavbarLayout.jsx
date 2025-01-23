import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './LayoutStyle.css'
import imgweb from '../../../public/iconDoc/nav icon.png'
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
          <li><Link to={'/course'}>Kurslar</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
        <Link to={'/dashboard'}><button>Log in</button></Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default NavbarLayout