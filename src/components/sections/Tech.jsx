import { motion } from 'framer-motion';

import { BallCanvas } from '../canvas';
import { withSectionWrapper } from 'src/hoc';
import { technologies } from 'src/constants';
import { textVariant, fadeIn } from 'src/utils/motion';
import { styles } from 'src/styles/styles';

const Tech = withSectionWrapper(() => {
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
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </motion.div>
        </>
    );
});

export default Tech;
