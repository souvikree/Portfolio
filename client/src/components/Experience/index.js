import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

const Index = () => {
    return (
        <div id="experience" className="relative z-0 px-4 mt-20 py-8 md:px-6 lg:px-8 md:py-16 lg:py-24 ">
            <div className="relative w-full  py-8">
                <div className="max-w-4xl mx-auto px-4 py-8 gap-6">
                    <h1 className="text-3xl font-semibold text-white text-center mb-4 sm:text-4xl md:text-4xl">
                        Experience
                    </h1>
                    <p className="text-base text-gray-300 text-center mb-6 sm:text-lg md:text-xl">
                        My work experience as a software engineer, working on different companies and projects.
                    </p>
                    <div className="w-full max-w-3xl md:max-w-xl mt-4 flex flex-col items-center gap-4  md:ml-28 ">
                        <Timeline>
                            {experiences.map((experience, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        {index !== experiences.length - 1 && (
                                            <TimelineConnector style={{ background: '#854CE6' }} />
                                        )}
                                    </TimelineSeparator>
                                    <TimelineContent className="py-3 px-2">
                                        <ExperienceCard experience={experience} />
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
