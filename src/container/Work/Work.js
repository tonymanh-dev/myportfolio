import React, { forwardRef, useState } from 'react'
import styles from './Work.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { works } from '../../constants/index'
import { Button, contentsAnimate, Section } from '../../components/index'

import { FiGithub, FiExternalLink } from 'react-icons/fi'

const cx = classNames.bind(styles)

const Work = forwardRef((props, ref) => {
    const [showMore, setShowMore] = useState(false)

    const handleShowProject = () => {
        const projects = works.slice(0, showMore ? works.length : 3)
        return projects
    }

    const workAnimate = {
        offscreen: {
            y: 100,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 3,
                delay: 0.2,
            },
        },
    }

    return (
        <Section id="#work" ref={ref} title="Some Things I've Built">
            <motion.div className={cx('contents')}>
                <ul className={cx('project-grid')}>
                    {handleShowProject().map((item, i) => {
                        const rightItem = i % 2 === 0 ? '' : 'item-right'
                        return (
                            <motion.li
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={workAnimate}
                                key={item.title}
                                className={cx('item', rightItem)}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, 2, 0, -2, 0],
                                    }}
                                    // initial={{
                                    //     x: rightItem ? 100 : -100,
                                    //     opacity: 0,
                                    // }}
                                    // whileInView={{ x: 0, opacity: 1 }}
                                    // transition={{
                                    //     type: 'spring',
                                    //     bounce: 0.3,
                                    //     duration: 3,
                                    //     delay: 0.5,
                                    // }}
                                    className={cx('hero-img')}
                                >
                                    <a href={item.live}>
                                        <img src={item.image} alt="" />
                                    </a>
                                </motion.div>
                                <motion.div
                                    // initial={{
                                    //     x: rightItem ? -100 : 100,
                                    //     opacity: 0,
                                    // }}
                                    // whileInView={{ x: 0, opacity: 1 }}
                                    // transition={{
                                    //     type: 'spring',
                                    //     bounce: 0.3,
                                    //     duration: 3,
                                    //     delay: 0.5,
                                    // }}
                                    className={cx('info')}
                                >
                                    <div>
                                        <p className={cx('featured')}>
                                            Featured Project
                                        </p>
                                        <h2 className={cx('title')}>
                                            {item.title}
                                        </h2>
                                        <p className={cx('description')}>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ul className={cx('tech')}>
                                            {item.tech.map((tech) => (
                                                <li
                                                    key={tech}
                                                    className={cx('tech-item')}
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className={cx('navigate')}>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                href={item.github}
                                            >
                                                <FiGithub />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                href={item.live}
                                            >
                                                <FiExternalLink />
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.li>
                        )
                    })}
                </ul>
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{ opacity: [0, 1], y: [20, 0] }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                    }}
                    className={cx('show-more')}
                >
                    <Button
                        onClick={() => setShowMore(!showMore)}
                        outline
                        title={showMore ? 'Show less' : 'Show more'}
                    />
                </motion.div>
            </motion.div>
        </Section>
    )
})

export default Work
