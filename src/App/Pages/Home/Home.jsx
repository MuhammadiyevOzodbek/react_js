import React, { useEffect, useState } from 'react'
import './HomeStyle.css'
import homePageWrap from '../../../../public/iconDoc/Doc icon.png'
function Home() {
    const [data, setData] = useState([])
    const [count, setCount] = useState([])
    useEffect(() =>{
        const fetchData = async () => {
            try{
                const request = await fetch("https://vqdmljutsvgbzlziztzm.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzM3NjIwNDk1LCJleHAiOjE3NjkxNTY0OTV9.L-zH-VHjrVckLmHRlEkdD3eK1wesfH3VlwwiDmwxPH0&t=2025-01-23T08%3A21%3A36.119Z")
                const response = await request.json()
                setData(response.homePageOne)
                setCount(response.homePageTwo)
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
            </div>
        </div>
    )
}

export default Home