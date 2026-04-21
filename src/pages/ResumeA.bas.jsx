import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const ResumeAbas = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-400 flex justify-center items-start py-10 font-sans">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="w-full max-w-[1000px] bg-[#EAF4FC] shadow-2xl overflow-hidden rounded-xl mt-20"
                >
                    <div className="flex flex-col md:flex-row">
                        <aside className="w-full md:w-[35%] bg-[#2E4057] text-white p-8 flex flex-col items-center shrink-0 rounded-tl-xl md:rounded-tl-xl rounded-tr-xl md:rounded-tr-none rounded-bl-none md:rounded-bl-xl rounded-br-none md:rounded-br-xl">

                            {/* Profile Image */}
                            <div className="w-48 h-48 rounded-full border-8 border-[#5D6D7E] overflow-hidden shadow-lg mb-8 shrink-0">
                                <img
                                    src="picture/Teacher/abas1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    ผู้ช่วยศาสตราจารย์ ดร.พรศักดิ์ ปรีเลขา
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    ผู้ช่วยคณบดี ฝ่ายกิจการนักศึกษาและห้องปฏิบัติการ
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 mb-8 relative pt-6">
                                <h3 className="absolute -top-3 left-4 bg-[#2E4057] px-2 text-[#66CCFF] font-bold text-sm tracking-wide">
                                    ข้อมูลติดต่อ
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-sm font-light">
                                    <FaEnvelope className="text-[#66CCFF]" />
                                    <span className="break-all">pornsakpree@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>02-855-0340</span>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="w-full">
                                <h3 className="text-lg font-bold border-b border-gray-500 pb-2 mb-4 text-[#66CCFF]">
                                    วุฒิการศึกษา
                                </h3>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-white text-base">ปริญญาเอก</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>ปร.ด.สาขาวิชาเทคโนโลยีสารสนเทศ</li>
                                        <li>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-white text-base">ปริญญาโท</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>วท.ม.สาขาวิชาเทคโนโลยีสารสนเทศ</li>
                                        <li>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>ศศ.บ สารสนเทศศาสตร์</li>
                                        <li>มหาวิทยาลัยมหาสารคาม</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    ผู้ช่วยศาสตราจารย์ ดร.พรศักดิ์ ปรีเลขา
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    ผู้ช่วยคณบดี ฝ่ายกิจการนักศึกษาและห้องปฏิบัติการ
                                </p>
                            </div>

                            <div className="bg-[#2E4057] grow">
                                <div className="bg-[#EAF4FC] h-full rounded-tl-none md:rounded-tl-xl p-8 md:p-12 text-[#2E4057]">
                                    <section className="mb-8">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ทำงาน
                                        </h3>
                                        <div className="mb-2">
                                            {/* <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2550 - ปัจจุบัน</p> */}
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                ผู้ช่วยคณบดีฝ่ายกิจการนักศึกษา คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์
                                            </p>
                                             <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ประจำสาขาเทคโนโลยีสารสนเทศ คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์
                                            </p>
                                        </div>
                                    </section>
                                    {/* Teaching Experience */}
                                    <section className="mb-0">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ด้านการสอน/ฝึกอบรม
                                        </h3>
                                        <div className="mb-4">
                                            <p className="font-bold text-base mb-2">วิชาที่สอนระดับปริญญาตรี สถาบันการจัดการปัญญาภิวัฒน์</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>1312102 จริยธรรมและมาตรฐานทางเทคโนโลยีสารสนเทศ</li>
                                                <li>1312206 ความมั่นคงของเทคโนโลยีสารสนเทศ</li>
                                                <li>1312211 โครงสร้างคอมพิวเตอรและระบบปฏิบัติการ</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-bold text-base mb-2">ฝึกอบรม</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>The 12th CCNA 1-2 for Instructor of Cisco Networking Academy Program</li>
                                                <li>นวัตกรรมและอุตสาหกรรมอัจฉริยะ: โอกาสหรือความอยู่รอดของธุรกิจและแรงงานไทยในอนาคต</li>
                                                <li>การอบรมเชิงปฎิบัติการ เทคโนโลยีบล็อกเชนและสกุลเงินดิจิตอล (เบื้องต้น)</li>
                                                <li>หลักสูตรการพัฒนาทักษะด้านความมั่นคงปลอดภัยไซเบอร์ (Skill Development in Cybersecurity)</li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </main>
                    </div>
                    <section className="w-full py-8 px-8">
                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4  text-[#2E4057]">
                            ผลงานทางวิชาการ/งานวิจัย
                        </h3>
                        <ul className="list-disc list-outside ml-4 text-sm space-y-3 text-gray-700 text-justify leading-relaxed">
                            <li>การเพิ่มประสิทธิภาพการตรวจสอบโครงข่ายร้านค้าปลีก. ประชุมวิชาการระดับชาติปัญญาภิวัฒน์ ครั้งที่ 6 (ISBN 978-616-7851-03-7)</li>
                            <li>ทักษะการใช้เทคโนโลยีสารสนเทศและการสื่อสารเพื่อการเรียนรู้ของนักเรียนชั้นมัธยมศึกษา อำเภอปากเกร็ด จังหวัดนนทบุรี. ประชุมวิชาการระดับชาติปัญญาภิวัฒน์ ครั้งที่ 6 (ISBN 978-616-7851-03-7)</li>
                            <li>การเปรียบเทียบประสิทธิภาพการค้นคืนและการจําแนกหมวดหมู่ภาพ ด้วยคุณลักษณะรูปร่าง. The 13th National Conference on Computing and Information Technology (NCCIT2017)</li>
                            <li>Mobile interaction and security issues. วารสารวิทยาศาสตร์และเทคโนโลยี หัวเฉียวเฉลิมพระเกียรติ. 5(1), 113-125. (TCI กลุ่ม2)</li>
                            <li>แอปพลิเคชันสืบค้นเนื้อหาของวีดิทัศน์โดยใช้ข้อความ. วารสารวิทยาศาสตร์และเทคโนโลยี หัวเฉียวเฉลิมพระเกียรติ. 6(2), 69-80. (TCI กลุ่ม2)</li>
                            <li>โปรแกรมรวบรวมข้อมูลจากเฟซบุ๊กแฟนเพจ. วารสารวิทยาศาสตร์และเทคโนโลยี หัวเฉียวเฉลิมพระเกียรติ. 6(1), 38-53. (TCI กลุ่ม2)</li>
                            <li>An Effect of Gamification on Education under Online Lives Teaching. International Scientific Journal of Engineering and Technology (ISJET). 4(2), pp.20-27</li>
                            <li>An asymmetric encryption method for 3D mesh model using elgamal with elliptic curve cryptography. The Indonesian Journal of Electrical Engineering and Computer Science (IJEECS). 27(2), pp.959~969</li>
                            <li>การพัฒนาระบบสนับสนุนการตัดสินใจสำหรับจัดสรรบุคลากรในโครงการพัฒนาซอฟต์เเวร์. ประชุมวิชาการปัญญาภิวัฒน์ระดับชาติ ครั้งที่ 14</li>
                        </ul>
                    </section>

                </motion.div>
            </div>

            <section>
                <Footer />
            </section>
        </>
    );
};

export default ResumeAbas;