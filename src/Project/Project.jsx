import React from "react";
import "./Project.css";
import MyPortfolioWebsite from "../img/MyPortfolioWebsite.png";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div>
      <section id="Project">
        <div className="Project-container">
          <h1>Project</h1>
          <div className="Project-box">
            <img className="MyPortfolioWebsite" src={MyPortfolioWebsite} />
            <div className="Project-text">
              <div className="Project-box-header">
              <h2>Portfolio Website </h2>
              <div className="Project-icon">
              <p>ดูเว็บไซต์</p>
              <a  className="Github-icon" href="#"><FaGithub/></a>
              </div>
              </div>
              <p className="Project-text-detail">
                พัฒนาเว็บไซต์สำหรับแนะนำตัวเอง โดยใช้ HTML, CSS, และ JavaScript,
                React และ Vite
              </p>
              <div className="Project-tech">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Vite</p>
                <p>React</p>
              </div>
            </div>
          </div>

          <div className="Project-box">
            <img className="MyPortfolioWebsite" src={MyPortfolioWebsite} />
            <div className="Project-text">
              <div className="Project-box-header">
              <h2>Hero Search Website </h2>
              <div className="Project-icon">
              <p>ดูเว็บไซต์</p>
              <a  className="Github-icon" href="#"><FaGithub/></a>
              </div>
              </div>
              <p className="Project-text-detail">
              พัฒนาเว็บไซต์สำหรับค้นหาข้อมูลเกี่ยวกับ Super Hero โดยใช้ HTML, CSS, และ JavaScript
              </p>
              <div className="Project-tech">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Vite</p>
                <p>React</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
