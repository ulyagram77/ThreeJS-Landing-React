/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from 'src/styles/styles';
import { services } from 'src/constants';
import { fadeIn, textVariant } from 'src/utils/motion';
import { withSectionWrapper } from 'src/hoc';

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = withSectionWrapper(() => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me.</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Welcome to my portfolio) Let&apos;s get to know each other! I&apos;m
                quite sociable, so I&apos;ll tell you a little about myself. <br />{' '}
                <br />
                My name is <b>Kyrylo</b>, and since early childhood I have been
                interested in the architecture and principle of operation of the
                computer and the activities associated with it. So I entered the STEP
                Academy, where I learned how to work with a computer and mastered
                various professions, thanks to which we now have all the conveniences
                of working and advertising on the Internet.
                <br /> <br />
                Having studied everything from computer design to web design
                programming and other things, I am keen on development of web
                products and the creation of their design the most. Therefore, I
                decided to make this type of activity my main type of income. I have
                taken many courses related to this industry and now I am studying at
                the National Technical University &quot;Kharkiv Polytechnical
                Institute&quot; majoring in computer science. <br /> <br />
                Now I am just starting my journey, but I am sure that I will become
                successful and improve every day. And little info about my lanquige
                skills. I speak English at B2 level, also i can talk on native
                Ukranian and Russian. Always ready to learn something new and become
                better!
                <br />
                <br /> Further more.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 place-content-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
}, 'about');

ServiceCard.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    icon: PropTypes.string,
};

export default About;
