/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

import { styles } from 'src/styles/styles';
import { github, demo } from 'src/assets';
import { withSectionWrapper } from 'src/hoc';
import { projects } from 'src/constants';
import { fadeIn, textVariant } from 'src/utils/motion';

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    demo_link,
}) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                        <div
                            onClick={() => window.open(demo_link, '_blank')}
                            className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={demo}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>

                        <div
                            onClick={() => window.open(source_code_link, '_blank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <div
                            key={`${name}-${tag.name}`}
                            className="bg-primary rounded-2xl px-3"
                        >
                            <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = withSectionWrapper(() => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>showcase of my skills</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Below you can watch some of my works. Following projects
                    showcases my skills and experience through real examples of my
                    work.
                    <br />
                    <br />
                    Each project contains <b>demo link</b>, <b>source-code link</b>{' '}
                    and <b>brief description</b> with the technical stack used in it.
                    <br />
                    <br />
                    These projects reflect my ability to work with different
                    situations and technologies, as well as my ability to organize
                    the project beautifully for others to see.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}, 'works');

export default Works;
