import React, { useState } from 'react';

const ExperienceCard = ({ experience }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className="relative w-[300px] rounded-lg border border-[#854CE6] shadow-lg p-4 flex flex-col gap-3 transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:border-[#6E4AB6] overflow-hidden md:w-[850px]  "
            onClick={handleClick}
        >
            
            <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-3">
                <img 
                    src={experience.img} 
                    alt="experience" 
                    className="h-14 w-14 md:h-12 md:w-12 lg:h-18 lg:w-18 bg-black rounded-lg object-cover"
                />
                <div className="flex flex-col w-full">
                    <div className="text-lg  font-semibold text-[#306EE8]">{experience.role}</div>
                    <div className="text-sm  font-medium text-gray-600">{experience.company}</div>
                    <div className="text-xs  font-normal text-gray-500">{experience.date}</div>
                </div>
            </div>
            
             {experience.skills && (
                <div className="w-full flex flex-col gap-2 mt-2">
                    <strong className="text-white ">Skills:</strong>
                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, index) => (
                            <div className="text-sm  font-normal text-white" key={index}>
                                • {skill}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            <div className={`text-sm font-normal mt-2 text-white ${isExpanded ? 'line-clamp-none' : 'line-clamp-4'}`}>
                <span className={`block transition-all duration-300 ease-in-out ${isExpanded ? 'h-auto' : 'h-[28px] overflow-hidden'}`}>
                    {experience.desc}
                </span>
            </div>
           
           
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={experience.doc} 
                        alt="document" 
                        className="hidden h-20 w-auto md:h-24 lg:h-28 bg-black rounded-lg opacity-80 cursor-pointer transition-opacity duration-200 hover:block hover:opacity-100"
                    />
                </a>
            )}
        </div>
    );
};

export default ExperienceCard;
