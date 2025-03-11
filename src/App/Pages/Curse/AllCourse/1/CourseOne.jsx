import React, { useEffect, useState } from 'react'
import './OneStyle.css'

function CourseOne() {
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("coents"))
        if (savedComments) {
            setComments(savedComments)
        }
    }, [])

    const addComments = () => {
        if (comment.trim() !== "") {
            const newComments = [...comments, comment]
            setComments(newComments)
            localStorage.setItem("coents", JSON.stringify(newComments))
            setComment("")
        }
    }

    const [data, setData] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const req = await fetch('https://mmcqthzpqwjfxtjjpjky.supabase.co/storage/v1/object/sign/json/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqc29uL2RiLmpzb24iLCJpYXQiOjE3NDE2OTQzNDIsImV4cCI6MTc0MjI5OTE0Mn0.pR_Wf8PnDDmacUm9q1nxflA_G3bwcYNiwk-G2WWzCBc')
                const res = await req.json()
                setData(res.courseOneBir)
                setData1(res.courseOneUch)
                setData2(res.courseOneTurt)
            } catch (error) {
                console.error('Hatolik bor', error);
            }
        }
        fetchData()
    }, [])
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const sendMassage = async () => {
        const botToken = "8069748649:AAGx-_3UpT8904XtXWaYUBDWeebhvUYk4Ow"
        const chatId = "5481848326"

        const text = `👤 *Ism:* ${name}\n📩 *Xabar:* ${number}\n3DMax developer`;
        const encodedText = encodeURIComponent(text);

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodedText}&parse_mode=Markdown`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.ok) {
                alert("Xabar yuborildi! 🚀");
                setName("");
                setNumber("");
            } else {
                alert("Xatolik yuz berdi!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Xatolik yuz berdi!");
        }
    }
    return (
        <div className='id-1'>
            <div className="id-one-1">
            </div>
            <div className='id-all'>
                <div className="id-two">
                    <article className='id-two-art'>
                        <input type="text" placeholder='Fikr bildirish...' value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={addComments}>Send</button>
                    </article>
                    <div className="id-two-1">
                        {comments.map((c, index) => (
                            <p key={index}>{c}</p>
                        ))}
                    </div>
                </div>
                <div className="id-three">
                    <div className='id-three-1'>
                        {data.map((item, id) => (
                            <div className='id-three-2' key={id}>
                                <p>{item.p1}</p>
                                <h1>{item.h1}</h1>
                                <p>{item.p2}</p>
                            </div>
                        ))}
                    </div>
                    <div className="id-three-3">
                        <p>O'QUV PROGRAMMASI</p>
                        <h1>3D Max & Interior Design dasturchi kursida siz quyidagilarni o'rganasiz!</h1>
                        {data1.map((item, id) => (
                            <div key={id} className='id-three-4'>
                                <h3>{item.write}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    {data2.map((item, id) => (
                        <div key={id} className="id-three-5">
                            <p className='sup-p'>{item.p}</p>
                            <article>
                                <h3>{item.write}</h3>
                                <p>{item.desc}</p>
                            </article>
                        </div>
                    ))}
                    <div className='id-one-contact'>
                        <h1>Ariza berish</h1>
                        <form>
                            <input placeholder='Ismingiz...' value={name} onChange={(e) => setName(e.target.value)} className='id1-contact-t' type="text" />
                            <input placeholder='Tel raqamingiz...' value={number} onChange={(e)=> setNumber(e.target.value)} className='id1-contact-n' type="number" />
                        </form>
                        <button onClick={sendMassage} className='id-one-contact'>Yuborish</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseOne
