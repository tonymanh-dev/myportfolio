import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './Hamburger.module.scss'

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeLinecap="round"
        strokeWidth="2"
        {...props}
    />
)

const transition = { duration: 0.33 }

const cx = classNames.bind(styles)

const Hamburger = ({ toggleMenu, isOpen }) => {
    console.log(isOpen)
    return (
        <button onClick={toggleMenu} className={cx('menu__icon')}>
            <svg width="26" height="26" viewBox="0 0 23 23">
                <Path
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: {
                            d: 'M 2 2.5 L 20 2.5',
                            stroke: '#fff',
                        },
                        open: {
                            d: 'M 3 16.5 L 17 2.5',
                            stroke: '#fff',
                        },
                    }}
                    transition={transition}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    stroke="#fff"
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <Path
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: {
                            d: 'M 2 16.346 L 20 16.346',
                            stroke: '#fff',
                        },
                        open: {
                            d: 'M 3 2.5 L 17 16.346',
                            stroke: '#fff',
                        },
                    }}
                    transition={transition}
                />
            </svg>
        </button>
    )
}

export default Hamburger
