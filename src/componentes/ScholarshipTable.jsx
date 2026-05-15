import React from 'react';

const ScholarshipTable = () => {
    return (
        <div className="w-full overflow-x-auto shadow-xl rounded-xl">
            <table className="w-full text-center border-collapse text-[10px] md:text-xs lg:text-sm">
                <thead>
                    <tr>
                        <th className="bg-[#9c1228] text-white p-1 lg:p-3 font-bold border-r border-white/20 leading-tight" rowSpan="2">
                            คณะ/สาขา
                        </th>
                        <th className="bg-[#192b5d] text-white p-1 lg:p-3 font-bold text-xs md:text-base lg:text-lg border-r border-white/20 leading-tight" rowSpan="2" colSpan="2">
                            ประเภททุน
                        </th>
                        <th className="bg-[#464547] text-white p-1 font-bold text-[8px] md:text-[10px] lg:text-xs border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 1</th>
                        <th className="bg-[#464547] text-white p-1 font-bold text-[8px] md:text-[10px] lg:text-xs border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 2</th>
                        <th className="bg-[#464547] text-white p-1 font-bold text-[8px] md:text-[10px] lg:text-xs border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 3</th>
                        <th className="bg-[#464547] text-white p-1 font-bold text-[8px] md:text-[10px] lg:text-xs border-b border-r border-white/20 leading-tight" colSpan="2">ชั้นปีที่ 4</th>
                        <th className="bg-[#192b5d] text-white p-1 lg:p-3 font-bold leading-tight" rowSpan="2">
                            รวมจ่าย<br /><span className="text-[8px] md:text-[10px] font-normal">ตลอดหลักสูตร</span>
                        </th>
                    </tr>
                    <tr className="text-white text-[7px] md:text-[9px] lg:text-[10px] bg-[#a8a3c8]">
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
                        <td className="bg-[#2a3666] text-white font-bold text-[8px] md:text-[10px] lg:text-xs p-1 lg:p-3 border-r border-white" rowSpan="5">
                            เทคโนโลยีดิจิทัล<br />และสารสนเทศ<br />
                            <span className="text-red-500 text-xs md:text-sm lg:text-base">(DIT)</span>
                        </td>
                        <td className="font-bold text-[10px] md:text-xs lg:text-base p-1 border-r border-white bg-white text-black" colSpan="2">
                            เต็มจำนวน <br />
                            <span className="text-[8px] md:text-[10px] font-normal text-gray-500 block lg:inline">
                                (กรณีไม่ได้รับทุน)
                            </span>
                        </td>
                        <td className="p-1 text-orange-500 font-medium bg-[#fcfcfc] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#e6e6f0] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#fcfcfc] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#e6e6f0] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#fcfcfc] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#e6e6f0] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#fcfcfc] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#e6e6f0] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 lg:p-2 bg-black text-white font-bold text-[10px] md:text-xs lg:text-lg border-l border-white">360,000</td>
                    </tr>

                    {/* Row 2: 100,000 ไม่กู้ */}
                    <tr className="border-b border-white bg-white">
                        <td className="bg-[#a8162e] text-white font-bold text-xs md:text-base lg:text-lg p-1 border-r border-white w-14 md:w-16 lg:w-20" rowSpan="2">
                            100,000
                        </td>
                        <td className="text-[#a87a20] font-bold text-[8px] md:text-[10px] lg:text-base p-1 border-r border-white leading-tight">
                            ไม่กู้ยืม กยศ.
                        </td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">3,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">35,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">35,000</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">35,500</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">35,500</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">35,500</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">35,500</td>
                        <td className="p-1 lg:p-2 bg-[#a8162e] text-white font-bold text-[10px] md:text-xs lg:text-lg border-l border-white">260,000</td>
                    </tr>

                    {/* Row 3: 100,000 กู้ */}
                    <tr className="border-b border-white bg-[#eef1f6]">
                        <td className="text-[#192b5d] font-bold text-[8px] md:text-[9px] lg:text-xs p-1 border-r border-white leading-tight">
                            กู้กยศ.<br /><span className="text-[7px] md:text-[8px] lg:text-[10px] font-normal">(ชำระค่าขึ้นทะเบียนนักศึกษา)</span>
                        </td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">3,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">-</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">-</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">-</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">500</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">500</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">500</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">500</td>
                        <td className="p-1 lg:p-2 bg-[#2a3666] text-white font-bold text-[10px] md:text-xs lg:text-lg border-l border-white">5,000</td>
                    </tr>

                    {/* Row 4: 60,000 ไม่กู้ */}
                    <tr className="border-b border-white bg-white">
                        <td className="bg-[#a8162e] text-white font-bold text-xs md:text-base lg:text-lg p-1 border-r border-white" rowSpan="2">
                            60,000
                        </td>
                        <td className="text-[#a87a20] font-bold text-[8px] md:text-[10px] lg:text-base p-1 border-r border-white leading-tight">
                            ไม่กู้ยืม กยศ.
                        </td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">3,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">45,000</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 text-orange-500 font-medium text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#f5f5fa] text-[8px] md:text-[10px] lg:text-xs">42,000</td>
                        <td className="p-1 lg:p-2 bg-[#a8162e] text-white font-bold text-[10px] md:text-xs lg:text-lg border-l border-white">300,000</td>
                    </tr>

                    {/* Row 5: 60,000 กู้ */}
                    <tr className="bg-[#eef1f6]">
                        <td className="text-[#192b5d] font-bold text-[8px] md:text-[9px] lg:text-xs p-1 border-r border-white leading-tight">
                            กู้กยศ.<br /><span className="text-[7px] md:text-[8px] lg:text-[10px] font-normal">(ชำระค่าขึ้นทะเบียนนักศึกษา)</span>
                        </td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">3,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">-</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-white text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 text-orange-500 font-medium bg-[#eef1f6] text-[8px] md:text-[10px] lg:text-xs">7,000</td>
                        <td className="p-1 lg:p-2 bg-[#2a3666] text-white font-bold text-[10px] md:text-xs lg:text-lg border-l border-white">45,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ScholarshipTable;