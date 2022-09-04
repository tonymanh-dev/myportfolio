import { images } from './index'

const {
    tony,
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
    about03,
    about04,
    pomomusic,
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
        title: 'Pomodoro Technique With Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: pomomusic,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: '#projectlink',
        github: '#git',
    },
    {
        title: 'Pomodoro Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: about02,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: '#projectlink',
        github: '#git',
    },
    {
        title: 'Pomodoro Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: about03,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: '#projectlink',
        github: '#git',
    },
    {
        title: 'Pomodoro Music',
        description:
            'Customizable timer intervals to suit your preference Task list to manage your works Music background during Pomodoro section',
        image: about04,
        tech: ['React', 'Rexdux', 'Tailwindcss', 'Firebase'],
        live: '#projectlink',
        github: '#git',
    },
]
