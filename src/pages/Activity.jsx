import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar'; // Navbar ควรอยู่ข้างนอก
import { title, video } from 'framer-motion/client';

// ข้อมูลกิจกรรมและวิดีโอ (ใช้ ID วิดีโอจริงของคุณ)
const activityData = {
    studentWork: [
        {
            id: 1,
            title: 'ความฝันของ DIT',
            description: 'แนะนำหลักสูตรเทคโนโลยี ดิจิทัลและสารสนเทศ คณะวิศวกรรมศาสตร์และเทคโนโลยี สถาบันการจัดการปัญญาภิวัฒน์',
            videoId: 'R9z2g1_M2_g'
        },
    ],
    seniorTips: [
        {
            id: 2,
            title: 'แนะนำแนวทางจากรุ่นพี่',
            description: 'แนะนำแนวทางการเป็นนักพัฒนา 3D Animation พี่ฟาร์ม DIT รหัส 64 จะมาแนะนำน้องๆ ที่สนใจในการไปทำงานสายงาน Animation',
            videoId: 'vlnxCRK_KrA'
        },
        {
            id: 3,
            title: 'แนะนำแนวทางจากรุ่นพี่',
            description: 'แนะนำแนวทางการเป็นนักพัฒนา 3D Animation พี่พี DIT รหัส 64 จะมาแนะนำน้องๆ ที่สนใจในการไปทำงานสายงาน Animation',
            videoId: '4Yw6U4B8rR8'
        },
    ],
    activityDIT: [
        {
            id: 4,
            title: 'กิจกรรม',
            description: 'อบรมค่ายกลคนวิศวะ ET CAMP 2024',
            videoId: 'K6vMDmm5Yuc'
        },
        {
            id: 5,
            title: 'กิจกรรม',
            description: 'บันทึกความทรงจำแรกของชาว ETPIM DEK68! กิจกรรมรับน้องใหม่และประชุมเชียร์ ประจำปี 2568',
            videoId:'3nnoKFdt6CQ'
        }
    ]
};

const ActivityCard = ({ title, description, videoId, subtitle }) => {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-b border-gray-300 pb-8 last:border-b-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
        >
            {/* Video Embed/Placeholder */}
            <div className="w-full relative aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-gray-100">
                <iframe
                    className="w-full h-full absolute top-0 left-0"
                    src={`https://www.youtube.com/embed/${videoId}?controls=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Text Content */}
            <div>
                <h3 className="text-2xl font-bold text-[#193F7D] mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
                {subtitle && <p className="text-sm text-gray-500 mt-2">{subtitle}</p>}
            </div>
        </motion.div>
    );
};

const Activity = () => {
    const videoPlaceholderId = 'dQw4w9WgXcQ'; // Placeholder ID 

    return (
        <>
            <Navbar /> 
            <div className="bg-gray-100 min-h-screen">

                {/* === 1. Header Banner === */}
                <header className="bg-[#193F7D] text-white pt-25 pb-16 px-8 rounded-b-[40px] shadow-xl relative z-10">
                    <div className="container mx-auto">
                        <h1 className="text-3xl md:text-5xl text-center font-extrabold mb-1 tracking-wide">
                            ผลงานและกิจกรรม
                        </h1>
                        <p className="text-xl md:text-2xl text-center mt-4 text-gray-300">
                            Digital and Information Technology
                        </p>
                    </div>
                </header>

                {/* === 2. Main Content Sections === */}
                <div className="container mx-auto px-4 py-10 relative z-20">

                    {/* Section Title 1: ผลงานนักศึกษา */}
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 border-b-4 border-[#3FA2F6] inline-block pb-1 pr-10">
                            ผลงานนักศึกษา
                        </h2>
                        <a
                            href="https://www.youtube.com/@dinggych" // ใส่ URL ช่อง YouTube จริง
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mt-4 text-gray-600 w-fit cursor-pointer p-2 -ml-2 rounded-md transition-colors duration-200 hover:text-red-600 hover:bg-gray-200"
                        >
                            <FaYoutube className="text-red-600 text-2xl" />
                            <p className="text-lg font-semibold">Youtube DIT</p>
                        </a>
                    </div>

                    {/* List 1: Student Work */}
                    <div className="space-y-10 mb-16">
                        {activityData.studentWork.map((item) => (
                            <ActivityCard key={item.id} {...item} videoId={item.videoId || videoPlaceholderId} />
                        ))}
                    </div>

                     <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 border-b-4 border-[#3FA2F6] inline-block pb-1 pr-10">
                        กิจกรรม
                        </h2>
                    </div>

                    {/* List 2: Senior Tips */}
                    <div className="space-y-10">
                        {activityData.activityDIT.map((item) => (
                            <ActivityCard key={item.id} {...item} videoId={item.videoId || videoPlaceholderId} />
                        ))}
                    </div>

                    {/* Section Title 2: แนะนำแนวทางจากรุ่นพี่ */}
                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 border-b-4 border-[#3FA2F6] inline-block pb-1 pr-10">
                            แนะนำแนวทางจากรุ่นพี่
                        </h2>
                    </div>

                    {/* List 2: Senior Tips */}
                    <div className="space-y-10">
                        {activityData.seniorTips.map((item) => (
                            <ActivityCard key={item.id} {...item} videoId={item.videoId || videoPlaceholderId} />
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Activity;