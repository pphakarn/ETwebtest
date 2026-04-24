import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const ResumePkanda = () => {
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
                                    src="picture/Teacher/pkanda1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    นางสาวกานดา เสือน้อย
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    ผู้บริหารกลุ่มงาน
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="w-full border-2 border-dashed border-gray-400 rounded-lg p-4 mb-8 relative pt-6">
                                <h3 className="absolute -top-3 left-4 bg-[#2E4057] px-2 text-[#66CCFF] font-bold text-sm tracking-wide">
                                    ข้อมูลติดต่อ
                                </h3>
                                <div className="flex items-center gap-2 mb-2 text-sm font-light">
                                    <FaEnvelope className="text-[#66CCFF]" />
                                    <span className="break-all">kandasat@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>0-2855-1280</span>
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
                                        <li>บธ.ม. การจัดการ</li>
                                        <li>มหาวิทยาลัยธุรกิจบัณฑิตย์</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li> มธ.บ. บริหารธุรกิจ สาขาคอมพิวเตอร์ธุรกิจ</li>
                                        <li>มหาวิทยาลัยราชภัฎอุตรดิตถ์</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    นางสาวกานดา เสือน้อย
                                </h1>
                                <p className="text-md md:text-lg text-gray-300 font-light">
                                    ผู้บริหารกลุ่มงาน
                                </p>
                            </div>

                            <div className="bg-[#2E4057] grow">
                                <div className="bg-[#EAF4FC] h-full rounded-tl-none md:rounded-tl-xl p-8 md:p-12 text-[#2E4057]">
                                    <section className="mb-8">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ประสบการณ์ทำงาน
                                        </h3>
                                        <div className="mb-2">
                                            <p className="font-bold text-base text-[#2E4057]">PANYAPIWAT INSTITUTE OF MANAGEMENT</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                Manager (Student Affairs Manager and Secretary) - present <br />
                                                Senior officer (Faculty of Engineering and Technology) - 2022
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">KRIRK UNIVERSITY</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                Head of the Career Guidance and Employment Center - 2021
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">PANYAPIWAT INSTITUTE OF MANAGEMENT</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                Senior officer (Business Incubation Center) - 2020
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">DHURAKIJ PUNDIT UNIVERSITY</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                officer (Student Affairs) - 2019 <br />
                                                officer (Careerprep.) - 2017 <br />
                                                officer (TLC) - 2014
                                            </p>
                                        </div>
                                    </section>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                        {/* Teaching Experience */}
                                        <section>
                                            <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                                ความเชี่ยวชาญ
                                            </h3>
                                            <div>
                                                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                    <li>Capcut</li>
                                                    <li>CANVA</li>
                                                    <li>AI Skill</li>
                                                    <li>MS Office </li>
                                                    <li>Wordpress</li>
                                                    <li>Admin Facebook Page / website/ Tiktok/ Youtube</li>
                                                </ul>
                                            </div>
                                        </section>

                                        <section>
                                            <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4 text-[#2E4057]">
                                                รางวัลเกียรติยศ
                                            </h3>
                                            <ul className="list-disc list-outside ml-4 text-sm space-y-3 text-gray-700 text-justify leading-relaxed">
                                                <li>
                                                    <strong>รางวัลบุคลากรดีเด่นระดับหัวหน้าศูนย์</strong> <br />
                                                    <p>มหาวิทยาลัยเกริก ,2022</p>
                                                </li>
                                                <li>
                                                    <strong>รางวัลบุคลากรดีเด่นระดับเจ้าหน้าที่</strong> <br />
                                                    <p>มหาวิทยาลัยธุรกิจบัณฑิตย์ ,2018</p>
                                                </li>
                                            </ul>
                                        </section>
                                    </div>

                                </div>
                            </div>
                        </main>
                    </div>

                </motion.div>
            </div>

            <section>
                <Footer />
            </section>
        </>
    );
};

export default ResumePkanda;