import React from 'react'
import styles from './About.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { images } from '../../constants/index'
import { Section, contentsAnimate } from '../../components/index'

const cx = classNames.bind(styles)

const About = () => {
    return (
        <Section id="#about" title="About">
            <motion.div variants={contentsAnimate} className={cx('contents')}>
                <div className={cx('info')}>
                    <p>
                        I started coding in April 2021 and fell in love with it
                        since. I enjoyed figuring out the logic behind building
                        applications. But I was more attracted to how to make it
                        look delightful to users. That's how I started my career
                        in front end development.
                    </p>

                    <p>
                        After working hours, I spent most of my time learning
                        and experimenting with the new knowledge that I have
                        gained every single day. Currently, I’m focused on
                        looking for a new role as a front end developer and
                        finding out new technology by building projects.
                    </p>
                </div>

                <div className={cx('profile')}>
                    <div className={cx('framer')}>
                        <img
                            className={cx('photo')}
                            src={images.profile}
                            alt=""
                        />
                    </div>
                </div>
            </motion.div>
        </Section>
    )
}

export default About
