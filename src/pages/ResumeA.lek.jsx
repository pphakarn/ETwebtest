import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const ResumeAlek = () => {
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
                                    src="picture/Teacher/alek1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์ดนัยเลิศ ติยะรัตนาชัย
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
                                    <span className="break-all">danailerttiy@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>086-349-5970</span>
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
                                        <li>ค.อ.ม.เทคโนโลยีการออกแบบผลิตภัณฑ์อุตสาหกรรม</li>
                                        <li>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li> ศ.บ.ออกแบบพาณิชยศิลป์</li>
                                        <li>มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์ดนัยเลิศ ติยะรัตนาชัย
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
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2563 - ปัจจุบัน</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ประจำสาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ คณะวิศวกรรมศาสตร์และเทคโนโลยี<br />
                                                สถาบันการจัดการปัญญาภิวัฒน์
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2550 - 2563</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ประจำหลักสูตร สาขาวิชาการออกแบบกราฟิกและมัลติมีเดีย คณะสหวิทยาการ<br />
                                                มหาวิทยาลัยคริสเตียน
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ. 2558 - 2563</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                กรรมการผู้จัดการ <br />
                                                บริษัท ดราโกโมะ จำกัด
                                            </p>
                                        </div>
                                    </section>

                                    {/* Teaching Experience */}
                                    <section className="mb-0">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ด้านการสอน/ฝึกอบรม
                                        </h3>
                                        <div>
                                            <p className="font-bold text-base mb-2">ฝึกอบรม</p>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>ประกาศนียบัตร ด้านการผ่านหลักสูตรอบรมภายใต้โครงการประกวดแผนการตลาดธุรกิจซอฟต์แวร์ดีเด่นแห่งชาติ ธันวาคม 2553</li>
                                                <li>Certificate of Proficiency in Studio Sound Engineer#16 June 2007 GEN X  ACADEMY </li>
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
                                วรรณวิภา วงศ์วิไลสกุล, กรณิศ ศรีสัมพันธ์ และ
                                <span className="font-semibold">ดนัยเลิศ ติยะรัตนาชัย</span> (2560).
                                การออกแบบโมชันอินโฟกราฟิกเพื่อแนะนำบทบาทของฝ่ายทรัพยากรมนุษย์ในองค์กร.
                                ใน <span className="italic">การประชุมวิชาการระดับชาติ ปัญญาภิวัฒน์ระดับชาติ ครั้งที่ 7 “Smart Agriculture and Food Management for Sustainability”</span>,
                                2 มิถุนายน 2560, นนทบุรี, สถาบันการจัดการปัญญาภิวัฒน์, หน้า G158-G168.
                            </li>

                            <li>
                                วรรณวิภา วงศ์วิไลสกุล และ
                                <span className="font-semibold">ดนัยเลิศ ติยะรัตนาชัย</span> (2561).
                                การประยุกต์ใช้แอนิเมชันสำหรับเด็ก.
                                <span className="italic">วารสารมหาวิทยาลัยคริสเตียน</span>, 24(2), 306-319.
                            </li>

                            <li>
                                <span className="font-semibold">ดนัยเลิศ ติยะรัตนาชัย</span>.
                                สารนิพนธ์: การออกแบบสื่อประชาสัมพันธ์ บริษัท ดิจิดรีม จำกัด (2549)
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

export default ResumeAlek;