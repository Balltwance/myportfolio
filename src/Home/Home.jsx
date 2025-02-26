import React from 'react';
import './Home.css';
import Navbar from '../navbar/navbar';
import profile from '../img/one.webp'
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
return (
    <>
        <section id='Home'>
            <div className="container">
                    <img className='profile' src={profile} alt="Profile" />
                    <div className='container-box'>
                <div className="text">
                    <h1>ดนุพล เรือมอัมพร</h1>
                    <p>
                    ผมเป็นนักศึกษาชั้นปีที่ 3 จากมหาวิทยาลัยสยาม สาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในการพัฒนาเว็บไซต์ Frontend และมีเป้าหมายที่จะเป็น Frontend Developer ระดับมือโปร มีประสบการณ์ในการทำโปรเจกต์ Hero Search Website และมีความสามารถในการใช้เครื่องมือต่าง ๆ ในการออกแบบและพัฒนาเว็บไซต์
                    </p>
                </div>
                
                <div className="box-link">
                <button className="btn-resume" href="/resume.pdf" download>ดาวน์โหลด Resume</button>
    <a href="https://github.com/Balltwance" target="_blank" rel="noopener noreferrer">
        <FaGithub className='icon' />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className='icon' />
    </a>
    <a href="mailto:example@gmail.com">
        <TfiEmail className='icon' />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='icon' />
    </a>
                
                </div>
                </div>
            </div>
        </section>
    </>
);
}

export default Home;

