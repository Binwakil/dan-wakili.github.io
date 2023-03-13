// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    firstName: "Almustapha",
    LastName: "WAKILI",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "8+",
        text: "Years of Experinse in Software Engineering",
      },
      {
        count: "50+",
        text: "Projects Worked in my career Web/Mobile",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Android Java/Kotlin",
        para: "Have 5+ years experience in Android Application Development",
        logo: figma,
      },
      {
        name: "Google Cloud & Firebas",
        para: "Uses google could services and Firebase",
        logo: nodejs,
      },
      {
        name: "Web 3.0 Solidity/RustLang",
        para: "Have 2 years experience in Blokchain Development using Rust and Solidity ",
        logo: ps,
      },
      {
        name: "React js",
        para: "Have Solid Experience in FrontEnd Dev with React Js",
        logo: reactjs,
      },
      {
        name: "Php /Mysql",
        para: "I was a Php dev. i uses php in my early tech career",
        logo: sketch,
      },
      {
        name: "ML Models with Python",
        para: "I have a good experience in Building ML Models with Python",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "ANDROID APPS DEVELOPMENT",
        para: " Have 5 years + experience in Android Application Development and Uses google could services and Firebase to build scalable applications ",
        logo: services_logo1,
      },
      {
        title: "BLOKCHAIN DAPP DEVELOPMENT",
        para: "Have 2 years experience in Blokchain Development using Rust and Solidity ",
        logo: services_logo2,
      },
      {
        title: "TECH INSTRUCTOR",
        para: "I am a Lecturer in a University, i teches Computer Science paractical related courses",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire me for your software engineering projects as a Developer or a full stack engineeer, i can manage and facilitate your tech team or in training your tech team",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "wakili@jsiit.edu.ng",
        icon: GrMail,
        link: "mailto:almustaphawakili@gmail.com",
      },
      {
        text: "+234 8165 869402",
        icon: MdCall,
        link: "https://wa.me/+2348165869402",
      },
      {
        text: "binwakili",
        icon: BsInstagram,
        link: "https://www.twitter.com/binwakili/",
      },
    ],
  },
  Footer: {
    text: "Binwakili © Copy Right Reserved 2022",
  },
};

