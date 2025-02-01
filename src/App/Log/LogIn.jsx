import React, { useEffect, useState } from 'react';
import './LogStyle.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';

function LogIn() {
    const [checked, setChecked] = useState(false);
    const [logIn, setLogIn] = useState('');
    const [passIn, setPassIn] = useState('');
    const [iesa, setIesa] = useState(false);
    const [siuu, setSiuu] = useState(false);

    useEffect(() => {
        setIesa(passIn.length < 8);
        setSiuu(logIn.length < 3);
    }, [passIn, logIn]);  // logIn ham qo‘shildi

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='sing-up'>
            <div data-aos="zoom-out" data-aos-duration="1000" className="sing-form">
                <article>
                    <p>Emailingizni kiriting:</p>
                    <input 
                        type="email" 
                        style={{ border: logIn.length >= 3 ? '2px solid green' : '2px solid red' }} // 2p emas, 2px bo‘lishi kerak
                        value={logIn} 
                        onChange={(e) => setLogIn(e.target.value)} 
                        placeholder='Email...' 
                    />
                </article>
                <article>
                    <p>Parolingizni kiriting:</p>
                    <input 
                        type="password" 
                        style={{ border: passIn.length >= 8 ? '2px solid green' : '2px solid red' }} 
                        value={passIn} 
                        onChange={(e) => setPassIn(e.target.value)} 
                        placeholder='Password...' 
                    />
                </article>
                <label className='checkked'>
                    <input 
                        style={{ width: '20px', cursor: 'pointer' }} 
                        type="checkbox" 
                        checked={checked} 
                        onChange={() => setChecked(!checked)} 
                    />
                    <p>Men hammasiga roziman</p>
                </label>
                <Link to={'/'}>
                    <button onClick={() => console.log(`Ismi: ${logIn}\nParoli: ${passIn}`)} disabled={!checked || iesa || siuu} className='sing-up-btn'>Kirish</button> 
                    {/* suii o'rniga siuu yozildi */}
                </Link>
                <button className='sing-in-exit'><Link to={'/'}>+</Link></button>
            </div>
        </div>
    );
}

export default LogIn;
