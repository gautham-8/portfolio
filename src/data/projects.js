import brainDiseaseDetection from '../assets/projects/brain-disease-detection.jpg';
import courseAi from '../assets/projects/course-ai.jpg';
import hospitalWebsite from '../assets/projects/hospital-website.jpg';
import tedx from '../assets/projects/tedx.jpg';
import turingCup from '../assets/projects/turing-cup.jpg';
import { uniqueInOrder } from '../lib/tags';

// To add a project: append an entry here. `areas` and `stack` both become
// filter tags on /projects and /skills. Keep `stack` to the main technologies;
// smaller libraries read better inside the description. Set `featured: true` to show it on the home page.
export const projects = [
    {
        id: 'ai-growth-agent',
        title: 'AI Growth Agent for D2C Brands',
        when: '2026',
        featured: true,
        summary:
            'An agent that lets direct-to-consumer brands query their live store and ad metrics in plain language and trigger actions such as pausing an ad campaign or reordering inventory. Every action goes through a human approval step before it runs.',
        points: [
            'Built ingestion pipelines for the Shopify and Google Ads APIs that extract raw store orders, fulfillment tracking and inventory events and normalize them into relational tables the agent can query.',
        ],
        note: 'Private work, so there is no public repository or demo.',
        areas: ['AI agents', 'Full-stack', 'Front end', 'Back end'],
        stack: [
            'Python',
            'TypeScript',
            'FastAPI',
            'SQLAlchemy',
            'PostgreSQL',
            'DuckDB',
            'SQL',
            'Vue.js',
            'Nuxt',
            'LLMs and retrieval-augmented generation',
        ],
        links: [],
    },
    {
        id: 'brain-disease-detection',
        title: 'Multiple Brain Disease Detection using Explainable AI',
        when: '2024',
        featured: true,
        image: brainDiseaseDetection,
        summary:
            'Deep learning models (InceptionV3 and a 2D CNN) that classify Alzheimer’s, brain tumors and multiple sclerosis across more than 14,000 MRI scans, reaching 95%, 96.95% and 96.21% accuracy respectively.',
        points: [
            'Used LIME to highlight the image regions behind each prediction, so clinicians can see why the model reached a diagnosis and decide whether to trust it.',
        ],
        areas: ['Machine learning', 'Research'],
        stack: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Convolutional neural networks'],
        links: [{ label: 'Paper', url: 'https://ijisae.org/index.php/IJISAE/article/view/6315' }],
    },
    {
        id: 'course-ai',
        title: 'CourseAI',
        when: '2023',
        featured: true,
        image: courseAi,
        summary:
            'A tool that helps students pick online courses. It recommends courses based on a student’s interests and goals and weighs factors like difficulty and reviews, so finding a good course takes less trial and error.',
        points: [],
        areas: ['Research', 'Full-stack', 'Front end', 'Back end'],
        stack: ['React.js', 'Python', 'Flask'],
        links: [
            { label: 'Paper', url: 'https://stm.bookpi.org/RATMCS-V7/article/view/12833' },
            { label: 'GitHub', url: 'https://github.com/deepesh-16/course-ai' },
        ],
    },
    {
        id: 'hospital-website',
        title: 'Hospital website',
        when: '2022',
        featured: true,
        image: hospitalWebsite,
        summary:
            'A full-stack hospital management platform where patients book appointments, staff get live notifications and admins oversee the whole system from one app.',
        points: [
            'Google OAuth 2.0 through Passport.js with automatic account linking, real-time WebSocket notifications, and a single deployment where Express serves the React front end alongside the API.',
        ],
        areas: ['Full-stack', 'Front end', 'Back end'],
        stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        links: [
            { label: 'GitHub', url: 'https://github.com/gautham-8/hospital-website' },
            { label: 'Live site', url: 'https://hospital-website-project-spo8.onrender.com/' },
        ],
    },
    {
        id: 'book-library',
        title: 'Book Library',
        when: '2021',
        summary:
            'A study material organizer that sorts PDFs into subject and unit folders based on a syllabus sheet. Won first place at the software hackathon of Convergence 2K21, the technical fest of VNR VJIET.',
        points: [
            'The pipeline converts uploaded PDFs to images, extracts and tokenizes the text, strips stop words, then matches the remaining terms against the syllabus to find the best-fitting unit. Text extraction uses Pytesseract and PyPDF2, text processing uses NLTK, and the interface is Tkinter.',
        ],
        areas: ['Machine learning', 'Hackathon'],
        stack: ['Python', 'Natural language processing'],
        links: [{ label: 'GitHub', url: 'https://github.com/gautham-8/book-library' }],
    },
    {
        id: 'turing-cup',
        title: 'Turing Cup website',
        organization: 'Turing Hut',
        when: '2022 to 2024',
        image: turingCup,
        summary:
            'Built, with a team, the site for Turing Cup, the flagship coding contest of Turing Hut, which drew over 1,000 team registrations and more than 2,000 participants.',
        points: [
            'As part of the club I also set problems for contests with global participation and taught competitive programming topics such as bit manipulation and binary search in peer-learning sessions.',
        ],
        areas: ['Front end'],
        stack: ['React.js', 'Material UI'],
        links: [
            { label: 'GitHub', url: 'https://github.com/linustribevnr/turing-hut-website' },
            { label: 'Live site', url: 'https://www.turinghut.org/turingcup' },
        ],
    },
    {
        id: 'tedx',
        title: 'TEDxVNRVJIET website',
        organization: 'TEDxVNRVJIET',
        when: '2023',
        image: tedx,
        summary:
            'Built the event website with a team of four, set up from scratch. It sold more than ₹75,000 worth of tickets. The domain is no longer maintained by the institution.',
        points: [],
        areas: ['Front end'],
        stack: ['React.js', 'Tailwind CSS', 'Sass'],
        links: [{ label: 'GitHub', url: 'https://github.com/tedxvnrvjiet/gh-tedxvnrvjiet' }],
    },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function projectTags(project) {
    return [...project.areas, ...project.stack];
}

export const tagGroups = [
    { label: 'Area', tags: uniqueInOrder(projects.map((project) => project.areas)) },
    { label: 'Tech', tags: uniqueInOrder(projects.map((project) => project.stack)) },
];
