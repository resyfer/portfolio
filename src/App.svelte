<script lang="ts">
  import Icon from '@iconify/svelte';
  import Button from "./lib/Button.svelte"
  import Label from "./lib/Label.svelte"
  import Link from "./lib/Link.svelte"

  import bgImg from "./assets/bg.jpg";
  import pfpImg from "./assets/pfp.jpeg";

  let projects = [
    {
      name: "Sirin",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/sirin"
        },
        {
          name: "NPM",
          url: "https://www.npmjs.com/package/sirin"
        }
      ],
      technologies: ["TypeScript", "NodeJS"],
      status: "Published",
      description: "A CLI to allow you to share files instantly over LAN or Hotspot. The NPM package has over 600 total downloads.",
    },
    {
      name: "Apophis",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/apophis"
        },
        {
          name: "NPM",
          url: "https://www.npmjs.com/package/apophis"
        }
      ],
      technologies: ["TypeScript", "NodeJS"],
      status: "Published",
      description: "A CLI to have a group chat server, and talk to anyone over LAN or Hotspot. The NPM package has over 150 total downloads.",
    },
    {
      name: "Test API Features Client",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/test-api-features-client"
        }
      ],
      technologies: ["TypeScript", "NodeJS"],
      description: "It is a sample API Client library for the Open Geospatial Consortium Features API standard."
    },
    {
      name: "libtpool",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libtpool"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "A C library for creating and managing thread pools. Handles synchronization of consuming tasks within threads using semaphores and mutexes.",
    },
    {
      name: "libfetch",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libfetch"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "Functionality of Fetch API of JS inside C. Fetch requests to any website or URL and get the response.",
    },
    {
      name: "NITS Proxy",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/nits_proxy"
        }
      ],
      technologies: ["C", "Bash"],
      description: "It is a CLI to quickly and easily switch between various proxies of your campus. You can save your own configuration as per your needs.",
    },
    {
      name: "AniStop",
      link: [
        {
          name: "GitHub Client",
          url: "https://github.com/resyfer/anistop-client"
        },
        {
          name: "GitHub API",
          url: "https://github.com/resyfer/anistop-api"
        }
      ],
      technologies: [
        "TypeScript",
        "VueJS",
        "SASS",
        "NodeJS",
        "Express",
        "Prisma",
        "PostgreSQL",
        "AWS"
      ],
      description: "An anime streaming and database platform. Stream and rate animes. Favorite voice actors, characters, studios, etc. Search up animes according to genres, seasons or year, or even name, or part of description.",
      status: "Offline"
    },
    {
      name: "Show Languages In Code",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/slic"
        }
      ],
      technologies: ["Go"],
      description: "A CLI to show the percentage content of languages and technologies in a project."
    },
    {
      name: "libvector",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libvector"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "A C++-like vector in C. Can contain any data type, and increases or decreases size according to wish.",
    },
    {
      name: "libhmap",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libhmap"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "A hash-map library for C. Can store key value pairs in form of string and get them with the usual hash-map time complexities.",
    },
    {
      name: "libqueue",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libqueue"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "A C library for easy-to-use queues, but with any data type.",
    },
    {
      name: "React Component Library",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/react-comp-lib"
        },
        {
          name: "Preview",
          url: "https://react-comp-lib.vercel.app/"
        }
      ],
      technologies: ["ReactJS", "TailwindCSS", "SASS"],
      description: "A highly customizable Material UI-like component library",
      status: "Online"
    },
    {
      name: "Password Manager",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/pswdmngr"
        }
      ],
      technologies: ["Go"],
      description: "A secure CLI password manager which uses AES to store your password, and is visible only to the rightful owner. It also suggests strong passwords, etc. for your use."
    },
    {
      name: "libcol",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/libcol"
        }
      ],
      technologies: ["C", "Makefile"],
      description: "A C library for easily outputting colors in terminals.",
    },
    {
      name: "CoWIN Self Registration",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/cowin-self-registration"
        }
      ],
      technologies: ["JavaScript", "NodeJS"],
      description: "A bot that notified whenever a slot was avaiable for COVID-19 vaccination near me on the CoWIN portal."
    },
    {
      name: "Portfolio Website",
      link: [
        {
          name: "Website",
          url: "https://resyfer.vercel.app/"
        },
        {
          name: "GitHub",
          url: "https://github.com/resyfer/portfolio"
        },
      ],
      technologies: ["TypeScript", "Svelte"],
      description: "This portfolio website."
    },
    {
      name: "Mailer",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/mailer"
        }
      ],
      technologies: ["JavaScript"],
      description: "When you need to mail the same thing to multiple users, this comes to the rescue.",
    },
    {
      name: "Genshin Wish Simulator",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/genshin-wish-simulator"
        }
      ],
      technologies: [
        "JavaScript",
        "ReactJS",
        "SASS",
        "Express",
        "MongoDB"
      ],
      status: "Offline",
      description: "A gacha wish simulator which grants items or weapons with respect to their probability rates, as well as rate-guarantees.",
    },
    {
      name: "Snek",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/snek"
        }
      ],
      technologies: ["Go"],
      description: "A CLI to play snake in your terminal when you're bored."
    },
    {
      name: "CPBot",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/cpbot"
        }
      ],
      technologies: ["JavaScript", "NodeJS"],
      description: "A Discord Bot that gave various information regarding users in the discord server and contests on Codeforces."
    },
    {
      name: "Chess CLI",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/resyfer/chess-cli"
        }
      ],
      technologies: ["C++"],
      description: "A CLI to play chess in nothing but your terminal",
    },
  ];

  let contributions = [
    {
      name: "Tecnoesis Backend",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/NIT-Silchar-Org/tecno-backend",
        },
        {
          name: "API",
          url: "https://backend.tecnoesis.org/api/docs",
        },
      ],
      status: "Online",
      contribution: {
        description: "Setup of the project and the Swagger Docs, Team module development and successful HTTPS deployment of both the frontend as well as the API in AWS and setting up an NGINX Reverse Proxy to serve various dev and prod versions of the API as well as have them as HTTPS using SSL certificates.",
        link: [
          {
            name: "Commits",
            url: "https://github.com/NIT-Silchar-Org/tecno-backend/commits/dev?author=resyfer",
          }
        ]
      },
      description: "The backend for Tecnoesis, the technical festival of NIT Silchar. Users can register for events, and receive/send Tecno Coins on certain occassions.",
      technologies: [
        "AWS",
        "Prisma",
        "Firebase Auth",
        "PostgreSQL",
        "Express",
        "TypeScript",
        "Swagger",
      ]
    },
    {
      name: "NITSMUN 2021 Website",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/nitsmun/nitsmun2021-22",
        },
      ],
      status: "Offline",
      contribution: {
        description: "Part of the development team for the website",
        link: [
          {
            name: "Commits",
            url: "https://github.com/nitsmun/nitsmun2021-22/commits/main?author=resyfer"
          }
        ]
      },
      description: "The 2021-22 website for NIT Silchar, Model United Nations",
      technologies: [
        "ReactJS",
        "Bootstrap",
        "JavaScript"
      ]
    },
    {
      name: "Mailing Groups API",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/NIT-Silchar-Org/mailing-groups-api",
        },
      ],
      contribution: {
        description: "Wrote almost all of the production code.",
        link: [
          {
            name: "Commits",
            url: "https://github.com/NIT-Silchar-Org/mailing-groups-api/commits/main"
          }
        ]
      },
      description: "Based on feedback from Google Forms, you can pick the Email IDs and their interests, and can add them to a Google Groups for mailing similar content to them.",
      technologies: [
        "JavaScript",
        "NodeJS",
        "Google SDK"
      ]
    },
    {
      name: "Veritas API",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/gdsc-nits-org/veritas/",
        },
      ],
      contribution: {
        description: "Was responsible for setup of project, initial schemas, swagger docs as well as writing the Person, Student, Club Member and Tenure modules of the API.",
        link: [
          {
            name: "Commits",
            url: "https://github.com/gdsc-nits-org/veritas/commits/dev?author=resyfer"
          }
        ]
      },
      description: "The Work-In-Progress central API of GDSC NIT Silchar, which records all of the data regarding the club.",
      technologies: [
        "TypeScript",
        "Swagger",
        "NodeJS",
        "Prisma",
        "PostgreSQL"
      ]
    },
    {
      name: "React JS + SASS App Template",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/gdsc-nits-org/react-js-app",
        },
      ],
      contribution: {
        description: "Was fully responsible for for the whole template.",
      },
      description: "A React JS + SASS app template which will be used for every future React App developed in GDSC NIT Silchar.",
      technologies: ["ReactJS", "JavaScript", "SASS"]
    },
    {
      name: "Windows Terminal Themes",
      link: [
        {
          name: "GitHub",
          url: "https://github.com/atomcorp/themes",
        },
        {
          name: "Website",
          url: "https://windowsterminalthemes.dev/"
        }
      ],
      contribution: {
        description: "Added a theme called Ganyu",
        link: [
          {
            name: "PR",
            url: "https://github.com/atomcorp/themes/pull/65"
          },
          {
            name: "Preview",
            url: "https://windowsterminalthemes.dev/?theme=Ganyu"
          }
        ]
      },
      description: "Themes for Windows Terminal",
      technologies: ["JSON"]
    }
  ];
