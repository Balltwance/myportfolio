import React from "react";
import "./Home.css";
import Navbar from "../navbar/navbar";
import profile from "../img/one.webp";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section id="Home">
        <div className="container">
          <img className="profile" src={profile} alt="Profile" />
          <div className="container-box">
            <div className="text">
              <h1>ดนุพล เรือมอัมพร</h1>
              <p>
                ผมเป็นนักศึกษาปีที่ 3 ที่สนใจด้าน Front-end Developer
                โดยถนัดการใช้ HTML, CSS, JavaScript และ React
                มีประสบการณ์ทำโปรเจกต์เพื่อฝึกฝนทักษะ
                พร้อมเปิดรับและเรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ
                และกำลังมองหาโอกาสในการฝึกงานเพื่อพัฒนาศักยภาพและสร้างผลงานที่มีคุณภาพยิ่งขึ้น
              </p>
            </div>

            <div className="box-link">
              <button className="btn-resume" href="/resume.pdf" download>
                ดาวน์โหลด Resume
              </button>
              <a
                href="https://github.com/Balltwance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <a href="mailto:example@gmail.com">
                <TfiEmail className="icon" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
