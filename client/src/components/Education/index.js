import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Index = () => {
    return (
        <div id="education" className="flex flex-col items-center justify-center relative z-10 px-4 py-8 md:px-0 md:py-12">
            <div className="relative flex flex-col items-center w-full max-w-4xl px-4 py-8 gap-6">    {/* bg-gray-900 rounded-lg shadow-lg */}
                <h1 className="text-4xl font-semibold text-white mb-4 md:text-3xl">Education</h1>
                <p className="text-lg text-gray-300 text-center mb-6 md:text-base">
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </p>
                <div className="w-full max-w-3xl mt-4 flex flex-col items-center gap-4">
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent className="py-3 px-2 ">
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== education.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
}

export default Index;
