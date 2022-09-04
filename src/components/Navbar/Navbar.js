import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Button } from '../index'

import { images } from '../../constants/index'
import Hamburger from './Hamburger'
import NavMenu from './NavMenu'

const cx = classNames.bind(styles)
const navLinks = ['About', 'Skills', 'Work', 'Contact']

const getThemeFromStorage = () => {
    const getTheme = localStorage.getItem('theme')
    let theme = 'dark'
    if (getTheme) {
        theme = getTheme
    }
    return theme
}

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromStorage())
    const [link, setLink] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const toggletheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.body.classList = theme
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: 'easeInOut',
                duration: 1,
            }}
        >
            <nav className={cx('nav')}>
                <div className={cx('logo')}>
                    <img src={images.eth} alt="" />
                </div>
                <div className={cx('nav-actions')}>
                    <ul className={cx('nav-links')}>
                        {navLinks.map((item) => (
                            <motion.li
                                key={`link-${item}`}
                                className={cx('nav-item')}
                                onClick={() => setLink(item)}
                                variants={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    // style={{
                                    //     color:
                                    //         item === link
                                    //             ? 'var(--primary-color)'
                                    //             : '',
                                    // }}
                                >
                                    {item}
                                </a>

                                {item === link && (
                                    <motion.div
                                        className={cx('underline')}
                                        layoutId="underline"
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.15,
                                        }}
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>
                    <div className={cx('dark__mode')} onClick={toggletheme}>
                        {theme === 'dark' ? (
                            <BsMoonStarsFill className={cx('moon')} />
                        ) : (
                            <BsFillSunFill className={cx('sun')} />
                        )}
                    </div>
                    <div className={cx('nav-btn')}>
                        <Button title="Resume" outline onClick={() => {}} />
                    </div>
                </div>

                {/* -----------Nav mobile---------- */}

                <NavMenu
                    toggleMenu={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
            </nav>
        </motion.div>
    )
}

export default Navbar
