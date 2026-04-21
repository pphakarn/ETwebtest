import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const Resume = () => {
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
                                    src="picture/Teacher/apat1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    ผู้ช่วยศาสตราจารย์ ดร.วรรณวิภา วงศ์วิไลสกุล
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    รองคณบดี ฝ่ายบริหาร แผนงานและประกันคุณภาพ
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 mb-8 relative pt-6">
                                <h3 className="absolute -top-3 left-4 bg-[#2E4057] px-2 text-[#66CCFF] font-bold text-sm tracking-wide">
                                    ข้อมูลติดต่อ
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-sm font-light">
                                    <FaEnvelope className="text-[#66CCFF]" />
                                    <span className="break-all">wanvipawon@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>02-855-0328</span>
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
                                        <li>มหาวิทยาลัยรังสิต</li>
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-white text-base">ปริญญาโท</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>วท.ม. สาขาวิชาเทคโนโลยีสารสนเทศ</li>
                                        <li>มหาวิทยาลัยศรีปทุม</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>บธ.บ. (คอมพิวเตอร์ธุรกิจ) เกียรตินิยมอันดับ 1</li>
                                        <li>มหาวิทยาลัยศรีปทุม</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    ผู้ช่วยศาสตราจารย์ ดร.วรรณวิภา วงศ์วิไลสกุล
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    รองคณบดี ฝ่ายบริหาร แผนงานและประกันคุณภาพ
                                </p>
                            </div>

                            <div className="bg-[#2E4057] grow">
                                <div className="bg-[#EAF4FC] h-full rounded-tl-none md:rounded-tl-xl p-8 md:p-12 text-[#2E4057]">
                                    <section className="mb-8">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ทำงาน
                                        </h3>
                                        <div className="mb-2">
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2550 - ปัจจุบัน</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ผู้รับผิดชอบหลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ คณะวิศวกรรมศาสตร์และเทคโนโลยี<br />
                                                สถาบันการจัดการปัญญาภิวัฒน์
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
                                                <li>1312101 เทคโนโลยีดิจิทัลและสารสนเทศในธุรกิจ</li>
                                                <li>1311104 การสื่อสารและการนำเสนอทางวิชาชีพเทคโนโลยีสารสนเทศ</li>
                                                <li>1311103 สถิติสำหรับเทคโนโลยีสารสนเทศ</li>
                                                <li>1311205 โครงงานดิจิทัลเทคโนโลยี 1</li>
                                                <li>1311306 โครงงานดิจิทัลเทคโนโลยี 2</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <p className="font-bold text-base mb-2">ฝึกอบรม</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>โครงการอบรมให้ความรู้ด้านการประกันคุณภาพการศึกษา ภายใต้เกณฑ์ AUN-QA "กิจกรรมอบรมผู้ตรวจประเมินตามเกณฑ์ AUN-QA"</li>
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
                            <li>
                                <span className="font-semibold">วรรณวิภา วงศ์วิไลสกุล</span>, ชม กิมป้าน, ธีรเมธ กันธิมา, ไพบูลย์ แก้วมงคล (2567). การออกแบบและพัฒนาต้นแบบเว็บไซต์ขายสินค้าออนไลน์ กรณีศึกษาร้านค้าพีไอเอ็ม สมาร์ท. ใน <span className="italic">การประชุมวิชาการปัญญาภิวัฒน์ ระดับชาติ ครั้งที่ 14</span> (หน้า 449-466). สถาบันการจัดการปัญญาภิวัฒน์.
                            </li>
                            <li>
                                ดนัยเลิศ ติยะรัตนาชัย, <span className="font-semibold">วรรณวิภา วงศ์วิไลสกุล</span>, ชนานันท์ นาศร, พิชญา แผนคง (2567). การพัฒนาระบบสนับสนุนการตัดสินใจ สำหรับจัดสรรบุคลากรในโครงการพัฒนาซอฟต์แวร์. ใน <span className="italic">การประชุมวิชาการปัญญาภิวัฒน์ ระดับชาติ ครั้งที่ 14</span> (หน้า 419-433). สถาบันการจัดการปัญญาภิวัฒน์.
                            </li>
                            <li>
                                <span className="font-semibold">วรรณวิภา, ว.</span>, Natidhorn, K., & Chumphon, W. (2024). Developing web application to recommend internship selection for undergraduate students. <span className="italic">วารสารดิจิทัล ธุรกิจ และสังคมศาสตร์</span>, 10(1), 1-17. มหาวิทยาลัยรังสิต.
                            </li>
                            <li>
                                Uraiwan Inyaem, Weena Janratchakool and <span className="font-semibold">Wanvipa Wongvilaisakul</span>. (2022). An Improved Classroom Effectiveness of Learning Management in Higher Education Using Active Learning Techniques with Case Study of Students Based on Mathematics and Computer Science Background. <span className="italic">The 11th Rajamangala University of Technology International Conference “RMUT Driving toward Innovation, Economy and Green Technology for Sustainable Development”</span>, Thailand, 20 พฤษภาคม 2022.
                            </li>
                            <li>
                                อดิศร แขกซอง, วสุธาน ตันบุญเฮ, <span className="font-semibold">วรรณวิภา วงศ์วิไลสกุล</span> และพงศกร สมอไทย (2563). การศึกษาการเรียนรู้แบบเสริมกําลังกับ OpenAI Gym บน สภาพแวดล้อมแบบ High-Way. <span className="italic">The 11th National and the 5th International PIM Conference</span> July 16, 2021. p604.
                            </li>
                            <li>
                                วรพร เมืองธนชัย, สุมามาลย์ ปานคา, <span className="font-semibold">วรรณวิภา วงศ์วิไลสกุล</span> และ ดนัยเลิศ ติยะรัตนาชัย (2561). การวิเคราะห์องค์ประกอบเชิงยืนยันของพฤติกรรมการใช้ E-Commerce ของประชากรในเขตกรุงเทพมหานครและปริมณฑล. <span className="italic">การประชุมวิชาการปัญญาภิวัฒน์ระดับชาติ ครั้งที่ 9 และ นานาชาติ ครั้งที่ 2 และการประชุมวิชาการ Smart Logistics Conference ครั้งที่ 2</span>, 5 กรกฎาคม 2562 สถาบันการจัดการปัญญาภิวัฒน์ B 5-16.
                            </li>
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

export default Resume;