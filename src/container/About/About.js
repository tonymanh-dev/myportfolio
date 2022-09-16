import React, { forwardRef } from 'react'
import styles from './About.module.scss'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { images } from '../../constants/index'
import { Section, contentsAnimate } from '../../components/index'

const cx = classNames.bind(styles)

const About = forwardRef((props, ref) => {
    return (
        <Section ref={ref} id="#about" title="About">
            <motion.div variants={contentsAnimate} className={cx('contents')}>
                <div>
                    <p>
                        I started the code "Hello world" since 2021. I'm
                        passionate about bringing both the technical and visual
                        aspects of digital products to life. User experience,
                        beautiful pixels and writing clean accessible, human
                        code matters to me. I sweat the details. And as a
                        follower of John Maeda’s Laws Of Simplicity, I agree
                        that less is more.
                    </p>
                    <p>
                        I'm happiest when I'm creating, learning, exploring and
                        thinking about how to make things better. Currently
                        solving deceptively simple problems at UsePastel.Com.
                        I'm not available for any freelance work, but feel free
                        to reach out and say hello! I promise I don't bite 😉
                    </p>
                </div>

                <div className={cx('profile')}>
                    <div className={cx('framer')}>
                        <img className={cx('photo')} src={images.tony} alt="" />
                    </div>
                </div>
            </motion.div>
        </Section>
    )
})

export default About
