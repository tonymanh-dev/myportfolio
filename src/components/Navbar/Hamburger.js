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

const Hamburger = ({ toggleSidebar, isOpen }) => {
    return (
        <button onClick={toggleSidebar} className={cx('menu-icon')}>
            <svg width="30" height="30" viewBox="0 0 23 23">
                <Path
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: {
                            d: 'M 4 2.5 L 30 2.5',
                            stroke: 'currentColor',
                        },
                        open: {
                            d: 'M 3 16.5 L 17 2.5',
                            stroke: 'currentColor',
                        },
                    }}
                    transition={transition}
                />
                <Path
                    d="M 1 9.423 L 30 9.423"
                    stroke="currentColor"
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
                            d: 'M 10 16.346 L 30 16.346',
                            stroke: 'currentColor',
                        },
                        open: {
                            d: 'M 3 2.5 L 17 16.346',
                            stroke: 'currentColor',
                        },
                    }}
                    transition={transition}
                />
            </svg>
        </button>
    )
}

export default Hamburger
