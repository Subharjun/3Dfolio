/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "RealTime Tracker",
    description: "A backend project to determine live distance and possible ways of reaching the destination from your current location.",
    date: "2024-03-15",
    demoLink: "https://rttracker-subharjun.onrender.com#RealTimeTracking",
    tools: ["NodeJS", "ExpressJS", "Leaflet", "Socket.io"],
    thumbnail: "/images/tracker.jpg",
  },
  {
    id: 2,
    name: "Chess 1v1 realTime",
    description: "Live chess game with drag-drop functionality. (not playable on mobile devices currently.. updation is ongoing)",
    date: "2024-05-20",
    demoLink: "https://subharjunchess1on1.onrender.com",
    tools: ["NodeJS", "ExpressJS", "ChessJS", "Socket.io"],
    thumbnail: "/images/chess.jpg",
  },
  {
    id: 3,
    name: "AI Career Mentor Guide",
    description: "An AI powered app with ML integration, that helps students and aspirants to determine their career paths, resume analysis, Video feed to learn topics real quick, Networking and event updates and a customized chatbot to interact with",
    date: "2024-08-10",
    demoLink: "https://career-nav-ai-ml.onrender.com",
    tools: ["Python", "Streamlit", "ML", "API"],
    thumbnail: "/images/career.jpg",
  },
  {
    id: 4,
    name: "AI Powered Village-Gentle",
    description: "An AI powered app with ML integration, that helps villagers to get information about their village, like weather, news, economics, and a customized chatbot to interact with both related to farming and report their issues they are having.",
    date: "2024-07-01",
    demoLink: "https://vil-new-2-0.onrender.com",
    tools: ["Python", "Streamlit", "ML", "API", "GoogleTranslate", "GoogleMaps"],
    thumbnail: "/images/Villagr-gentle.jpg",
  },
  {
    id: 5,
    name: "Village-Gentle APK Version",
    description: "Mobile application version of Village-Gentle built using Flutter WebView. This Android app provides the same AI-powered rural development features in a native mobile experience, making it accessible to villagers on their smartphones.",
    date: "2024-07-15",
    demoLink: "https://drive.google.com/file/d/1eL9H5qbIlk-r5H8oI7QBpwtwrV_JGDcg/view?usp=drivesdk",
    tools: ["Flutter", "WebView", "Android", "Dart"],
    thumbnail: "/images/villageAPK.jpg",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Subharjun",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/subharjun-bose-202132251",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/Subharjun_Bose_Resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


