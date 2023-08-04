import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fiverr,
  upwork,
  precise,
  nextlogixs,
  portfolioSlide20,
  portfolioSlide19,
  portfolioSlide21,
} from "../assets";

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
    title: "Front Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Wordpress",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "ReactJS Developer",
    company_name: "precise Tech",
    icon: precise,
    iconBg: "#383E56",
    date: "5 Sep 2022 - 30 November 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "API intergration"
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Next Logixs",
    icon: nextlogixs,
    iconBg: "#E6DEDD",
    date: "August 2020 - August 2021",
    points: [
      "Developing and maintaining web applications using HTML, CSS and JS",
      "Other related technologies BootStrap, Tailwind CSS and JQuery",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "April 2019 - July 2020",
    points: [
      "Developing and maintaining web applications using HTML, CSS and JS",
      "Other related technologies using BootStrap",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He is an exceptional web frontend developer. Their attention to detail and creativity really elevated our website's user experience.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "MohabbatRJ skills are top-notch. Their designs are sleek and modern, our project was delivered on time and exceeded our expectations.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I highly recommend as a frontend developer. They are highly skilled and ability to transform vision into reality was impressive.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Other Portfolio",
    description:
      "On this portfolio more detail about me and different projects are available. If you want to know more about me, go through the link",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
      {
        name: "swiperjs",
        color: "orange-text-gradient",
      },
    ],
    image: portfolioSlide21,
    source_code_link: "https://mohabbatrj.github.io/mohabbatrj-portfolio/",
  },
  {
    name: "RoKT",
    description:
      "Web-based platform that allows users to search, cart, and manage cart shopping from various categories",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioSlide20,
    source_code_link: "https://rokt-tailwindcss.netlify.app/",
  },
  {
    name: "Hotel",
    description:
      "Web application that enables users to search hotels and destination for advance booking and other services",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hooks",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioSlide19,
    source_code_link: "https://hotel-multipge-react-web.netlify.app/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };