import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  ethicalHacking,
  osint,

} from '../assets'
import hacksphere from '../assets/Hack sphere.webp';
import csrbox from '../assets/CSRBOX.png';
import cpp from '../assets/tech/cpp.png';
import python from '../assets/tech/python.png';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Ai Learner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cyber Security Tester",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "CSRBOX - IBM",
    icon: csrbox, // fallback to tekisky icon
    iconBg: "#383E56",
    date: "Feb 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Cyber Security Pentester",
    company_name: "Intern at Ceeeras IT Services",
    icon: ethicalHacking,
    iconBg: "#1a202c",
    date: "Jan 2025 - June 2025",
    points: [
      "Conducting penetration testing and vulnerability assessments for web applications and networks.",
      "Reporting security issues and providing actionable remediation steps to clients.",
      "Implementing security best practices and educating clients on cyber hygiene.",
      "Utilizing tools like Burp Suite, Nmap, and Metasploit for security testing.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "Freelance",
    icon: creator, // fallback to creator icon
    iconBg: "#0a192f",
    date: "2023 - present",
    points: [
      "Designing and developing robust RESTful APIs for various applications.",
      "Integrating third-party services and ensuring secure data exchange.",
      "Documenting API endpoints and providing support for client integration.",
      "Optimizing API performance and scalability for production environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Govind Acharya proved me wrong.",
    name: "Sikhar Patel",
    designation: "Ecommerce",
    company: "Softsell",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Govind Acharya does.",
    name: "Arun Acharya",
    designation: "Ecommerce Business",
    company: "Blissfull Traders",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Govind Acharya optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "kartikey Verma",
    designation: "LMS",
    company: "365 Techzz",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Hacksphere",
    description:
      "Hacksphere is a cybersecurity learning and challenge platform where users can practice ethical hacking, solve CTFs, and improve their skills in a safe environment.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "green-text-gradient" },
      { name: "ctf", color: "pink-text-gradient" },
      { name: "cybersecurity", color: "orange-text-gradient" },
    ],
    image: hacksphere,
    source_code_link: "https://github.com/GonX729/project2",
  },
  {
    name: "Garruda OSInt",
    description:
      "OSInt-a-Web is an open-source intelligence toolkit for web reconnaissance, automating the collection and analysis of public data for security and research purposes.",
    tags: [
      { name: "Information Gathering", color: "blue-text-gradient" },
      { name: "osint", color: "green-text-gradient" },
      { name: "automation", color: "pink-text-gradient" },
      { name: "security", color: "orange-text-gradient" },
    ],
    image: osint, // use OSINT.webp image
    source_code_link: "https://github.com/GonX729/Garuda-Osint",
  },
  {
    name: "Blissful Traders",
    description:
      "Blissful Traders is a leading textile company specializing in high-quality fabrics and innovative textile solutions. We provide a wide range of products for fashion, home, and industrial applications, ensuring quality and customer satisfaction at every step.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/GonX729/blissful-traders",
  },
  {
    name: "Softsell",
    description:
      "Softsell is your ultimate destination for premium Reselling Certificates And UnUseful Licences. Whether you're a reseller enthusiast or a professional, find everything you need to Think, Sell and Purchase.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "emailJs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/gonx729/Softsell-Credex",
  },
];

export { services, technologies, experiences, testimonials, projects };
