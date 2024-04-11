/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useEffect } from 'react';

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
    const paragraphRef = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        paragraphRef.current.innerHTML = t('about.text');
    }, [i18n.language, t]);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>{t('about.subtitle')}</p>
                <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                ref={paragraphRef}
            ></motion.p>

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
