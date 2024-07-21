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
        <div id="experience" className="relative z-10 px-4 py-8 md:px-0 md:py-16">
            <div className="relative w-full bg-gray-900 py-8">
                <div className="max-w-4xl mx-auto px-4 py-8  gap-6">
                    <h1 className="text-4xl font-semibold text-white text-center mb-4 md:text-3xl">Experience</h1>
                    <p className="text-lg text-gray-300 text-center mb-6 md:text-base">
                        My work experience as a software engineer and working on different companies and projects.
                    </p>
                    <div className="w-full max-w-3xl mt-4 flex flex-col items-center gap-4">
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
