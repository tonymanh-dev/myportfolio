import React, { forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Button } from '../../components/index'

const cx = classNames.bind(styles)

const list = {
    visible: {
        opacity: 1,

        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,
            delay: 0.8,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren',
        },
    },
}

const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 30 },
}

const Header = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="#home" className={cx('header__wrapper')}>
            <motion.div
                className={cx('header__heading')}
                initial="hidden"
                animate="visible"
                variants={list}
                transition
            >
                <motion.div
                    className={cx('hello')}
                    variants={item}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3>Hi, my name is</h3>
                </motion.div>
                <motion.div
                    className={cx('name')}
                    variants={item}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2>Tony Manh.</h2>
                </motion.div>
                <motion.div
                    className={cx('position')}
                    variants={item}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h1>A front-end web developer.</h1>
                </motion.div>
                <motion.div
                    className={cx('info')}
                    variants={item}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p>
                        I love creating interactive applications, building
                        stunning interfaces and amazing experiences on the web.
                        I'm currently looking for the first job as a front end
                        developer.
                    </p>
                </motion.div>
                <motion.div
                    className={cx('action')}
                    variants={item}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Button large title="Hire me" outline />
                </motion.div>
            </motion.div>
        </section>
    )
})

export default Header
