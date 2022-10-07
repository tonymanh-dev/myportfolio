import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

import images from './images'
import intro from './music'

export { default as images } from './images'

export const navLinks = ['About', 'Skills', 'Work', 'Contact']

export const music = intro

export const logo = (
    <svg
        width="44"
        height="44"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M33.2343 17.9V32H29.3143V24.22L26.6543 32H23.3743L20.6943 24.16V32H16.7743V17.9H21.5143L25.0543 27.06L28.5143 17.9H33.2343Z"
            fill="currentColor"
        />
        <path
            d="M26 1.73205L44.6506 12.5C45.2694 12.8573 45.6506 13.5175 45.6506 14.2321V35.768C45.6506 36.4825 45.2694 37.1427 44.6506 37.5L26 48.2679C25.3812 48.6252 24.6188 48.6252 24 48.2679L5.34936 37.5C4.73056 37.1427 4.34937 36.4825 4.34937 35.7679V14.232C4.34937 13.5175 4.73056 12.8573 5.34937 12.5L24 1.73205C24.6188 1.37478 25.3812 1.37479 26 1.73205Z"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
)

export const logo2 = (
    <svg
        width="50"
        height="40"
        viewBox="0 0 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M18.9594 4.00656L31.6598 27.7643C31.8378 28.0973 31.5965 28.5 31.2188 28.5H5.818C5.44033 28.5 5.199 28.0973 5.37705 27.7643L18.0775 4.00656C18.2658 3.65419 18.771 3.65419 18.9594 4.00656Z"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M31.9225 4.00656L44.6229 27.7643C44.801 28.0973 44.5597 28.5 44.182 28.5H18.7812C18.4035 28.5 18.1622 28.0973 18.3402 27.7643L31.0406 4.00656C31.229 3.65419 31.7342 3.65419 31.9225 4.00656Z"
            stroke="currentColor"
            strokeWidth="2"
        />
    </svg>
)

const {
    html,
    sass,
    css,
    javascript,
    react,
    redux,
    typescript,
    figma,
    git,
    mu5,
    tailwindcss,
    bootstrap,
    firebase,

    project_light,
    project1,
    project2,
    project3,
} = images

export const socials = [
    {
        icon: <FaLinkedinIn />,
        link: 'https://www.linkedin.com/in/tonymanh/',
    },
    {
        icon: <FaGithub />,
        link: 'https://github.com/tonymanh-dev',
    },
    {
        icon: <FaTwitter />,
        link: 'https://twitter.com/manh_tvm',
    },
    {
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/manh_eng/',
    },
]

export const frontends = [
    { label: 'HTML 5', img: html },
    { label: 'CSS', img: css },
    { label: 'SASS', img: sass },
    { label: 'Tailwindcss', img: tailwindcss },
    { label: 'Bootstrap 5', img: bootstrap },
    { label: 'Material UI 5', img: mu5 },
    { label: 'JavaScript ES6', img: javascript },
    { label: 'React 18', img: react },
    { label: 'Redux Toolkit', img: redux },
    { label: 'TypeScript', img: typescript },
]

export const others = [
    { label: 'Firebase', img: firebase },
    { label: 'Figma', img: figma },
    { label: 'Git', img: git },
]

export const works = [
    {
        id: 1,

        title: 'OpenSea - Home page UI clone',
        description:
            'A clone of OpenSea, the largest NFT marketplace. Using React with real time fetching of collections from OpenSea and fully responsive',
        image: project3,
        tech: ['React', 'Tailwind CSS', 'OpenSea API'],
        live: 'https://opensea-vn.netlify.app/',
        github: 'https://github.com/tonymanh-dev/opensea-clone',
    },
    {
        id: 2,
        title: 'Pomodoro Technique With Music',
        description:
            'If you need something to enhance your productivity, this app is for you. It helps you focus on any task you are working on, such as study, writing, or coding.  Based on Pomodoro Technique, you can keep focused by listening to soft music, checking your task list and customizing the timer, uploading your own music... ',
        image: project1,
        tech: ['React', 'Rexdux', 'Bootstrap 5', 'Firebase'],
        live: 'https://pomomusic.netlify.app/',
        github: 'https://github.com/tonymanh-dev/pomomusic',
    },
    {
        id: 3,
        title: 'Crypto Portfolio',
        description:
            "An application helps you manage your portfolio in crypto investment. Dashboard showing overall about your portfolio like profit/loss, chart by dominance, performance, and you are also able to check real time coin's price, information, create transactions, delete and more...",
        image: project_light,
        tech: ['React', 'Rexdux', 'MUI 5', 'Coingeko API'],
        live: 'https://crypto-man.netlify.app/',
        github: 'https://github.com/tonymanh-dev/portfolio',
    },
    {
        id: 4,

        title: 'Web Developer Portfolio Website',
        description:
            'A personal front-end developer portfolio website to show some information about me and products I have built so far. I got inspired by @Brittany Chiang  . There are many nice animations backed by Framer Motion and fully responsive.',
        image: project2,
        tech: ['React', 'Framer Motion', 'SCSS', 'EmailJS'],
        live: 'https://tonymanh.netlify.app/',
        github: 'https://github.com/tonymanh-dev/myportfolio',
    },
]
