import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { socials } from '../../constants/index'

import styles from './Social.module.scss'

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

const Social = ({ vertical }) => {
    return (
        <motion.div
            initial={vertical ? 'hidden' : ''}
            animate={vertical ? 'show' : ''}
            variants={container}
            className={cx(vertical ? 'vertical' : 'horizontal')}
        >
            <ul className={cx('wrapper')}>
                {socials.map(({ icon, link }) => (
                    <motion.li
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.2 }}
                        key={link}
                        className={cx('item')}
                    >
                        <a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            className={cx('icon')}
                        >
                            {icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Social
