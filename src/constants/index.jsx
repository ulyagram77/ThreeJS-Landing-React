import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    marvel,
    sneaks,
    table,
    xopen,
    threejs,
    step,
    udemy,
    khpi,
    sigma,
    skiftech,
    sniffCertificate,
    telegramContacts,
    githubContacts,
    instagramContacts,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'navbar.links.about',
    },
    {
        id: 'works',
        title: 'navbar.links.works',
    },
    {
        id: 'contact',
        title: 'navbar.links.contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'Frontend Developer',
        icon: mobile,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },

    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },

    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
];

const experiences = [
    {
        title: 'experience.timeline.elements.0.title',
        company_name: 'experience.timeline.elements.0.company_name',
        icon: step,
        iconBg: '#E6DEDD',
        date: 'experience.timeline.elements.0.date',
        points: [
            'experience.timeline.elements.0.points.0',
            'experience.timeline.elements.0.points.1',
            'experience.timeline.elements.0.points.2',
            'experience.timeline.elements.0.points.3',
        ],
    },
    {
        title: 'experience.timeline.elements.1.title',
        company_name: 'experience.timeline.elements.1.company_name',
        icon: udemy,
        iconBg: '#E6DEDD',
        date: 'experience.timeline.elements.1.date',
        points: [
            'experience.timeline.elements.1.points.0',
            'experience.timeline.elements.1.points.1',
            'experience.timeline.elements.1.points.2',
            'experience.timeline.elements.1.points.3',
        ],
    },
    {
        title: 'experience.timeline.elements.2.title',
        company_name: 'experience.timeline.elements.2.company_name',
        icon: khpi,
        iconBg: '#9f1c20',
        date: 'experience.timeline.elements.2.date',
        points: [
            'experience.timeline.elements.2.points.0',
            'experience.timeline.elements.2.points.1',
            'experience.timeline.elements.2.points.2',
            'experience.timeline.elements.2.points.3',
        ],
    },
    {
        title: 'experience.timeline.elements.3.title',
        company_name: 'experience.timeline.elements.3.company_name',
        icon: sigma,
        iconBg: '#E6DEDD',
        date: 'experience.timeline.elements.3.date',
        points: [
            'experience.timeline.elements.3.points.0',
            'experience.timeline.elements.3.points.1',
            'experience.timeline.elements.3.points.2',
            'experience.timeline.elements.3.points.3',
            'experience.timeline.elements.3.points.4',
        ],
        github: 'https://github.com/Sniff-project',
        certificate: sniffCertificate,
    },
    {
        title: 'experience.timeline.elements.4.title',
        company_name: 'experience.timeline.elements.4.company_name',
        icon: skiftech,
        iconBg: 'black',
        date: 'experience.timeline.elements.4.date',
        points: [
            'experience.timeline.elements.4.points.0',
            'experience.timeline.elements.4.points.1',
            'experience.timeline.elements.4.points.2',
            'experience.timeline.elements.4.points.3',
            'experience.timeline.elements.4.points.4',
            'experience.timeline.elements.4.points.5',
        ],
        github: 'https://github.com/Skiftech-project',
    },
];

const projects = [
    {
        name: 'Marvel Portal',
        description: 'works.projects.0.description',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
        ],
        image: marvel,
        source_code_link: 'https://github.com/ulyagram77/Marvel-Portal-React',
        demo_link: 'https://marvel-portal-react-ten.vercel.app/',
    },
    {
        name: 'Workers Table',
        description: 'works.projects.1.description',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'CRUD',
                color: 'green-text-gradient',
            },
            {
                name: 'bootstrap',
                color: 'pink-text-gradient',
            },
        ],
        image: table,
        source_code_link: 'https://github.com/ulyagram77/Workers-Table-React',
        demo_link: 'https://workers-table-react.vercel.app/',
    },
    {
        name: 'Sneaks Store',
        description: 'works.projects.2.description',
        tags: [
            {
                name: 'vanilla-js',
                color: 'yellow-text-gradient',
            },
            {
                name: 'AJAX',
                color: 'green-text-gradient',
            },
            {
                name: 'swiper',
                color: 'pink-text-gradient',
            },
        ],
        image: sneaks,
        source_code_link: 'https://github.com/ulyagram77/Sneaks_Landing',
        demo_link: 'https://ulyagram77.github.io/Sneaks_Landing/',
    },
    {
        name: 'X-OPEN',
        description: 'works.projects.3.description',
        tags: [
            {
                name: 'vanilla-js',
                color: 'yellow-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: xopen,
        source_code_link: 'https://github.com/ulyagram77/X-OPEN_Landing',
        demo_link: 'https://ulyagram77.github.io/X-OPEN_Landing/',
    },
];

const contacts = [githubContacts, telegramContacts, instagramContacts];

export { services, technologies, experiences, projects, contacts };
