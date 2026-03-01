import portrait from './assets/profileImage.png';
import threatDetectImage from './assets/image.png';
import bookmarkManager from './assets/bookmarkManager.png';
import financeProject from './assets/Financeproject.png';

const content = {
  hero: {
    handle: 'raunakbandodcar',
    name: 'Raunak Bandodcar',
    role: 'Frontend Developer',
    location: 'London, UK',
    summary:
      'Frontend Developer experienced improving React-based web apps, integrating APIs, and shipping responsive, accessible UIs with solid testing.',
    photo: portrait,
  },
  skills: [
    { name: 'React', experience: '1+ years experience' },
    { name: 'JavaScript (ES6+)', experience: '1+ years experience' },
    { name: 'HTML & CSS', experience: '1+ years experience' },
    { name: 'Responsive Design', experience: '1+ years experience' },
    { name: 'Testing (Jest, RTL)', experience: '1+ years experience' },
    { name: 'REST APIs', experience: '1+ years experience' },
  ],
  projects: [
    {
      title: 'Threat Detection System',
      description:
        'Web app that flags harmful objects and offensive language using live webcam and chat input, with ML-powered blocking and an admin dashboard.',
      tech: ['TensorFlow', 'JavaScript', 'Node.js', 'MongoDB'],
      image: threatDetectImage,
      live: 'https://threat-detect-iota.vercel.app',
      repo: 'https://github.com/Rxunak/ThreatDetect',
    },
    {
      title: 'Bookmark Manager Application',
      description:
        'Full-stack bookmark manager with secure auth, protected routes, REST API, and CRUD features like pinning, archiving, and real-time UI updates.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      image: bookmarkManager,
      live: 'https://bookmark-manager-app-alpha.vercel.app',
      repo: 'https://github.com/Rxunak/Bookmark-Manager-app',
    },
    {
      title: 'Personal Finance Dashboard',
      description:
        'Responsive finance dashboard (in progress) tracking transactions and budgets with reusable components, structured state, and performance focus.',
      tech: ['Next.js', 'TypeScript', 'React'],
      image: financeProject,
      live: '#',
      repo: 'https://github.com/Rxunak/personal-finance-app',
    },
  ],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Rxunak', icon: 'github' },
    { label: 'LinkedIn', url: 'http://www.linkedin.com/in/raunak-bandodcar-2b6029197', icon: 'linkedin' },
  ],
  contact: {
    blurb:
      "Got a web app to build or polish? Tell me about the problem, the users, and the timeline and I'll follow up quickly.",
    email: 'raunakuk2016@gmail.com',
  },
};

export default content;
