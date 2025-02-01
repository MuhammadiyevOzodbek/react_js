import React, { useEffect, useState } from 'react'
import './ContactStyle.css'
import { Canvas } from '@react-three/fiber'
import { PresentationControls, Stage, useGLTF } from '@react-three/drei'


function Contact() {
    const Model = (props) => {
        const { scene } = useGLTF('/earth_contact.glb')
        return <primitive object={scene} scale={0.01} {...props} />
    }
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    
    const sendMassage = async () => {
        const botToken = "8069748649:AAGx-_3UpT8904XtXWaYUBDWeebhvUYk4Ow"
        const chatId = "5481848326"
    
        const text = `👤 *Ism:* ${name}\n📩 *Xabar:* ${number}\nBepul konsultatsiya`;
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
        <div className='contact'>
            <div className='contact-model'>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                    <PresentationControls speed={1} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
                        <Stage environment={null}>
                            <Model scale={1.5} />
                        </Stage>
                    </PresentationControls>
                </Canvas>
            </div>
            <div className='contact-1'>
                <h1>Bizdan bepul konsultatsiya olish</h1>
                <form>
                    <input className='contact-text' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Ismingiz...' />
                    <input className='contact-number' value={number} onChange={(e) => setNumber(e.target.value)} type="number" placeholder='Tel raqamingiz...' />
                </form>
                <button onClick={sendMassage} className='contact-btn'>Yuborish</button>
            </div>
        </div>
    )
}

export default Contact