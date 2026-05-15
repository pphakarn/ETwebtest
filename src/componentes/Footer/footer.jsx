import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a1128] py-6" itemScope itemType="https://schema.org/WPFooter">
            <div className="container mx-auto px-6 md:px-20">
                <div className="flex flex-col space-y-2 text-white max-w-2xl">
                    <h6 className="font-bold text-lg mb-1">ติดต่อคณะ / สาขา</h6>
                    
                    <p className="text-sm text-gray-200 font-light">
                        คณะวิศวกรรมศาสตร์และเทคโนโลยี
                    </p>
                    
                    <p className="text-sm text-gray-200 font-light">
                        สถาบันการจัดการปัญญาภิวัฒน์ (PIM)
                    </p>
                    
                    <p className="text-sm text-gray-200 font-light">
                        85/1 หมู่ 2 ถ.แจ้งวัฒนะ อ.ปากเกร็ด จ.นนทบุรี 11120
                    </p>
                    
                    <p className="text-sm text-gray-200 font-light">
                        โทร 02-855-0000
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;