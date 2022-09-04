import React from 'react'
import { motion } from 'framer-motion'
import styles from './Social.module.scss'
import classNames from 'classnames/bind'
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaLinkedinIn,
    FaInstagram,
} from 'react-icons/fa'

const cx = classNames.bind(styles)

const socialIcon = [
    {
        icon: <FaGithub />,
        link: '#git',
    },
    {
        icon: <FaLinkedinIn />,
        link: '#link',
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

const Social = () => {
    return (
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 3 }}
            className={cx('app__social')}
        >
            <ul className={cx('social__list')}>
                {socialIcon.map(({ icon, link }) => (
                    <motion.li
                        whileHover={{ scale: 1.1, y: -5 }}
                        transition={{ duration: 0.2 }}
                        key={link}
                        className={cx('item')}
                    >
                        <a href={link} className={cx('label')}>
                            {icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Social
