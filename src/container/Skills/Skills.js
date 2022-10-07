import React, { useState } from 'react'
import styles from './Skills.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { frontends, others } from '../../constants/index'
import { Button, Section, contentsAnimate } from '../../components/index'

const cx = classNames.bind(styles)

const Skills = () => {
    const [more, setMore] = useState(false)

    const toggleShowMore = () => {
        setMore(!more)
    }
    return (
        <Section id="#skills" title="My Skills">
            <motion.div variants={contentsAnimate} className={cx('contents')}>
                <h3 className={cx('subtitle')}>Frontend Development</h3>
                <motion.ul className={cx('item-wrapper')}>
                    {frontends.map((item) => (
                        <motion.li
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.2 }}
                            key={item.label}
                            className={cx('item')}
                        >
                            <div>
                                <img
                                    className={cx('image')}
                                    src={item.img}
                                    alt=""
                                />
                            </div>
                            <span className={cx('label')}>{item.label}</span>
                        </motion.li>
                    ))}
                </motion.ul>
                {more && (
                    <motion.div
                        viewport={{ once: true }}
                        animate={{ opacity: [0, 1], y: [0, -10] }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <h3 className={cx('second-sub')}>Others</h3>

                        <ul className={cx('others-wrapper')}>
                            {others.map((item) => (
                                <li key={item.label} className={cx('item')}>
                                    <div>
                                        <img
                                            className={cx('image')}
                                            src={item.img}
                                            alt=""
                                        />
                                    </div>
                                    <span className={cx('label')}>
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}

                <Button
                    outline
                    title={more ? 'Show less' : 'Show more'}
                    onClick={toggleShowMore}
                    style={{ marginTop: '5rem' }}
                />
            </motion.div>
        </Section>
    )
}

export default Skills
