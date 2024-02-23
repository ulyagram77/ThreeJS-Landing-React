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
        title: 'First IT experience',
        company_name: 'Junior academy STEP',
        icon: step,
        iconBg: '#E6DEDD',
        date: 'Year 2017 - 2019',
        points: [
            'Introduction to concepts of design composition, web-design, graphic design, motion-design.',
            'Introduction to programming and programming languages (C++, JavaScript, VBA).',
            'Introduction to basics of 3D-modelling.',
            'Introduction to computer hardware, robotics.',
        ],
    },
    {
        title: 'Additional IT courses',
        company_name: 'Udemy platform',
        icon: udemy,
        iconBg: '#E6DEDD',
        date: 'Year 2021 - 2023',
        points: [
            'Complete course on JavaScript + React by Ivan Petrichenko.',
            'Web-developer course by Ivan Petrichenko.',
            'Practical JavaScript course by Ivan Petrichenko.',
            'UI/UX Designer in figma several courses.',
        ],
    },
    {
        title: "Computer science | Bachelor's degree",
        company_name:
            'National Technical University "Kharkiv Polytechnical Institute"',
        icon: khpi,
        iconBg: '#9f1c20',
        date: 'Oct 2020 - Present',
        points: [
            'Learning concepts of composition and graphic design.',
            'Learning fundamentals of discrete mathematics, math analysis, linear algebra, and others.',
            'Learning fundamentals of programming, also programming with: C++, C#, Python, JavaScript, Kotlin/Java.',
            'Learning basics of technical vision and data science using Python.',
        ],
    },
    {
        title: 'Frontend Developer | PET-project SNIFF',
        company_name: 'Sigma Software',
        icon: sigma,
        iconBg: '#E6DEDD',
        date: 'Mar 2023 - Jun 2023',
        points: [
            'Developing web-application using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designer, other developers to create high-quality product.',
            'Implementing responsive design and ensuring cross-browser compatibility, work with service API.',
            'Participating in code reviews and providing constructive feedback to other developers.',
            'Team work on "SCRUM" methodology using JIRA, also implementing different team development methods.',
        ],
        github: 'https://github.com/Sniff-project',
        certificate: sniffCertificate,
    },
    {
        title: 'Frontend Developer | PET-project Optiflow',
        company_name: 'Skiftech',
        icon: skiftech,
        iconBg: 'black',
        date: 'Sep 2023 - Present',
        points: [
            'Developing web-application using React.js and Three.js as a main stack.',
            'Collaborating with cross-functional teams including designer, other developers to create high-quality product.',
            'Working with backend API and authorization logic.',
            'Participating in code reviews and providing constructive feedback to other developers.',
            'Using team development tools to work productively on tasks.',
            'Working on the UI/UX design of the service.',
        ],
        github: 'https://github.com/Skiftech-project',
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

const contacts = [githubContacts, telegramContacts, instagramContacts];

export { services, technologies, experiences, testimonials, projects, contacts };
