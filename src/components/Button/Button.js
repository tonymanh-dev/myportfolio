import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({
    title,
    href,
    text = false,
    primary = false,
    outline = false,
    loading = false,
    small = false,
    large = false,
    type,
    className,
    disabled,

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
        loading,
        disabled,
        small,
        large,
        text,
    })
    return (
        <Comp className={classes} {...props} type={type}>
            <span className={cx('title')}>{title}</span>
            {loading && <span className={cx('loading')}>{loading}</span>}

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button
