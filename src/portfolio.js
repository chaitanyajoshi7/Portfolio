/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Chaitanya Joshi",
  title: "Hi all, I'm Chaitanya Joshi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building applications with JavaScript / Reactjs/  Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11clgnVvjMsD4VTWziHbhulReNuaGKQHa/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/chaitanyajoshi7",
  linkedin: "https://www.linkedin.com/in/chaitanyajoshi7/",
  gmail: "joshics09@gmail.com",
    //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://twitter.com/Chaitanyajoshi7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   // {
   //   skillName: "swift",
    //  fontAwesomeClassname: "fab fa-swift"
    //},
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
    //  skillName: "docker",
    //  fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/MU.png"),
      subHeader: "Bachleor of Engineering in Information Technology",
      duration: "September 2014 - April 2017",
      desc: "Datta Meghe College of Engineering",
      descBullets: [
        "B.E. (Information Technology) degree course covers the study of a variety of functions performed by IT engineers; right from installing applications to designing complex computer networks and information databases.",
        "Took courses about Software Engineering, Web Security, Operating Systems,Artificial Intelligence, Algorithm Design and Optimization,Basic Mathematics, Core & Advanced Java ,Computer Graphics, Computer Ethics and Cyber Law,	Relational Database Management System (RDBMS),Project Management. "
      ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/MU.png"),
      subHeader: "Diploma in Information Technology",
      duration: "September 2010 - April 2014",
      desc: "Muchhala Polytechnic  ",
      descBullets: ["Took courses about Software Engineering, Web Security, Operating Systems,Artificial Intelligence, Algorithm Design and Optimization,Basic Mathematics, Core & Advanced Java ,Computer Graphics, Computer Ethics and Cyber Law,	Relational Database Management System (RDBMS),Project Management."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Analyst",
      company: "eClerx ",
      companylogo: require("./assets/images/ec.png"),
      date: "March 2020 – Present",
      desc: "Developing intuitive software that meets and exceeds the needs of the company.",
      descBullets: [
        "Custom building applications",
        "Creating Websites and web apps"
      ]
    },
    {
      role: "Test Engineer",
      company: "Quality Kisok pvt.ltd",
      companylogo: require("./assets/images/QK.png"),
      date: "Feb 2018 – March 2020",
      desc: ["Analyzed the past process short-coming in the Lead management system reduced the gap between the marketing team and the Lead generator which resulted in a 55% increased in revenue in the business year 2019."
    ], 
    descBullets: [
      "Evaluated in 6 members whether the client’s marketing strategy for lead management targets key decisions of leadtracking and reduced the time required for tracking by 20-30%.",
      "Developed a Facial Recognition system for easy claim settlement process by tracking face vector and age estimation algorithm resulted in reduced paperwork of worth ₹ 4-5 lakhs approximately and increased claim settlement rate."
    ]
    },
    {
      role: "Jr. Software Developer",
      company: "Atha Media Services",
      companylogo: require("./assets/images/am.png"),
      date: "June 2017 – Jan 2018",
      desc: "Executed the project named 'Fish-Tokri.com' which is an e-commerce site for home-delivery raw and fresh seafood. Designed and developed the E-commerce website and mobile app which lead to the initial traffic related to the project."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udemy",
      subtitle:
        "The Completed JavaScript Course: Beginner to Advanced level",
      image: require("./assets/images/ud.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-012c5cc8-5989-4e7b-a347-a6f4c8bcc0a8/"
        },
        {
          name: "Award Letter",
          url: "https://www.udemy.com/certificate/UC-012c5cc8-5989-4e7b-a347-a6f4c8bcc0a8/"
        },
        {
          //name: "Google Code-in Blog",
          ///url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Udemy",
      subtitle:
        " The Completed ReactJs Course - Basics to Advanced (2021).",
      image: require("./assets/images/ud.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-8d4a1a4a-2579-48a1-af3e-eebabfb55ec7/"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@joshics09/features-of-firebase-5ed5a4d0944a",
      title: "Firebase Features",
      description:
        "Firebase has several features that make this platform essential. These features include unlimited reporting, cloud messaging, authentication and hosting, etc. "
    },
    {
      url: "https://medium.com/@joshics09/why-choose-reactjs-for-your-next-project-features-and-benefits-8810b2d08e36",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8097942625",
  email_address: "joshics09@gmail.com.com"
};

// Twitter Section

const twitterDetails = {
  userName: "@Chaitanyajoshi7", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
