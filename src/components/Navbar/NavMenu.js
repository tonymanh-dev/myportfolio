import React from 'react'

import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './NavMenu.module.scss'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { Button } from '../index'
import Hamburger from './Hamburger'

const lists = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.3,
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

// const lists = {
//     open: {
//         transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//     },
//     closed: {
//         transition: { staggerChildren: 0.05, staggerDirection: -1 },
//     },
// }

const item = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: 50,
        delay: 0.1,
        opacity: 0,
    },
}

// const item = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 1000, velocity: -100 },
//         },
//     },

//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffness: 1000 },
//         },
//     },
// }

const menu = {
    open: {
        clipPath: 'circle(1000px at 89% 5%',
        transition: {
            duration: 0.5,
            // type: 'spring',
            // stiffness: 20,
            // restDelta: 2,
        },
    },
    closed: {
        clipPath: 'circle(0px at 89% 5%)',

        transition: {
            duration: 0.5,
            delay: 0.3,
            // type: 'spring',
            // stiffness: 400,
            // damping: 40,
        },
    },
}

const cx = classNames.bind(styles)
const navLinks = ['About', 'Skills', 'Work', 'Contact']

const NavMenu = ({ toggleMenu, isOpen }) => {
    return (
        <div className={cx('menu')}>
            <motion.div
                className={cx('menu__bg')}
                variants={menu}
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
            />
            <Hamburger toggleMenu={toggleMenu} isOpen={isOpen} />

            {/* <button className={cx('menu__ham')} onClick={toggleMenu}>
                {isOpen ? <CgClose /> : <CgMenuRight />}
            </button> */}

            {isOpen && (
                <div className={cx('menu__inner')}>
                    <motion.ul
                        className={cx('menu__links')}
                        initial="hidden"
                        animate="visible"
                        variants={lists}
                    >
                        {navLinks.map((label, i) => (
                            <motion.li
                                key={label}
                                className={cx('menu__item')}
                                variants={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                // transition={{ duration: 0.2 }}
                            >
                                <motion.a href={`#${label.toLowerCase()}`}>
                                    {label}
                                    {/* <span className={cx('counter')}>
                                        0{i + 1}.{' '}
                                    </span>
                                    <span>{label}</span> */}
                                </motion.a>
                            </motion.li>
                        ))}

                        <motion.li className={cx('menu__item')} variants={item}>
                            <Button title="Resume" outline onClick={() => {}} />
                        </motion.li>
                    </motion.ul>
                </div>
            )}
        </div>
    )
}

export default NavMenu
