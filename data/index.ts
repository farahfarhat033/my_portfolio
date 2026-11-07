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
        title:
          "Data Analysis & Business Intelligence Training (Power BI & Excel)",
        date: "Professional Course",
        icon: "lucide:bar-chart-big",
        description:
          "Covered Pivot Tables, centricity and dispersion metrics in Microsoft Excel, cleaning and transforming data with Power Query, designing Data Models and creating table relationships, using DAX to build metrics and extract indicators, and designing interactive dashboards and reports with Power BI.",
      },
    ],
    experience: [
      {
        title:
          "Technical Trainer (Laboratory Management Systems) - Ministry of Health & IMC",
        date: "2026 - Present",
        icon: "lucide:presentation",
        description:
          "Conducted comprehensive hands-on training for over 15 groups on Laboratory Management Systems in collaboration with the Ministry of Health and IMC, guiding staff through system workflows and digital adoption.",
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
      "Professional QA experience across delivery, web, mobile, commerce, education, and digital healthcare systems.",
    work: [
      {
        id: 1,
        title: "Multi-Role Transportation & Parcel Delivery Platform",
        description:
          "A unified transportation platform supporting passenger rides, driver operations, and parcel delivery workflows.",
        details: "",
        overview:
          "A transportation and delivery platform with one account that can operate as a passenger or driver according to eligibility and selected role.",
        visual: "lucide:truck",
        category: "Delivery & Transportation",
        platforms: [
          "Unified Mobile Application",
          "Passenger Functionality",
          "Driver Functionality",
          "Web Platform",
          "Administrative Dashboard",
          "Parcel Delivery Services",
          "Payment Integration",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Passenger and Driver Workflow Testing",
          "Role-Based Access and Permission Testing",
          "Conditional Business Rules Testing",
          "Payment Workflow Testing",
          "Mobile Application Testing",
          "Web Platform Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 2,
        title: "Multi-Role Classifieds & Listings Platform",
        description:
          "A multi-role classifieds platform for publishing, browsing, and managing advertisements.",
        details: "",
        overview:
          "A digital classifieds platform that supports publishing and managing advertisements through mobile and web interfaces with administrative oversight.",
        visual: "lucide:megaphone",
        category: "Web & Mobile Platforms",
        platforms: [
          "Mobile Application",
          "Public Website",
          "Administrative Dashboard",
          "User Management",
          "Advertisement Management",
          "Multiple User Roles",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Role-Based Access Testing",
          "User Workflow Testing",
          "UI Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 3,
        title: "Delivery Management Platform",
        description:
          "A delivery platform connecting customers, delivery personnel, and administrators through separate applications.",
        details: "",
        overview:
          "A delivery management system with separate mobile applications for customers and delivery personnel, supported by an administrative dashboard.",
        visual: "lucide:package-check",
        category: "Web & Mobile Platforms",
        platforms: [
          "Customer Mobile Application",
          "Delivery Personnel Mobile Application",
          "Administrative Dashboard",
          "Customer Management",
          "Delivery Personnel Management",
          "Delivery Workflows",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Customer Workflow Testing",
          "Delivery Personnel Workflow Testing",
          "Mobile Application Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 4,
        title: "E-commerce & Online Shopping Platform",
        description:
          "An online shopping platform with product management and administrative order controls.",
        details: "",
        overview:
          "An e-commerce platform where customers browse products and use an online store supported by an administrative panel.",
        visual: "lucide:shopping-cart",
        category: "E-commerce",
        platforms: [
          "E-commerce Website",
          "Administrative Dashboard",
          "Product Management",
          "Shopping Cart",
          "Order Management",
          "Customer Management",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "E-commerce Workflow Testing",
          "Shopping Cart Testing",
          "Order Workflow Testing",
          "Data Validation Testing",
          "UI Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 5,
        title: "Multi-Level Educational Courses Platform",
        description:
          "A multi-level educational platform offering paid courses across different educational levels and institutions.",
        details: "",
        overview:
          "An educational platform organizing paid courses by regions, institutes, subjects, and educational roles.",
        visual: "lucide:graduation-cap",
        category: "Educational Platforms",
        platforms: [
          "Mobile Application",
          "Website",
          "Administrative Dashboard",
          "Educational Levels",
          "Province-Based Organization",
          "Institute Management",
          "Subject Management",
          "Multiple Educational Roles",
          "Paid Course Workflows",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Role-Based Access Testing",
          "Course Workflow Testing",
          "Payment Workflow Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 6,
        title: "School Automation Apps",
        description:
          "A collection of independent school automation applications supporting educational and administrative operations.",
        details: "",
        overview:
          "Multiple independent web and mobile applications designed for school workflows, educational management, and administrative activities.",
        visual: "lucide:school",
        category: "Educational Platforms",
        platforms: [
          "Multiple Web Applications",
          "Multiple Mobile Applications",
          "Educational Management Interfaces",
          "Administrative Dashboards",
          "Multiple User Roles",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Cross-Platform Testing",
          "Role-Based Access Testing",
          "Workflow Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 7,
        title: "Digital Healthcare Portal & Patient Services Platform",
        description:
          "A digital healthcare ecosystem providing online health services through web and mobile platforms.",
        details: "",
        overview:
          "A digital healthcare ecosystem consisting of a main healthcare portal, a separate patient portal, and a patient mobile application.",
        visual: "lucide:heart-pulse",
        category: "Healthcare & Digital Government Services",
        platforms: [
          "Main Digital Healthcare Portal",
          "Separate Patient Portal",
          "Patient Mobile Application",
          "Digital Healthcare Services",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Web Application Testing",
          "Mobile Application Testing",
          "Patient Workflow Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        qaResponsibilitiesAreDraft: true,
        gallery: [],
        tech: [],
      },
      {
        id: 8,
        title: "Hospital Information System (HIS)",
        description:
          "A comprehensive hospital information system supporting integrated hospital operations.",
        details: "",
        overview:
          "A full-system QA project covering the different sections and functional areas of a Hospital Information System.",
        visual: "lucide:hospital",
        category: "Healthcare & Digital Government Services",
        platforms: [
          "Hospital Information System",
          "Integrated System Sections",
          "Multiple Functional Areas",
          "Role-Based Interfaces and Workflows",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "End-to-End Workflow Testing",
          "Role-Based Access Testing",
          "Data Validation Testing",
          "Integration Workflow Testing",
          "Regression Testing",
        ],
        qaResponsibilitiesAreDraft: true,
        gallery: [],
        tech: [],
      },
      {
        id: 9,
        title: "Digital Complaints & Public Reporting Platform",
        description:
          "A digital platform for submitting complaints and reports through online forms and tracking them through an administrative dashboard.",
        details: "",
        overview:
          "A web platform with multiple forms for submitting complaints and reports, supported by an administrative dashboard for follow-up and management.",
        visual: "lucide:file-warning",
        category: "Healthcare & Digital Government Services",
        platforms: [
          "Public Website",
          "Multiple Online Forms",
          "Complaint Submission",
          "Report Submission",
          "Form Validation",
          "Administrative Dashboard",
          "Complaint and Report Tracking",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Form Validation Testing",
          "Negative Testing",
          "Data Validation Testing",
          "UI Testing",
          "Regression Testing",
        ],
        qaResponsibilitiesAreDraft: true,
        gallery: [],
        tech: [],
      },
      {
        id: 10,
        title: "Virtual Schools Platform",
        description:
          "A digital education platform connecting students, teachers, and school administration.",
        details: "",
        overview:
          "A comprehensive digital education platform connecting students, teachers, and administrators through dedicated interfaces and role-based workflows.",
        visual: "lucide:book-open-check",
        category: "Educational Platforms",
        platforms: [
          "Web Application",
          "Student Portal",
          "Teacher Portal",
          "Administrative Dashboard",
          "Multiple User Roles",
          "Digital Education Workflows",
        ],
        qaResponsibilities: [
          "Functional Testing",
          "Role-Based Access Testing",
          "Student Workflow Testing",
          "Teacher Workflow Testing",
          "Administrative Workflow Testing",
          "Data Validation Testing",
          "Regression Testing",
        ],
        gallery: [],
        tech: [],
      },
      {
        id: 11,
        title: "Additional Digital Healthcare Initiatives",
        description:
          "Additional digital healthcare initiatives supporting the development of online healthcare services.",
        details: "",
        overview:
          "A general group representing additional healthcare-related digital projects and ongoing initiatives until their individual details are approved for publication.",
        visual: "lucide:stethoscope",
        category: "Healthcare & Digital Government Services",
        platforms: ["Digital Healthcare Services"],
        qaResponsibilities: [],
        qaResponsibilitiesAreDraft: true,
        gallery: [],
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
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
  ],
  footer: {
    name: "Farah Farhat",
    description:
      "Manual QA Tester focused on reliable and user-friendly software.",
    contact: {
      email: "farahfarhat013@gmail.com",
      location: "Rural Damascus, Syria",
    },
    socialLinks: [
      {
        name: "Facebook",
        icon: "simple-icons:facebook",
        href: "https://www.facebook.com/share/18h65faGGx/",
      },
      {
        name: "Instagram",
        icon: "simple-icons:instagram",
        href: "https://www.instagram.com/farah_fa84?vrfl=MThlZTk0d2RkM2UzMQ==",
      },
      {
        name: "X",
        icon: "simple-icons:x",
        href: "https://x.com/farahfarhat033",
      },
      {
        name: "Threads",
        icon: "simple-icons:threads",
        href: "https://www.threads.com/@farah_fa84",
      },
      {
        name: "LinkedIn",
        icon: "simple-icons:linkedin",
        href: "https://www.linkedin.com/in/farah-farhat-96815a368?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      },
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
