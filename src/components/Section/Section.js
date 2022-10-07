import React from 'react'
import classNames from 'classnames/bind'
import styles from './Section.module.scss'

import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

const headingAnimate = {
    hidden: { x: -100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 2 },
    },
}

const headingDivider = {
    hidden: { x: 100, opacity: 0 },
    show: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 2 },
    },
}

export const contentsAnimate = {
    hidden: { y: 100, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', duration: 3, delay: 0.3 },
    },
}

const Section = (props) => {
    return (
        <motion.section
            id={props.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.5 }}
            className={cx('wrapper')}
        >
            <div className={cx('heading')}>
                <motion.h2
                    variants={headingAnimate}
                    className={cx('heading-title')}
                >
                    {props.title}
                </motion.h2>
                <motion.span
                    variants={headingDivider}
                    className={cx('heading-divider')}
                ></motion.span>
            </div>
            {props.children}
        </motion.section>
    )
}

export default Section
