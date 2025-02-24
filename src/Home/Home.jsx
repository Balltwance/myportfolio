import React from 'react';
import './Home.css';
import Navbar from '../navbar/navbar';
import profile from '../img/one.webp'

const Home = () => {
return (
    <>
        <section id='Home'>
            <div className="container">
                    <img className='profile' src={profile} alt="Profile" />
                <div className="text">
                    <h1>ดนุพล เรือมอัมพร</h1>
                    <p>
                    ผมเป็นนักศึกษาชั้นปีที่ 3 จากมหาวิทยาลัยสยาม สาขาวิทยาการคอมพิวเตอร์ที่มีความสนใจในการพัฒนาเว็บไซต์ Frontend และมีเป้าหมายที่จะเป็น Frontend Developer ระดับมือโปร มีประสบการณ์ในการทำโปรเจกต์ Hero Search Website และมีความสามารถในการใช้เครื่องมือต่าง ๆ ในการออกแบบและพัฒนาเว็บไซต์
                    </p>
                </div>
            </div>
        </section>
    </>
);
}

export default Home;

