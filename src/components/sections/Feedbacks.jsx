import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { styles } from 'src/styles/styles';
import { testimonials } from 'src/constants';
import { withSectionWrapper } from 'src/hoc';
import { fadeIn, textVariant } from 'src/utils/motion';

const FeedbackCard = props => {
    const { index, testimonial, name, designation, company, image } = props;
    return (
        <motion.div
            variants={fadeIn('', 'spring', index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
        >
            <p className="text-white font-black text-[48px]">&quot;</p>

            <div className="mt-1">
                <p className="text-white tracking-wider text-[18px]">
                    {testimonial}
                </p>

                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="blue-text-gradient">@</span> {name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                            {designation} of {company}
                        </p>
                    </div>

                    <img
                        src={image}
                        alt={`feedback_by-${name}`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    );
};

const Feedbacks = withSectionWrapper(() => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={testimonial.name}
                        index={index}
                        {...testimonial}
                    />
                ))}
            </div>
        </div>
    );
}, 'feedbacks');

FeedbackCard.propTypes = {
    index: PropTypes.number,
    testimonial: PropTypes.string,
    name: PropTypes.string,
    designation: PropTypes.string,
    company: PropTypes.string,
    image: PropTypes.string,
};

export default Feedbacks;
