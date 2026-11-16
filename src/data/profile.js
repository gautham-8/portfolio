// Single source of truth for everything on the site except projects.
// The page, the "copy as Markdown" export and the meta all read from here.

export const RESUME_URL =
    'https://docs.google.com/document/d/1sCLoCYWIF9zWSyFOUx8RbHmUTHUe1sKCYuD_9M9fp8k/edit?usp=sharing';

export const profile = {
    name: 'Gautham Mallipeddi',
    location: 'Amherst, MA, USA',
    headline:
        'MS Computer Science student at UMass Amherst. Previously a software engineer at SenseHawk.',
    availability:
        'Looking for internships for Summer 2027 and full-time roles starting in 2028, in software engineering, machine learning, AI engineering and related roles.',
    work_authorization:
        'I am on an F-1 visa, eligible to intern through CPT and to work full-time through OPT and the STEM OPT extension.',
    about: [
        'I joined SenseHawk as an intern in November 2022, while finishing my bachelor’s, and stayed on as a full-time software engineer from June 2024 to July 2026. The product was TaskMapper, a SaaS platform that solar and construction teams use to plan and track their projects.',
        'As an intern I rebuilt the Project Management module during the move from Vue 2 to Vue 3. As a full-time engineer I built the Business Intelligence dashboards with my team, wrote most of the interface for NaaviX, the company’s first AI agent, and developed the scheduling tools in Project Management.',
        'In 2026 I also built an AI growth agent for direct-to-consumer brands. It answers questions about a store’s live sales and ad metrics and can act on them, for example by pausing an ad campaign, with a person approving each action first.',
        'During my bachelor’s I did research in explainable AI. My capstone classified brain diseases from MRI scans and showed which regions of each scan drove the prediction, so a clinician can check the model’s reasoning instead of taking it on faith. It was published in IJISAE in 2024.',
        'At UMass I am studying machine learning and neural networks. I want to work on software where solid engineering and applied ML both matter.',
    ],
    contact_line: 'Email or LinkedIn, whichever you prefer. Both reach me quickly.',
    links: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/gautham-mallipeddi/' },
        { label: 'GitHub', url: 'https://github.com/gautham-8' },
    ],
    // Stored in pieces so the addresses never appear whole in the markup.
    emails: [
        { user: 'gautham.mallipeddi8', domain: ['gmail', 'com'] },
        { user: 'gmallipeddi', domain: ['umass', 'edu'] },
    ],
};

export function emailDisplay({ user, domain }) {
    return `${user} [at] ${domain.join(' [dot] ')}`;
}

export function emailAddress({ user, domain }) {
    return `${user}@${domain.join('.')}`;
}

export const experience = [
    {
        company: 'SenseHawk',
        company_note: 'Subsidiary of Reliance Industries',
        company_url: 'https://sensehawk.com/',
        location: 'Remote',
        roles: [
            {
                id: 'sensehawk-software-engineer',
                title: 'Software Engineer',
                start: 'Jun 2024',
                end: 'Jul 2026',
                areas: ['Full-stack', 'Front end', 'Back end'],
                skills: [
                    'Vue.js',
                    'Vite',
                    'Pinia',
                    'Tailwind CSS',
                    'Sass',
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'Figma',
                    'Node.js',
                    'Express.js',
                    'Git',
                    'GitHub',
                    'Augment Code',
                    'Claude Code',
                    'GitHub Copilot',
                ],
                points: [
                    'Built the Business Intelligence module, which lets teams assemble custom, real-time dashboards for KPIs and field-level bottlenecks. It directly helped secure enterprise contracts with a global energy leader.',
                    'Developed more than 80% of the UI for NaaviX, SenseHawk’s first AI agent, including data visualization and real-time message streaming. It cut manual analysis time from over 3 hours to under 5 minutes.',
                    'Implemented a Node.js export service that consumes Amazon SQS events to generate dashboard PDFs through Browserless, with custom pagination logic and scheduled email delivery to configured recipients.',
                    'Developed core scheduling features for TaskMapper’s Project Management module: interactive Gantt views, critical path analysis and spatial progress auto-syncing. The module drives about 30% of traffic and enabled customer migrations from legacy tools like Oracle Primavera.',
                ],
            },
            {
                id: 'sensehawk-software-engineer-intern',
                title: 'Software Engineer Intern',
                start: 'Nov 2022',
                end: 'May 2024',
                areas: ['Front end'],
                skills: [
                    'Vue.js',
                    'Vite',
                    'Pinia',
                    'Tailwind CSS',
                    'Sass',
                    'JavaScript',
                    'HTML',
                    'CSS',
                    'Figma',
                    'Git',
                    'GitHub',
                    'GitHub Copilot',
                ],
                points: [
                    'Revamped the Project Management module during the Vue 2 to Vue 3 migration: a modernized design, components moved to the Composition API and legacy libraries replaced.',
                    'Reduced the production bundle size by 73%, from 3.7 MB to 1 MB.',
                    'Added DOMPurify XSS sanitization and formula-injection guardrails for CSV exports.',
                ],
            },
        ],
    },
];

