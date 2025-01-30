import React from 'react'
import './FooterStyle.css'
import instagram from '../../../public/svg/1161953_instagram_icon.svg'
import facebook from '../../../public/svg/5305154_fb_facebook_facebook logo_icon.svg'
import telegram from '../../../public/svg/9041544_telegram_icon.svg'
import email from '../../../public/svg/134146_mail_email_icon.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-course">
                <h1>KURSLAR VA TA'LIM</h1>
                <div className='footer-course-1'>
                    <p>3D Max & Interior Design</p>
                    <p>React.js Frontend Developer</p>
                    <p>Cybersecurity</p>
                    <p>Python Django Backend Developer</p>
                    <p>Node.js Backend Developer</p>
                    <p>C# .Net Backend Developer</p>
                </div>
            </div>
            <div className='footer-pages'>
                <h1>Xorazimiy</h1>
                <div className="footer-pages-1">
                    <Link to={'/'}><p>Home</p></Link>
                    <Link to={'/course'}><p>Kurslar</p></Link>
                    <Link to={'/about'}><p>About</p></Link>
                    <Link to={'/blog'}><p>Blog</p></Link>
                    <Link to={'/contact'}><p>Contact</p></Link>
                </div>
            </div>
            <div className='footer-int'>
                <h1>Aloqa</h1>
                <div className="footer-int-1">
                    <a href="https://www.instagram.com/muhammad1yev.ozodbek">
                        <article>
                            <img src={instagram} alt="" />
                            <p>Instagram</p>
                        </article>
                    </a>
                    <a href="">
                        <article>
                            <img src={facebook} alt="" />
                            <p>Facebook</p>
                        </article>
                    </a>
                    <a href="">
                        <article>
                            <img src={telegram} alt="" />
                            <p>Telegram</p>
                        </article>
                    </a>
                    <a href="">
                        <article>
                            <img src={email} alt="" />
                            <p>Email</p>
                        </article>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
