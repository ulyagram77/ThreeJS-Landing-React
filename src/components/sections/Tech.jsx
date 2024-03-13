import { lazy } from 'react';
import { motion } from 'framer-motion';

import { useMathcMedia } from 'src/hooks';
import { withSectionWrapper } from 'src/hoc';
import { technologies } from 'src/constants';
import { textVariant, fadeIn } from 'src/utils/motion';
import { styles } from 'src/styles/styles';

const BallCanvas = lazy(() => import('../canvas/Ball'));

const Tech = withSectionWrapper(() => {
    const { isDesktop } = useMathcMedia();

    return (
        <>
            <motion.div
                variants={textVariant()}
                className="flex flex-col justify-center items-center mb-10"
            >
                <p className={styles.sectionSubText}>Technology Stack</p>
                <h2 className={styles.sectionHeadText}>Instruments</h2>
            </motion.div>

            <motion.div
                variants={fadeIn('bottom', 'spring', 0.5, 0.75)}
                className="flex flex-row flex-wrap justify-center gap-10"
            >
                {technologies.map(technology => (
                    <div className="w-28 h-28" key={technology.name}>
                        {!isDesktop ? (
                            <img
                                src={technology.icon}
                                alt="tech"
                                className="bg-tertiary p-5 rounded-2xl border-b-2 border-white"
                            />
                        ) : (
                            <BallCanvas icon={technology.icon} />
                        )}
                    </div>
                ))}
            </motion.div>
        </>
    );
});

export default Tech;
