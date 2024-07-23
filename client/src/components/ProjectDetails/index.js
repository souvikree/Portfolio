import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useState } from 'react';

const ProjectModal = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const truncateDescription = (description, length) => {
    if (description.length <= length) return description;
    return description.substring(0, length) + '...';
  };

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-80 flex items-center justify-center overflow-hidden transition-all duration-500">
        <div className="w-full max-w-[95%] sm:max-w-[800px] mx-5 sm:mx-12 my-8 p-5 bg-gray-900 text-gray-100 rounded-2xl shadow-2xl relative flex flex-col max-h-[95%] overflow-y-auto scrollbar-hide">
          <CloseRounded
            className="absolute top-3 right-3 sm:top-2.5 sm:right-5 cursor-pointer text-gray-100"
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
          <div className="text-base font-normal mb-4">
            {showFullDescription ? project?.description : truncateDescription(project?.description, 100)}
            {project?.description.length > 100 && (
              <button
                className="text-blue-500 ml-1"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            )}
          </div>
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
          <div className="flex flex-col sm:flex-row justify-end gap-3 mb-3">
            <a href={project?.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-full text-center text-lg font-semibold text-gray-100 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-500">View Code</a>
            <a href={project?.webapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-full text-center text-lg font-semibold text-gray-100 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-500">View Live App</a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;
