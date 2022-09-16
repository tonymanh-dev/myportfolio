import images from './images'
import intro from './music'

export { default as images } from './images'

export const navLinks = ['About', 'Skills', 'Work', 'Contact']

export const music = intro

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
    about01,
    about02,

    project2,
    project1,
    project,
    project_light,
} = images

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
        title: 'Pomodoro Technique With Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: project1,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: 'https://pomomusic.netlify.app/',
        github: '#git',
    },
    {
        id: 2,
        title: 'Crypto Portfolio',
        description:
            "You can able to buy or sell crypto. Showing profit/loss, check realtime coin's price, infomation and more...",
        image: project_light,
        tech: ['React', 'Rexdux', 'MUI 5', 'Coingeko API'],
        live: 'https://crypto-man.netlify.app/',
        github: '#git',
    },
    {
        id: 3,

        title: 'Front-end Portfolio Website',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: project2,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: 'https://tonymanh.netlify.app/',
        github: '#git',
    },
    {
        id: 4,

        title: 'Pomodoro Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: about01,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: '#projectlink',
        github: '#git',
    },
]

export const logo = (
    <svg
        width="40"
        height="40"
        role="image"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M51.75 3.89711L89.0513 25.433C90.1342 26.0582 90.8013 27.2137 90.8013 28.4641V71.5359C90.8013 72.7863 90.1342 73.9418 89.0513 74.567L51.75 96.1029C50.6671 96.7281 49.3329 96.7281 48.25 96.1029L10.9487 74.567C9.86583 73.9418 9.19873 72.7863 9.19873 71.5359V28.4641C9.19873 27.2137 9.86583 26.0582 10.9487 25.433L48.25 3.89711C49.3329 3.2719 50.6671 3.2719 51.75 3.89711Z"
            stroke="currentColor"
            strokeWidth="5"
        />
        <path
            d="M36.556 64.396C35.3827 64.396 34.4733 64.0733 33.828 63.428C33.212 62.7827 32.904 61.8733 32.904 60.7V36.28C32.904 35.0773 33.2413 34.168 33.916 33.552C34.5907 32.9067 35.544 32.584 36.776 32.584C37.8027 32.584 38.6093 32.7893 39.196 33.2C39.812 33.5813 40.3693 34.2267 40.868 35.136L50.328 52.12H48.788L58.204 35.136C58.732 34.2267 59.2893 33.5813 59.876 33.2C60.492 32.7893 61.3133 32.584 62.34 32.584C63.5133 32.584 64.408 32.9067 65.024 33.552C65.6693 34.168 65.992 35.0773 65.992 36.28V60.7C65.992 61.8733 65.684 62.7827 65.068 63.428C64.452 64.0733 63.5427 64.396 62.34 64.396C61.1667 64.396 60.2573 64.0733 59.612 63.428C58.996 62.7827 58.688 61.8733 58.688 60.7V45.564H59.612L52.528 57.884C52.1173 58.5293 51.6773 59.0133 51.208 59.336C50.768 59.6587 50.1667 59.82 49.404 59.82C48.6707 59.82 48.0693 59.6587 47.6 59.336C47.1307 59.0133 46.7053 58.5293 46.324 57.884L39.196 45.52H40.208V60.7C40.208 61.8733 39.9 62.7827 39.284 63.428C38.668 64.0733 37.7587 64.396 36.556 64.396Z"
            fill="currentColor"
        />
    </svg>
)
