// Higher Order Component - Used to wrap components to help with styling or other reasons. Basically a container we can move around and style which will apply to all components wrapped. In this case, it keeps the components from hugging the left side of the screen.
// NOTE: components need to be wrapped in a fragment if they will be wrapped

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
  function HOC () {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className='hash-span' id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
  }

export default SectionWrapper