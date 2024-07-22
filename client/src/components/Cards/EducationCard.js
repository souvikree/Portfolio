import React, { useState } from 'react';

const EducationCard = ({ education }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className="relative w-[300px] rounded-lg border border-[#854CE6] shadow-lg p-4 flex flex-col gap-3 transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[#6E4AB6] overflow-hidden md:w-[850px]"
            onClick={handleClick}
        >
            {/* Top Section */}
            <div className="flex gap-3">
                <img
                    src={education.img}
                    alt="school logo"
                    className="h-[50px] bg-black rounded-lg mt-1 object-cover md:h-[40px]"
                />
                <div className="flex flex-col w-full">
                    <div className="text-lg font-semibold text-[#f5f1f1] md:text-base">{education.school}</div>
                    <div className="text-sm font-medium text-[#efeaea] md:text-xs">{education.degree}</div>
                    <div className="text-xs font-normal text-[#625e5e] md:text-[10px]">{education.date}</div>
                </div>
            </div>
            <div className="text-sm font-medium text-[#d26f6f] md:text-xs">
                <b>Grade: </b>{education.grade}
            </div>
            <div className={`text-base font-normal mt-2 text-[#e4b7b7] md:text-sm ${isExpanded ? 'line-clamp-none' : ' line-clamp-4'}`}>
                <span className={`block transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-[28px] overflow-hidden'}`}>
                    {education.desc}
                </span>
            </div>
        </div>
    );
};

export default EducationCard;
