import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookMessenger, FaInstagram, FaTiktok, FaChevronDown, FaFacebook } from "react-icons/fa";

const FloatingSocial = () => {
    const [isOpen, setIsOpen] = useState(false);

    // ไอคอนที่โชว์ตลอดเวลา
    const previewLinks = [
        {
            icon: <FaFacebook />,
            color: 'bg-[#4267B2]',
            label: 'Facebook',
            href: 'https://www.facebook.com/ET.PIM?locale'
        },
        {
            icon: <FaInstagram />,
            color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
            label: 'Instagram',
            href: 'https://www.instagram.com/et.pim?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        }
    ];

    // ไอคอนที่เด้งออกมา
    const otherLinks = [
        {
            icon: <FaFacebookMessenger />,
            color: 'bg-[#0084FF]',
            label: 'Messenger',
            href: 'https://www.facebook.com/messages/t/ET.PIM'
        },
        {
            icon: <FaTiktok />,
            color: 'bg-black',
            label: 'TikTok',
            href: 'https://www.tiktok.com/@et.pim?is_from_webapp=1&sender_device=pc'
        }
    ];

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center gap-4">
            
            {/* 1. ปุ่มหลัก (Toggle) - อยู่บนสุดเสมอ */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-2xl transition-all duration-500 ${isOpen ? 'bg-red-500 rotate-180' : 'bg-[#3FA2F6]'}`}
                whileHover={{ scale: 1.1 }}
            >
                <FaChevronDown />
            </motion.button>

            {/* 2. ไอคอนที่โชว์ตลอดเวลา */}
            <div className="flex flex-col gap-4">
                {previewLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${social.color} w-11 h-11 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform relative group`}
                    >
                        {social.icon}
                        <span className="absolute right-14 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {social.label}
                        </span>
                    </a>
                ))}
            </div>

            {/* 3. ไอคอนที่เด้งออกมา (เรียงต่อลงมาข้างล่างตรงๆ) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        {otherLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${social.color} w-11 h-11 rounded-full flex items-center justify-center text-white text-xl shadow-lg hover:scale-110 transition-transform relative group`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                {social.icon}
                                <span className="absolute right-14 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingSocial;
