import React from 'react';

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <div
            className="w-[330px] h-[490px] bg-gray-900 cursor-pointer rounded-lg shadow-lg overflow-hidden p-6 flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-xl hover:brightness-105"
            onClick={() => setOpenModal({ state: true, project: project })}
        >
            {/* Image Section */}
            <img
                src={project.image}
                alt="project"
                className="w-full h-[180px] bg-gray-100 rounded-lg shadow-md object-cover"
            />
            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium text-gray-800 bg-gray-300 px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {/* Details Section */}
            <div className="flex flex-col gap-2 px-1">
                <div className="text-lg font-semibold text-white truncate">
                    {project.title}
                </div>
                <div className="text-xs font-medium text-gray-400">{project.date}</div>
                <p className="text-sm font-normal text-gray-300 mt-2 truncate line-clamp-3">
                    {project.description}
                </p>
            </div>
            {/* Members Section */}
            <div className="flex items-center space-x-[-10px] pl-1">
                {project.member?.map((member, index) => (
                    <img
                        key={index}
                        src={member.img}
                        alt="member"
                        className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-800 shadow-sm"
                    />
                ))}
            </div>
            {/* Button Section */}
            {/* Uncomment if needed
            <button
                className="hidden w-full py-2 bg-blue-500 text-white text-sm font-bold rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-100"
            >
                View Project
            </button>
            */}
        </div>
    );
};

export default ProjectCards;
