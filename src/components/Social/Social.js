import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'

import styles from './Social.module.scss'
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa'

const cx = classNames.bind(styles)

export const socialIcon = [
    {
        icon: <FaLinkedinIn />,
        link: '#link',
    },
    {
        icon: <FaGithub />,
        link: '#git',
    },
    {
        icon: <FaTwitter />,
        link: '#twitter',
    },
    {
        icon: <FaInstagram />,
        link: '#insta',
    },
]

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
                {socialIcon.map(({ icon, link }) => (
                    <motion.li
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.2 }}
                        key={link}
                        className={cx('item')}
                    >
                        <a href={link} className={cx('icon')}>
                            {icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Social
