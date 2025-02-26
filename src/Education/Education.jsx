import React from 'react'
import './Education.css'
import { PiStudentFill } from "react-icons/pi";
import SiamLogo from '../img/Siam_University_logo.png';
import DP3Logo from '../img/DP3.logo.jpg'
import KatomLogo from '../img/katom_logo.png'
const Education = () => {
  return (
    <div>
        <section id='Education'>
       
            <div className="Edu-container">
                <h1>ประวัติการศึกษา</h1>

                <div className="Edu-detail">
                <div className="place-container">
                <img className='place-logo' src={SiamLogo} alt="" />
                <div className="place-text">
                <p className='text-year'>2022-ปัจจุบัน</p>
                <h2 className='text-eduname'>มหาวิทยาลัยสยาม</h2>
                <p className='text-level'>คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิมเตอร์ (ชั้นปีที่ 3)</p>


                </div>
                </div>
                
                <div className="place-container">
                <img className='place-logo2' src={DP3Logo} alt="" />
                <div className="place-text">
                <p className='text-year'>2016-2022</p>
                <h2 className='text-eduname'>โรงเรียนทีปังกรวิทยาพัฒน์ (ทวีวัฒนา) ในพระราชูปถัมภ์ฯ</h2>
                <p className='text-level'>ระดับมัธยมศึกษา</p>
                </div>
                </div>

                <div className="place-container">
                <img className='place-logo3' src={KatomLogo} alt="" />
                <div className="place-text">
                <p className='text-year'>2010-2016</p>
                <h2 className='text-eduname'>โรงเรียนบ้านกระทุ่มล้ม</h2>
                <p className='text-level'>ระดับประถมศึกษา</p>
                </div>
                </div>
                </div>
               
            </div>
        </section>
    </div>
  )
}

export default Education
