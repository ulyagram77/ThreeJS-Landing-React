import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    marvel,
    sneaks,
    table,
    xopen,
    threejs,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'works',
        title: 'Projects',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Native Developer',
        icon: mobile,
    },
    {
        title: 'Backend Developer',
        icon: backend,
    },
    {
        title: 'Content Creator',
        icon: creator,
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
        title: 'React.js Developer',
        company_name: 'Starbucks',
        icon: starbucks,
        iconBg: '#383E56',
        date: 'March 2020 - April 2021',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'React Native Developer',
        company_name: 'Tesla',
        icon: tesla,
        iconBg: '#E6DEDD',
        date: 'Jan 2021 - Feb 2022',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Web Developer',
        company_name: 'Shopify',
        icon: shopify,
        iconBg: '#383E56',
        date: 'Jan 2022 - Jan 2023',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
    {
        title: 'Full stack Developer',
        company_name: 'Meta',
        icon: meta,
        iconBg: '#E6DEDD',
        date: 'Jan 2023 - Present',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Implementing responsive design and ensuring cross-browser compatibility.',
            'Participating in code reviews and providing constructive feedback to other developers.',
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Marvel Portal',
        description:
            'Web-Application that allows users to get information about the characters of the marvel universe and the comics in which they participated. ',
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
        description:
            'Simple CRUD Web-Application  for managing company employees salaries and to keep track of the total number of employees for fast workflow organization. ',
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
        description:
            'Amazing landing page with many intaractive elements such as sliders, accordeons, gallery wich can provide pleasant experience while searching for your pair.',
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
        description:
            'Simple landing page with css-transitions, hovers and animations. It takes minimal script and many css. It was one of the first own projects.',
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

export { services, technologies, experiences, testimonials, projects };
