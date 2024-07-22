import React from 'react';

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <div
            className="relative w-[330px] h-[490px] mb-24  bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer rounded-lg shadow-lg overflow-hidden p-6 flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:translate-y-[-8px] hover:shadow-2xl hover:brightness-110"
            onClick={() => setOpenModal({ state: true, project: project })}
        >
           
            <img
                src={project.image}
                alt="project"
                className="w-full h-[180px] bg-gray-700 rounded-lg shadow-md object-cover"
            />
           
            <div className="flex flex-wrap gap-2 mt-2">
                {project.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs font-medium text-white bg-red-800 px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
          
            <div className="flex flex-col gap-2 px-1">
                <div className="text-lg font-semibold text-white truncate">{project.title}</div>
                <div className="text-xs font-medium text-gray-400">{project.date}</div>
                <p className="text-sm font-normal text-gray-300 mt-2 truncate line-clamp-6">
                    {project.description}
                </p>
            </div>
            
            <div className="flex items-center space-x-[-10px] pl-1 mt-2">
                {project.member?.map((member, index) => (
                    <img
                        key={index}
                        src={member.img}
                        alt="member"
                        className="w-12 h-12 rounded-full border-2 border-gray-800 shadow-sm"
                    />
                ))}
            </div>
            
            
           
            
        </div>
    );
};

export default ProjectCards;
