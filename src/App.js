import React, { useEffect, useState } from 'react'
import styles from './App.module.scss'
import classNames from 'classnames/bind'
import { AnimatePresence } from 'framer-motion'
import { Navbar, Social, Email, Loading, Decoration } from './components/index'
import { About, Footer, Header, Skills, Contact, Work } from './container/index'

const cx = classNames.bind(styles)

const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={cx('app')}>
            <AnimatePresence>{isLoading && <Loading />}</AnimatePresence>
            {isLoading ? null : (
                <>
                    <Navbar />
                    <Social vertical />
                    <Email />
                    <main id="container" className={cx('container')}>
                        <Header />
                        <About />
                        <Skills />
                        <Work />
                        <Contact />
                        <Footer />
                    </main>
                </>
            )}
        </div>
    )
}

export default App
