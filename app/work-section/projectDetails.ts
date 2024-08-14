export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Portfolio ReactJS",
    description:
      "This is a website for a Fintech Startup to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    technologies: ["ReactJS", "Tailwind CSS"],
    github: "https://github.com/hvtienprotv84/Portfolio_ReactJS_TypeScript_Multiple-Languages",
    demo: "https://portfolio-react-js-type-script-multiple-languages.vercel.app/",
    image: require(".//../../public/projects/react.webp"),
    available: true,
  },
  {
    id: 1,
    name: "Portfolio VueJS",
    description:
      "Built specifically for an AI startup, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["VueJS", "Tailwind CSS"],
    github: "https://github.com/hvtienprotv84/VueJS_LandingPage",
    demo: "https://vue-js-landing-page-puce.vercel.app/",
    image: require(".//../../public/projects/vue.webp"),
    available: true,
  },
  {
    id: 2,
    name: "Portfolio Angular",
    description:
      "A website built for a software startup and small business, to showcase their services and mark their online presence.",
    technologies: ["Angular", "TypeScript", "CSS"],
    github: "https://github.com/hvtienprotv84/Angular_LandingPage",
    demo: "https://angular-landing-page-seven.vercel.app/",
    image: require(".//../../public/projects/angular.png"),
    available: true,
  },
  {
    id: 3,
    name: "Portfolio NextJS",
    description:
      "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["NextJS", "TypeScript", "Tailwind CSS"],
    github: "/",
    demo: "/",
    image: require(".//../../public/projects/next.webp"),
    available: true,
  },
  {
    id: 4,
    name: "Portfolio NuxtJS",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["NuxtJS","TypeScript", "Tailwind CSS", "Vite"],
    github: "/",
    demo: "/",
    image: require(".//../../public/projects/nuxt.png"),
    available: true,
  },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "/",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "/",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "/",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
