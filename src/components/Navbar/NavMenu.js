import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './NavMenu.module.scss'
import { Button } from '../index'
import Hamburger from './Hamburger'
import { navLinks } from '../../constants/index'
import { Social } from '../../components/index'

import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const lists = {
    show: {
        y: 0,
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.2,
            type: 'spring',
            bounce: 0.5,
            duration: 0.8,
        },
    },
    hidden: {
        y: 10,
        opacity: 0,
        transition: {
            when: 'afterChildren',
        },
    },
}

const item = {
    show: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', bounce: 0.5, duration: 1 },
    },
    hidden: {
        y: 50,
        opacity: 0,
    },
}

const menu = {
    open: {
        clipPath: 'circle(1000px at 89% 5%',
        transition: {
            duration: 0.2,
        },
    },
    closed: {
        clipPath: 'circle(0px at 89% 5%)',

        transition: {
            duration: 0.3,
            delay: 0.2,
        },
    },
}

const cx = classNames.bind(styles)

const NavMenu = ({ theme, toggleTheme, setLink, link, scrollTo }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        document.body.classList = isOpen ? '' : 'bg-blur'
        setIsOpen(!isOpen)
    }

    const handleClickItem = (label) => {
        document.body.classList = ''

        setLink(label)
        setIsOpen(false)
        scrollTo(`#${label.toLowerCase()}`)
    }

    return (
        <div className={cx('menu')}>
            <motion.div
                className={cx('menu-bg')}
                variants={menu}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            />
            <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />

            {isOpen && (
                <div className={cx('menu-inner')}>
                    <motion.ul
                        className={cx('menu-links')}
                        initial="hidden"
                        animate="show"
                        variants={lists}
                    >
                        {navLinks.map((label) => (
                            <motion.li
                                key={label}
                                className={cx('menu-item')}
                                variants={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleClickItem(label)}
                            >
                                <motion.a
                                    href={`#${label.toLowerCase()}`}
                                    className={cx(
                                        label === link ? 'active' : '',
                                    )}
                                >
                                    {label}
                                </motion.a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 1, delay: 1.8 }}
                        className={cx('actions')}
                    >
                        <div className={cx('dark-mode')} onClick={toggleTheme}>
                            {theme === 'dark' ? (
                                <BsMoonStarsFill className={cx('moon')} />
                            ) : (
                                <BsFillSunFill className={cx('sun')} />
                            )}
                        </div>
                        <Button
                            large
                            title="Resume"
                            outline
                            onClick={() => {}}
                        />

                        <Social />
                    </motion.div>
                </div>
            )}
        </div>
    )
}

export default NavMenu
