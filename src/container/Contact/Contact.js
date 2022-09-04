import React, { useState } from 'react'
import styles from './Contact.module.scss'
import { motion } from 'framer-motion'

import classNames from 'classnames/bind'
import { Button, Section } from '../../components/index'
import { BsArrowRight } from 'react-icons/bs'

const cx = classNames.bind(styles)

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    console.log(formData)
    const handleFormData = (e) => {
        setFormData((prev) => {
            const { value, name } = e.target
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()

        // Add feature send form data to email
        //

        //Clear form input
        setFormData({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <Section title="Get in touch">
            <motion.div
                whileInView={{ opacity: [0, 1], y: [100, 0] }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={cx('contents')}
            >
                <div className={cx('contact')}>
                    <p>
                        Although I’m not currently looking for any new
                        opportunities, my inbox is always open. Whether you have
                        a question or just want to say hi, I’ll try my best to
                        get back to you!
                    </p>
                </div>
                <form className={cx('form-control')}>
                    <div className={cx('form-row')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="name">Your name</label>
                            <input
                                className={cx('name')}
                                type="text"
                                id="name"
                                required="required"
                                placeholder="Mr. Tony"
                                name="name"
                                value={formData.name}
                                onChange={handleFormData}
                            ></input>
                        </div>

                        <div className={cx('input-group')}>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                required="required"
                                className={cx('email')}
                                placeholder="Manhtv.dev@gmail.com"
                                name="email"
                                value={formData.email}
                                onChange={handleFormData}
                            ></input>
                        </div>
                    </div>

                    <div className={cx('form-row')}>
                        <div className={cx('input-group')}>
                            <label htmlFor="textarea">Your message</label>
                            <textarea
                                type="textarea"
                                id="textarea"
                                required="required"
                                rows={4}
                                cols={50}
                                className={cx('textarea')}
                                placeholder="Hi, I'm looking forward to working with 
                                you."
                                name="message"
                                value={formData.message}
                                onChange={handleFormData}
                            ></textarea>
                        </div>
                    </div>
                    <Button
                        outline
                        large
                        title="Shoot"
                        rightIcon={<BsArrowRight />}
                        onClick={(e) => handleSubmitForm(e)}
                        onChange={handleFormData}
                    />
                </form>
            </motion.div>
        </Section>
    )
}

export default Contact
