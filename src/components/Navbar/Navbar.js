import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi'

import NavMenu from './NavMenu'
import { Button, Loading } from '../index'
import { navLinks, images, music, logo } from '../../constants/index'
import styles from './Navbar.module.scss'

const cx = classNames.bind(styles)

const getThemeFromStorage = () => {
    const getTheme = localStorage.getItem('theme')
    let theme = 'dark'
    if (getTheme) {
        theme = getTheme
    }
    return theme
}

const Navbar = ({ aboutRef }) => {
    const [theme, setTheme] = useState(getThemeFromStorage())
    const [link, setLink] = useState('')
    const [isMusic, setIsMusic] = useState(false)
    const [scrollDown, setScrollDown] = useState('')

    const musicRef = useRef(null)

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const toggleMusic = () => {
        const audio = musicRef.current
        setIsMusic(!isMusic)

        isMusic ? audio.pause() : audio.play()
    }

    useEffect(() => {
        document.body.setAttribute('id', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    //   handle click to scroll
    const scrollTo = (el) => {
        const sectionId = document.getElementById(el)
        sectionId.scrollIntoView({ behavior: 'smooth' })
    }

    // Handle hidden navbar when scroll down
    useEffect(() => {
        let lastScroll = 0

        window.addEventListener('scroll', () => {
            const curScroll = window.pageYOffset

            if (curScroll > lastScroll && !scrollDown) {
                setScrollDown('scroll-down')
            }

            if (curScroll < lastScroll) {
                setScrollDown('scroll-up')
            }

            if (curScroll <= 0) setScrollDown('')

            lastScroll = curScroll
        })
    }, [scrollDown])

    return (
        <nav className={cx(scrollDown)}>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1.2,
                }}
                className={cx('nav')}
            >
                <div
                    className={cx('logo')}
                    onClick={() => window.location.reload()}
                >
                    {logo}
                </div>
                <div className={cx('nav-actions')}>
                    <ul className={cx('nav-links')}>
                        {navLinks.map((label) => (
                            <motion.li
                                key={`link-${label}`}
                                className={cx('nav-item')}
                                onClick={() => {
                                    setLink(label)
                                    scrollTo(`#${label.toLowerCase()}`)
                                }}
                                variants={label}
                                // whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={`#${label.toLowerCase()}`}>{label}</a>

                                {/* {label === link && (
                                    <motion.div
                                        className={cx('underline')}
                                        layoutId="underline"
                                        transition={{
                                            ease: 'easeInOut',
                                            duration: 0.15,
                                        }}
                                    />
                                )} */}
                            </motion.li>
                        ))}
                    </ul>
                    {/* <div className={cx('music')} onClick={toggleMusic}>
                        <audio src={music} ref={musicRef} loop />
                        {isMusic ? (
                            <HiOutlineVolumeUp className={cx('active')} />
                        ) : (
                            <HiOutlineVolumeOff />
                        )}
                    </div> */}
                    <div className={cx('dark__mode')} onClick={toggleTheme}>
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
                    toggleTheme={toggleTheme}
                    theme={theme}
                    setLink={setLink}
                    link={link}
                    scrollTo={scrollTo}
                />
            </motion.div>
        </nav>
    )
}

export default Navbar
