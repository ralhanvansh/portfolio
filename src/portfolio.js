/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vansh Ralhan",
  title: "Hey, I'm Vansh",
  subTitle:
    "I'm a full Stack Software Developer currently pursuing M.S in computer science at Lamar University. Previously, I worked as a Software Developer for three years on various large and medium-scale web development projects, gaining experience in a number of languages, databases, and frameworks.",
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/vanshralhan/",
  gmail: "ralhanvansh05@gmail.com",
  github: "https://github.com/ralhanvansh",
  facebook: "https://www.facebook.com/vanshralhan",
  // gitlab: "https://gitlab.com/saadpasta",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full Stack Developer who wants to pursue passion for software development while collaborating with like-minded individuals to create solutions that will have a big impact on the future of science and technology.",
  skills: [
    emoji(
      "➼ Writing, developing, testing, and implementing new software and web applications"
    ),
    // emoji("➼ Develop and build Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "➼ Integration of third party services such as Openshift / Heroku / Elasticsearch / Sidekiq"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery 
http://fizzed.com/oss/font-mfizz  */


  softwareSkills: [
    {
      skillName: "Ruby",
      fontAwesomeClassname: "icon-ruby"
    },
    {
      skillName: "Rails",
      fontAwesomeClassname: "icon-ruby-on-rails"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "icon-redis"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: "icon-jquery"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "icon-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "Heroku",
      fontAwesomeClassname: "icon-heroku"
    },
    {
      skillName: "Openshift",
      fontAwesomeClassname: "icon-openshift"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Lamar University, TX",
      logo: require("./assets/images/lamar.jpeg"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2021 - December 2022",
      desc: "GPA - 3.7"
      // descBullets: [
      //   "Responsible for admitting and assisting clients for scheduled testing",
      //   "Adhere to different exams to ensure proper measures are taken for each client"
      // ]
    },
    {
      schoolName: "Chandigarh Group of Colleges, India",
      logo: require("./assets/images/cgc.png"),
      subHeader: "Bachelor of Science in Electronics and Communication",
      duration: "July 2013 - August 2017",
      desc: "Percentage - 73%"
      // desc: "Took courses about Object oriented programming, Operating Systems, Data Structures...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming and Scripting",
      progressPercentage: "85%"
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    },
    {
      Stack: "Git/Github",
      progressPercentage: "80%"
    }
    // {
    //   Stack: "DevOps",
    //   progressPercentage: "75%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Assistant",
      company: "Career & Testing Center, LU",
      companylogo: require("./assets/images/lamarct.png"),
      date: "July 2021 – Present",
      descBullets: [
        "Responsible for admitting and assisting clients for scheduled testing",
        "Adhere to different exams to ensure proper measures are taken for each client",
        "Maintain and monitor the testing environment"
      ]
    },
    {
      role: "Software Developer",
      company: "Magnon\\TBWA",
      companylogo: require("./assets/images/magnon.png"),
      date: "February 2019 – December 2020",
      descBullets: [
        "Collaborated on all stages of the web application development lifecycle, from requirement gathering to production releases",
        "Built web applications from scratch using ruby on rails and angular",
        "Deployment on server using openshift container platform"
      ]
    },
    {
      role: "Software Engineer",
      company: "Maropost",
      companylogo: require("./assets/images/maropost.jpeg"),
      date: "November 2017 – January 2019",
      descBullets: [
        "Followed Agile Scrum process and actively participated for Sprint Retrospective",
        "Single-handedly built a microservice using Ruby, Sinatra and Elasticsearch for data analysis and Integrated it with the Maropost’s MMC ruby on rails application with sidekiq and API’s"
      ]
    }
  ]
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

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
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
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
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Contact ☎️"),
  subtitle: "Let's make something awesome together.\nGet in touch!",
  number: "+1 312 709 9167",
  email_address: "ralhanvansh05@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
