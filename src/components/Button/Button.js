import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

const Button = ({
    title,
    href,
    text = false,
    primary = false,
    outline = false,
    small = false,
    large = false,
    style,
    className,

    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) => {
    let Comp = 'button'

    const props = { onClick, ...passProps }

    if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
    })
    return (
        <Comp className={classes} {...props} style={style}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}

            <span className={cx('title')}>{title}</span>

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
