import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import homePageWrap from '../../../../public/iconDoc/Doc icon.png'
import 'aos/dist/aos.css'
import Aos from 'aos'
function Home() {
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    const [isdata, setIsData] = useState([])
    const [iscount, setIsCount] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch("https://vqdmljutsvgbzlziztzm.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzM3NzM0OTE3LCJleHAiOjE3MzgzMzk3MTd9.e265WB3SqWgle9IhEs0htft27Vf__cbTeU51VEePSbg&t=2025-01-24T16%3A08%3A37.906Z")
                const response = await request.json()
                setData(response.homePageOne)
                setCount(response.homePageTwo)
                setIsData(response.homePageThree)
                setIsCount(response.homePageFour)
            } catch (error) {
                console.error(`HTTPSda Xatolik bormi deymanda ${error}`)
            }
        };
        fetchData()
        Aos.init({
            duration: 600
        })
    }, [])
    return (
        <div className="home-page">
            <div className='home-page-1'>
                <div className="home-page1-wrap">
                    <img data-aos="fade-right" className='home-page1-pimg' src={homePageWrap} alt="" />
                    <h1 data-aos="zoom-in" className='home-page1-ph1'>DASTURLASHNI QULAY MUHITDA O‘RGANING</h1>
                </div>
            </div>
            <div className="home-page-2">
                {data.map((item, id) => (
                    <div className='home-page-2-1' key={id}>
                        <h1 className='home-page-2-1-1'>{item.h1}</h1>
                        <p>{item.write}</p>
                    </div>
                ))}
                <div className='home-page-2-or'>
                    {count.map((item, id) => (
                        <div className='home-page-2-2' key={id}>
                            <img src={item.image} alt="" />
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
                                <img data-aos="flip-up" src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="home-page-3">
                <div className="home-page-3-1">
                    <p className='home-page-3-p1'>Biz haqimizda</p>
                    <h1>Sun'iy intellekt yordamida boshqariladigan ta'lim tizimi va zamonaviy atmosfera sizning muvaffaqiyatingiz garovidir.</h1>
                    <p className='home-page-3-p2'>Xorazimiy IT Akademiyasi nafaqat O'zbekistondagi, balki O'rta Osiyodagi birinchi va eng katta IT Akademiya bo'lib, bu yerda sun'iy intellekt yordamida ta'lim berishning innovatsion usuli yo'lga qo'yilgan. Zamonaviy texnologiyalar, 24/7 ishlaydigan o'quv kampusi, mingga yaqing iMac'lar va qulay sharoitlar sizga haqiqiy dasturchi bo'lib yetishish imkonini beradi.</p>
                </div>
                <div className="home-page-3-2">
                    {iscount.map((item, id) => (
                        <div className='fed' key={id}>
                            <img data-aos='fade-down-left' src={item.image} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-page-4">
                
            </div>
        </div>
    )
}

export default Home