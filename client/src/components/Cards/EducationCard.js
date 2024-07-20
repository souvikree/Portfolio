import React from 'react';

const EducationCard = ({ education }) => {
    return (
        <div className="w-[650px] rounded-lg border border-[#854CE6] shadow-lg p-3 flex flex-col gap-3 transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[#6E4AB6] overflow-hidden md:w-[300px]">
            {/* Top Section */}
            <div className="flex gap-3">
                <img
                    src={education.img}
                    alt="school logo"
                    className="h-[50px] bg-black rounded-lg mt-1 object-cover md:h-[40px]"
                />
                <div className="flex flex-col w-full">
                    <div className="text-lg font-semibold text-[#333] md:text-base">{education.school}</div>
                    <div className="text-sm font-medium text-[#666] md:text-xs">{education.degree}</div>
                    <div className="text-xs font-normal text-[#999] md:text-[10px]">{education.date}</div>
                </div>
            </div>
            <div className="text-sm font-medium text-[#666] md:text-xs">
                <b>Grade: </b>{education.grade}
            </div>
            <div className="text-base font-normal text-[#333] md:text-sm overflow-hidden mt-2">
                <span className="block truncate line-clamp-4">{education.desc}</span>
            </div>
        </div>
    );
};

export default EducationCard;
