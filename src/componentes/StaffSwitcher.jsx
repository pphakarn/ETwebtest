import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personnelData } from '../mockData/data';

const StaffSwitcher = () => {
    const location = useLocation();

    return (
        <div className="w-full bg-white/80 backdrop-blur-md py-6 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <h3 className="text-center text-gray-500 text-sm font-semibold mb-4 tracking-wider uppercase">
                    ดูบุคลากรท่านอื่น
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {personnelData.map((person, index) => {
                        const isActive = location.pathname === person.href;
                        
                        return (
                            <Link 
                                key={index} 
                                to={person.href}
                                className="group flex flex-col items-center gap-2"
                            >
                                <motion.div 
                                    className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                                        isActive ? 'border-[#3FA2F6] scale-110 shadow-lg opacity-100' : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-300'
                                    }`}
                                    whileHover={{ y: -5 }}
                                >
                                    <img 
                                        src={person.thumb} 
                                        alt={person.alt} 
                                        className="w-full h-full object-cover"
                                    />
                                    {isActive && (
                                        <div className="absolute inset-0 bg-[#3FA2F6]/10 flex items-center justify-center">
                                            <div className="w-2 h-2 bg-[#3FA2F6] rounded-full animate-pulse"></div>
                                        </div>
                                    )}
                                </motion.div>
                                <span className={`text-[10px] md:text-xs font-medium transition-colors duration-300 ${
                                    isActive ? 'text-[#3FA2F6]' : 'text-gray-400 group-hover:text-gray-600'
                                }`}>
                                    {person.alt}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default StaffSwitcher;
