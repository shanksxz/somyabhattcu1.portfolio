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
  carrent,
  jobit,
  tripguide,
  threejs,
  graphql,
  sass
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title : "Skills"
  },
  {
    id: "work",
    title: "Qualifications",
  }
  ,
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

export const links = [
  {
    github : "https://github.com/somyabhattcu1"
  }
]

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Android Developer",
    icon: mobile,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "sass",
    icon: sass  
  }
]

const experiences = [
  {
    title: "B.E. Computer Science and Engineering (CSE)",
    iconBg: "#E6DEDD",
    date: "Aug 2021 - present",
    points: [
      "Chitkara University, Rajpura"
    ],
  },
  {
    title: "Senior Secondary School",
    date: "March 2017 - April 2021",
    points: [
      "Mount Litera Zee School, Bijnor"
    ],
  },
  {
    title: "Secondary School",
    date: "April 2005  - April 2017",
    points: [
      "Shree Ram Public School, Muzaffarnagar"
    ],
  },
];

const testimonials = [
  //NA
];

const projects = [
  {
    name: "NA",
    description:
    "NA",
    tags: [
      {
        "name": "NA"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "NA",
    description:
    "NA",
    tags: [
      {
        "name": "NA"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "NA",
    description:
    "NA",
    tags: [
      {
        "name": "NA"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
