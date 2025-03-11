import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import homePageWrap from '../../../../public/iconDoc/Doc icon.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
import react from '../../../../public/img/react.png'
import cyber from '../../../../public/img/cyber.png'
import python from '../../../../public/img/python.png'
function Home() {
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    const [isdata, setIsData] = useState([])
    const [iscount, setIsCount] = useState([])
    const [cont, setCont] = useState([])
    const [iamge, setImage] = useState([])
    const [marq, setMarq] = useState([])
    const [map, setMap] = useState([])
    const [ismap, setIsMap] = useState([])
    const [homepage, setHomePage] = useState([])
    const [contact, setContact] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch("https://mmcqthzpqwjfxtjjpjky.supabase.co/storage/v1/object/sign/json/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqc29uL2RiLmpzb24iLCJpYXQiOjE3NDE2OTQzNDIsImV4cCI6MTc0MjI5OTE0Mn0.pR_Wf8PnDDmacUm9q1nxflA_G3bwcYNiwk-G2WWzCBc")
                const response = await request.json()
                setData(response.homePageOne)
                setCount(response.homePageTwo)
                setIsData(response.homePageThree)
                setIsCount(response.homePageFour)
                setCont(response.homePageFive)
                setImage(response.homePageSix)
                setMarq(response.homePageEight)
                setMap(response.homePageNine)
                setIsMap(response.homePageTen)
                setHomePage(response.homePageTwenty)
                setContact(response.homePageTenty)
            } catch (error) {
                console.error(`HTTPSda Xatolik bormi deymanda ${error}`)
            }
        };
        fetchData()
        Aos.init({
            duration: 900
        })
    }, [])
    return (
        <div className="home-page">
            <div className='home-page-1'>
                <div className="home-page1-wrap">
                    <img data-aos="fade-right" data-aos-duration="1100" className='home-page1-pimg' src={homePageWrap} alt="" />
                    <h1 data-aos="zoom-in" data-aos-duration="1100" className='home-page1-ph1'>DASTURLASHNI QULAY MUHITDA O‘RGANING</h1>
                </div>
            </div>
            <div className="home-page-2">
                {data.map((item, id) => (
                    <div data-aos="fade-down" className='home-page-2-1' key={id}>
                        <h1 className='home-page-2-1-1'>{item.h1}</h1>
                        <p>{item.write}</p>
                    </div>
                ))}
                <div className='home-page-2-or'>
                    {count.map((item, id) => (
                        <div data-aos="zoom-in" className='home-page-2-2' key={id}>
                            <img src={item.image} alt={item.id} />
                            <h1>{item.write}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className='iesa'>
                    <h1 data-aos="zoom-out">Bizning ish jarayonlarimiz</h1>
                    <div className='home-page2-or1'>
                        {isdata.map((item, id) => (
                            <div className='card' key={id}>
                                <img data-aos="flip-up" src={item.image} alt={item.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="home-page-3">
                <div data-aos="fade-right" className="home-page-3-1">
                    <p className='home-page-3-p1'>Biz haqimizda</p>
                    <h1>Sun'iy intellekt yordamida boshqariladigan ta'lim tizimi va zamonaviy atmosfera sizning muvaffaqiyatingiz garovidir.</h1>
                    <p className='home-page-3-p2'>Xorazimiy IT Akademiyasi nafaqat O'zbekistondagi, balki O'rta Osiyodagi birinchi va eng katta IT Akademiya bo'lib, bu yerda sun'iy intellekt yordamida ta'lim berishning innovatsion usuli yo'lga qo'yilgan. Zamonaviy texnologiyalar, 24/7 ishlaydigan o'quv kampusi, mingga yaqing iMac'lar va qulay sharoitlar sizga haqiqiy dasturchi bo'lib yetishish imkonini beradi.</p>
                </div>
                <div className="home-page-3-2">
                    {iscount.map((item, id) => (
                        <div className='fed' key={id}>
                            <img data-aos='fade-down-left' src={item.image} alt={item.id} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-page-4">
                <div className="home-page-4-1">
                    {cont.map((item, id) => (
                        <div data-aos="zoom-out" key={id}>
                            <p className="home-page-4-p1">{item.p}</p>
                            <h1 className='home-page-4-h1'>{item.h1}</h1>
                            <p className='home-page-4-p2'>{item.p1}</p>
                        </div>
                    ))}
                </div>
                <div data-aos="zoom-in-down" className="home-page-4-wrapper">
                    {iamge.map((item, id) => (
                        <div className='home-page-4-image' key={id}>
                            <img src={item.image} alt={item.id} />
                            <div className='home-page-4-content'>
                                <h1>{item.name}</h1>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-page-7">
                <div className='home-page-7-h1'>
                    {ismap.map((item, id) => (
                        <div data-aos="fade-down-right" className='home-page-7-h' key={id}>
                            <p>{item.p1}</p>
                            <h1>{item.h1}</h1>
                        </div>
                    ))}
                </div>
                <div className='home-page-7-p'>
                    {homepage.map((item, id) => (
                        <div data-aos-duration="700" data-aos="flip-down" className='home-page-7-p1' key={id}>
                            <h3>{item.h1}</h3>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-page-5">
                {marq.map((item, id) => (
                    <div data-aos="zoom-in-down" className='home-page-5-desc' key={id}>
                        <p className='home-page-5-p1'>{item.p1}</p>
                        <h1 className='home-page-5-h1'>{item.h1}</h1>
                        <p className='home-page-5-p2'>{item.p2}</p>
                    </div>
                ))}
                <div data-aos="zoom-in-up" className='home-page-5-course'>
                    <div className="home-page-5-child">
                        <img src={react} alt="react" />
                        <div className="home-page-5-ch">
                            <h1>React.js Frontend Developer</h1>
                            <p>Ushbu kurs tajribali veb-dasturchi bo'lish uchun to'liq qo'llanmadir. Unda React dasturchisi sifatida ishlashda bilishingiz kerak bo'lgan barcha vositalar va texnologiyalar mavjud.</p>
                            <button style={{ marginTop: '46px', cursor: 'pointer' }}>Batafsil</button>
                        </div>
                    </div>
                    <div className="home-page-5-child">
                        <img src={cyber} alt="cyber" />
                        <div className="home-page-5-ch">
                            <h1>Cybersecurity</h1>
                            <p>Ilg'or xakerlar, trekerlar, zararli dasturlar, nol kunlar, ekspluatatsiya to'plamlari, kiberjinoyatchilar va boshqalarni o'z ichiga olgan barcha onlayn tahdidlarga qarshi kurashish bo'yicha amaliy ko'nikmalarni o'rganing.</p>
                            <button style={{ marginTop: '69px', cursor: 'pointer' }}>Batafsil</button>
                        </div>
                    </div>
                    <div className="home-page-5-child">
                        <img src={python} alt="python" />
                        <div className="home-page-5-ch">
                            <h1>Python Django Backend Developer</h1>
                            <p>Noldan qurish Python Django - bu pragmatik va toza dizaynga ega yuqori darajadagi, yuqori darajada xavfsiz va kengaytiriladigan ilovalarni yaratish uchun butun dunyo bo'ylab foydalaniladigan server tomonidagi veb-ramka.</p>
                            <button style={{cursor: 'pointer'}}>Batafsil</button>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="flip-right" className='home-page-contact'>
                <div className='home-page-8'>
                    {contact.map((item, id) => (
                        <div key={id}>
                            <h1>{item.h1}</h1>
                            <p>{item.p}</p>
                        </div>
                    ))}
                </div>
                <form>
                    <input type="text" id='name' placeholder='Ismingiz...' />
                    <input type="number" id='number' placeholder='Tel raqamingiz...' />
                </form>
                <button className='home-page-contact-btn'>Yuborish</button>
            </div>
            <div className="home-page-6-map">
                {map.map((item, id) => (
                    <div data-aos="zoom-out-down" className='home-page-6-div' key={id}>
                        <p>{item.p1}</p>
                        <h1>{item.h1}</h1>
                        <p>{item.p2}</p>
                    </div>
                ))}
                <iframe
                    data-aos="zoom-in-down"
                    classname="container"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.986343472687!2d66.8917442414155!3d39.1175568037973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4cbb686357ed39%3A0xfd13d5677a926088!2sIqtidor%20IT%20Academy!5e0!3m2!1sru!2s!4v1737271603279!5m2!1sru!2s"
                    width={'100%'}
                    height={'400px'}
                    style={{ border: 0, borderRadius: '15px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}

export default Home