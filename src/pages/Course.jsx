import React, { useState } from 'react'
import Navbar from '../componentes/Navbar/Navbar'
import Footer from '../componentes/Footer/footer'

const Course = () => {

    const [activePage, setActivePage] = useState('history')

    return (
        <>
            <Navbar />

            {/* ===== Header ===== */}
            <header className="bg-[#193F7D] text-white pt-24 pb-16 px-6 rounded-b-[40px] shadow-xl relative z-10">
                <div className="container mx-auto">
                    <h1 className="text-2xl md:text-3xl text-center font-extrabold tracking-wide">
                        หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชา เทคโนโลยีดิจิทัลและสารสนเทศ
                    </h1>
                    <p className="text-lg md:text-2xl text-center mt-4 text-gray-300">
                        Bachelor of Science (Digital and Information Technology)
                    </p>
                </div>
            </header>

            {/* ===== Main Content ===== */}
            <section className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* ===== Sidebar ===== */}
                    <aside className="lg:col-span-1">
                        <div className="bg-[#EEF5FF] rounded-2xl p-6 shadow-md">
                            <ul className="space-y-4">

                                <li>
                                    <button
                                        onClick={() => setActivePage('history')}
                                        className={`w-full py-2 rounded-full font-semibold text-sm transition
            ${activePage === 'history'
                                                ? 'bg-[#193F7D] text-white'
                                                : 'text-[#193F7D]'
                                            }`}
                                    >
                                        ประวัติความเป็นมา
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActivePage('course')}
                                        className={`w-full py-2 rounded-full font-semibold text-sm transition
            ${activePage === 'course'
                                                ? 'bg-[#193F7D] text-white'
                                                : 'text-[#193F7D]'
                                            }`}
                                    >
                                        ข้อมูลหลักสูตร
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={() => setActivePage('plan')}
                                        className={`w-full py-2 rounded-full font-semibold text-sm transition
            ${activePage === 'plan'
                                                ? 'bg-[#193F7D] text-white'
                                                : 'text-[#193F7D]'
                                            }`}
                                    >
                                        แผนการเรียนรู้
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </aside>

                    {/* ===== Content ===== */}
                    <main className="lg:col-span-3 space-y-8">
                        {activePage === 'history' && (
                            <>
                                {/* ประวัติความเป็นมา (ของเดิมคุณ) */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md">
                                    <h2 className="text-xl font-bold text-center mb-6 text-[#193F7D]">
                                        ประวัติความเป็นมา
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                        คณะวิศวกรรมศาสตร์และเทคโนโลยี เป็นคณะที่ตั้งขึ้นเป็นลำดับที่ 3
                                        ของสถาบันการจัดการปัญญาภิวัฒน์ เริ่มเปิดการเรียนการสอนครั้งแรกในปีการศึกษา 2552
                                        มีสาขาวิชาเทคโนโลยีสารสนเทศเป็นสาขาวิชาแรก
                                        เดิมใช้ชื่อว่า คณะวิทยาศาสตร์และเทคโนโลยี
                                        ต่อมาในปีการศึกษา 2554 ทางคณะได้เปิดสาขาวิชาวิศวกรรมคอมพิวเตอร์
                                        และวิศวกรรมอุตสาหการเพิ่มขึ้น
                                        จึงได้เปลี่ยนชื่อเป็น “คณะวิศวกรรมศาสตร์และเทคโนโลยี”
                                        <br /><br />

                                        สาขาวิชาเทคโนโลยีสารสนเทศมีการปรับปรุงหลักสูตรเมื่อปี 2564
                                        จากการประเมินการรายงานผลการดำเนินการ (มคอ.7)
                                        ได้มีแผนในการปรับปรุงวิชาโครงงาน
                                        โดยได้มีการกระจายวิชาโครงงานจากเดิมที่ศึกษาในปี 3 และ 4
                                        กระจายออกเพื่อให้นักศึกษาได้เรียนและจัดทำโครงงานในปี 1 ถึง 4
                                        เพื่อให้สอดคล้องกับการทำงานด้านเทคโนโลยีดิจิทัลและสารสนเทศ
                                        <br /><br />

                                        ทั้งนี้ยังมีการเพิ่มองค์ความรู้ให้ทันสมัย
                                        และสอดคล้องกับความต้องการของตลาด
                                        ซึ่งได้จากการรวบรวมข้อมูลจากสถานประกอบการด้านเทคโนโลยีสารสนเทศ
                                        ที่นักศึกษาได้ไปฝึกภาคปฏิบัติ
                                        และแนวโน้มเทคโนโลยีจากแหล่งความรู้ต่าง ๆ
                                        เพื่อบูรณาการเทคโนโลยีสารสนเทศได้อย่างหลากหลาย
                                        ทั้งในด้านการศึกษา การพัฒนา การประยุกต์ใช้ การบริหารจัดการ
                                        และการดูแลรักษาเทคโนโลยีดิจิทัลและสารสนเทศ
                                        <br /><br />

                                        เพื่อตอบสนองต่อเทคโนโลยีสารสนเทศที่พัฒนาขึ้นอย่างต่อเนื่อง
                                        นักเทคโนโลยีสารสนเทศต้องสามารถเข้าถึงข้อมูล
                                        สามารถนำเสนอเทคโนโลยีใหม่ ๆ
                                        มีทักษะด้านการคิดวิเคราะห์และศึกษาค้นคว้าเทคโนโลยีอย่างต่อเนื่อง
                                        เพื่อคัดเลือกเทคโนโลยีสารสนเทศที่เหมาะสมกับการทำงาน
                                        หรือตอบโจทย์องค์กรไม่ว่าภาครัฐ รัฐวิสาหกิจ และเอกชน
                                        เพื่อให้องค์กรสามารถขับเคลื่อนไปได้อย่างมีประสิทธิภาพและประสิทธิผล
                                    </p>

                                </div>

                                {/* ชื่อหลักสูตร (ของเดิมคุณ) */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md space-y-8">
                                    <div className="space-y-4">
                                        <div className="inline-block bg-[#193F7D] text-white px-6 py-2 rounded-full font-semibold shadow-md">
                                            ชื่อหลักสูตร
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            <strong>ภาษาไทย:</strong> หลักสูตรวิทยาศาสตรบัณฑิต
                                            สาขาวิชาเทคโนโลยีดิจิทัลและสารสนเทศ
                                            <br />
                                            <strong>ภาษาอังกฤษ:</strong> Bachelor of Science Program in Digital Information and Technology
                                        </p>
                                    </div>

                                    {/* ===== ชื่อหลักสูตร (เต็ม) ===== */}
                                    <div className="space-y-4">
                                        <div className="inline-block bg-[#193F7D] text-white px-6 py-2 rounded-full font-semibold shadow-md">
                                            ชื่อหลักสูตร (เต็ม)
                                        </div>

                                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                            <strong>ภาษาไทย:</strong> วิทยาศาสตรบัณฑิต (เทคโนโลยีดิจิทัลและสารสนเทศ) <br />
                                            <strong>อักษรย่อ:</strong> วท.บ. (เทคโนโลยีดิจิทัลและสารสนเทศ) <br />
                                            <strong>ภาษาอังกฤษ:</strong> Bachelor of Science (Digital Information Technology) <br />
                                            <strong>อักษรย่อ:</strong> B.Sc. (Digital Information Technology)
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        {activePage === 'course' && (
                            <div className="space-y-8">

                                {/* ===== โครงสร้างหลักสูตร ===== */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md">
                                    <h2 className="text-2xl font-bold text-center mb-4 text-[#193F7D]">
                                        โครงสร้างหลักสูตร
                                    </h2>
                                    <h3 className="text-base font-bold text-center mb-6 text-geay-700">จำนวนหน่วยกิตตลอดหลักสูตร จำนวน 127 หน่วยกิต</h3>
                                    <div className="text-sm md:text-base  text-gray-700 leading-relaxed space-y-3">


                                        <p><strong>1) หมวดวิชาศึกษาทั่วไป</strong> จำนวน 30 หน่วยกิต</p>
                                        <p className="pl-4">1.1) กลุ่มวิชาภาษา 12 หน่วยกิต</p>
                                        <p className="pl-8">1.1.1) ภาษาไทย 3 หน่วยกิต</p>
                                        <p className="pl-8">1.1.2) ภาษาอังกฤษ 6 หน่วยกิต</p>
                                        <p className="pl-8">1.1.3) ภาษาเลือก 3 หน่วยกิต</p>

                                        <p className="pl-4">1.2) กลุ่มวิชาสังคมศาสตร์ 6 หน่วยกิต</p>
                                        <p className="pl-4">1.3) กลุ่มวิชามนุษยศาสตร์ 6 หน่วยกิต</p>
                                        <p className="pl-4">1.4) กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์ 6 หน่วยกิต</p>

                                        <p className="pt-2"><strong>2) หมวดวิชาเฉพาะ</strong> จำนวน 91 หน่วยกิต</p>
                                        <p className="pl-4">2.1) วิชาแกน 16 หน่วยกิต</p>
                                        <p className="pl-4">2.2) วิชาเฉพาะด้าน 45 หน่วยกิต</p>
                                        <p className="pl-8">– เทคโนโลยีดิจิทัลและสารสนเทศ</p>
                                        <p className="pl-4">2.3) วิชาเลือกเฉพาะด้าน 12 หน่วยกิต</p>
                                        <p className="pl-4">2.4) วิชาโครงงาน/ฝึกงาน 3 หน่วยกิต</p>
                                        <p className="pl-4">2.5) วิชาสหกิจศึกษา/ปฏิบัติ 15 หน่วยกิต</p>

                                        <p className="pt-2"><strong>3) หมวดวิชาเลือกเสรี</strong> จำนวน 6 หน่วยกิต</p>
                                    </div>

                                    {/* ===== กลุ่มวิชา ===== */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-[#193F7D] text-white rounded-2xl p-6 space-y-2 text-sm">
                                            <h3 className="font-semibold text-center mb-2">
                                                กลุ่มวิชาด้านสื่อและกราฟิกดิจิทัล
                                            </h3>
                                            <p>- การตลาดดิจิทัล</p>
                                            <p>- การสร้างโมเดลสามมิติและการเคลื่อนไหว</p>
                                            <p>- ดิจิทัลมีเดีย</p>
                                            <p>- การออกแบบและพัฒนาเกม</p>
                                        </div>

                                        <div className="bg-[#193F7D] text-white rounded-2xl p-6 space-y-2 text-sm">
                                            <h3 className="font-semibold text-center mb-2">
                                                กลุ่มวิชาด้านวิทยาการข้อมูล
                                            </h3>
                                            <p>- การวิเคราะห์ข้อมูลขนาดใหญ่</p>
                                            <p>- ระบบธุรกิจอัจฉริยะ</p>
                                            <p>- ปัญญาประดิษฐ์และการเรียนรู้ของเครื่อง</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mt-6">
                                        <div className="bg-[#193F7D] text-white rounded-2xl p-6 w-full md:w-1/2 text-sm space-y-2">
                                            <h3 className="font-semibold text-center mb-2">
                                                กลุ่มวิชาด้านโครงสร้างดิจิทัล
                                            </h3>
                                            <p>- เครือข่ายและความปลอดภัย</p>
                                            <p>- ระบบประมวลผลคลาวด์</p>
                                            <p>- การพัฒนาเว็บและแอปพลิเคชัน</p>
                                        </div>
                                    </div>
                                </div>

                                {/* ===== ผลลัพธ์การเรียนรู้ (PLO) ===== */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md">

                                    {/* ===== Title ===== */}
                                    <h2 className="text-xl font-bold text-center text-[#193F7D] mb-8 border-b-2 border-[#193F7D] inline-block mx-auto pb-2">
                                        หลักสูตรมีผลลัพธ์การเรียนรู้ ดังนี้
                                    </h2>

                                    <div className="space-y-8 text-sm md:text-base text-gray-800">

                                        {/* PLO1 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO1
                                            </span>
                                            <p className='font-semibold'>
                                                บัณฑิตสามารถอธิบายหลักการและทฤษฎีสำคัญด้านระบบสารสนเทศ
                                                ทั้งด้านฮาร์ดแวร์ ซอฟต์แวร์ ข้อมูล เครือข่าย และอินเทอร์เน็ต ได้
                                                (Understanding)
                                            </p>
                                        </div>

                                        {/* PLO2 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO2
                                            </span>
                                            <p className='font-semibold'>
                                                บัณฑิตสามารถพัฒนาโปรแกรมประยุกต์ด้านสารสนเทศและสื่อดิจิทัลได้
                                                (Applying)
                                            </p>
                                        </div>

                                        {/* PLO3 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO3
                                            </span>
                                            <div className="space-y-2">
                                                <p className='font-semibold'>
                                                    บัณฑิตสามารถเลือกใช้และดูแลระบบเครือข่าย และระบบแม่ข่ายได้อย่างมีประสิทธิภาพ
                                                    (Analyzing / Evaluating)
                                                </p>
                                                <p className="pl-4">
                                                    PLO3.1 บัณฑิตสามารถวิเคราะห์ปัญหาความต้องการของระบบงาน
                                                    และเลือกใช้เครื่องมือที่เหมาะสมกับการแก้ไขปัญหาได้ (T2.2)
                                                </p>
                                                <p className="pl-4">
                                                    PLO3.2 บัณฑิตสามารถประเมินระบบขององค์กรต่าง ๆ
                                                    ของระบบงานให้ตรงตามข้อกำหนดได้ (validate) (T2.3)
                                                </p>
                                            </div>
                                        </div>

                                        {/* PLO4 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO4
                                            </span>
                                            <div className="space-y-2">
                                                <p className='font-semibold'>
                                                    บัณฑิตสามารถบริหารหน่วยงานและโครงการทางเทคโนโลยีสารสนเทศและดิจิทัลได้
                                                    (Applying)
                                                </p>
                                                <p className="pl-4">
                                                    PLO4.1 บัณฑิตสามารถสืบค้นองค์ความรู้จากแหล่งข้อมูลที่น่าเชื่อถือ
                                                    ประเมินและเลือกใช้ข้อมูลสารสนเทศที่เหมาะสม
                                                </p>
                                                <p className="pl-4">
                                                    PLO4.2 บัณฑิตสามารถใช้เครื่องมือและเลือกเทคโนโลยีสารสนเทศ
                                                    เพื่อการทำงานได้อย่างเหมาะสม
                                                </p>
                                                <p className="pl-4">
                                                    PLO4.3 บัณฑิตสามารถบูรณาการความรู้จากศาสตร์อื่น
                                                    เพื่อให้ข้อเสนอแนะแก่องค์กรได้
                                                </p>
                                            </div>
                                        </div>

                                        {/* PLO5 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO5
                                            </span>
                                            <p>
                                                บัณฑิตสามารถคิดได้อย่างมีวิจารณญาณ (Critical Thinking)
                                                และเป็นระบบ (Systematical Thinking)
                                            </p>
                                        </div>

                                        {/* PLO6 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO6
                                            </span>
                                            <p>
                                                บัณฑิตสามารถประยุกต์ใช้สารสนเทศทางคณิตศาสตร์หรือสถิติ
                                                เพื่อแก้ไขปัญหาได้
                                            </p>
                                        </div>

                                        {/* PLO7 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO7
                                            </span>
                                            <div className="space-y-2">
                                                <p className='font-semibold'>
                                                    บัณฑิตสามารถสื่อสารในประเด็นที่เกี่ยวข้องกับระบบสารสนเทศ
                                                    และดิจิทัลในฐานะผู้ออกแบบและพัฒนา
                                                </p>
                                                <p className="pl-4">
                                                    PLO7.1 สื่อสารอย่างมีประสิทธิภาพในภาษาไทย
                                                </p>
                                                <p className="pl-4">
                                                    PLO7.2 สื่อสารอย่างมีประสิทธิภาพในภาษาอังกฤษ
                                                </p>
                                                <p className="pl-4">
                                                    PLO7.3 นำเสนอผลงานด้วยวาจาและลายลักษณ์อักษร
                                                </p>
                                            </div>
                                        </div>

                                        {/* PLO8 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO8
                                            </span>
                                            <div className="space-y-2">
                                                <p className='font-semibold'>
                                                    บัณฑิตสามารถทำงานร่วมกับผู้อื่นในฐานะผู้นำและผู้ร่วมงานได้
                                                </p>
                                                <p className="pl-4 ">
                                                    PLO8.1 แสดงความคิดเห็นอย่างเหมาะสมตามจรรยาบรรณวิชาชีพ
                                                </p>
                                                <p className="pl-4 ">
                                                    PLO8.2 เคารพความคิดเห็นของผู้อื่น
                                                </p>
                                                <p className="pl-4 ">
                                                    PLO8.3 ปฏิบัติหน้าที่ในทีมอย่างมีประสิทธิภาพ
                                                </p>
                                            </div>
                                        </div>

                                        {/* PLO9 */}
                                        <div className="flex gap-4">
                                            <span className="bg-[#193F7D] text-white px-4 py-2 rounded-full font-semibold h-fit">
                                                PLO9
                                            </span>
                                            <div className="space-y-2">
                                                <p className='font-semibold'>
                                                    บัณฑิตมีคุณธรรม จริยธรรม และปฏิบัติตามหลักกฎหมายและจรรยาบรรณวิชาชีพ
                                                </p>
                                                <p className="pl-4">
                                                    PLO9.1 ไม่ทุจริต คัดลอก หรือแอบอ้างผลงาน
                                                </p>
                                                <p className="pl-4">
                                                    PLO9.2 บริหารจัดการเวลาและงานที่ได้รับมอบหมายได้
                                                </p>
                                                <p className="pl-4">
                                                    PLO9.3 ปฏิบัติตามกฎหมายและระเบียบขององค์กร
                                                </p>
                                                <p className="pl-4">
                                                    PLO9.4 ปฏิบัติตามจรรยาบรรณทางวิชาการและวิชาชีพ
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )}

                        {activePage === 'plan' && (
                            <div className="space-y-10">

                                {/* ===== แผนการเรียน (Overview) ===== */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md">
                                    <h2 className="text-xl font-bold text-center mb-6 text-[#193F7D]">
                                        แผนการเรียน
                                    </h2>

                                    <div className="overflow-x-auto">
                                        <table className="w-full border-separate border-spacing-2 text-center text-sm">
                                            <thead>
                                                <tr>
                                                    <th className="bg-gray-300 text-gray-700 rounded-lg p-2">ชั้นปี</th>
                                                    <th className="bg-pink-200 rounded-lg p-2">Pre<br />(3 เดือน)</th>
                                                    <th className="bg-orange-200 rounded-lg p-2">1.1<br />(3 เดือน)</th>
                                                    <th className="bg-pink-300 rounded-lg p-2">1.2<br />(3 เดือน)</th>
                                                    <th className="bg-green-200 rounded-lg p-2">2.1<br />(3 เดือน)</th>
                                                    <th className="bg-orange-300 rounded-lg p-2">2.2<br />(3 เดือน)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {[
                                                    ['ปีที่ 1', 'เรียน', 'เรียน', 'เรียน', 'เรียน', 'ฝึกงาน'],
                                                    ['ปีที่ 2', '', 'เรียน', 'เรียน', 'เรียน', 'ฝึกงาน'],
                                                    ['ปีที่ 3', '', 'ฝึกงาน', 'เรียน', 'เรียน', 'เรียน'],
                                                    ['ปีที่ 4', '', 'ฝึกงาน', 'ฝึกงาน', 'ฝึกงาน', ''],
                                                ].map((row, i) => (
                                                    <tr key={i}>
                                                        {row.map((cell, j) => (
                                                            <td
                                                                key={j}
                                                                className={`rounded-lg p-2 ${cell === 'เรียน'
                                                                    ? 'bg-yellow-100'
                                                                    : cell === 'ฝึกงาน'
                                                                        ? 'bg-red-200'
                                                                        : 'bg-white'
                                                                    }`}
                                                            >
                                                                {cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* ===== ข้อมูลการเรียนและการฝึกปฏิบัติ ===== */}
                                <div className="bg-[#EEF5FF] rounded-3xl p-8 shadow-md space-y-10">

                                    {/* pill title */}

                                    <div className=" text-xl font-bold text-center mb-6 text-[#193F7D]">
                                        ข้อมูลการเรียนและการฝึกปฏิบัติ
                                    </div>


                                    {/* ===== ปีการศึกษาที่ 1 ===== */}
                                    <div className="space-y-4">
                                        <h3 className="text-center text-lg font-bold text-gray-700">
                                            ปีการศึกษาที่ 1
                                        </h3>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border border-red-600">
                                                <thead>
                                                    <tr className="bg-red-600 text-white">
                                                        <th colSpan={3} className="border p-2 text-center">
                                                            ภาคการศึกษาที่ 1
                                                        </th>
                                                        <th colSpan={3} className="border p-2 text-center">
                                                            ภาคการศึกษาที่ 2
                                                        </th>
                                                    </tr>
                                                    <tr className="bg-red-100 text-red-700">
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {[
                                                        ['EN xxxx', 'กลุ่มวิชาภาษาอังกฤษ', '2', 'EN xxxx', 'กลุ่มวิชาภาษาอังกฤษ', '2'],
                                                        ['1311101', 'พื้นฐานเทคโนโลยีสารสนเทศและปัญญาประดิษฐ์', '3', '1311103', 'สถิติสำหรับเทคโนโลยีสารสนเทศ', '3'],
                                                        ['1311102', 'คณิตศาสตร์สำหรับเทคโนโลยีสารสนเทศ', '3', '1301107', 'โครงงานทางวิศวกรรมและเทคโนโลยี', '1'],
                                                        ['1312104', 'พื้นฐานการเขียนโปรแกรม', '3', '1312103', 'การออกแบบกราฟิกและสื่อดิจิทัล', '3'],
                                                        ['1312101', 'เทคโนโลยีดิจิทัลและสารสนเทศในธุรกิจ', '3', '1312102', 'จริยธรรมและมาตรฐานทางเทคโนโลยีสารสนเทศ', '3'],
                                                        ['1311104', 'การสื่อสารและการนำเสนอทางวิชาชีพเทคโนโลยีสารสนเทศ', '3', '1302151', 'การเรียนรู้จากปฏิบัติสำหรับวิศวกรและนักเทคโนโลยี', '3'],
                                                    ].map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="border p-2">
                                                                    {cell}
                                                                </td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>

                                                <tfoot>
                                                    <tr className="text-red-600 font-semibold">
                                                        <td colSpan={3} className="border p-2 text-center">รวม 17</td>
                                                        <td colSpan={3} className="border p-2 text-center">รวม 15</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                    {/* ===== ปีการศึกษาที่ 2 ===== */}
                                    <div className="space-y-4">
                                        <h3 className="text-center text-lg font-bold text-gray-700">
                                            ปีการศึกษาที่ 2
                                        </h3>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border border-red-600">
                                                <thead>
                                                    <tr className="bg-red-600 text-white">
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 1</th>
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 2</th>
                                                    </tr>
                                                    <tr className="bg-red-100 text-red-700">
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {[
                                                        ['EN xxxx', 'กลุ่มวิชาภาษาอังกฤษ', '2', 'TH xxxx', 'กลุ่มวิชาภาษาไทย', '3'],
                                                        ['SO xxxx', 'กลุ่มวิชาสังคมศาสตร์', '3', 'HM xxxx', 'กลุ่มวิชามนุษยศาสตร์', '3'],
                                                        ['1312208', 'ระบบฐานข้อมูลและข้อมูลขนาดใหญ่', '3', '1312209', 'โครงสร้างข้อมูลและขั้นตอนวิธี', '3'],
                                                        ['1312211', 'โครงสร้างคอมพิวเตอร์และระบบปฏิบัติการ', '3', '131xxxx', 'วิชาเลือกเฉพาะด้านอุตสาหกรรมดิจิทัล 1', '3'],
                                                        ['1312205', 'การวางแผนทรัพยากรทางธุรกิจขององค์กรโดยรวมสำหรับธุรกิจ', '3', '1312206', 'ความมั่นคงของเทคโนโลยีสารสนเทศและเทคโนโลยีบล็อกเชน', '3'],
                                                        ['1312251', 'การเรียนรู้จากปฏิบัติด้านเทคโนโลยีสารสนเทศ 1', '3', '1312207', 'พาณิชย์อิเล็กทรอนิกส์', '3'],
                                                        ['', '', '', '1311205', 'โครงงานดิจิทัลเทคโนโลยี 1', '1'],
                                                    ].map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="border p-2">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>

                                                <tfoot>
                                                    <tr className="text-red-600 font-semibold">
                                                        <td colSpan={3} className="border p-2 text-center">รวม 17</td>
                                                        <td colSpan={3} className="border p-2 text-center">รวม 19</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                    {/* ===== ปีการศึกษาที่ 3 ===== */}
                                    <div className="space-y-4">
                                        <h3 className="text-center text-lg font-bold text-gray-700">
                                            ปีการศึกษาที่ 3
                                        </h3>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border border-red-600">
                                                <thead>
                                                    <tr className="bg-red-600 text-white">
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 1</th>
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 2</th>
                                                    </tr>
                                                    <tr className="bg-red-100 text-red-700">
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {[
                                                        ['XX xxxx', 'กลุ่มวิชาเลือกภาษาต่างประเทศ', '3', 'HM xxxx', 'กลุ่มวิชามนุษยศาสตร์', '3'],
                                                        ['SC xxxx', 'กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์', '3', 'SC xxxx', 'กลุ่มวิชาวิทยาศาสตร์และคณิตศาสตร์', '3'],
                                                        ['1312313', 'วิศวกรรมซอฟต์แวร์และการวิเคราะห์ระบบ', '3', '131xxxx', 'วิชาเลือกเฉพาะด้านอุตสาหกรรมดิจิทัล 2', '3'],
                                                        ['1312210', 'การเขียนโปรแกรมเชิงวัตถุบนแพลตฟอร์ม', '3', '1311306', 'โครงงานดิจิทัลเทคโนโลยี 2', '2'],
                                                        ['1312212', 'ระบบเครือข่ายและคลาวด์', '3', '1312352', 'การเรียนรู้จากปฏิบัติด้านเทคโนโลยีสารสนเทศ 2', '3'],
                                                        ['10xxxx', 'กลุ่มวิชามนุษยศาสตร์', '3', '', '', ''],
                                                    ].map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="border p-2">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>

                                                <tfoot>
                                                    <tr className="text-red-600 font-semibold">
                                                        <td colSpan={3} className="border p-2 text-center">รวม 18</td>
                                                        <td colSpan={3} className="border p-2 text-center">รวม 14</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                    {/* ===== ปีการศึกษาที่ 4 ===== */}
                                    <div className="space-y-4">
                                        <h3 className="text-center text-lg font-bold text-gray-700">
                                            ปีการศึกษาที่ 4
                                        </h3>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm border border-red-600">
                                                <thead>
                                                    <tr className="bg-red-600 text-white">
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 1</th>
                                                        <th colSpan={3} className="border p-2 text-center">ภาคการศึกษาที่ 2</th>
                                                    </tr>
                                                    <tr className="bg-red-100 text-red-700">
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                        <th className="border p-2">รหัสวิชา</th>
                                                        <th className="border p-2">รายวิชา</th>
                                                        <th className="border p-2">หน่วยกิต</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {[
                                                        ['1312413', 'การจัดการโครงการเทคโนโลยีสารสนเทศ', '3', '1312453', 'การเรียนรู้จากปฏิบัติด้านเทคโนโลยีสารสนเทศ 3', '6'],
                                                        ['1312414', 'วิทยาการข้อมูล', '3', 'XX xxxx', 'วิชาเลือกเสรี 2', '3'],
                                                        ['131xxxx', 'วิชาเลือกเฉพาะด้านอุตสาหกรรมดิจิทัล 3', '3', '131xxxx', 'วิชาเลือกเฉพาะสาขา', '3'],
                                                        ['131xxxx', 'วิชาเลือกเฉพาะด้านอุตสาหกรรมดิจิทัล 4', '3', '', '', ''],
                                                    ].map((row, i) => (
                                                        <tr key={i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="border p-2">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>

                                                <tfoot>
                                                    <tr className="text-red-600 font-semibold">
                                                        <td colSpan={3} className="border p-2 text-center">รวม 12</td>
                                                        <td colSpan={3} className="border p-2 text-center">รวม 12</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}
                    </main>
                </div >
            </section >

            <Footer />
        </>
    )
}

export default Course
