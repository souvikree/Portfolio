import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react';

const ProjectModal = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 flex items-start justify-center overflow-y-scroll transition-all duration-500">
                <div className="max-w-[800px] w-full rounded-2xl m-12 my-8 p-5 bg-gray-900 text-gray-100 flex flex-col relative shadow-2xl">
                    <CloseRounded
                        className="absolute top-2.5 right-5 cursor-pointer text-gray-100"
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img src={project?.image} alt="project" className="w-full object-cover rounded-xl mt-7 shadow-lg" />
                    <div className="text-2xl font-semibold mt-4 mb-1.5">{project?.title}</div>
                    <div className="text-sm text-gray-400 mb-2">{project?.date}</div>
                    <div className="flex flex-wrap mb-2">
                        {project?.tags.map((tag, index) => (
                            <div key={index} className="text-sm font-normal text-blue-400 bg-blue-800 bg-opacity-40 rounded-lg px-2 py-1 mr-2 mb-2">{tag}</div>
                        ))}
                    </div>
                    <div className="text-base font-normal mb-4">{project?.description}</div>
                    {project?.member && (
                        <>
                            <div className="text-lg font-semibold mb-2">Members</div>
                            <div className="flex flex-col gap-1.5 mb-4">
                                {project?.member.map((member, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <img src={member.img} alt="member" className="w-12 h-12 object-cover rounded-full shadow-lg" />
                                        <div className="text-base font-medium">{member.name}</div>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-100">
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-100">
                                            <LinkedIn />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="flex justify-end gap-3 mb-3">
                        <a href={project?.github} target="_blank" rel="noopener noreferrer" className="w-full text-center text-lg font-semibold text-gray-100 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-500">View Code</a>
                        <a href={project?.webapp} target="_blank" rel="noopener noreferrer" className="w-full text-center text-lg font-semibold text-gray-100 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-500">View Live App</a>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectModal;
