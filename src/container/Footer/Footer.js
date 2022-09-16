import React from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import { Social } from '../../components/index'

const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
                delay: 0.3,
            }}
            viewport={{ once: false }}
            className={cx('wrapper')}
        >
            <Social horizontal />

            <p>
                Built by <a href="#git">Tony Manh</a>
            </p>
            <p>© Tony Manh 2022. All Rights Reserved.</p>
        </motion.div>
    )
}

export default Footer