export const education = [
    {
        id: 'umass-amherst',
        school: 'University of Massachusetts Amherst',
        school_url: 'https://www.umass.edu/',
        degree: 'Master of Science, Computer Science',
        start: 'Sep 2026',
        end: 'May 2028',
        end_note: 'expected',
        skills: [],
        details: [
            {
                label: 'Coursework',
                text: 'CS 589 Machine Learning, CS 682 Neural Networks: A Modern Introduction, CS 550 Introduction to Simulation',
            },
        ],
    },
    {
        id: 'vnr-vjiet',
        school: 'VNR Vignana Jyothi Institute of Engineering and Technology',
        school_url: 'https://vnrvjiet.ac.in/',
        degree: 'Bachelor of Technology, Computer Science and Engineering',
        start: 'Dec 2020',
        end: 'May 2024',
        note: 'Degree awarded by Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
        skills: ['C++'],
        details: [
            { label: 'Grade', text: '8.96 / 10 CGPA' },
            {
                label: 'Coursework',
                text: 'Data Structures, Design and Analysis of Algorithms, Object Oriented Programming through C++, Database Management Systems, Operating Systems, Computer Networks, Network Security, Artificial Intelligence, Machine Learning',
            },
            {
                label: 'Activities',
                text: [
                    { label: 'Turing Hut', project: 'turing-cup' },
                    ': problem setter and peer-learning guide (Mar 2022 to Apr 2024). ',
                    { label: 'TEDxVNRVJIET', project: 'tedx' },
                    ': web developer (Mar to May 2023).',
                ],
            },
        ],
    },
];

export const publications = [
    {
        title: 'Building Trust in Artificial Intelligence: An Explainable Deep Learning Framework for Brain Disease Detection',
        venue: 'International Journal of Intelligent Systems and Applications in Engineering (IJISAE)',
        date: 'Jun 2024',
        url: 'https://ijisae.org/index.php/IJISAE/article/view/6315',
    },
    {
        title: 'Guiding the Learner in Selecting the Suitable Online Course Using Automated AI Tool',
        venue: 'B P International',
        date: 'Dec 2023',
        url: 'https://stm.bookpi.org/RATMCS-V7/article/view/12833',
    },
];

export const awards = [
    {
        title: 'Winner, Hack2Hire Hackathon',
        issuer: 'Invesco India',
        date: 'Mar 2024',
        text: 'Completed every problem goal including the stretch objective. Came with a ₹50,000 prize and a full-time offer.',
    },
    {
        title: 'First place, Software Hackathon',
        issuer: 'Convergence 2K21, VNR VJIET',
        date: 'Dec 2021',
        text: [
            'For ',
            { label: 'Book Library', project: 'book-library' },
            ', a tool that sorts study PDFs into subject and unit folders.',
        ],
    },
    {
        title: 'Third place, IEEE ThinkPad',
        issuer: 'All India Students, Young Professionals, Women in Engineering, Life Members Congress 2021',
        date: 'Dec 2021',
        text: [
            'Pitched an idea for helping students find the study material they need. We later developed the idea into ',
            { label: 'Book Library', project: 'book-library' },
            ', which won the Convergence 2K21 software hackathon.',
        ],
    },
    {
        title: 'Third place, Code Frenzy',
        issuer: 'Turing Hut',
        date: 'May 2021',
        text: 'Coding contest for first-year students at VNR VJIET.',
    },
];

export const certifications = [
    {
        id: 'deep-learning-specialization',
        title: 'Deep Learning Specialization',
        issuer: 'Coursera',
        date: 'Jan 2026',
        url: 'https://coursera.org/share/aff8ae3351f6cb85ef9899df254039bb',
        skills: ['TensorFlow', 'Keras', 'Convolutional neural networks', 'Natural language processing'],
    },
    {
        id: 'smart-coder',
        title: 'Smart Coder: Data Structures and Algorithms',
        issuer: 'Smart Interviews',
        date: 'Mar 2023',
        url: 'https://smartinterviews.in/certificate/25e63098',
        skills: [],
    },
    {
        id: 'ai-for-everyone',
        title: 'AI For Everyone',
        issuer: 'Coursera',
        date: 'Mar 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/X85E7LB45PC3',
        skills: [],
    },
];

// The full skills list. A skill becomes clickable on the site once a role,
// project, certification or degree above lists it in its own `skills`.
export const skills = [
    { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++', 'C'] },
    {
        group: 'Front end',
        items: ['Vue.js', 'Nuxt', 'React.js', 'Vite', 'Pinia', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'Sass', 'CSS', 'HTML', 'Figma'],
    },
    {
        group: 'Back end',
        items: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'DuckDB', 'SQL', 'MongoDB'],
    },
    {
        group: 'AI and ML',
        items: [
            'TensorFlow',
            'PyTorch',
            'Keras',
            'Scikit-learn',
            'Convolutional neural networks',
            'Natural language processing',
            'LLMs and retrieval-augmented generation',
        ],
    },
    {
        group: 'AI-assisted development',
        items: ['Claude Code', 'Augment Code', 'GitHub Copilot', 'Parallel agentic workflows'],
    },
    { group: 'Tools', items: ['Docker', 'Git', 'GitHub', 'LazyGit'] },
];

// Some text fields are arrays mixing strings and links ({ label, project }).
// This flattens them for places that need plain text.
export function plainText(text) {
    if (typeof text === 'string') return text;
    return text.map((part) => (typeof part === 'string' ? part : part.label)).join('');
}
