import React from 'react';
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";


// หมายเหตุ: โค้ดนี้สมมติว่าคุณมีคลาสภายนอก (.iconf, .contactimg, .copyrighttext, l-section-h, l-footer, wpb_row)
// ที่ถูกจัดการในไฟล์ CSS ภายนอก (เช่น footer.css) สำหรับ Layout ที่ซับซ้อน/Legacy
// แต่ได้นำ style ที่เป็นตัวเลข/สีจาก JS/Inline ออกหมดแล้ว

const Footer = () => {
    return (
        <footer className="l-footer relative bg-[#193F7D]" itemScope itemType="https://schema.org/WPFooter">

            {/* Section 1: Contact Information (ใช้ bg-[#193F7D] เป็นสีหลัก) */}
            <section className="wpb_row pt-4 pb-3 relative">
                <div className="l-section-h container mx-auto px-4">
                    <div className="flex flex-wrap items-start">
                        <div className="w-full relative">

                            <div className="flex flex-wrap">
                                <div className="w-full animate_afb animate_start">

                                    {/* Contact Heading */}
                                    <div className="mb-2">
                                        <h6 className="font-bold text-lg text-white">ติดต่อเรา</h6>
                                    </div>

                                    {/* Separator */}
                                    <div className="w-full h-px bg-white/50 mb-2"></div>

                                    {/* Address */}
                                    <div className="mb-2">
                                        <p className="text-sm text-gray-200">
                                            <strong>สถาบันการจัดการปัญญาภิวัฒน์</strong><br />
                                            85/1 หมู่ 2 ถ.แจ้งวัฒนะ ต.บางตลาด อ.ปากเกร็ด จังหวัด นนทบุรี 11120
                                        </p>
                                    </div>

                                    <div className="flex gap-4 mt-2 text-xl items-center">

                                        {/* Facebook */}
                                        <a href="https://www.facebook.com/messages/t/pimfanpage" target="_blank" rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors duration-200">
                                            <FaFacebookF />
                                        </a>

                                        {/* Instagram */}
                                        <a href="https://www.instagram.com/et.pim/" target="_blank" rel="noopener noreferrer"
                                            className="text-white hover:text-gray-300 transition-colors duration-200">
                                            <FaInstagram />
                                        </a>

                                        {/* Phone */}
                                        <a href="tel:028550391" className="flex items-center text-white hover:text-gray-300 text-lg">
                                            <FaPhone className="mr-2" />
                                            <span className="text-sm">02-855-0391</span>
                                        </a>

                                    </div>

                                    {/* Location Map */}
                                    <div className="pt-3">
                                        <a href="https://goo.gl/maps/n6MXbTLNkbt" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="https://et.pim.ac.th/wp/wp-content/uploads/2018/11/location.png"
                                                alt="แผนที่"
                                                width="158.5"
                                                height="41.5"
                                                className="h-auto max-w-full"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Copyright (ใช้สีเทาอ่อนด้านล่าง) */}
            <section className="py-2 bg-[#193F7D]">
                <div className="container mx-auto px-4">
                    <div className="w-full flex justify-center">
                        <p className="text-center font-medium text-sm text-gray-200 max-md:text-xs">
                            © {new Date().getFullYear()} by Panyapiwat Institute of Management. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>


        </footer>
    );
};

export default Footer;