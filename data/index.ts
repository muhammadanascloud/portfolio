export const navItems = [
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#work-experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[270px]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b12.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[270px]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/globe.png",
    spareImg: "",
  },
  // {
  //   id: 3,
  //   title: "My tech stack",
  //   description: "I constantly try to improve",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
  //   imgClassName: "",
  //   titleClassName: "justify-center",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    // Added mt-[-20px] to move this section upwards
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 lg:min-h-[270px] mt-[-70px]",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 7,
  //   title: "Delivering Customized, Scalable Web Solutions",
  //   description:
  //     "Creating tailored web solutions for businesses with a focus on performance, scalability, and modern design.",
  //   className: "lg:col-span-3 md:col-span-6 md:row-span-2",
  //   imgClassName: "object-cover object-center",
  //   titleClassName: "justify-start text-white",
  //   img: "/websolutions.png", // Add your image here
  //   spareImg: "",
  // },
];

export const projects = [
  {
    id: 1,
    title: "BuyHome - Your Dream Home",
    des: "Simplify your buying home experience. Choose your dream home as per your budget.",
    img: "/buyhome.png",
    iconLists: ["/nextjs.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://buy-home1-muhammad-anas-projects-fbf35ac7.vercel.app/",
  },
  {
    id: 2,
    title: "Skillwave - Learn Technology",
    des: "Explore top-quality courses from experienced mentors on Skillwave at reasonable prices.",
    img: "/skillwave.png",
    iconLists: ["/nextjs.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://skillwave-teal.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Skillwave - Online Course Platform",
    desc: "Built a platform for global student enrollment, offering tech courses from top educators.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "BuyHome - Real Estate Finder",
    desc: "Created a property search site with budget filters and map integration for user convenience.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Currency Converter App",
    desc: "Developed a responsive currency converter using TypeScript, HTML, and CSS to handle real-time exchange rates.",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Weather App",
    desc: "Built a weather app with JavaScript, HTML, and CSS that fetches real-time weather data for any location.",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
