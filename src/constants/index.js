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
    unrealengine,
    threejs,
    angular,
    pge,
    idtech,
    tcs,
    unity,
    nekiristail,
    itchio,
    github,
    threejs_ai,
    dalle,
    metaversus,
    graphqlcrud
  } from "../assets";

  import RESUME from '../../public/Resume/NicholasMills_Resume.pdf'
  
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Unreal Engine Developer",
      icon: unrealengine
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
      name: "Angular",
      icon: angular
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
      name: "Unreal Engine",
      icon: unrealengine,
    },

    {
      name: "Redux Toolkit",
      icon: redux,
    },
    
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Tata Consultancy Services | Pacific Gas & Electric",
      icon: tcs,
      iconBg: "#383E56",
      date: "May 2021 - September 2023",
      points: [
        "Full stack developer",
        "Work with PG&E account to develop and maintain web applications using React.js, Dojo, Python, AWS and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Instructor",
      company_name: "iD Tech",
      icon: idtech,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2019",
      points: [
        "Internship",
        "Instructed students on the concepts of computer science and game design through multiple one to two week long courses to create and present a final project at the end of each course.",
        "Topics included C++, C#, C++ in Unreal Engine 4, VR Design using Unity with the Oculus Go, Twitch livestreaming through Streamlabs OBS and Video editing using Adobe Premier.",
        "Collaborated with team members frequently to ensure student progress and safety.",
        "Participated in daily meetups providing and receiving constructive feedback to other members.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "DALL-E Clone",
      description:
        "A social media inspired hub where users can create OpenAI prompts, generate an image and then share them with the community. Using MongoDB and Cloudinary, shared images are stored online and retrieved dynamically. Additional features include hovering over cards to get more details about the image along with a button to download it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb+cloudinary",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      icon_img: github,
      is_live: true,
      source_code_link: "https://github.com/NicholasAMills/dall-e",
      live_link: "http://nicholasamills-dalle-clone.site/"
    },
    {
      name: "Metaversus",
      description:
        "Nextjs React web application demonstrating React components with animations using framer motion and tailwind css",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      icon_img: github,
      is_live: true,
      source_code_link: "https://github.com/NicholasAMills/metaversus",
      live_link: "https://nicholasamills-threejs.site/"
    },
    {
      name: "Threejs",
      description:
        "Create a custom t-shirt and view it in 3D! Select the t-shirt's color by a color wheel or default options, then add a logo by uploading a photo or by generating an image through OpenAI!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threejs_ai,
      icon_img: github,
      is_live: false,
      source_code_link: "https://github.com/NicholasAMills/project_threejs_ai",
      live_link: null
    },
    {
      name: "React + GraphQL CRUD Demo",
      description:
        "A proof of concept full-stack 'to-do' style list using React, Node, MongoDb, GraphQL and Apollo to learn how to work with GraphQL. Project demonstrates full CRUD functionality including filtering results and basic form validation.",
      tags: [
        {
          name: "react+node",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb+graphql",
          color: "green-text-gradient",
        },
        {
          name: "apollo",
          color: "pink-text-gradient",
        },
      ],
      image: graphqlcrud,
      icon_img: github,
      is_live: false,
      source_code_link: "https://github.com/NicholasAMills/GraphQLCRUD",
      live_link: null
    },
    {
      name: "Nekiri's Tail",
      description:
        "Degree Capstone - Nekiri's Tail is a 3D puzzle/adventure game where the player controls both a cat and a human to solve puzzles to complete objectives. This game was developed using C++ and Blueprints within the Unreal 4 Engine. This is my capstone class and was completed in May 2020. The final game was presented at the UW Stout Game Expo on May 15, 2020. Specific roles include: particle effects using Niagara and Cascade, collaborating with teammates for gameplay design, developing possession mechanic of playable characters, UI, controller implementation including force feedback, and functional testing.",
      tags: [
        {
          name: "UW-Stout",
          color: "blue-text-gradient",
        },
        {
          name: "Unreal Engine 4",
          color: "green-text-gradient",
        },
        {
          name: "Capstone",
          color: "pink-text-gradient",
        },
      ],
      image: nekiristail,
      icon_img: itchio,
      is_live: false,
      source_code_link: "https://catsinthebag.itch.io/nekiris-tail",
      live_link: null
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, RESUME };