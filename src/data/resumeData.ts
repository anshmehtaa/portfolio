import { ResumeData } from '../types';
import p1 from '../asset1/p1.png';
import p2 from '../asset1/p2.png';


export const resumeData: ResumeData = {
  name: "Ansh Mehta",
  title: "Frontend Developer",
  about: "Passionate frontend developer with 2 years of experience building responsive, user-friendly web applications. Specializing in React, JavaScript, and modern CSS frameworks. Committed to creating accessible, performant, and beautiful digital experiences.",
  skills: [
    { name: "React", level: 9 },
    { name: "JavaScript", level: 9 },
    { name: "HTML/CSS", level: 9 },
    { name: "Tailwind CSS", level: 8 },
    { name: "Bootstrap", level: 7 },
    { name: "Git", level: 8 },
    { name: "UI/UX Design", level: 7 },
    { name: "Responsive Design", level: 9 },
    
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing using Stripe.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Java Script", "Redux", "Material UI", "Hooks"],
      demoLink: "https://anshmehtaa.github.io/ANSH-ECOMSIDE/",
      codeLink: "https://github.com/anshmehtaa/Blog-react.git",
    },
    {
      id: "2",
      title: "Disscussion App",
      description: "Designed a dynamic, responsive web UI and a fully functional online discussion platform using modern technologies. Focused on high performance, efficiency, and rich functionality to ensure an informative and user-friendly experience.",
      image: p1,
      tags: ["Html5", "Css3", "JavaScript", "Bootstrap"],
      demoLink: "https://anshmehtaa.github.io/discussionapp/",
      codeLink: "https://github.com/example",
    },
    {
      id: "3",
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.",
      image: p2,
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://anshmehtaa.github.io/portfolio/",
      codeLink: "https://github.com/example",
    },
    {
      id: "4",
      title: "Weather Dashboard",
      description: "which you will be able to get all the reports related to weather forecasting of any location .A weather dashboard that displays current conditions and forecasts for any location using the OpenWeatherMap API.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "API Integration", "css3","UI"],
      demoLink: "https://anshmehtaa.github.io/WeatherAPP/",
      codeLink: "https://github.com/anshmehtaa/WeatherAPP.git",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Neotech System Pvt Ltd.",
      position: "Frontend Developer",
      duration: "1 July 2022- 20 Dec 2024",
      description: [
        "Over 1.5+ years of experience in developing web applications and frontend web",
        "Proficiency in HTML, CSS, JavaScript, Reactjs, Bootstrap",
        " Ability to collaborate with other developers and designers to create a unified product",
        "Collaborated with design team to implement new design system"
      ],
      technologies: ["React", "JavaScript", "Bootstrap", "Tailwind CSS" , "css3" ], 
    },
    // {
    //   id: "2",
    //   company: "Digital Solutions LLC",
    //   position: "Frontend Developer",
    //   duration: "2018 - 2021",
    //   description: [
    //     "Developed responsive web applications for various clients in fintech sector",
    //     "Built custom React components and hooks for company component library",
    //     "Optimized application performance resulting in 50% faster load times",
    //     "Integrated third-party APIs and services"
    //   ],
    //   technologies: ["React", "JavaScript", "CSS3", "Bootstrap"]
    // },
    // {
    //   id: "3",
    //   company: "WebCraft Studios",
    //   position: "Junior Web Developer",
    //   duration: "2016 - 2018",
    //   description: [
    //     "Assisted in building websites for small to medium businesses",
    //     "Implemented responsive designs from Figma mockups",
    //     "Maintained existing client websites and implemented updates",
    //     "Participated in client meetings and requirement gathering"
    //   ],
    //   technologies: ["HTML", "CSS", "JavaScript"]
    // }
  ],
  education: [
    {
      id: "1",
      institution: "HOLY STAR SR. SEC. SCHOOL, Bupp, Sirsa",
      degree: "Senior Secondary (12th), HBSE",
      duration: "2016 - 2017",
      description: "Achieved 61.20% with a focus on science and foundational technical subjects."
    },
    {
      id: "2",
      institution: "JMIT (RADAUR)",
      degree: "Bachelor of Technology",
      duration: "2017 - 2021",
      description: "Graduated with 73% in Computer Science, gaining a solid foundation in programming, software development, and core engineering principles."
    }
  ],
  contact: {
    email: "anshchawla701@gmail.com",
    phone: "+91 9813894579",
    location: "Sirsa , Haryana",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/anshmehtaa",
        icon: "Github"
      },
      {
        name: "LinkedIn",
        url: " https://www.linkedin.com/in/er-ansh-mehta-32077b1b4",
        icon: "Linkedin"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/",
        icon: "Twitter"
      }
    ]
  }
  
};