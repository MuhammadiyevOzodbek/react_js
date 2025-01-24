import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import homePageWrap from '../../../../public/iconDoc/Doc icon.png'
function Home() {
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    const [isdata, setIsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch("https://vqdmljutsvgbzlziztzm.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzM3NzIyNjczLCJleHAiOjE3MzgzMjc0NzN9.ETdmYriVO1QqegbbIm3ic-SuMvP-RcfyDRnURpK5LHY&t=2025-01-24T12%3A44%3A32.760Z")
                const response = await request.json()
                setData(response.homePageOne)
                setCount(response.homePageTwo)
                setIsData(response.homePageThree)
            } catch (error) {
                console.error(`HTTPSda Xatolik bormi deymanda ${error}`)
            }
        };
        fetchData()
    }, [])
    return (
        <div className="home-page">
            <div className='home-page-1'>
                <div className="home-page1-wrap">
                    <img className='home-page1-pimg' src={homePageWrap} alt="" />
                    <h1 className='home-page1-ph1'>DASTURLASHNI QULAY MUHITDA O‘RGANING</h1>
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
                    <h1>Bizning ish jarayonlarimiz</h1>
                    <div className='home-page2-or1'>
                        {isdata.map((item, id) => (
                            <div className='card' key={id}>
                                <img src={item.image} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home