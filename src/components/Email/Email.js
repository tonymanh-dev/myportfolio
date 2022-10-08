import React from 'react'
import { motion } from 'framer-motion'
import styles from './Email.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const container = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: { duration: 1, delay: 3 },
    },
}

const Email = () => {
    return (
        <motion.div
            className={cx('wrapper')}
            initial="hidden"
            animate="show"
            variants={container}
            transition={{ duration: 0.3, delay: 3 }}
        >
            <div className={cx('contents')}>
                <motion.a
                    whileHover={{ y: -5 }}
                    href="mailto:manhtv.dev@gmail.com"
                >
                    manhtv.dev@gmail.com
                </motion.a>
            </div>
        </motion.div>
    )
}

export default Email
