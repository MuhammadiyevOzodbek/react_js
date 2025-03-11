import React, { useEffect, useState } from 'react'
import './CourseStyle.css'
import Aos from 'aos'
import { Link } from 'react-router-dom'

function Course() {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetch('https://mmcqthzpqwjfxtjjpjky.supabase.co/storage/v1/object/sign/json/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqc29uL2RiLmpzb24iLCJpYXQiOjE3NDE2OTQzNDIsImV4cCI6MTc0MjI5OTE0Mn0.pR_Wf8PnDDmacUm9q1nxflA_G3bwcYNiwk-G2WWzCBc')
                const response = await request.json()
                setData(response.coursePageTwo)
                console.log(response.coursePageTwo);
            }
            catch (error) {
                console.error(`Hatolikni tuzating ${error}`)
            }
        }
        fetchData()
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div className="course-page">
            <div className="course-page-1">
                <div data-aos="zoom-in" className='course-page-1d'>
                    <p>Kurslar va Ta'lim</p>
                    <h1>Biz bilan yuqori cho'qqilarga chiqing</h1>
                </div>
            </div>
            <div className="course-page-2">
                {data.map((item, id) => (
                    <div className='course-page-2d' key={id}>
                        <img src={item.image} alt="images Course" />
                        <div>
                            <h2>{item.write}</h2>
                            <p>{item.desc}</p>
                            <Link to={`/course/${item.id}`}><button>Yozdirish</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Course
