import { motion } from 'framer-motion';

import { styles } from 'src/styles/styles';
import { staggerContainer } from 'src/utils/motion';

const withSectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default withSectionWrapper;
