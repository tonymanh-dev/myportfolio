import React from 'react'
import styles from './Footer.module.scss'
import { motion } from 'framer-motion'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <p>
                Built by <a href="#git">Tony Manh</a>
            </p>
            <p>© Tony Manh 2022. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
