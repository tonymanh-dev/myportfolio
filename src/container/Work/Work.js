import React, { useState } from 'react'
import styles from './Work.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { works } from '../../constants/index'
import { Button, Section } from '../../components/index'

import { FiGithub, FiExternalLink } from 'react-icons/fi'

const cx = classNames.bind(styles)

const Work = () => {
    const [showMore, setShowMore] = useState(false)

    const handleShowProject = () => {
        const projects = works.slice(0, showMore ? works.length : 3)
        return projects
    }

    return (
        <Section title="Some Things I've Built">
            <div className={cx('contents')}>
                <ul className={cx('project-grid')}>
                    {handleShowProject().map((item, i) => (
                        <motion.li
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            key={item.title}
                            className={cx(
                                'item',
                                i % 2 === 0 ? '' : 'item-right',
                            )}
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, 10, 0, -10, 0],
                                }}
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className={cx('hero-img')}
                            >
                                <a href={item.live}>
                                    <img src={item.image} alt="" />
                                </a>
                            </motion.div>
                            <div className={cx('info')}>
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
                            </div>
                        </motion.li>
                    ))}
                </ul>
                <motion.div
                    transition={{ duration: 1, delay: 0.3 }}
                    className={cx('show-more')}
                >
                    <Button
                        onClick={() => setShowMore(!showMore)}
                        outline
                        title={showMore ? 'Show less' : 'Show more'}
                    />
                </motion.div>
            </div>
        </Section>
    )
}

export default Work
