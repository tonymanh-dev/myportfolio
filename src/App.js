import React, { forwardRef, useEffect, useRef } from 'react'
import { About, Footer, Header, Skills, Contact, Work } from './container/index'
import { Navbar, Social, Navigation, Email, Loading } from './components/index'
import styles from './App.module.scss'
import classNames from 'classnames/bind'
import { motion } from 'framer-motion'

const cx = classNames.bind(styles)

const App = () => {
    const aboutRef = useRef()
    const headerRef = useRef()
    const skillsRef = useRef()
    const workRef = useRef()
    const contactRef = useRef()

    const refs = { aboutRef, headerRef, skillsRef, workRef, contactRef }

    return (
        <div className={cx('app')}>
            {/* <Loading /> */}
            <Navbar />
            <main id="container" className={cx('container')}>
                <Social vertical />
                {/* <Navigation refs={refs} />  */}
                <Email />
                <Header ref={headerRef} />
                <About ref={aboutRef} />
                <Skills ref={skillsRef} />
                <Work ref={workRef} />
                <Contact ref={contactRef} />
                <Footer />
            </main>
        </div>
    )
}

export default App
