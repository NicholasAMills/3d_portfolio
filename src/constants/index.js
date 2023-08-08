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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      name: "Unity",
      icon: unity,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "docker",
      icon: docker,
    },
    
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Tata Consultancy Services | Pacific Gas & Electric",
      icon: tcs,
      iconBg: "#383E56",
      date: "May 2021 - Current",
      points: [
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
        "Instructed students the concepts of computer science and game design through multiple one to two week long courses to create and present a final project at the end of each course.",
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
        "A social media inspired hub where users can create OpenAI prompts, generate an image and then share them with the community. Using MongoDB, and Cloudinary, shared images are stored online and retrieved dynamically. User is able to filter posts and hover over images to see what prompt resulted in that image, who created it along with a button to download the image",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      icon_img: github,
      source_code_link: "https://github.com/NicholasAMills/dall-e",
    },
    {
      name: "ThreeJS AI",
      description:
        "React web application where users can design a shirt rendered in a 3D environment. User can change the color of the shirt using a color picker wheel, upload a photo and use OpenAI prompts to have an AI generate a design",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: threejs_ai,
      icon_img: github,
      source_code_link: "https://github.com/NicholasAMills/project_threejs_ai",
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
      source_code_link: "https://catsinthebag.itch.io/nekiris-tail",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };