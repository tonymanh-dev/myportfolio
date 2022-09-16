/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Navigation.module.scss'
import classNames from 'classnames/bind'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const cx = classNames.bind(styles)
const Navigation = ({ refs }) => {
    const [visibleSection, setVisibleSection] = useState('')

    const { headerRef, aboutRef, skillsRef, workRef, contactRef } = refs

    console.log(visibleSection)

    const sectionRefs = [
        { section: 'header', ref: headerRef },
        { section: 'about', ref: aboutRef },
        { section: 'skills', ref: skillsRef },
        { section: 'work', ref: workRef },
        { section: 'contact', ref: contactRef },
    ]

    // Handle get dimensions
    const getDimensions = (ele) => {
        const { height } = ele.getBoundingClientRect()
        const offsetTop = ele.offsetTop
        const offsetBottom = offsetTop + height

        return {
            height,
            offsetTop,
            offsetBottom,
        }
    }

    const scrollTo = (id) => {
        const sectionId = document.getElementById(id)
        sectionId.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            const { height: headerHeight } = getDimensions(headerRef.current)
            const scrollPosition = window.scrollY + headerHeight

            const selected = sectionRefs.find(({ section, ref }) => {
                const ele = ref.current
                if (ele) {
                    const { offsetBottom, offsetTop } = getDimensions(ele)
                    return (
                        scrollPosition > offsetTop &&
                        scrollPosition < offsetBottom
                    )
                }
            })

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section)
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined)
            }
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [visibleSection])

    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.3, delay: 3 }}
            className={cx('wrapper')}
        >
            <div className={cx('items')}>
                {['home', 'about', 'skills', 'work', 'contact'].map(
                    (item, i) => (
                        <a
                            href={`#${item}`}
                            key={item + i}
                            onClick={() => scrollTo(`#${item}`)}
                        >
                            <span
                                className={cx(
                                    'dot',
                                    visibleSection === item ? 'active' : '',
                                )}
                            />
                        </a>
                    ),
                )}
            </div>
        </motion.div>
    )
}

export default Navigation
