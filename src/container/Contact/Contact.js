import React, { forwardRef, useState, useRef } from 'react'
import styles from './Contact.module.scss'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import classNames from 'classnames/bind'
import { Button, Section, contentsAnimate } from '../../components/index'
import { BsArrowRight } from 'react-icons/bs'

const cx = classNames.bind(styles)

const Contact = () => {
    const [submited, setSubmited] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useRef()
    console.log(process.env.REACT_APP_KEY)
    // Handle logic send form contact to email
    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs
            .sendForm(
                'service_jdsj8rk',
                'template_w58x857',
                form.current,
                '7XpBdaaOeWyxWymgB',
            )
            .then(
                () => {
                    setSubmited(true)
                    setLoading(false)
                },
                (error) => {
                    alert('Somethings went wrong. Please try again!')
                    console.log(error)
                },
            )
    }

    return (
        <Section id="#contact" title="Get in touch">
            <motion.div variants={contentsAnimate} className={cx('contents')}>
                <div className={cx('contact')}>
                    <p>
                        Although I’m not currently looking for any new
                        opportunities, my inbox is always open. Whether you have
                        a question or just want to say hi, I’ll try my best to
                        get back to you!
                    </p>
                </div>
                {submited ? (
                    <div className={cx('submited')}>
                        <h2>Thank you for getting in touch ! </h2>
                    </div>
                ) : (
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className={cx('form-control')}
                    >
                        <div className={cx('form-row')}>
                            <div className={cx('input-group')}>
                                <label htmlFor="name">Name</label>
                                <input
                                    className={cx('name')}
                                    type="text"
                                    id="name"
                                    required
                                    placeholder="Mr. Tony"
                                    name="name"
                                ></input>
                            </div>

                            <div className={cx('input-group')}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className={cx('email')}
                                    placeholder="Manhtv.dev@gmail.com"
                                    name="email"
                                ></input>
                            </div>
                        </div>

                        <div className={cx('form-row')}>
                            <div className={cx('input-group')}>
                                <label htmlFor="textarea">Message</label>
                                <textarea
                                    type="textarea"
                                    id="textarea"
                                    required
                                    rows={4}
                                    className={cx('textarea')}
                                    placeholder="Hi, I'm looking forward to working with 
                                you."
                                    name="message"
                                    minLength="20"
                                ></textarea>
                            </div>
                        </div>
                        {loading ? (
                            <Button
                                primary
                                disabled
                                large
                                title="Shooting"
                                loading
                            />
                        ) : (
                            <Button
                                outline
                                large
                                title="Shoot"
                                rightIcon={<BsArrowRight />}
                                type="submit"
                            />
                        )}
                    </form>
                )}
            </motion.div>
        </Section>
    )
}

export default Contact
