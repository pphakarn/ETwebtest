import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const ResumeAgolf = () => {
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
                                    src="/picture/Teacher/a'goft1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์วุฒิกานต์ หงษ์เวียงจันทร์
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    อาจารย์ประจำสาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 mb-8 relative pt-6">
                                <h3 className="absolute -top-3 left-4 bg-[#2E4057] px-2 text-[#66CCFF] font-bold text-sm tracking-wide">
                                    ข้อมูลติดต่อ
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-sm font-light">
                                    <FaEnvelope className="text-[#66CCFF]" />
                                    <span className="break-all">Woottikarnhon@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>097-3393325</span>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="w-full">
                                <h3 className="text-lg font-bold border-b border-gray-500 pb-2 mb-4 text-[#66CCFF]">
                                    วุฒิการศึกษา
                                </h3>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-white text-base">ปริญญาโท</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>วศ.ม.วิศวกรรมศาสตร์และเทคโนโลยี หลักสูตรนานาชาติ</li>
                                        <li>สถาบันการจัดการปัญญาภิวัฒน์</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>วศ.บ.วิศวกรรมคอมพิวเตอร์</li>
                                        <li>สถาบันการจัดการปัญญาภิวัฒน์</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์วุฒิกานต์ หงษ์เวียงจันทร์
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    อาจารย์ประจำสาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ
                                </p>
                            </div>

                            <div className="bg-[#2E4057] grow">
                                <div className="bg-[#EAF4FC] h-full rounded-tl-none md:rounded-tl-xl p-8 md:p-12 text-[#2E4057]">
                                    <section className="mb-8">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ทำงาน
                                        </h3>
                                        <div className="mb-2">
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2567 - ปัจจุบัน</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ประจำสาขาเทคโนโลยีดิจิทัลและสารสนเทศ คณะวิศวกรรมศาสตร์ PIM
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2561 - 2567</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                ผู้ช่วยสอน (TA) คณะวิศวกรรมศาสตร์ PIM
                                            </p>
                                        </div>
                                    </section>

                                    {/* Teaching Experience */}
                                    <section className="mb-0">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ด้านการสอน/ฝึกอบรม
                                        </h3>
                                        {/* <div className="mb-4">
                                            <p className="font-bold text-base mb-2">วิชาที่สอนระดับปริญญาตรี สถาบันการจัดการปัญญาภิวัฒน์</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>1312101 เทคโนโลยีดิจิทัลและสารสนเทศในธุรกิจ</li>
                                                <li>1311104 การสื่อสารและการนำเสนอทางวิชาชีพเทคโนโลยีสารสนเทศ</li>
                                                <li>1311103 สถิติสำหรับเทคโนโลยีสารสนเทศ</li>
                                                <li>1311205 โครงงานดิจิทัลเทคโนโลยี 1</li>
                                                <li>1311306 โครงงานดิจิทัลเทคโนโลยี 2</li>
                                            </ul>
                                        </div> */}

                                        <div>
                                            <p className="font-bold text-base mb-2">คอร์สอบรม</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>Blockchain</li>
                                                <li>NLP and Computer Vision</li>
                                                <li>Cybersecurity Penetration Testing</li>
                                                <li>Full Stack Developer</li>
                                                <li>Generative AI</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section className="mt-4">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            รางวัล
                                        </h3>
                                        <div>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>อาจารย์ที่มีการจัดการเรียนการสอนยอดเยี่ยม ประจำปีการศึกษา 2567</li>
                                            </ul>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </main>
                    </div>
                    <section className="w-full py-8 px-8">
                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4  text-[#2E4057]">
                            ประวัติการตีพิมพ์
                        </h3>
                        <ul className="list-disc list-outside ml-4 text-sm space-y-3 text-gray-700 text-justify leading-relaxed">
                            <li>
                                <span className="font-semibold"> Development of an online election system for students in the faculty of engineering and technology</span>
                            </li>
                            <li>
                                <span className="font-semibold"> Analyzing of crowdfunding projects using BERT sentence summarization</span>
                            </li>
                            <li>
                                <span className="font-semibold"> Comparison of keywords extraction techniques in Kickstarter and Indiegogo projects</span>
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

export default ResumeAgolf;