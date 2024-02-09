import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from 'src/styles/styles';
import { experiences } from 'src/constants';
import { withSectionWrapper } from 'src/hoc';
import { textVariant } from 'src/utils/motion';

import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{ background: '#1d1836', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </VerticalTimelineElement>
    );
};

const Experience = withSectionWrapper(() => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}, 'work');

ExperienceCard.propTypes = {
    experience: PropTypes.object,
};

export default Experience;
