import React, { useState, useRef } from 'react'
import Navbar from '../componentes/Navbar/Navbar'
import "../css/Home.css";
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChevronDown } from "react-icons/fa";
import AnimatedHeadline from '../componentes/AnimatedHeadline';
import Footer from '../componentes/Footer/footer';
import { Link } from 'react-router-dom';
import { personnelData } from '../mockData/data';

const fadeInFromLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const fadeInFromRightVariants = {
    hidden: { opacity: 0, x: 100 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Home = () => {

    const [isHovering, setIsHovering] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovering(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };


    return (
        <>
            <Navbar />
            <header className="home-section relative w-full h-screen">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="video-bg absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="video/v1.mp4" type="video/mp4" />
                </video>

                <div className="home-content relative z-10 flex flex-col justify-center items-center h-full gap-4 md:gap-6">
                    <div className="home-name flex flex-col items-center gap-3 md:gap-4">
                        <img
                            src="picture/DITLOGO.png"
                            alt="DIT Logo"
                            className="w-48 md:w-72 h-auto"
                        />
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    onClick={() => {
                        const nextSection = document.getElementById('intro');
                        if (nextSection) {
                            const offset = 80; // เผื่อความสูงของ Navbar
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = nextSection.getBoundingClientRect().top;
                            const elementPosition = elementRect - bodyRect;
                            const offsetPosition = elementPosition - offset;

                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }}
                >
                    <span className="text-white text-xs md:text-sm font-light tracking-[0.2em] uppercase drop-shadow-md">Scroll</span>
                    <FaChevronDown className="text-white text-lg md:text-xl drop-shadow-md" />
                </motion.div>
            </header>

            <section id='intro' className="py-16 md:py-24 ">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        <motion.div
                            className="bg-[#D4F6FF] rounded-2xl p-8 md:p-10 flex flex-col"
                            variants={fadeInFromLeftVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <h2 className="text-2xl md:text-2xl font-bold text-zinc-700 leading-snug">
                                ก้าวสู่โลกดิจิทัลกับหลักสูตรดิจิทัลไอที
                                <br />
                                ตอบโจทย์ New S-Curve ในอุตสาหกรรม EEC
                            </h2>

                            <p className="text-zinc-600 mt-6 text-lg leading-relaxed">
                                สาขาเทคโนโลยีดิจิทัลและสารสนเทศเน้นทักษะด้านสื่อกราฟิกดิจิทัล
                                การวิเคราะห์ระบบ พัฒนาโปรแกรม และการจัดการโครงการ
                                รวมถึงเรียนรู้การออกแบบ Character และสร้าง ART TOY
                                ด้วยเทคนิค 3D Modeling และ Animation เพื่อต่อยอดสู่การพัฒนาเกมอย่างมืออาชีพ
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-6 border-t border-zinc-700">
                                <a
                                    href="https://intranet.pim.ac.th/internalservices/student_register.php/th/home/signin"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 px-6 py-3 bg-[#3FA2F6] text-white font-semibold rounded-full hover:bg-[#2155CD] transition-colors duration-200 text-lg"
                                >
                                    <FaUserGraduate className="text-base" />
                                    สมัครเรียน
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="group relative w-full h-[450px] md:h-full rounded-2xl overflow-hidden"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            variants={fadeInFromRightVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <video
                                ref={videoRef}
                                src="video/PRDIT.mp4"
                                loop
                                playsInline
                                preload="none"
                                muted={!isHovering}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
                                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    <span className="text-6xl text-white/50 opacity-70">“</span>
                                    คุณก็เป็นได้ <br />
                                    <span className="text-[#3FA2F6]">
                                        Full-Stack Developer
                                    </span>
                                    <span className="text-6xl text-white/50 opacity-70">”</span>
                                </h3>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section >

            <section className="relative overflow-hidden py-16 md:py-24 flex items-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="video/BG1.mp4" type="video/mp4" />
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-5"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        {/* Digital Content */}
                        <motion.div
                            className="rounded-2xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                zIndex: 20,
                                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img src="picture/IT_DigitalContent.png" alt="Digital Content" loading="lazy" decoding="async" className="w-full h-auto" />

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-100 leading-snug mb-2">
                                    ด้านสื่อและกราฟิกดิจิทัล <br /> (Digital Content)
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    ออกแบบสื่อดิจิทัล อินโฟกราฟิก และแอนิเมชัน
                                    เพื่อนำไปต่อยอดในธุรกิจและงานสร้างสรรค์ต่าง ๆ
                                </p>
                            </div>
                        </motion.div>

                        {/* Data Science */}
                        <motion.div
                            className="rounded-2xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                zIndex: 20,
                                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img src="picture/IT_DataScience.png" alt="Data Science" loading="lazy" decoding="async" className="w-full h-auto" />

                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-100 leading-snug mb-2">
                                    ด้านวิทยาการข้อมูล <br /> (Data Science)
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    วิเคราะห์ข้อมูลเชิงลึก ทำเหมืองข้อมูลธุรกิจ
                                    เพื่อช่วยให้การตัดสินใจขององค์กรมีประสิทธิภาพมากขึ้น
                                </p>
                            </div>
                        </motion.div>

                        {/* Digital Structure */}
                        <motion.div
                            className="rounded-2xl overflow-hidden flex flex-col bg-white/5 backdrop-blur-sm"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                zIndex: 20,
                                boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <img src="picture/IT_DigitalStructure.png" alt="Digital Structure" loading="lazy" decoding="async" className="w-full h-auto" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-100 leading-snug mb-2">
                                    ด้านโครงสร้างดิจิทัล <br /> (Digital Structure)
                                </h3>
                                <p className="text-base text-gray-300 leading-relaxed">
                                    สนับสนุนงานระบบดิจิทัล ฮาร์ดแวร์ ซอฟต์แวร์
                                    รวมถึงระบบเครือข่ายและความมั่นคงปลอดภัยขององค์กร
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 border-b-4 border-[#3FA2F6] inline-block pb-1">
                        NEWS & ACTIVITY
                    </h2>

                    <motion.div
                        className="grid grid-cols-1 gap-12"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1.1 */}
                            <motion.div
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img src="picture/ETcamp26.jpg" alt="ET CAMP 2026 Round 2" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-gray-50">
                                    <p className="text-sm font-semibold text-gray-500">4-5 เมษายน 2026</p>
                                    <p className="text-base text-gray-800">ค่ายกล คนวิศวะ “ET CAMP 2026 Round 2” ภารกิจสุดมันส์ในโลกวิศวกรรมที่รวมพลังของน้อง ๆ ม.ปลายสุดเจ๋งไว้ในที่เดียว!</p>
                                </div>
                            </motion.div>

                            {/* Card 1.2 */}
                            <motion.div
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img src="picture/workshop3D25.jpg" alt="Workshop 3D Blender" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-gray-50">
                                    <p className="text-sm font-semibold text-gray-500">21-22 มีนาคม 2026</p>
                                    <p className="text-base text-gray-800">"Workshop 3D Blender : ART TOYS with AI" บรรยากาศการอบรมสุดเข้มข้นตลอด 2 วันเต็ม เพื่อสร้างสรรค์ Art Toy ของตัวเองตั้งแต่ไอเดียจนถึงโมเดล 3D จริง</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 2.1 */}
                            <motion.div
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img src="picture/WorkshopShirt25.jpg" alt="พิธีรับเสื้อปฏิบัติการและเกียร์" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-gray-50">
                                    <p className="text-sm font-semibold text-gray-500">28 มกราคม 2026</p>
                                    <p className="text-base text-gray-800">"พิธีรับเสื้อปฏิบัติการและเกียร์ ประจำปีการศึกษา 2568" เสื้อปฏิบัติการ…สัญลักษณ์แห่งศักดิ์ศรีของความเป็นวิศวกร เพราะเราคือ ET PIM </p>
                                </div>
                            </motion.div>

                            {/* Card 2.2 */}
                            <motion.div
                                className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300"
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", zIndex: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <img src="picture/EECbuu25.jpg" alt="DIT ศึกษาดูงาน & เก็บขยะคืนหาดบางแสน" className="w-full h-auto object-cover" />
                                <div className="p-4 bg-gray-50">
                                    <p className="text-sm font-semibold text-gray-500">7 พฤศจิกายน 2025</p>
                                    <p className="text-base text-gray-800">"DIT ศึกษาดูงาน & เก็บขยะคืนหาดบางแสน" เปิดประสบการณ์เรียนรู้นอกห้องเรียน ณ EEC Automation Park มหาวิทยาลัยบูรพา จังหวัดชลบุรี</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-24 bg-[#193F7D]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="text-white"
                            variants={fadeInFromLeftVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                                สร้างอนาคตที่ดีกับหลักสูตร DIT
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold mb-8 text-[#FFC400]">
                                ผศ.ดร.พรรณเชษฐ์ ณ ลำพูน
                            </h3>
                            <p className="text-lg leading-relaxed font-light">
                                พร้อมหรือยัง...สำหรับการเป็นหนุ่มสาวไอที ที่ท็อปฮิตติดอันดับต้นๆ ที่สุด <br />
                                ในยุคนี้ เพราะเทคโนโลยีไม่ใช้กำลังก้าวไปข้างหน้าอย่างไม่หยุดยั้ง <br />
                                ระบบเครือข่ายคอมพิวเตอร์และสื่อออนไลน์ ต่างก็ต้องการคนดูแลและพัฒนาให้สามารถใช้งานง่าย สะดวกสบายมากยิ่งขึ้นนั่นเอง
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex justify-center"
                            variants={fadeInFromRightVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* กรอบวิดีโอ: ใช้ w-full และ max-w-sm เพื่อกำหนดขนาด และใช้ aspect-[9/16] สำหรับอัตราส่วนแนวตั้ง (9:16) */}
                            <div className="w-full aspect-video shadow-2xl rounded-xl overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    // ใช้ Video ID: n2-c0_BXfLI จาก URL ที่คุณให้มา
                                    src="https://www.youtube.com/embed/n2-c0_BXfLI?controls=1"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-5 pb-4 bg-[#eee] text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-700 mb-6">
                        เรียนจบทำงานอะไรดี?
                    </h2>
                    <AnimatedHeadline />
                </div>
            </section>

            <section className="pt-8 md:pt-5 pb-16 md:pb-5 bg-[#eee]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="flex justify-center"
                            variants={fadeInFromRightVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* กรอบวิดีโอ */}
                            <div className="w-full max-w-xs aspect-9/16 shadow-2xl rounded-xl overflow-hidden">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls
                                    className="w-full h-full object-cover"
                                >
                                    <source src="video/jobs_high_income.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </motion.div>
                        <motion.div
                            className="text-zinc-700"
                            variants={fadeInFromLeftVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                                3 อาชีพรายได้ดีกับหลักสูตร DIT
                            </h2>
                            <h3 className="text-xl md:text-3xl font-bold mb-8 text-[#3FA2F6]">
                                ดร.ชนกานต์ กิ่งแก้ว
                            </h3>
                            <p className="text-lg leading-relaxed font-light">
                                ก้าวสู่สายอาชีพไอทีที่มาแรงที่สุดในยุคดิจิทัล! <br />
                                เรียนกับ DIT (Digital and Information Technology) หลักสูตรที่พร้อมให้คุณ<br />
                                เรียนจริง ฝึกงานจริง และ สร้างทักษะที่ตลาดแรงงานต้องการ <br />
                                เพื่อก้าวสู่ 3 อาชีพรายได้ดีแห่งอนาคต
                            </p>
                            <p className="text-xl leading-relaxed font-light text-[#3FA2F6] mt-3">
                                เทคโนโลยีไม่หยุดนิ่ง แล้วคุณล่ะ... พร้อมจะเริ่มต้นกับ DIT หรือยัง?
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* === ส่วนใหม่: ข้อมูลหลักสูตร (ปรับแต่งให้สวยงาม) === */}
            <section className="py-16 md:py-20 bg-gray-100">
                <div className="container mx-auto px-3">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                        {/* Card 1 (ซ้าย): ข้อมูลหลักสูตร */}
                        <motion.div
                            className="bg-white p-6 md:p-8 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 h-full border border-white/50"
                            variants={fadeInFromLeftVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* หัวข้อ */}
                            <h2 className="text-lg md:text-xl font-extrabold mb-5 text-gray-900 tracking-tight">
                                ข้อมูลหลักสูตร
                            </h2>
                            <div className="w-full h-[2px] bg-black mb-6 rounded-full opacity-80"></div>

                            {/* เนื้อหา */}
                            <ul className="list-disc list-outside pl-5 space-y-4 text-base leading-relaxed text-gray-700 marker:text-black">
                                <li>
                                    <span className="font-bold text-gray-900 block mb-1">ชื่อหลักสูตรภาษาไทย :</span>
                                    หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ
                                </li>
                                <li>
                                    <span className="font-bold text-gray-900 block mb-1">ชื่อหลักสูตรภาษาอังกฤษ :</span>
                                    Bachelor of Science Program in Digital Information and Technology
                                </li>
                            </ul>

                            <div className="mt-4 mb-5">
                                <h3 className="text-lg font-bold text-gray-900 inline-block border-b-2 border-black pb-1">
                                    ชื่อปริญญาและสาขาวิชา
                                </h3>
                            </div>

                            <ul className="list-disc list-outside pl-5 space-y-2 text-base leading-relaxed text-gray-700 marker:text-black">
                                <li><span className="font-bold text-gray-900">ชื่อเต็ม (ไทย) :</span> วิทยาศาสตรบัณฑิต (เทคโนโลยีดิจิทัลและสารสนเทศ)</li>
                                <li><span className="font-bold text-gray-900">ชื่อย่อ (ไทย) :</span> วท.บ. (เทคโนโลยีดิจิทัลและสารสนเทศ)</li>
                                <li><span className="font-bold text-gray-900">ชื่อเต็ม (อังกฤษ):</span> Bachelor of Science (Digital Information Technology)</li>
                                <li><span className="font-bold text-gray-900">ชื่อย่อ (อังกฤษ) :</span> B.Sc. (Digital Information Technology)</li>
                            </ul>
                        </motion.div>

                        {/* Card 2 (ขวา): ระยะเวลาและหน่วยกิต */}
                        <motion.div
                            className="bg-white p-6 md:p-8 rounded-[24px] shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-white/50"
                            variants={fadeInFromRightVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* ส่วนที่ 1: ระยะเวลา */}
                            <div className="mb-8">
                                <h2 className="text-lg md:text-xl font-extrabold mb-5 text-gray-900 tracking-tight">
                                    ระยะเวลาหลักสูตร
                                </h2>
                                <div className="w-full h-[2px] bg-black mb-6 rounded-full opacity-80"></div>
                                <ul className="list-disc list-outside pl-5 text-lg font-bold text-gray-800 marker:text-black">
                                    <li>หลักสูตร 4 ปี (ภาคปกติ)</li>
                                </ul>
                            </div>

                            {/* ส่วนที่ 2: หน่วยกิต */}
                            <div className="grow">
                                <h2 className="text-lg md:text-xl font-extrabold mb-5 text-gray-900 tracking-tight">
                                    หน่วยกิตตลอดหลักสูตร 129 หน่วยกิต
                                </h2>
                                <div className="w-full h-[2px] bg-black mb-6 rounded-full opacity-80"></div>

                                <div className="text-base leading-relaxed text-gray-700">
                                    <ul className="list-disc list-outside pl-5 space-y-2 marker:text-black">
                                        <li>หมวดวิชาศึกษาทั่วไป 30 หน่วยกิต</li>
                                        <li>หมวดวิชาเฉพาะ 91 หน่วยกิต ประกอบด้วย</li>
                                        <ul className="list-[circle] list-outside pl-7 mt-2 space-y-1 text-gray-600">
                                            <li>วิชาแกน 26 หน่วยกิต</li>
                                            <li>กลุ่มวิชาเฉพาะด้าน 45 หน่วยกิต</li>
                                            <li>กลุ่มวิชาเลือกเฉพาะด้านตามแนวทางการจัดการ 12 หน่วยกิต</li>
                                            <li>กลุ่มวิชาสหกิจศึกษา/ฝึกงาน 3 หน่วยกิต</li>
                                            <li>กลุ่มวิชาภาคนิพนธ์/ปฏิบัติ 15 หน่วยกิต</li>
                                        </ul>
                                        <li>หมวดวิชาเลือกเสรี 6 หน่วยกิต</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <section id='professor' className="relative overflow-hidden py-16 md:py-22  min-h-[500px] flex items-center">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="video/BG2.mp4" type="video/mp4" />
                </video>
                {/* แผ่นกรองสีดำเพื่อให้วิดีโอมืดลง */}
                <div className="absolute inset-0 bg-black/50 z-1"></div>
                <div className="container relative z-10 mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-extrabold text-white leading-tight"
                            style={{
                                fontSize: '40px',
                                color: 'white',
                            }}>
                            อาจารย์ และ บุคลากร
                        </h2>
                    </motion.div>

                    {/* ภาพบุคลากร */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 items-end max-w-7xl mx-auto px-4 gap-4 md:gap-1.5"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {/* ใช้ map วนลูปแสดงผล โดยเช็คว่าเป็น Link ภายใน หรือ <a> ภายนอก */}
                        {personnelData.map((person, index) => {
                            const isInternalLink = person.href.startsWith('/');
                            const CardContent = (
                                <div className="group relative flex flex-col items-center transition-all duration-500 cursor-pointer">
                                    {/* ตัวบุคคล (ไม่มีกรอบ ลอยบนพื้นหลัง) */}
                                    <div className="relative h-[400px] md:h-[550px] w-full transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-4 z-10 group-hover:z-20 overflow-hidden">
                                        <img
                                            src={person.src}
                                            alt={person.alt}
                                            className="w-full h-full object-cover object-top brightness-90 group-hover:brightness-110 group-hover:drop-shadow-[0_0_20px_rgba(63,162,246,0.6)] transition-all duration-500"
                                        />

                                        {/* ชื่ออาจารย์และรายละเอียดเพิ่มเติม */}
                                        <div className="absolute bottom-0 left-0 right-0 transition-all duration-500 pointer-events-none z-30">
                                            <div className="bg-linear-to-t from-[#0a192f] via-[#0a192f]/80 to-transparent p-6 pt-16 text-center">
                                                {/* ชื่อ (แสดงตลอดเวลา) */}
                                                <p className="text-white font-bold text-xs sm:text-sm md:text-base drop-shadow-2xl leading-tight transform group-hover:-translate-y-1 transition-transform duration-500">
                                                    {person.alt}
                                                </p>

                                                {/* ข้อความ ดูรายละเอียดเพิ่มเติม (แสดงเฉพาะตอน Hover) */}
                                                <div className="mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex flex-col items-center">
                                                    <span className="text-[#3FA2F6] text-[10px] md:text-xs font-semibold tracking-wide flex items-center gap-1">
                                                        ดูรายละเอียดเพิ่มเติม <span className="text-lg">›</span>
                                                    </span>
                                                    <div className="w-12 h-0.5 bg-[#3FA2F6] mt-1 rounded-full shadow-[0_0_10px_rgba(63,162,246,0.8)]"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );

                            return (
                                <motion.div
                                    key={index}
                                    variants={cardVariants}
                                    className="flex-1 min-w-0"
                                >
                                    {isInternalLink ? (
                                        <Link to={person.href}>
                                            {CardContent}
                                        </Link>
                                    ) : (
                                        <a href={person.href} target="_blank" rel="noopener noreferrer">
                                            {CardContent}
                                        </a>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section>
                <Footer />
            </section>
        </>
    )
}

export default Home
