export default {
  head: {
    home: {
      title: 'Ali Afsahnoudeh portfolio website',
    },
    project: {
      title: 'Created by Ali Afsahnoudeh',
    },
  },
  header: {
    links: {
      about: 'About',
      skills: 'Skills',
      fields: 'Fields',
      portfolio: 'Portfolio',
      home: 'Home',
    },
  },
  home: {
    banner: {
      title: 'Ali Afsahnoudeh',
      description: 'Software Engineer',
    },
    about: {
      title: 'About Me',
      description:
        `I'm an experienced full stack web engineer. \n` +
        'I started my career as a freelance developer when I was in college. ' +
        'We were a small team and worked on many small to medium projects. ' +
        'First I was working on desktop apps and then I learned about back-end and front-end technologies. \n' +
        'Then I founded two startups with my colleagues, we had lots of good and bad moments ' +
        'but overally it was a very great experience. ' +
        'On that time I learned more about business, marketing and how to build a team and more importantly try to keep it \n' +
        'After that I joined couple of companies as an employee in role of back-end and front-end engineer.' +
        'I had a chance to be a part of great teams of smart people. ' +
        'I learned a lot of things from them and more importantly I learned how to be a good team mate and still trying to be a better one. \n',
    },
    skills: {
      title: 'Skills',
    },
    portfolio: {
      title: 'Portfolio',
    },
  },
  projects: {
    badgusan: {
      title: 'Bad Gusan Website',
      content: `Badgusan is our music band. I made our offical website with Vue.js, Vue-Router, Vuex and Bootstrap.
      <br />
      It's a multilingual website with responsive deisign for mobiles and tablest.
      <br />
      You can visit this website in:
      <br />
      <a href="http://badgusan.com/">badgusan.com</a>`,
    },
    govesta: {
      title: 'Govesta',
      content: `The Govesta main website was a monolith project written in <a href="https://nextjs.org/" target="_blank">Next.js</a> where users could search throught a list of properties for rent and buy.
      <br />
      For making a good Search-engine-optimazation the projects was build as a unversal application with ability of server-side-rendering. 
      <br />
      It was communicating with our back-end through a RESTful Api.
      <br />
      It depended to our two other projects. Ui-library which we kept all of our UI components in it and it had a nice little storybook to make them visible to the whole team and another project we called govesta-global to keep our shared information and translations.
      <br />
      <br />
      When I was working on this project, I managed to upgrade it form next.js 7 to next.js 10 (the latest stable version on that time) to use its many brand new features such automatic sub-routing which made our multi-lingual implementation much easier.
            <br />
            After the upgrading the whole project, we deployed it as serverless on amazing <a href="https://vercel.com/" target="_blank">vercel</a>.
            `,
    },
    govesta_dashboard: {
      title: 'Govesta Dashboard',
      content: `The govesta dashboard was a separated monolith project written in <a href="https://nextjs.org/" target="_blank">Next.js</a> where agencies and property owners could manage their properties. They could a new place, edit its information and images and start or stop advertising it on the main website. So every place that users were seeing on the main website was added here firstly.
      <br />
      It wasn’t needed to be server-side-rendered since there was no need to SEO, but we used Next.js for the features it offered to create a React.js applications easily.
      It was communicating with our back-end through a RESTful Api and we used JWT to handle user authentications.
      <br />
      As the main website it was depended to our two other projects. Ui-library which we kept all of our UI components in it and it had a nice little storybook to make them visible to the whole team and another project we called govesta-global to keep our shared information and translations.
      <br />
      <br />
      When I was working on this project, I managed to upgrade it form next.js 7 to next.js 10 (the latest stable version on that time) to use its many brand new features such automatic sub-routing which made our multi-lingual implementation much easier.
      <br />
      After the upgrading the whole project, we deployed it as serverless on <a href="https://vercel.com/" target="_blank">vercel</a>.
      `,
    },
    shooka_client: {
      title: 'Shooka Web Client',
      content: `It was a very great experience because I made this project from scratch. First my company needed a MVP to present to our board of directors. They kindly trusted me and leted me to create a much bigger project. So after approval I was responsible for architecture of the whole system and added lots of features to it.
      <br />
      <br />
      After the time that project was more stable and scaled well, I built a small but harmonized team of front-end developers and we developed on scrum methodology.
      <br />
      <br />
      This project was created with Vue.js, Vuex, Sass and etc. Users after login, had access to their list of scheduled meetings. They could search by dates for their meetings.
      <br />
      If they had some active meetings, they could join to them. Meetings had two role of users, one was a normal participant and another one was moderator of meeting. 
      <br />
      Each role had it's one sidebar and features. They could send messages to each other privately or as group chat. It was implemented by web sockets. New messages and notifications has been shown to users.
      <br />
      Our back-end was created with Java Spring Boot and Microservices architecture and I designed and developed signalling and state management of our conferences as a service called control-meeting too.`,
    },
    shooka_admin: {
      title: 'Shooka Admin Panel',
      content: `Our customers had some admins and secreteries to create/edit users, scheduled meetings and etc.
      <br />
      So we build a web panel with Vue.js, Vuex, Sass and etc.
      <br />
      <br />
      On thoese days I deployed it with PM2 on a CentOS machine.`,
    },
    reconcile_desktop: {
      title: 'Reconciling App',
      content: `This cross paltform application was made with Electron.js and Vue.js.

Users can open two excel files in it (with drag & drop or browsing from hard drives) and after clicking on calculate button, it will comparing two files and showing a table as a result.

This result can be filterd or searched throught. And users can print it or export it to Excel file.`,
    },
    portfolio: {
      title: 'This website',
      content: 'This portfolio website is made by Nuxt.js.',
    },
  },
  fields: {
    title: 'What I Did So Far',
    intro: 'As a software engineer I was more active in these areas: ',
    'front-end': {
      title: `Front End Engineer`,
      description: `Developed couple of medium to large projects from scratch or was a part of front-end team.`,
    },
    'back-end': {
      title: `Back End Engineer`,
      description: `Developed couple of servers with Node.js, ASP.NET MVC and ASP.NET Core.`,
    },
    'software-architect': {
      title: `Software Architect`,
      description: `Was the architect of some server, web client and mobile client with different tech stacks.`,
    },
    RDBMS: {
      title: `RDBMS and No Sql Desinger`,
      description: `Designed and built lots of DataBases with MS SQL Server, My SQL, MongoDB and etc.`,
    },
    'start-up-expert': {
      title: `Start Up Expert`,
      description: `Created some start ups and got familiar with start up enviroments.`,
    },
    microsoft: {
      title: `Microsoft Stack Developer`,
      description: `C#, VB.NET, Windows Forms and WPF expret.`,
    },
  },
  footer: {
    language: {
      en: 'English',
      fa: 'Persian',
      de: 'German',
    },
    copyright: '© Ali Afsahnoudeh',
    email: 'aliafsahnoudeh@gmail.com',
  },
}
