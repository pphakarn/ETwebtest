import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Navbar from '../componentes/Navbar/Navbar';
import Footer from '../componentes/Footer/footer';

const ResumeAsarawin = () => {
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
                                    src="../picture/Teacher/a'sarawin1.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="text-center mb-6 md:hidden">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์ศราวิน ราชานิกรณ์
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
                                    <span className="break-all">sarawinrac@pim.ac.th</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-light">
                                    <FaPhoneAlt className="text-[#66CCFF]" />
                                    <span>093-652-6550</span>
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
                                        <li>วท.ม. เทคโนโลยีสารสนเทศ</li>
                                        <li>มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white text-base">ปริญญาตรี</h4>
                                    <ul className="list-disc list-inside text-base text-gray-300 pl-2 mt-1 font-light">
                                        <li>วท.บ.เทคโนโลยีสารสนเทศ เกียรตินิยมอันดับ 1</li>
                                        <li>มหาวิทยาลัยปทุมธานี</li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* === Right Content Area === */}
                        <main className="w-full md:w-[65%] flex flex-col">
                            <div className="hidden md:flex bg-[#2E4057] h-auto min-h-[180px] flex-col justify-center px-8 md:px-12 py-8 text-white">
                                <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight">
                                    อาจารย์ศราวิน ราชานิกรณ์
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
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ.2568 – ปัจจุบัน</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                อาจารย์ประจำสาขาเทคโนโลยีดิจิทัลและสารสนเทศ คณะวิศวกรรมศาสตร์และเทคโนโลยี<br />
                                                สถาบันการจัดการปัญญาภิวัฒน์
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ.2566 – 2568</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                หัวหน้าสาขาวิชาคอมพิวเตอร์ เกม และแอนิเมชัน <br />
                                                วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC)
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ.2565 – 2568</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                หัวหน้าโครงการ Swift Coding Club <br />
                                                วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC)
                                            </p>
                                            <p className="font-bold text-base text-[#2E4057]">พ.ศ.2564 – 2566</p>
                                            <p className="text-sm mt-1 text-gray-700 pl-4 border-l-2 border-[#B0C4DE]">
                                                หัวหน้าสาขาเทคโนโลยีสารสนเทศ<br />
                                                วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC)
                                            </p>
                                        </div>
                                    </section>

                                    {/* Teaching Experience */}
                                    <section className="mb-0">
                                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4">
                                            ความเชี่ยวชาญ
                                        </h3>
                                        <div>
                                            <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 pl-2">
                                                <li>Software Development, Innovation Development</li>
                                                <li>System Analysis and Design, Database Development</li>
                                                <li>Mobile Development, Interactive Multimedia Design</li>
                                                <li>Software Architecture Design, Web Application Development, Data Structure and Algorithms</li>
                                            </ul>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </main>
                    </div>

                    <section className="w-full py-8 px-8">
                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4 text-[#2E4057]">
                            การอบรม / ประกาศนียบัตร
                        </h3>

                        <ul className="list-disc list-outside ml-4 text-sm space-y-3 text-gray-700 leading-relaxed">

                            <li>Google AI in Education โดย Google — วันที่ 15 กันยายน 2568</li>

                            <li>Creating Game World in Roblox (พฤษภาคม–กันยายน) โดย depa, มหาวิทยาลัยเทคโนโลยีสุรนารี และคณะดิจิทัลมีเดีย มหาวิทยาลัยศรีปทุม</li>

                            <li>The Professional Caster Program (พฤษภาคม–กันยายน) โดย depa, มทส., และคณะดิจิทัลมีเดีย ม.ศรีปทุม</li>

                            <li>Narrative Game Design and Visual Novel Development (พฤษภาคม–กันยายน) โดย depa, มทส., และคณะดิจิทัลมีเดีย ม.ศรีปทุม</li>

                            <li>depa ESPORTS IN SCHOOLS — วันที่ 8 มิถุนายน 2568 โดย depa</li>

                            <li>IBEs Driving Green Innovation — วันที่ 27 พฤษภาคม 2568 โดย สำนักงานนวัตกรรมแห่งชาติ และกลุ่มบริษัทซีพี</li>

                            <li>Online Training ห้องเรียนอีสปอร์ต 2025 — วันที่ 24 พฤษภาคม 2568 โดย มูลนิธิโรงเรียนวันเสาร์, Sea Limited, Garena Academy, DPU</li>

                            <li>การอบรมด้านจริยธรรมการวิจัย (Research Integrity) — วันที่ 22 พฤษภาคม 2568 โดย QRI สวทช. และมหาวิทยาลัยนครพนม</li>

                            <li>Responsible Conduct of Research (RCR) — วันที่ 16 พฤษภาคม 2568 โดย National Research Council of Thailand</li>

                            <li>หลักสูตรพัฒนาครูต้นแบบ (Train the Trainer) — วันที่ 9 พฤษภาคม 2568 โดย BigBot AI</li>

                            <li>Human Subject Protection (HSP) — วันที่ 4 เมษายน 2568 โดย National Research Council of Thailand</li>

                            <li>กิจกรรม TVET Smart Idea2Innovation — วันที่ 22–23 มีนาคม 2568 โดย อว.</li>

                            <li>Introduction to Data Analytics and Big Data — November 30, 2023, Chulalongkorn University (Chula MOOC)</li>

                            <li>Google AI Essentials — August 5, 2024, Freedom Learning Group</li>

                            <li>Gamification Learning with Genially — August 1, 2024, Freedom Learning Group</li>

                            <li>สอนศิษย์ให้คิดเป็นระบบ เทคนิคการสอนคิดเชิงอัลกอริทึม — วันที่ 26 กันยายน 2567 โดย มหาวิทยาลัยเชียงใหม่</li>

                            <li>Open Data กับการศึกษาดิจิทัล — วันที่ 7 และ 14 มิถุนายน 2567 โดย มหาวิทยาลัยเชียงใหม่</li>

                            <li>Train the Trainer: Intermediate iOS Application Development — March 31 & April 6–7, 2024, SPVi</li>

                            <li>บูรณาการใช้เทคโนโลยี AI เพื่อพัฒนาสื่อการสอน — วันที่ 22 มีนาคม 2567 โดย SE-ED</li>

                            <li>Get Started with Figma — June 25, 2023, Coursera + Freedom Learning Group</li>

                            <li>ผู้ฝึกสอนอีสปอร์ตระดับต้น — วันที่ 12–17 มิถุนายน 2566 โดย สมาคมกีฬา กทม.</li>

                            <li>iOS Application Development with Swift — March 11–12 & 18–19, 2023, SPVi</li>

                            <li>ทดสอบมาตรฐานฝีมือแรงงาน (ดูแลระบบเครือข่ายคอมพิวเตอร์ ระดับ 2) — วันที่ 29–31 สิงหาคม 2565 โดย กรมพัฒนาฝีมือแรงงาน</li>

                            <li>บ่มเพาะสิ่งประดิษฐ์ Smart Invention & Innovation — วันที่ 16–18 สิงหาคม 2565 โดย วช.</li>

                            <li>สมรรถนะด้านอีคอมเมิร์ซ — วันที่ 18 พฤศจิกายน 2564 โดย สถาบันคุณวุฒิวิชาชีพ</li>

                            <li>Participating in Digital Marketing – Highlights Saphan Digital — April 27, 2021, The S Curve Co. Ltd.</li>

                            <li>พัฒนาศักยภาพครูส่งเสริมโรงงานสิ่งประดิษฐ์ — วันที่ 26–27 มีนาคม 2562 โดย สอศ.</li>

                            <li>บ่มเพาะอาจารย์ผู้จัดการโครงการนวัตกรรม — วันที่ 29–31 มกราคม 2562 โดย วช.</li>

                            <li>จริยธรรมการวิจัยในมนุษย์สำหรับนักศึกษา — วันที่ 4 สิงหาคม 2561 โดย มจธ.</li>

                            <li>เครือข่ายทรัพย์สินทางปัญญา — วันที่ 10–12 ตุลาคม 2561 โดย สำนักวิจัยและพัฒนาอาชีวศึกษา</li>

                            <li>ผู้ทดสอบมาตรฐานฝีมือแรงงาน (ภาษาซี ระดับ 1) — วันที่ 23–25 กรกฎาคม 2561 โดย กรมพัฒนาฝีมือแรงงาน</li>

                            <li>Link Campus Cabling 2018 — June 21, 2018, Interlink Communication PCL</li>

                            <li>Netpie Train the Trainer Workshop — วันที่ 22–23 กุมภาพันธ์ 2561 โดย NETREC</li>

                            <li>Google Apps for Education: Working the Cloud — วันที่ 5 เมษายน 2560 โดย SE-ED</li>

                            <li>ผู้ทดสอบมาตรฐานฝีมือแรงงาน (ประมวลผลคำ ระดับ 1) — วันที่ 10–12 ตุลาคม 2559 โดย กรมพัฒนาฝีมือแรงงาน</li>

                            <li>ผู้ทดสอบมาตรฐานฝีมือแรงงาน (ตารางทำการ ระดับ 1) — วันที่ 7–9 ตุลาคม 2559 โดย กรมพัฒนาฝีมือแรงงาน</li>

                        </ul>
                    </section>


                    <section className="w-full py-8 px-8">
                        <h3 className="text-xl font-bold border-b-2 border-[#B0C4DE] pb-2 mb-4 text-[#2E4057]">
                            ผลงานทางวิชาการ/งานวิจัย
                        </h3>

                        <ul className="list-disc list-outside ml-4 text-sm space-y-3 text-gray-700 text-justify leading-relaxed">

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span>, จีรวัสส์ ธนเกียรติขจร, กัญญารัตน์ ตรงเหมือน และคณะ. (2569).
                                “การเรียนรู้โดยใช้เกมเป็นฐานด้านอาหารไทยด้วยสื่อประสมแบบโต้ตอบ: นวัตกรรมการเรียนรู้เพื่อส่งเสริมซอฟต์พาวเวอร์และทักษะแห่งศตวรรษที่ 21.”
                                การประกวดผลงานประดิษฐ์คิดค้น ประจำปีงบประมาณ 2569, สำนักงานการวิจัยแห่งชาติ (วช.), กันยายน 2569, หน้า 252.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span>, โชติกา มณีโชติ, กัญญารัตน์ ตรงเหมือน และคณะ. (2568).
                                “การออกแบบและพัฒนาเกมดิจิทัลเพื่อส่งเสริม Soft Power สำหรับประกอบการเรียนการสอนอาหารไทย.”
                                TVET Smart Idea2Innovation สิ่งประดิษฐ์และนวัตกรรมอาชีวศึกษาสู่นวัตกรรมพร้อมใช้ ประจำปี 2568,
                                สำนักงานการวิจัยแห่งชาติ (วช.), ระบบข้อมูลสารสนเทศวิจัยและนวัตกรรมแห่งชาติ (NRIIS), 2568.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span>, พชร จันลา, ศิวกร มิตรสม และคณะ. (2568).
                                “นวัตกรรมแอปพลิเคชันเพื่อการแจ้งเตือนวันหมดอายุและแนะนำการแปรรูปวัตถุดิบสำหรับการบริหารจัดการในครัวเรือน.”
                                TVET Smart Idea2Innovation สิ่งประดิษฐ์และนวัตกรรมอาชีวศึกษาสู่นวัตกรรมพร้อมใช้ ประจำปี 2568,
                                สำนักงานการวิจัยแห่งชาติ (วช.), ระบบข้อมูลสารสนเทศวิจัยและนวัตกรรมแห่งชาติ (NRIIS), 2568.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span> and J. N. Rivera. (2023).
                                Building tech start-ups in vocational college through a coding club.
                                E-Proceeding: Best Practices; ASEAN TVET Institutions, Bangkok, Thailand, August 31, 2023, p. 79.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span>, I. Woraphiphat, P. Phararaamanh, et al. (2023).
                                Food raw material management expert application: CHUT CHAENG TUEAN.
                                Japan Design, Idea and Invention Expo (JDIE 2023), Kyoto, Japan, 2023.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และวิทิดา จงศุภชัยสิทธิ์. (2563).
                                “ปัจจัยที่มีอิทธิพลต่อความตั้งใจในการใช้กลไกเกมเพื่อสนับสนุนการเรียนรู้ของนักศึกษา Generation Z.”
                                การประชุมวิชาการระดับชาติ ครั้งที่ 4 ด้านนวัตกรรมเพื่อการเรียนรู้และสิ่งประดิษฐ์ (ILI 2020),
                                การประชุมออนไลน์ผ่าน Zoom, ปทุมธานี, ธันวาคม 2563.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2562).
                                SBAC Learning Space (SLS): แหล่งเรียนรู้ของเด็กยุคดิจิทัล. สิ่งประดิษฐ์อาชีวะ, สำนักงานคณะกรรมการอาชีวศึกษา, 2562.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2562).
                                Safe Point เพื่อความปลอดภัยในสังคมไทย. วารสาร National Innovation Awards 2562,
                                สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน).
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2561).
                                DFreelance นวัตกรรมเพื่อผู้พิการ. วารสาร National Innovation Awards 2561,
                                สำนักงานนวัตกรรมแห่งชาติ (องค์การมหาชน).
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2561).
                                นวัตกรรมเกษตรวิถีเพื่อการเกษตรที่ยั่งยืน.
                                วารสารสำนักงานรัฐบาลอิเล็กทรอนิกส์ (องค์การมหาชน) (EGA), หมวดนวัตกรรมด้านการยืนยันตัวตนและการจัดการภาครัฐ, 2561.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2561).
                                ลานจอดรถอัจฉริยะผ่านเทคโนโลยี IoT.
                                วารสารวันนักประดิษฐ์ 2561, สำนักงานคณะกรรมการวิจัยแห่งชาติ, 2561.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2561).
                                ระบบสารสนเทศเพื่อการบริหารจัดการร้านกาแฟ วิทยาลัยเทคโนโลยีสยามบริหารธุรกิจ (SBAC).
                                สิ่งประดิษฐ์อาชีวะ, สำนักงานคณะกรรมการอาชีวศึกษา, 2561.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span> et al. (2018).
                                Agricultural innovation for sustainable agriculture.
                                Electronic Government Agency Journal (Public Organization) (EGA), Thailand, 2018.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span> et al. (2018).
                                DFreelance innovation for persons with disabilities.
                                Artificial Intelligence Association of Thailand (AIAT), Bangkok, Thailand, 2018.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span> et al. (2018).
                                Guide Foods innovation for sustainable food management.
                                Artificial Intelligence Association of Thailand (AIAT), Bangkok, Thailand, 2018.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2560).
                                ขายขยะช่วยโลกสร้างรายได้ (E2F).
                                วารสารสำนักงานรัฐบาลอิเล็กทรอนิกส์ (องค์การมหาชน) (EGA), 2560.
                            </li>

                            <li>
                                <span className="font-semibold">ศราวิน ราชานิกรณ์</span> และคณะ. (2560).
                                นวัตกรรมบริหารจัดการแรงงานต่างด้าว (E2FE).
                                วารสารสำนักงานรัฐบาลอิเล็กทรอนิกส์ (องค์การมหาชน) (EGA), 2560.
                            </li>

                            <li>
                                <span className="font-semibold">S. Rachanikorn</span> et al. (2019).
                                Box2U, Plastic Management Innovation for Sustainability of the Environment and the Sea of Thailand.
                                WWF Thailand, 2019.
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

export default ResumeAsarawin;
