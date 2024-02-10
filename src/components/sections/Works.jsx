import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from 'src/styles/styles';
import { github, demo } from 'src/assets';
import { withSectionWrapper } from 'src/hoc';
import { projects } from 'src/constants';
import { fadeIn, textVariant } from 'src/utils/motion';

const ProjectCard = props => {
    const { index, name, description, tags, image, source_code_link, demo_link } =
        props;

    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                        <div
                            onClick={() => window.open(demo_link, '_blank')}
                            className="green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={demo}
                                alt="demo"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>

                        <div
                            onClick={() => window.open(source_code_link, '_blank')}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={github}
                                alt="github"
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
                        <div key={tag.name} className="bg-primary rounded-2xl px-3">
                            <p className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
                        </div>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = withSectionWrapper(() => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My works</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Repellendus, alias! Voluptate quasi dolore magni molestiae nam
                    deleniti et, ducimus doloribus reprehenderit consequatur voluptas
                    accusantium pariatur at, in error natus iure. Placeat illo
                    commodi voluptatum ad a quo quibusdam, necessitatibus saepe quae
                    maiores fugiat dolores animi vel quas natus accusamus quia soluta
                    delectus facere quaerat eum similique maxime nobis. Quis,
                    consequuntur.
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

ProjectCard.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    source_code_link: PropTypes.string.isRequired,
    demo_link: PropTypes.string,
};

export default Works;