</script>

<main>
  <nav>
    <Button text="Intro" href="#"/>
    <Button text="About Me" href="#about" />
    <Button text="Projects" href="#projects" />
    <Button text="Contributions" href="#contributions" />
  </nav>
  <section id="intro">
    <div class="intro-content">
      <div class="left">
        <div class="name">
          <h1>Saurav Pal</h1>
        </div>
      </div>
      <div class="right">
        <img src={pfpImg} alt="Profile"/>
      </div>
    </div>
    <div class="intro-img-cont">
      <img src={bgImg} alt="Bg Img"/>
      <div class="intro-img-tint"></div>
    </div>
  </section>

  <!-- svelte-ignore a11y-invalid-attribute -->
  <a class="back-to-top" href="#">
    <Icon icon="material-symbols:vertical-align-top-rounded" inline={true} />
  </a>

  <section id="about">
    <h1>About Me</h1>
    <div class="about-content">
      <p>
        &emsp;I am Saurav Pal, a third year undergraduate pursuing Bachelor of Technology in Computer Science and Engineering
        from <a target="_blank" rel="noreferrer" href="http://www.nits.ac.in/">National Institute of Technology, Silchar</a> one of the Institutes of National Importance, as well as
        <a target="_blank" rel="noreferrer" href="https://www.usnews.com/education/best-global-universities/national-institute-of-technology-silchar-529775#:~:text=National%20Institute%20of%20Technology%20Silchar%20is%20ranked%20%231818%20in%20Best,about%20how%20we%20rank%20schools.">one of the top
        institutes in the world</a>.
      </p>
      <p>
        &emsp;I am the Cloud Moderator of <a target="_blank" rel="noreferrer" href="https://gdsc.community.dev/national-institute-of-technology-nit-silchar/#team-list">GDSC NIT Silchar</a>
        for the 2022-23 session and was the Web Team member for 2021-22 session. I am a certified <a target="_blank" rel="noreferrer" href="https://www.google.com">Google Cloud Digital Leader</a>.
        At GDSC NIT Silchar, I have worked on numerous projects, both as a web developer as well as a cloud engineer and also have guided junior developers on numerous
        GDSC NIT Silchar affiliated projects like <a href="https://www.linkedin.com/posts/gdscnits_gdsc-developerstudentclubs-guidancegrid-activity-7002186158180839424-wvnl?utm_source=share&utm_medium=member_desktop">Guidance Grid</a>.
      </p>
      <p>
        &emsp;I am also the Deputy Director Technical Operations of the Web Development Team at NIT Silchar Model United Nations, and have both worked as a web developer in the team as well as a mentor
        to the junior developers to get them started with their journeys as a web developer, and upskill to be able to maintain the code base.
      </p>
      <p>
        &emsp;I am developer by passion, and really enthusiastic about contributing open source and giving back to the community,
        and if something piques my curiosity, I work really hard to understand them to a good level.
      </p>
    </div>
  </section>
  <section id="projects">
    <h1>Projects</h1>
    <div class="project-cont">
      {#each projects as project}
        <div class="project">
          <div class="name">{project.name}</div>
          <hr/>
          <div class="project-content">
            <div class="links">
              {#each project.link as link}
                <Link href={link.url} text={link.name} />
              {/each}
            </div>
            <br/>
            <div class="technologies">
              {#each project.technologies as tech}
                <Label text={tech}/>
              {/each}
            </div>
            {#if project.status}
              <div class="status">
                Status:&emsp;<Label text={project.status}/>
              </div>
            {/if}
            <br/>
            <div class="description">{project.description}</div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section id="contributions">
    <h1>Contributions</h1>
    <div class="contrib-cont">
      {#each contributions as contrib}
        <div class="contrib">
          <div class="name">{contrib.name}</div>
          <hr/>
          <div class="contrib-content">
            <div class="links">
              {#each contrib.link as link}
                <Link href={link.url} text={link.name} />
              {/each}
            </div>
            <br/>
            <div class="technologies">
              {#each contrib.technologies as tech}
                <Label text={tech}/>
              {/each}
            </div>
            {#if contrib.status}
              <div class="status">
                Status:&emsp;<Label text={contrib.status}/>
              </div>
            {/if}
            <div class="description">
              {contrib.description}
            </div>
            <hr/>
            <div class="my-contrib">
              <h3>My Contribution</h3>
              {#if contrib.contribution.link}
                <div class="my-contrib-links">
                  {#each contrib.contribution.link as myContribLink}
                    <div class="my-contrib-link">
                      <Link href={myContribLink.url} text={myContribLink.name}/>
                    </div>
                  {/each}
                </div>
              {/if}
              <div class="my-contrib-desc">
                {contrib.contribution.description}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  main {
    position: relative;
  }
  nav {
    position: fixed;
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--theme-4-075);
    backdrop-filter: blur(0.5vh);
    z-index: 4;
  }

  section {
    position: relative;
    min-height: 100vh;
    width: 100%;
    padding-top: 8vh;
    padding-bottom: 5vh;
  }

  section h1 {
    color: var(--theme-1-100);
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
    width: fit-content;
    padding: 0.25vh 1vh;
    margin: 0 auto;
    border-bottom: 0.2vh solid var(--theme-1-100);
  }

  /* Intro */
  #intro {
    position: relative;
  }

  .intro-img-cont {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .intro-img-cont img, .intro-img-cont .intro-img-tint {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .intro-img-cont .intro-img-tint {
    z-index: 3;
    background-color: var(--theme-3-025);
    backdrop-filter: blur(0.5vh);
  }

  .intro-content {
    position: absolute;
    z-index: 3;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .intro-content .left {
    position: relative;
    height: 30vh;
    margin: 5vh;
    white-space: nowrap;
  }

  .intro-content .left .name {
    position: relative;
    animation: type 2s ease-in-out forwards;
    width: 40vw;
    overflow: hidden;
  }

  @keyframes type {
    from {
      width: 0%;
    }

    to {
      width: 40vw;
    }
  }

  .intro-content .right {
    position: relative;
    margin: 5vh;
    width: 30vh;
    height: 30vh;
  }

  .intro-content .right img {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    height: 30vh;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 0.4vh solid var(--theme-3-100);
  }

  #intro .name h1 {
    font-size: 5rem;
    color: var(--theme-3-100);
    border: none;
    text-transform: none;
    font-family: 'Chivo Mono', monospace;
  }

  /* About Me */
  #about {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .about-content {
    height: auto;
    min-height: 80vh;
    width: 100%;
  }

  .about-content p {
    padding: 5vh 2vh 0 2vh;
    color: var(--theme-2-100);
    font-size: 1.2rem;
    text-align: justify;
  }

  /* Project */
  .project-cont, .contrib-cont {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 2vh auto;
  }

  .project, .contrib {
    height: 47vh;
    width: 31%;
    margin: 1vh;
    border-radius: 1vh;
    border: 0.1vh solid var(--theme-1-100);
    padding: 0.5vh;
    transition: 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
  }

  .project:hover, .contrib:hover {
    border: 0.1vh solid var(--invisible);
    box-shadow: 0.2vh 0.2vh 2vh 0 var(--theme-1-100);
  }

  hr {
    border-color: var(--theme-4-100);
  }

  .name {
    font-size: 1.5rem;
    padding-left: 2vh;
    padding-right: 1vh;
    color: var(--theme-1-100);
  }

  .project .project-content, .contrib .contrib-content {
    overflow-y: scroll;
    padding: 0.5vh;
  }

  .links {
    margin: 1vh 0;
    height: fit-content;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
  }

  .status {
    display: flex;
    align-items: center;
    margin: 1vh 0;
    color: var(--theme-2-100);
  }

  .description, .my-contrib-desc {
    text-align: justify;
    padding: 0.5vh 1vh;
    color: var(--theme-2-100);
  }

  /* Contributions */
  .my-contrib h3 {
    color: var(--theme-1-100);
    margin: 1vh;
    text-align: center;
  }

  .my-contrib-links {
    margin: 1vh 0 2vh 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  /* Back To Top */
  .back-to-top {
    position: sticky;
    top: 92.5vh;
    left: 92.5%;
    height: 5vh;
    width: fit-content;
    color: var(--theme-1-100);
    transition: 0.2s ease-in-out;
    text-decoration: none;
    padding: 2vh;
    border-radius: 0.75vh;
    text-transform: uppercase;
    border: 0.3vh solid var(--invisible);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    z-index: 1;
  }

  .back-to-top:hover {
    background-color: var(--theme-3-100);
    color: var(--theme-2-100);
    border: 0.3vh solid var(--theme-2-100);
  }
</style>