import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'

import { MdLightMode, MdOutlineNightlight } from 'react-icons/md'
// import { HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi'

import Sidebar from './Sidebar'
import { Button } from '../index'
import { navLinks, music, logo, logo2 } from '../../constants/index'

const cx = classNames.bind(styles)

// Handle theme from local storage
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
    // const [isMusic, setIsMusic] = useState(false)
    const [onScroll, setOnScroll] = useState('')

    // const musicRef = useRef(null)

    // // Music handler
    // const toggleMusic = () => {
    //     const audio = musicRef.current
    //     setIsMusic(!isMusic)

    //     isMusic ? audio.pause() : audio.play()
    // }

    // Handle theme
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        document.body.setAttribute('id', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    //   Handle click scroll to section
    const scrollTo = (el) => {
        const sectionId = document.getElementById(el)
        sectionId.scrollIntoView({ behavior: 'smooth' })
    }

    // Handle hidden/show navbar when scroll down/up
    useEffect(() => {
        let lastScroll = 0

        window.addEventListener('scroll', () => {
            const curScroll = window.pageYOffset

            if (curScroll > lastScroll && !onScroll) {
                setOnScroll('scroll-down')
            }

            if (curScroll < lastScroll) {
                setOnScroll('scroll-up')
            }

            if (curScroll <= 0) setOnScroll('')

            lastScroll = curScroll
        })
    }, [onScroll])

    return (
        <nav
            className={cx(
                onScroll,
                'container',
                onScroll === 'scroll-up' && 'bg-fill',
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1.2,
                }}
                className={cx('wrapper')}
            >
                <div
                    className={cx('logo')}
                    onClick={() => window.location.reload()}
                >
                    {logo}
                </div>
                <div className={cx('actions')}>
                    <ul className={cx('links')}>
                        {navLinks.map((label) => (
                            <motion.li
                                key={`link-${label}`}
                                className={cx('item')}
                                onClick={() => {
                                    scrollTo(`#${label.toLowerCase()}`)
                                }}
                                variants={label}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href={`#${label.toLowerCase()}`}>{label}</a>
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
                    <div className={cx('dark-mode')} onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <MdLightMode className={cx('sun')} />
                        ) : (
                            <MdOutlineNightlight className={cx('moon')} />
                        )}
                    </div>
                    <div className={cx('resume-btn')}>
                        <Button
                            title="Resume"
                            outline
                            href="mailto:manhtv.dev@gmail.com"
                        />
                    </div>
                </div>

                {/* -----------Nav mobile---------- */}

                <Sidebar
                    toggleTheme={toggleTheme}
                    theme={theme}
                    scrollTo={scrollTo}
                />
            </motion.div>
        </nav>
    )
}

export default Navbar
