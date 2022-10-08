import React from 'react'
import { motion } from 'framer-motion'
import styles from './Decoration.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Decoration = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },

        visible: {
            rotate: [0, 0, 180, 180, 0],
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: {
                    delay: 3,
                    type: 'spring',
                    duration: 1.5,
                    bounce: 0,
                    ease: 'easeInOut',
                },
                opacity: { delay: 3, duration: 0.5 },
            },
        },
    }
    return (
        <div className={cx('decorations')}>
            <motion.svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
            >
                <motion.circle
                    cx="25"
                    cy="25"
                    r="23"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    variants={draw}
                />
            </motion.svg>

            <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: [0, 10, 0, -10, 0] }}
            >
                <mask id="path-1-inside-1_103_75" fill="white">
                    <rect width="40" height="40" rx="2" />
                </mask>
                <motion.rect
                    width="40"
                    height="40"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="8"
                    mask="url(#path-1-inside-1_103_75)"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    variants={draw}
                />
            </motion.svg>

            <motion.svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, rotate: [0, 10, 0, -10, 0] }}
            >
                <motion.path
                    d="M16 2L29.8564 26L2.14359 26L16 2Z"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    variants={draw}
                />
            </motion.svg>
            <motion.svg
                width="70"
                height="70"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
            >
                <motion.circle
                    cx="25"
                    cy="25"
                    r="23"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    variants={draw}
                />
            </motion.svg>
        </div>
    )
}

export default Decoration
