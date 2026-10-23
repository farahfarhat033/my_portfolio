export const DATA = {
  home: {
    hero: {
      name: "Farah Farhat",
      title: "QA Tester",
      subtitle: "Ensuring quality through precision and analysis.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Manual software testing,Automation software testing, quality assurance, and software development fundamentals.",
      overview: [
        {
          name: "Manual Testing",
          level: 95,
          icon: "lucide:check-circle",
          color: "primary",
        },
        {
          name: "Regression Testing",
          level: 95,
          icon: "lucide:refresh-cw",
          color: "secondary",
        },
        {
          name: "UI & Exploratory Testing",
          level: 90,
          icon: "lucide:search-check",
          color: "success",
        },
        {
          name: "API Testing",
          level: 70,
          icon: "lucide:network",
          color: "warning",
        },
        {
          name: "Automation Testing",
          level: 70,
          icon: "lucide:bot",
          color: "warning",
        },
        {
          name: "Backend Development",
          level: 65,
          icon: "lucide:bot",
          color: "warning",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Farah Farhat",
      title: "QA Tester",
      description: [
        "Dedicated Manual Software Tester with strong attention to detail and experience in executing test cases, identifying defects, and ensuring high-quality software delivery.",
        "Skilled in regression, UI, and exploratory testing with familiarity in Agile environments and bug-tracking tools such as Jira.",
        "Passionate about improving product quality and collaborating with development teams to deliver reliable and user-friendly applications, with skills in Data Analysis & Power BI Dashboards and Technical System Training.",
      ],
    },
    education: [
      {
        title:
          "Syrian Virtual University - Bachelor's Degree in Information Technology",
        date: "Graduated 2026",
        icon: "mdi:school-outline",
        description: "Information Systems and Networks (ISDN Track).",
      },
      {
        title: "Damascus University - Technical Computer College",
        date: "Graduated 2022",
        icon: "mdi:school",
        description: "Software Engineering.",
      },
    ],
    trainingCourses: [
      {
        title: "Data Analysis & Business Intelligence Training (Power BI & Excel)",
        date: "Professional Course",
        icon: "lucide:bar-chart-big",
        description:
          "Covered Pivot Tables, centricity and dispersion metrics in Microsoft Excel, cleaning and transforming data with Power Query, designing Data Models and creating table relationships, using DAX to build metrics and extract indicators, and designing interactive dashboards and reports with Power BI.",
      },
    ],
    experience: [
      {
        title:
          "Technical Trainer (Laboratory Management Systems) - Ministry of Health & UOSSM",
        date: "2026 - Present",
        icon: "lucide:presentation",
        description:
          "Conducted comprehensive hands-on training for over 15 groups on Laboratory Management Systems in collaboration with the Ministry of Health and UOSSM, guiding staff through system workflows and digital adoption.",
      },
      {
        title: "Manual Quality Assurance (QA) Tester - Sunrise IT",
        date: "April 2025 - April 2026",
        icon: "mdi:briefcase",
        description:
          "Developed and executed manual test cases, performed regression, UI, and exploratory testing, tracked bugs in Jira, and collaborated with cross-functional teams in an Agile environment. Familiar with API testing using Thunder Client and Postman.",
      },
      {
        title:
          "Volunteer Manual Quality Assurance (QA) Tester - Ministry of Health, Directorate of Digital Transformation",
        date: "April 2026 - Present",
        icon: "mdi:briefcase-outline",
        description:
          "Executed manual testing for digital healthcare systems, documented and reported defects, performed retesting and regression testing, and verified system functionality against requirements and expected user workflows.",
      },
    ],
    technologies: {
      testing: {
        description:
          "Manual, regression, UI, exploratory, and API testing with bug tracking and Agile practices.",
        tools: [
          { name: "Manual Testing", icon: "lucide:check-circle" },
          { name: "Regression Testing", icon: "lucide:refresh-cw" },
          { name: "UI Testing", icon: "lucide:layout-dashboard" },
          { name: "Exploratory Testing", icon: "lucide:search" },
          { name: "Jira", icon: "simple-icons:jira" },
          { name: "Postman", icon: "simple-icons:postman" },
          { name: "Thunder Client", icon: "lucide:send" },
          { name: "Playwright", icon: "simple-icons:playwright" },
          { name: "C#", icon: "logos:c-sharp" },
          { name: "NUnit", icon: "lucide:test-tube-2" },
        ],
      },
      programming: {
        description:
          "Programming and web development fundamentals stated in the CV.",
        tools: [
          { name: "HTML", icon: "logos:html-5" },
          { name: "CSS", icon: "logos:css-3" },
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "C#", icon: "logos:c-sharp" },
          { name: "PHP", icon: "logos:php" },
          { name: "Laravel", icon: "logos:laravel" },
        ],
      },
      databases: {
        description: "Database querying and management.",
        tools: [
          { name: "SQL", icon: "simple-icons:sqlite" },
          { name: "PL/SQL", icon: "lucide:database" },
          { name: "T-SQL", icon: "lucide:database" },
          { name: "SQL Server", icon: "simple-icons:microsoftsqlserver" },
          { name: "Power BI", icon: "logos:microsoft-power-bi" },
          { name: "Power Query & DAX", icon: "lucide:database-zap" },
          { name: "Excel Data Analysis", icon: "vscode-icons:file-type-excel" },
        ],
      },
      softSkills: {
        description:
          "Problem solving, quick learning, teamwork, adaptability, and communication.",
        tools: [
          { name: "Problem Solving", icon: "lucide:lightbulb" },
          { name: "Teamwork", icon: "lucide:users" },
          { name: "Adaptability", icon: "lucide:shuffle" },
          { name: "Communication", icon: "lucide:messages-square" },
        ],
      },
      languages: {
        description: "Languages listed in the CV.",
        tools: [
          { name: "Arabic - Native", icon: "circle-flags:sy" },
          { name: "English - Intermediate", icon: "circle-flags:gb" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Key Projects",
    sectionDescription:
      "Testing experience applied across web, mobile, administrative, educational, healthcare, and delivery systems.",
    work: [
      {
        id: 1,
        title: "Losgo Mobile App & Web Platform",
        description:
          "Passenger and parcel delivery system with multiple user roles, administrative dashboards, and payment integration.",
        details:
          "Passenger and parcel delivery app with multiple user roles, admin dashboards, and payment integration.",
        category: "Delivery Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 2,
        title: "Daleeli Mobile App, Website & Admin Panel",
        description:
          "Multi-role classified ads system covering mobile, web, and backend dashboards.",
        details:
          "Multi-role classified ads system covering mobile, web, and backend dashboards.",
        category: "Web & Mobile Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 3,
        title: "Itlob Yalla",
        description:
          "Comprehensive delivery application with an administrative panel.",
        details: "Comprehensive delivery application with admin panel.",
        category: "Delivery Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 4,
        title: "My Home Style",
        description:
          "E-commerce platform including a website and administrative panel.",
        details: "Online store platform including website and admin panel.",
        category: "E-commerce Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 5,
        title: "Daliluna Educational App",
        description:
          "Multi-level paid course platform covering provinces, institutes, subjects, and educational roles.",
        details:
          "Multi-level paid course platform covering provinces, institutes, subjects, and educational roles.",
        category: "Educational Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 6,
        title: "School Automation Apps",
        description:
          "Web and mobile platforms with multiple roles and dashboards for educational management.",
        details:
          "Web and mobile platforms with multiple roles and dashboards for educational management.",
        category: "Educational Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 7,
        title: "Clinic Website & Admin Panel",
        description:
          "Website and administrative panel for clinic management and operations.",
        details:
          "Clinic website and admin panel for clinic management and operations.",
        category: "Healthcare Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
      {
        id: 8,
        title: "Virtual Schools System",
        description:
          "Comprehensive platform connecting students, teachers, and administration with all related roles and dashboards.",
        details:
          "Comprehensive platform connecting students, teachers, and administration digitally, including all roles and dashboards.",
        category: "Educational Systems",
        image: "/farah-project-background.jpg",
        gallery: ["/farah-project-background.jpg"],
        tech: [],
      },
    ],
  },
  contact: {
    heading: "If you have a project or opportunity, feel free to get in touch.",
    location: {
      address: "Rural Damascus, Syria",
    },
  },
  morphingTexts: {
    about: ["QA Tester", "Quality", "Analysis"] as const,
    projects: ["Key Projects", "Testing", "Quality"] as const,
    contact: ["Let's", "Connect", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Farah Farhat",
    description:
      "Manual QA Tester focused on reliable and user-friendly software.",
    contact: {
      email: "farahfarhat033@gmail.com",
      phone: "0999999999",
      location: "Rural Damascus, Syria",
    },
    socialLinks: [
      { name: "Facebook", icon: "simple-icons:facebook" },
      { name: "Instagram", icon: "simple-icons:instagram" },
      { name: "WhatsApp", icon: "simple-icons:whatsapp" },
      { name: "X", icon: "simple-icons:x" },
      { name: "Threads", icon: "simple-icons:threads" },
      { name: "LinkedIn", icon: "simple-icons:linkedin" },
    ],
    services: [
      "Manual Testing",
      "Regression Testing",
      "UI Testing",
      "Exploratory Testing",
      "API Testing",
      "Automation Testing",
      "Data Analysis & Power BI Dashboards",
      "Technical System Training",
    ],
  },
} as const;
