import React from 'react'
import { About, Footer, Header, Skills, Contact, Work } from './container/index'
import { Navbar, Social } from './components/index'
import styles from './App.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const App = () => {
    return (
        <div className={cx('app')}>
            <Navbar />
            <main className={cx('container')}>
                <Social />
                <Header />
                <About />
                <Skills />
                <Work />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default App
