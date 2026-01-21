// Mock data for Harsh Pr's Portfolio

export const personalInfo = {
  name: "Harsh Pr",
  title: "Full Stack Developer & Frontend Engineer",
  subtitle: "AI Enthusiast | MCA Graduate",
  email: "harsh.pr@example.com",
  phone: "+91 98765 43210",
  location: "India",
  bio: "Passionate Full Stack Developer with expertise in modern web technologies and artificial intelligence. I specialize in building scalable web applications using React, Python, and JavaScript. With a Master's in Computer Applications, I bring both theoretical knowledge and practical experience to create innovative solutions.",
  resume: "#",
  social: {
    github: "https://github.com/harshpr",
    linkedin: "https://linkedin.com/in/harshpr",
    twitter: "https://twitter.com/harshpr"
  }
};

export const skills = [
  {
    id: 1,
    category: "Frontend Development",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 92 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 80 }
    ]
  },
  {
    id: 2,
    category: "Backend Development",
    items: [
      { name: "Python", level: 87 },
      { name: "Node.js", level: 82 },
      { name: "FastAPI", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 83 }
    ]
  },
  {
    id: 3,
    category: "AI & Machine Learning",
    items: [
      { name: "Machine Learning", level: 78 },
      { name: "TensorFlow", level: 72 },
      { name: "Scikit-learn", level: 75 },
      { name: "Data Analysis", level: 80 },
      { name: "NLP", level: 70 }
    ]
  },
  {
    id: 4,
    category: "Tools & Technologies",
    items: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "REST APIs", level: 88 },
      { name: "Redux", level: 82 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description: "Intelligent task management application with AI-driven priority suggestions and deadline predictions. Built with React, Python, and Machine Learning algorithms.",
    technologies: ["React", "Python", "TensorFlow", "MongoDB", "FastAPI"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    github: "https://github.com/harshpr/ai-task-manager",
    live: "https://ai-taskmanager-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Full-featured chat platform with WebSocket support, message encryption, and group conversations. Supports file sharing and emoji reactions.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
    github: "https://github.com/harshpr/realtime-chat",
    live: "https://chat-app-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with payment integration, inventory management, and real-time order tracking. Features responsive design and admin dashboard.",
    technologies: ["React", "Express.js", "Stripe", "PostgreSQL", "Redux"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    github: "https://github.com/harshpr/ecommerce-platform",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 4,
    title: "Weather Forecast Dashboard",
    description: "Interactive weather dashboard with 7-day forecasts, weather maps, and location-based alerts. Integrates multiple weather APIs for accurate predictions.",
    technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    github: "https://github.com/harshpr/weather-dashboard",
    live: "https://weather-demo.com",
    featured: false
  },
  {
    id: 5,
    title: "Social Media Analytics Tool",
    description: "Comprehensive analytics platform for social media insights. Features sentiment analysis, engagement metrics, and automated reporting with beautiful visualizations.",
    technologies: ["React", "Python", "NLP", "D3.js", "FastAPI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com/harshpr/social-analytics",
    live: "https://analytics-demo.com",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio CMS Builder",
    description: "Drag-and-drop portfolio website builder with customizable templates, SEO optimization, and hosting integration. Perfect for creators and professionals.",
    technologies: ["React", "Node.js", "MongoDB", "AWS S3", "DnD Kit"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    github: "https://github.com/harshpr/portfolio-builder",
    live: "https://portfolio-builder-demo.com",
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    period: "Jan 2024 - Present",
    description: "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Optimized application performance by 40% through code refactoring",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Led development of new feature that increased user engagement by 25%"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "WebWave Digital",
    location: "Bangalore, India",
    period: "Jun 2023 - Dec 2023",
    description: "Built responsive web interfaces and collaborated with designers to create pixel-perfect implementations. Focused on user experience and accessibility.",
    achievements: [
      "Developed 15+ responsive web pages with 100% cross-browser compatibility",
      "Reduced page load time by 35% through optimization techniques",
      "Mentored 3 junior developers in React best practices"
    ]
  },
  {
    id: 3,
    title: "Software Development Trainee",
    company: "InnovateTech Labs",
    location: "Mumbai, India",
    period: "Jan 2023 - May 2023",
    description: "Completed intensive training program in full-stack development. Worked on real-world projects and learned industry best practices.",
    achievements: [
      "Completed 5 full-stack projects during training period",
      "Achieved 95% score in final assessment",
      "Contributed to open-source projects on GitHub"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "ABC University",
    location: "India",
    period: "2022 - 2024",
    grade: "CGPA: 8.7/10",
    description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on Machine Learning applications in web development.",
    highlights: [
      "Published research paper on AI-driven web optimization",
      "Won Best Project Award for AI Task Manager application",
      "Active member of University Coding Club"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "XYZ College",
    location: "India",
    period: "2019 - 2022",
    grade: "Percentage: 85%",
    description: "Comprehensive study of computer science fundamentals including programming, databases, and web technologies.",
    highlights: [
      "Consistently ranked in top 5% of the class",
      "Led college technical fest organizing committee",
      "Completed 3 industry internships during studies"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Senior Developer at TechCorp",
    content: "Harsh is an exceptional developer with a strong grasp of both frontend and backend technologies. His ability to quickly learn and adapt to new technologies is impressive.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Tech Lead at WebWave Digital",
    content: "Working with Harsh was a pleasure. He consistently delivered high-quality code and showed great attention to detail. His problem-solving skills are top-notch.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
  }
];