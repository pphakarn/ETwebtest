import React from 'react';

const ScholarshipTable = () => {
    return (
        <div className="w-full overflow-x-auto shadow-xl rounded-xl">
            <table className="w-full text-center border-collapse text-xs md:text-sm lg:text-base">
                <thead>
                    <tr>
                        <th className="bg-[#9c1228] text-white p-2 lg:p-4 font-bold border-r border-white/20 leading-tight" rowSpan="2">
                            คณะ/สาขา
                        </th>
                        <th className="bg-[#192b5d] text-white p-2 lg:p-4 font-bold text-sm md:text-lg lg:text-xl border-r border-white/20 leading-tight" rowSpan="2" colSpan="2">
                            ประเภททุน
                        </th>
                        <th className="bg-[#464547] text-white p-1 md:p-2 font-bold text-[10px] md:text-xs lg:text-sm border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 1</th>
                        <th className="bg-[#464547] text-white p-1 md:p-2 font-bold text-[10px] md:text-xs lg:text-sm border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 2</th>
                        <th className="bg-[#464547] text-white p-1 md:p-2 font-bold text-[10px] md:text-xs lg:text-sm border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 3</th>
                        <th className="bg-[#464547] text-white p-1 md:p-2 font-bold text-[10px] md:text-xs lg:text-sm border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 4</th>
                        <th className="bg-[#192b5d] text-white p-2 lg:p-4 font-bold leading-tight" rowSpan="2">
                            รวมจ่าย<br /><span className="text-[10px] md:text-xs font-normal">ตลอดหลักสูตร</span>
                        </th>
                    </tr>
                    <tr className="text-white text-[8px] md:text-[10px] lg:text-xs bg-[#a8a3c8]">
                        <th className="p-1 border-r border-white/20">เทอม 1</th>
                        <th className="p-1 border-r border-white/20">เทอม 2</th>
                        <th className="p-1 border-r border-white/20">เทอม 1</th>
                        <th className="p-1 border-r border-white/20">เทอม 2</th>
                        <th className="p-1 border-r border-white/20">เทอม 1</th>
                        <th className="p-1 border-r border-white/20">เทอม 2</th>
                        <th className="p-1 border-r border-white/20">เทอม 1</th>
                        <th className="p-1 border-r border-white/20">เทอม 2</th>
                    </tr>
                </thead>
                <tbody className="bg-[#f0f0f5]">
                    {/* Row 1: เต็มจำนวน */}
                    <tr className="border-b border-white">
                        <td className="bg-[#2a3666] text-white font-bold text-[10px] md:text-xs lg:text-sm p-2 lg:p-4 border-r border-white" rowSpan="5">
                            เทคโนโลยีดิจิทัล<br />และสารสนเทศ<br />
                            <span className="text-red-500 text-sm md:text-base lg:text-lg">(DIT)</span>
                        </td>
                        <td className="font-bold text-xs md:text-sm lg:text-lg p-2 border-r border-white bg-white text-black" colSpan="2">
                            เต็มจำนวน <span className="text-[10px] md:text-xs font-normal text-gray-500 block lg:inline">(กรณีไม่ได้รับทุน)</span>
                        </td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#fcfcfc] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#e6e6f0] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#fcfcfc] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#e6e6f0] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#fcfcfc] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#e6e6f0] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#fcfcfc] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#e6e6f0] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-2 lg:p-3 bg-black text-white font-bold text-xs md:text-sm lg:text-xl border-l border-white">360,000</td>
                    </tr>

                    {/* Row 2: 100,000 ไม่กู้ */}
                    <tr className="border-b border-white bg-white">
                        <td className="bg-[#a8162e] text-white font-bold text-sm md:text-lg lg:text-xl p-1 md:p-2 border-r border-white w-16 md:w-20 lg:w-24" rowSpan="2">
                            100,000
                        </td>
                        <td className="text-[#a87a20] font-bold text-[10px] md:text-xs lg:text-lg p-1 md:p-2 border-r border-white leading-tight">
                            ไม่กู้ยืม กยศ.
                        </td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">3,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">35,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">35,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">35,500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">35,500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">35,500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">35,500</td>
                        <td className="p-2 lg:p-3 bg-[#a8162e] text-white font-bold text-xs md:text-sm lg:text-xl border-l border-white">260,000</td>
                    </tr>

                    {/* Row 3: 100,000 กู้ */}
                    <tr className="border-b border-white bg-[#eef1f6]">
                        <td className="text-[#192b5d] font-bold text-[9px] md:text-[10px] lg:text-sm p-1 md:p-2 border-r border-white leading-tight">
                            กู้กยศ.<br/><span className="text-[8px] md:text-[10px] lg:text-xs font-normal">(ชำระค่าขึ้นทะเบียนนักศึกษา)</span>
                        </td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">3,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">-</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">-</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">-</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">500</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">500</td>
                        <td className="p-2 lg:p-3 bg-[#2a3666] text-white font-bold text-xs md:text-sm lg:text-xl border-l border-white">5,000</td>
                    </tr>

                    {/* Row 4: 60,000 ไม่กู้ */}
                    <tr className="border-b border-white bg-white">
                        <td className="bg-[#a8162e] text-white font-bold text-sm md:text-lg lg:text-xl p-1 md:p-2 border-r border-white" rowSpan="2">
                            60,000
                        </td>
                        <td className="text-[#a87a20] font-bold text-[10px] md:text-xs lg:text-lg p-1 md:p-2 border-r border-white leading-tight">
                            ไม่กู้ยืม กยศ.
                        </td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">3,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">45,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#f5f5fa] text-[10px] md:text-xs lg:text-sm">42,000</td>
                        <td className="p-2 lg:p-3 bg-[#a8162e] text-white font-bold text-xs md:text-sm lg:text-xl border-l border-white">300,000</td>
                    </tr>

                    {/* Row 5: 60,000 กู้ */}
                    <tr className="bg-[#eef1f6]">
                        <td className="text-[#192b5d] font-bold text-[9px] md:text-[10px] lg:text-sm p-1 md:p-2 border-r border-white leading-tight">
                            กู้กยศ.<br/><span className="text-[8px] md:text-[10px] lg:text-xs font-normal">(ชำระค่าขึ้นทะเบียนนักศึกษา)</span>
                        </td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">3,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">-</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-white text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-1 md:p-2 text-orange-500 font-medium bg-[#eef1f6] text-[10px] md:text-xs lg:text-sm">7,000</td>
                        <td className="p-2 lg:p-3 bg-[#2a3666] text-white font-bold text-xs md:text-sm lg:text-xl border-l border-white">45,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipTable;
