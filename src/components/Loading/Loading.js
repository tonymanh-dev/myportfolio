import React from 'react'
import { motion } from 'framer-motion'
import styles from './Loading.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const draw = {
    hidden: { pathLength: 0, opacity: 0 },

    show: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                delay: 0.3,
                duration: 1.3,
                bounce: 0,
                ease: 'linear',
            },
        },
    },
}

const contentAnimate = {
    hidden: {
        opacity: 0,
        scale: 0.6,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 1.8,
            duration: 0.6,
            ease: 'easeInOut',
        },
    },
}

const Loading = () => {
    return (
        <motion.div
            key="loading"
            className={cx('wrapper')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: [1.2, 0.2] }}
        >
            <div className={cx('logo')}>
                <motion.svg
                    width="80"
                    height="80"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
                    animate="show"
                >
                    <motion.path
                        d="M33.2343 17.9V32H29.3143V24.22L26.6543 32H23.3743L20.6943 24.16V32H16.7743V17.9H21.5143L25.0543 27.06L28.5143 17.9H33.2343Z"
                        fill="currentColor"
                        variants={contentAnimate}
                    />
                    <motion.path
                        d="M26 1.73205L44.6506 12.5C45.2694 12.8573 45.6506 13.5175 45.6506 14.2321V35.768C45.6506 36.4825 45.2694 37.1427 44.6506 37.5L26 48.2679C25.3812 48.6252 24.6188 48.6252 24 48.2679L5.34936 37.5C4.73056 37.1427 4.34937 36.4825 4.34937 35.7679V14.232C4.34937 13.5175 4.73056 12.8573 5.34937 12.5L24 1.73205C24.6188 1.37478 25.3812 1.37479 26 1.73205Z"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                    />
                </motion.svg>
            </div>
        </motion.div>
    )
}

export default Loading
