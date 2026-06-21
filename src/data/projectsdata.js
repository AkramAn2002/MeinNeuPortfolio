import img1 from "../assets/projects/Chatapp.png";
import img2 from "../assets/projects/comfystore.png";
import img3 from "../assets/projects/flightsimulation.png";

export const projects = [
  {
    title: "Akan Chat",
    description:
      "A real-time chat application designed to enable seamless communication between users.",
    moreDetails:
      "The back-end is built using Jakarta EE and Spring Boot, providing efficient management of message exchanges. Asynchronous communication ensures instant messaging without delays.",
    linkGit: "https://github.com/AkramAn2002/ChatApp.git",
    image: img1,
    infoPoints: [
      { x: 25, y: 35, label: "Spring Boot" },
      { x: 70, y: 60, label: "Jakarta EE" },
      { x: 35, y: 70, label: "WebSockets" },
      { x: 80, y: 30, label: "MySQL" },
    ],
  },

  {
    title: "Comfy Store",
    description:
      "An e-commerce website built using the MERN stack for a smooth shopping experience.",
    moreDetails:
      "The back-end API is powered by Express and Node.js with MongoDB for data storage. The React front-end includes navigation, search, and shopping cart features.",
    linkGit: "https://github.com/AkramAn2002/ComfyStore.git",
    image: img2,
    infoPoints: [
      { x: 20, y: 45, label: "React" },
      { x: 75, y: 60, label: "Node.js" },
      { x: 55, y: 25, label: "Express" },
      { x: 30, y: 70, label: "MongoDB" },
      { x: 80, y: 35, label: "Redux" },
      { x: 50, y: 10, label: "REST API" },
    ],
  },

  {
    title: "Flight Simulation",
    description:
      "Java Swing-based flight ticket reservation system with interactive UI.",
    moreDetails:
      "Users can search, book, and manage flights. MySQL stores flight schedules, customers, and reservations for efficient management.",
    linkGit: "https://github.com/AkramAn2002/FlightSimulation.git",
    image: img3,
    infoPoints: [
      { x: 30, y: 40, label: "Java" },
      { x: 70, y: 55, label: "Swing" },
      { x: 50, y: 20, label: "MySQL" },
    ],
  },
];
