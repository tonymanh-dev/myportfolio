import React, { useEffect, useState, useRef } from 'react'

import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import { Button } from '../index'
import Hamburger from './Hamburger'
import { navLinks } from '../../constants/index'
import { Social } from '../index'

import { MdLightMode, MdOutlineNightlight } from 'react-icons/md'

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
        transition: { type: 'spring', bounce: 0.5, duration: 1.5 },
    },
    hidden: {
        y: 50,
        opacity: 0,
    },
}

const sidebar = {
    open: {
        clipPath: 'circle(1500px at 89% 5%',
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

const Sidebar = ({ theme, toggleTheme, scrollTo }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [link, setLink] = useState('')

    const sidebarRef = useRef(null)

    // Handle open/close Sidebar
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
        document.body.classList.toggle('bg-blur')
    }

    // Handle click scroll to section
    const handleClickItem = (label) => {
        document.body.classList.remove('bg-blur')

        setLink(label)
        setIsOpen(false)
        scrollTo(`#${label.toLowerCase()}`)
    }

    // Handle click outside to close Sidebar
    const onClickOutside = () => {
        setIsOpen(false)
        document.body.classList.remove('bg-blur')
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                onClickOutside()
            }
        }
        document.addEventListener('click', handleClickOutside, true)
    })

    return (
        <div ref={sidebarRef} className={cx('sidebar')}>
            <motion.div
                className={cx('bg-animate')}
                variants={sidebar}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            />
            <Hamburger toggleSidebar={toggleSidebar} isOpen={isOpen} />

            {isOpen && (
                <div className={cx('inner')}>
                    <motion.ul
                        className={cx('links')}
                        initial="hidden"
                        animate="show"
                        variants={lists}
                    >
                        {navLinks.map((label) => (
                            <motion.li
                                key={label}
                                className={cx('item')}
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
                                <MdLightMode className={cx('sun')} />
                            ) : (
                                <MdOutlineNightlight className={cx('moon')} />
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

export default Sidebar
