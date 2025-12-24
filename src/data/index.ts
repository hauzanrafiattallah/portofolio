// Navigation items for navbar and footer
export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
] as const;

// Social media links
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/hauzanrafiattallah" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/hauzan-rafi/" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Instagram", href: "https://www.instagram.com/hauzanrafi/" },
  { name: "Email", href: "mailto:rafihauzan42@gmail.com" },
] as const;

// Hero section roles for typewriter effect
export const heroRoles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Creative Problem Solver",
  "Tech Innovator",
] as const;

// Stats for about section
export const stats = [
  { label: "Projects Completed", value: 50, suffix: "+" },
  { label: "Happy Clients", value: 30, suffix: "+" },
  { label: "Cups of Coffee", value: 1000, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
] as const;

// Skills data
export const skills = [
  {
    category: "Frontend",
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express / Fastify", level: 85 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Database",
    color: "from-orange-500 to-amber-500",
    items: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 75 },
      { name: "Prisma ORM", level: 90 },
    ],
  },
  {
    category: "Tools & Others",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "AWS / Vercel", level: 85 },
    ],
  },
] as const;

// Services offered
export const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, fast, and scalable web applications using modern technologies.",
  },
  {
    title: "Mobile-First Design",
    description:
      "Creating seamless experiences across all devices with responsive design principles.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces that delight users and drive engagement.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, accessibility, and search engine visibility.",
  },
] as const;

// Projects data
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics dashboard.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool that helps creators produce high-quality blog posts, social media content, and marketing copy.",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Real-time Chat App",
    description:
      "A modern chat application with real-time messaging, file sharing, voice/video calls, and end-to-end encryption.",
    tags: ["Next.js", "Socket.io", "WebRTC", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "A collaborative project management tool with Kanban boards, time tracking, and team analytics.",
    tags: ["React", "Node.js", "GraphQL", "PostgreSQL"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers and designers with dark mode support and animations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, maps, and historical data visualization.",
    tags: ["React", "D3.js", "Weather API"],
    github: "https://github.com",
    live: null,
    featured: false,
  },
] as const;

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content:
      "Hauzan delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made our project a success. Highly recommended!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content:
      "Working with Hauzan was a great experience. He understood our vision perfectly and translated it into a beautiful, functional product. The animations and UX are fantastic!",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder at DesignHub",
    content:
      "Hauzan's work on our platform was outstanding. He brought creativity and technical skill that elevated our brand. The project was delivered on time and on budget.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "CTO at StartupXYZ",
    content:
      "An incredibly talented developer who brings both technical excellence and creative vision. Hauzan transformed our ideas into reality with precision and style.",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director at BrandCo",
    content:
      "Hauzan created a stunning landing page that significantly improved our conversion rates. His understanding of both design and development is rare and valuable.",
    rating: 5,
    avatar: "LT",
  },
] as const;

// Contact info
export const contactInfo = [
  {
    label: "Email",
    value: "hello@hauzanrafi.com",
    href: "mailto:hello@hauzanrafi.com",
  },
  {
    label: "Phone",
    value: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
  {
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
  },
] as const;
