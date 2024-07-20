import React from 'react';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="w-full max-w-[650px] rounded-lg shadow-lg p-4 flex flex-col gap-4 relative overflow-hidden transition-transform duration-300 ease-in-out border border-[#306EE8] hover:shadow-xl hover:translate-y-[-5px] sm:max-w-[300px] sm:p-3 sm:gap-2">
            {/* Top Section with Image and Details */}
            <div className="w-full flex gap-3 items-start">
                <img 
                    src={experience.img} 
                    alt="experience" 
                    className="h-12 w-12 bg-black rounded-lg object-cover sm:h-10 sm:w-10"
                />
                <div className="w-full flex flex-col justify-center">
                    <div className="text-lg font-semibold text-[#306EE8] sm:text-sm">{experience.role}</div>
                    <div className="text-sm font-medium text-gray-600 sm:text-xs">{experience.company}</div>
                    <div className="text-xs font-normal text-gray-500 sm:text-[10px]">{experience.date}</div>
                </div>
            </div>
            {/* Description Section */}
            <div className="w-full text-sm font-normal text-gray-800 mb-4 sm:text-xs overflow-hidden">
                {experience.desc && (
                    <span className="block h-12 line-clamp-4">{experience.desc}</span>
                )}
                {experience.skills && (
                    <>
                        <br />
                        <div className="w-full flex flex-col gap-2 mt-[-10px]">
                            <strong>Skills:</strong>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills.map((skill, index) => (
                                    <div className="text-sm font-normal text-gray-800 sm:text-xs" key={index}>
                                        • {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
            {/* Document Image (conditionally visible on hover) */}
            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={experience.doc} 
                        alt="document" 
                        className="hidden h-16 w-auto bg-black rounded-lg opacity-80 cursor-pointer transition-opacity duration-200 hover:block hover:opacity-100"
                    />
                </a>
            )}
        </div>
    );
};

export default ExperienceCard;
