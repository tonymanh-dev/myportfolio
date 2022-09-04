import React from 'react'
import classNames from 'classnames/bind'
import styles from './Section.module.scss'

import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

const Section = ({ title, children }) => {
    return (
        <section
            // initial={{ opacity: 0, y: 100 }}
            // whileInView={{ opacity: [0, 1], y: [0, -100] }}
            // transition={{ duration: 0.8, delay: 0.5 }}
            className={cx('wrapper')}
        >
            <motion.h2
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={cx('heading')}
            >
                {title}
            </motion.h2>
            {children}
        </section>
    )
}

export default Section
