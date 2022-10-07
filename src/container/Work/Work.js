import React, { useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import styles from './Work.module.scss'

import { works } from '../../constants/index'
import { Button, contentsAnimate, Section } from '../../components/index'

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

const cx = classNames.bind(styles)

const Work = () => {
    const [showMore, setShowMore] = useState(false)

    // Handle showing quantity of project
    const handleShowProject = () => {
        const projects = works.slice(0, showMore ? works.length : 3)
        return projects
    }

    return (
        <Section id="#work" title="Some Things I've Built">
            <motion.div className={cx('contents')}>
                <ul className={cx('project-grid')}>
                    {handleShowProject().map((item, i) => {
                        const itemLeft = i % 2 === 0 ? '' : 'item-left'
                        return (
                            <motion.li
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={workAnimate}
                                key={item.title}
                                className={cx('item', itemLeft)}
                            >
                                <motion.div
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, 2, 0, -2, 0],
                                    }}
                                    className={cx('hero-img')}
                                >
                                    <a
                                        href={item.live}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <img src={item.image} alt="" />
                                    </a>
                                </motion.div>
                                <motion.div className={cx('info')}>
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
                                                rel="noreferrer"
                                                target="_blank"
                                            >
                                                <FiGithub />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                href={item.live}
                                                rel="noreferrer"
                                                target="_blank"
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
}

export default Work
