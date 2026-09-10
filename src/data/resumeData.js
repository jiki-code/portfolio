export function getText(field, lang = 'vi') {
  if (!field) return ''
  if (typeof field === 'string') return field
  return field[lang] || field['vi'] || field['en'] || ''
}

export const personalInfo = {
  name: "Trần Anh Kiệt",
  englishName: "TRAN ANH KIET",
  title: "Frontend Engineer",
  subtitle: {
    vi: "5+ năm kinh nghiệm xây dựng ứng dụng Web, App & Hệ thống Enterprise quy mô lớn",
    en: "5+ years of experience building Web Apps, Mobile & Large-scale Enterprise Systems"
  },
  dob: "23/03/1998",
  location: {
    vi: "TP. Hồ Chí Minh, Việt Nam",
    en: "Ho Chi Minh City, Vietnam"
  },
  phone: "0924435345",
  phoneFormatted: "0924 435 345",
  email: "jikid0973@gmail.com",
  linkedin: "https://linkedin.com/in/kiet-tran-819613223",
  linkedinHandle: "kiet-tran-819613223",
  status: {
    vi: "Đang sẵn sàng cho các cơ hội mới",
    en: "Available for new opportunities"
  },
  education: {
    degree: {
      vi: "Cử nhân Kỹ thuật Phần mềm (B.E. in Software Engineering)",
      en: "Bachelor of Software Engineering (B.E.)"
    },
    school: {
      vi: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
      en: "Ho Chi Minh City University of Technology (HUTECH)"
    },
    period: "2016 – 2021",
    englishCert: {
      vi: "Tiếng Anh: B1 Certificate (HUTECH) | TOEIC 550",
      en: "English: B1 Certificate (HUTECH) | TOEIC 550"
    }
  },
  summary: {
    vi: `Software Engineer với 5 năm kinh nghiệm chuyên sâu trong việc xây dựng các ứng dụng web/app responsive và hệ thống doanh nghiệp phức tạp (Logistics, WMS, TMS, E-commerce, FinTech payment & Internal operations). Thành thạo Vue.js (Nuxt.js), React.js (Next.js), Electron.js, TypeScript, quản lý state linh hoạt (Pinia, Redux, Zustand), tích hợp REST API, Socket.IO real-time. Có khả năng phối hợp chặt chẽ giữa Frontend & Backend (Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Supabase, Firebase, Convex, Docker).`,
    en: `Software Engineer with 5 years of hands-on experience building high-performance responsive web/mobile applications and complex enterprise systems (Logistics, WMS, TMS, E-commerce, FinTech payments & Internal operations). Proficient in Vue.js (Nuxt.js), React.js (Next.js), Electron.js, TypeScript, state management (Pinia, Redux, Zustand), REST API integration, and real-time Socket.IO communication. Experienced in collaborating across Frontend & Backend (Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Supabase, Firebase, Convex, Docker).`
  }
};

export const stats = [
  { value: "05+", label: { vi: "Năm kinh nghiệm", en: "Years Experience" }, desc: { vi: "Phát triển Web & Enterprise App", en: "Web & Enterprise App Development" }, icon: "Clock" },
  { value: "10+", label: { vi: "Dự án quy mô", en: "Major Projects" }, desc: { vi: "WMS, TMS, E-commerce, Chat Real-time", en: "WMS, TMS, E-commerce, Real-time Chat" }, icon: "Layers" },
  { value: "20+", label: { vi: "Công nghệ & Tools", en: "Tech & Tools" }, desc: { vi: "Vue, React, Next, Node, TS, Docker...", en: "Vue, React, Next, Node, TS, Docker..." }, icon: "Cpu" },
  { value: "100%", label: { vi: "Cam kết UI/UX", en: "UI/UX Commitment" }, desc: { vi: "Giao diện mượt mà, tối ưu hiệu năng", en: "Smooth performance & pixel precision" }, icon: "CheckCircle" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: { vi: "Frontend Development", en: "Frontend Development" },
    icon: "Layout",
    skills: [
      { name: "Vue.js / Nuxt.js", level: 80, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "Core Skill" },
      { name: "React.js / Next.js", level: 90, exp: { vi: "4+ năm", en: "4+ yrs" }, tag: "Core Skill" },
      { name: "React Native", level: 60, exp: { vi: "1+ năm", en: "1+ yrs" }, tag: "Core Skill" },

      { name: "TypeScript / JavaScript (ES6+)", level: 95, exp: { vi: "5 năm", en: "5 yrs" }, tag: "Expert" },
      { name: "HTML5 / CSS3 / SCSS", level: 95, exp: { vi: "5 năm", en: "5 yrs" }, tag: "Expert" },
      { name: "Tailwind CSS", level: 79, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "UI" },
      { name: "ShadCN UI / Material UI / Ant Design", level: 88, exp: { vi: "2 năm", en: "2 yrs" }, tag: "UI Components" }
    ]
  },
  {
    id: "state_api",
    title: { vi: "State & API Integration", en: "State & API Integration" },
    icon: "Network",
    skills: [
      { name: "Pinia / Vuex", level: 70, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "State Management" },
      { name: "Redux / Zustand", level: 80, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "State Management" },
      { name: "TanStack Query (React Query)", level: 70, exp: { vi: "1+ năm", en: "1+ yr" }, tag: "Data Fetching" },
      { name: "REST APIs / Axios / Swagger", level: 90, exp: { vi: "5 năm", en: "5 yrs" }, tag: "API" },
      { name: "WebSocket / Socket.IO", level: 68, exp: { vi: "2+ năm", en: "2+ yrs" }, tag: "Real-time" },
      { name: "Payment Gateways (VietQR, MoMo, ZaloPay, PayPal)", level: 60, exp: { vi: "2 năm", en: "2 yrs" }, tag: "Fintech" }
    ]
  },
  {
    id: "backend_data",
    title: { vi: "Backend & Database", en: "Backend & Database" },
    icon: "Database",
    skills: [
      { name: "Node.js / Express.js", level: 62, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "Backend" },
      { name: "MySQL / PostgreSQL", level: 70, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "SQL DB" },
      { name: "MongoDB", level: 60, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "NoSQL DB" },
      { name: "Supabase / Firebase", level: 60, exp: { vi: "3+ năm", en: "3+ yrs" }, tag: "BaaS" },
      { name: "Convex Realtime DB", level: 50, exp: { vi: "1+ năm", en: "1+ yr" }, tag: "BaaS" }
    ]
  },
  {
    id: "tools_workflow",
    title: { vi: "DevOps & Workflow", en: "DevOps & Workflow" },
    icon: "Workflow",
    skills: [
      { name: "Docker", level: 60, exp: { vi: "2+ năm", en: "2+ yrs" }, tag: "Container" },
      { name: "Git / GitHub / GitLab", level: 80, exp: { vi: "5 năm", en: "5 yrs" }, tag: "Version Control" },
      { name: "Jenkins CI/CD", level: 50, exp: { vi: "1 năm", en: "1 yr" }, tag: "DevOps" },
      { name: "Agile / Scrum / Jira / Trello", level: 90, exp: { vi: "5 năm", en: "5 yrs" }, tag: "Management" },
      { name: "Unit Testing", level: 60, exp: { vi: "1 năm", en: "1 yr" }, tag: "Testing" }
    ]
  },
  {
    id: "ai_tools",
    title: { vi: "AI Tools & Productivity", en: "AI Tools & Productivity" },
    icon: "Sparkles",
    skills: [
      { name: "OpenAI ChatGPT", level: 90, exp: { vi: "Daily Use", en: "Daily Use" }, tag: "AI Assistant" },
      { name: "Claude Code", level: 90, exp: { vi: "Daily Use", en: "Daily Use" }, tag: "AI Assistant" },
      { name: "Cursor AI IDE", level: 85, exp: { vi: "Daily Use", en: "Daily Use" }, tag: "AI Coding" }
    ]
  },
  {
    id: "familiar",
    title: { vi: "Kinh nghiệm khác", en: "Other Experience" },
    icon: "Code",
    skills: [
      { name: "Angular", level: 70, exp: { vi: "Thực tế dự án", en: "Production" }, tag: "Framework" },
      { name: "React Native", level: 75, exp: { vi: "Dự án Gonsa & Kim Tín", en: "Gonsa & Kim Tin Projects" }, tag: "Mobile App" },
      { name: "ASP.NET", level: 50, exp: { vi: "Sacombank", en: "Sacombank" }, tag: "Backend" },
      { name: "WordPress", level: 60, exp: { vi: "CMS", en: "CMS" }, tag: "CMS" }
    ]
  }
];

export const experiences = [
  {
    id: "baoviet",
    period: { vi: "01/2026 – 06/2026", en: "01/2026 – 06/2026" },
    role: "Frontend Developer",
    company: "BaoViet Insurance",
    type: { vi: "Freelance contract", en: "Freelance contract" },
    color: "#10B981",
    summary: {
      vi: "Triển khai các tính năng mới, khắc phục lỗi và liên kết luồng giao dịch tích hợp cổng thanh toán trực tuyến cho website Bảo Việt.",
      en: "Deployed new features, resolved bugs, and linked transaction flows integrating online payment gateway services for BaoViet Insurance website."
    },
    highlights: [
      {
        vi: "Tích hợp các kênh thanh toán phổ biến tại Việt Nam: VietQR, MoMo API, ZaloPay API.",
        en: "Integrated popular payment channels in Vietnam: VietQR, MoMo API, ZaloPay API."
      },
      {
        vi: "Xây dựng giao diện responsive mượt mà với Next.js (React), Shadcn UI, Tailwind CSS.",
        en: "Built smooth responsive interfaces with Next.js (React), Shadcn UI, and Tailwind CSS."
      },
      {
        vi: "Xử lý state và đồng bộ dữ liệu real-time với TanStack Query và WebSocket.",
        en: "Handled state management and real-time data sync with TanStack Query and WebSocket."
      }
    ],
    tech: ["Next.js (React)", "Shadcn UI", "Tailwind CSS", "TanStack Query", "WebSocket", "VietQR", "MoMo API", "ZaloPay API"]
  },
  {
    id: "bizman",
    period: { vi: "01/2025 – 07/2026", en: "01/2025 – 07/2026" },
    role: "Web Developer (Frontend / Backend)",
    company: "Bizman Media",
    type: { vi: "Full-time", en: "Full-time" },
    color: "#3B82F6",
    summary: {
      vi: "Phát triển các module web quản lý vận hành nội bộ và hệ thống sản phẩm phục vụ người dùng cuối quy mô lớn.",
      en: "Developed web modules for internal operational management and large-scale consumer-facing products."
    },
    projects: [
      {
        name: "Backoffice",
        desc: {
          vi: "Hệ thống nội bộ theo dõi điểm danh, thời gian nghỉ trưa, quản lý cuộc gọi telesales và quản lý SEO domain/backlink.",
          en: "Internal system for attendance tracking, break-time management, telesales calls, and SEO domain/backlink management."
        },
        tech: ["Next.js", "Express.js", "MySQL", "MongoDB", "Firebase", "REST APIs", "Socket.IO", "JWT/OAuth2", "Redux", "TanStack Query", "ShadCN UI", "Docker"]
      },
      {
        name: "5Gao Social Network",
        link: "https://5gaoo.com/",
        desc: {
          vi: "Mạng xã hội giải trí hài hước hỗ trợ đăng bài, nhóm cộng đồng, livestream và horoscope xem tử vi.",
          en: "Humorous social network supporting posting, group communities, livestreaming, and horoscope features."
        },
        tech: ["Next.js", "Express.js", "MySQL", "Supabase", "Socket.IO", "REST APIs", "Docker", "Ant Design"]
      },
      {
        name: "Internal Chat Real-time",
        desc: {
          vi: "Ứng dụng trò chuyện nội bộ thời gian thực hỗ trợ phân quyền Admin, Manager, User, chat 1-1 và chat nhóm phòng ban.",
          en: "Real-time internal chat application supporting Admin, Manager, User roles, 1-on-1 and department group chats."
        },
        tech: ["Next.js", "Express.js", "Convex", "MongoDB", "PostgreSQL", "REST APIs", "JWT/OAuth2", "ShadCN UI", "Socket.IO"]
      }
    ],
    tech: ["Next.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Docker", "Socket.IO", "Redux", "Convex"]
  },
  {
    id: "meksmart",
    period: { vi: "07/2022 – 12/2024", en: "07/2022 – 12/2024" },
    role: "Frontend Developer",
    company: "MEKSMART",
    type: { vi: "Full-time", en: "Full-time" },
    color: "#8B5CF6",
    summary: {
      vi: "Phát triển các module Frontend cho hệ thống Quản lý kho (WMS) và Quản lý vận tải (TMS) quy mô lớn: dashboard báo cáo, AG Grid, bản đồ Leaflet / Google Maps và i18n.",
      en: "Developed frontend modules for enterprise Warehouse (WMS) and Logistics (TMS) systems: analytics dashboards, AG Grid, Leaflet / Google Maps, and i18n."
    },
    highlights: [
      {
        vi: "Sub-lead Frontend (12/2023 – 12/2024): Dẫn dắt đội ngũ frontend 6 thành viên, phụ trách code review và phân chia công việc.",
        en: "Sub-lead Frontend (12/2023 – 12/2024): Led a frontend team of 6 members, responsible for code reviews and task assignments."
      },
      {
        vi: "Phát triển ứng dụng Mobile App bằng React Native tích hợp theo dõi vị trí xe & điều phối tài xế cho dự án TMS Gonsa và DMS Kim Tín.",
        en: "Developed React Native Mobile Apps featuring vehicle location tracking & driver dispatching for TMS Gonsa and DMS Kim Tin."
      }
    ],
    projects: [
      {
        name: "DMS Kim Tín",
        link: "https://uatcontrol-dms.kimtingroup.com:44354/",
        desc: {
          vi: "Nền tảng quản lý vận tải tích hợp dashboard điều hành, bản đồ Leaflet, ứng dụng Mobile React Native và quy trình logistics chuyên sâu.",
          en: "Transportation management platform featuring operational dashboards, Leaflet maps, React Native Mobile App, and deep logistics workflows."
        },
        tech: ["Vue.js", "React Native", "Bootstrap Vue", "Chart.js", "vue-i18n", "AG Grid", "Leaflet", "Firebase", "Vuex"]
      },
      {
        name: "WMS Elmich",
        link: "https://elmich.wms.staging.meksmart.com/",
        desc: {
          vi: "Hệ thống quản lý kho tổng Elmich: nghiệp vụ nhập/xuất kho, kiểm kê (cycle count), báo cáo tồn kho và import dữ liệu.",
          en: "Warehouse management system covering inbound/outbound operations, cycle counts, inventory reporting, and batch data imports."
        },
        tech: ["Vue.js", "Tailwind CSS", "Pinia", "Chart.js", "Ant Design", "vue-i18n"]
      },
      {
        name: "TMS Gonsa",
        link: "https://tms-staging.gonsa.vn/",
        desc: {
          vi: "Giải pháp quản lý giao nhận đơn hàng & chuyến xe, tích hợp ứng dụng Mobile React Native, hệ thống bên thứ 3 (SAP, WMS, NEOX), thống kê và luồng bản đồ.",
          en: "Delivery management solution for orders & shipments with React Native Mobile App, 3rd-party systems integration (SAP, WMS, NEOX), stats & map flows."
        },
        tech: ["Vue.js", "React Native", "Tailwind CSS", "Vuex", "Google Maps", "Axios", "Swagger", "Payment gateway", "vue-i18n"]
      },
      {
        name: "TSM Sovigaz",
        desc: {
          vi: "Hệ thống quản lý vận tải sử dụng Google Maps động (vẽ tuyến đường, điểm xuất phát, điểm dừng), tính lương tài xế theo chuyến xe.",
          en: "Transportation management system using dynamic Google Maps (route drawing, waypoints), calculating driver salary per shipment."
        },
        tech: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Google Maps", "Chart.js", "Firebase"]
      }
    ],
    tech: ["Vue.js", "React Native", "Pinia", "Vuex", "Leaflet", "Google Maps", "Chart.js", "AG Grid", "Tailwind CSS", "Angular"]
  },
  {
    id: "vinova",
    period: { vi: "10/2021 – 07/2022", en: "10/2021 – 07/2022" },
    role: "Frontend Developer",
    company: "VINOVA",
    type: { vi: "Full-time", en: "Full-time" },
    color: "#F59E0B",
    summary: {
      vi: "Xây dựng & bảo trì các dự án CMS và thương mại điện tử trên nền React.js, chuyển đổi thiết kế Figma sang UI responsive và tích hợp REST API.",
      en: "Built and maintained React.js CMS & e-commerce applications; transformed Figma designs into responsive UI and integrated REST APIs."
    },
    projects: [
      {
        name: "CMS Labbit",
        link: "https://vinova.sg/portfolio/labbit/#pll_switcher",
        desc: {
          vi: "Website đăng ký khóa học: xây dựng UI responsive, tích hợp API đăng ký và bảo trì.",
          en: "Course-registration website: built responsive UI, integrated registration APIs, and maintained system."
        },
        tech: ["React.js", "Redux", "Material UI", "TypeScript"]
      },
      {
        name: "CMS FTLOL",
        link: "https://fortheloveoflaundry.com/",
        desc: {
          vi: "Bảo trì & tối ưu tính năng hệ thống, áp dụng React Hooks nâng cao trải nghiệm người dùng.",
          en: "Maintained app features & resolved issues; applied React Hooks to improve component logic and UX."
        },
        tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "Axios", "PayPal API", "Jenkins"]
      },
      {
        name: "CMS SMTHGOOD",
        desc: {
          vi: "Phát triển các trang quản lý bán hàng (seller management) và trang web quảng cáo chính.",
          en: "Developed seller management dashboard and main marketing promotional website."
        },
        tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "Jenkins", "Axios"]
      }
    ],
    tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "TypeScript", "PayPal API", "Jenkins"]
  },
  {
    id: "gsoft",
    period: { vi: "03/2021 – 09/2021", en: "03/2021 – 09/2021" },
    role: ".Net Developer",
    company: "G-SOFT",
    link: "https://it.gsoft.com.vn:3035/",
    type: { vi: "On-site Sacombank", en: "On-site Sacombank" },
    color: "#EC4899",
    summary: {
      vi: "Làm việc trực tiếp tại Sacombank phát triển phần mềm quản lý tài sản & thanh toán ngân hàng.",
      en: "Worked on-site at Sacombank developing asset management & banking payment software."
    },
    projects: [
      {
        name: "Phần mềm Quản lý Tài sản (Asset Management)",
        link: "https://it.gsoft.com.vn:3035/",
        desc: {
          vi: "Hệ thống quản lý tài sản, kiểm kê & vận hành nội bộ triển khai cho G-SOFT và ngân hàng Sacombank.",
          en: "Enterprise asset management, inventory & operational system deployed for G-SOFT and Sacombank."
        },
        tech: ["ASP.NET", "SQL Server", "Angular", "SVN", "Bootstrap"]
      }
    ],
    tech: ["ASP.NET", "SQL Server", "Angular", "SVN", "Bootstrap"]
  }
];

export const publicProjects = [
  {
    id: "5gao",
    name: "5Gao - Mạng Xã Hội Giải Trí",
    badge: { vi: "Sản phẩm Public", en: "Public Product" },
    category: "Social",
    role: "Fullstack / Frontend",
    company: "Bizman Media",
    link: "https://5gaoo.com/",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
    desc: {
      vi: "Mạng xã hội giải trí hài hước hỗ trợ đăng bài, nhóm cộng đồng, livestream tương tác và tính năng tử vi horoscope.",
      en: "Humorous social network supporting posting, group communities, interactive livestreaming, and horoscope features."
    },
    tech: ["Next.js", "Express.js", "MySQL", "Supabase", "Socket.IO", "Ant Design", "Docker"],
    features: [
      {
        vi: "Hệ thống tin tức, tương tác & bình luận real-time với Socket.IO",
        en: "Real-time feed, interaction & comments system powered by Socket.IO"
      },
      {
        vi: "Quản lý nhóm cộng đồng & tính năng livestream",
        en: "Community group management & livestream streaming features"
      },
      {
        vi: "Tích hợp module bói toán tử vi horoscope vui vẻ",
        en: "Integrated fun horoscope & astrology module"
      },
      {
        vi: "Tối ưu tốc độ tải trang & SEO SSR chuẩn chỉnh",
        en: "Optimized page load speed & SSR SEO compliance"
      }
    ]
  },
  {
    id: "tms-gonsa",
    name: "TMS Gonsa & App Mobile GONSA TMS",
    badge: { vi: "📱 iOS & Android Deployed", en: "📱 iOS & Android Deployed" },
    category: "Logistics",
    role: "Frontend Engineer / Mobile Lead",
    company: "MEKSMART",
    link: "https://tms-staging.gonsa.vn/",
    appStoreImage: "./apps/gonsa_appstore.jpg",
    appStoreName: "GONSA TMS (Support driver)",
    playStoreImage: "./apps/gonsa_playstore.png",
    playStoreName: "TMS GONSA",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    desc: {
      vi: "Giải pháp chuyển đổi số quản lý đơn hàng, chuyến xe giao nhận kèm 2 ứng dụng Mobile App 'GONSA TMS' (Support driver) & 'GONSA Express' trên iOS App Store & Android Google Play cho tài xế.",
      en: "Digital transportation management solution featuring production Mobile Apps 'GONSA TMS' & 'GONSA Express' on iOS App Store and Android Google Play for drivers."
    },
    tech: ["React Native", "Vue.js", "Tailwind CSS", "Vuex", "Google Maps API", "Axios", "Swagger", "vue-i18n"],
    features: [
      {
        vi: "Đã deploy ứng dụng Mobile App 'GONSA TMS' lên iOS App Store và Google Play (Android) thành công",
        en: "Successfully deployed 'GONSA TMS' Mobile App to iOS App Store & Android Google Play Store"
      },
      {
        vi: "Tính năng tài xế: Đăng nhập/đăng ký tài khoản tài xế, quản lý thông tin cá nhân, cập nhật lộ trình giao dược phẩm",
        en: "Driver features: Driver account auth, profile management, pharmaceutical delivery route tracking"
      },
      {
        vi: "Bản đồ điều hướng trực quan & theo dõi lộ trình xe real-time",
        en: "Interactive navigation map & real-time vehicle route tracking"
      },
      {
        vi: "Tích hợp hệ thống bên thứ 3 (SAP, WMS, NEOX)",
        en: "Integrated with 3rd-party platforms (SAP, WMS, NEOX)"
      }
    ]
  },
  {
    id: "dms-kimtin",
    name: "DMS Kim Tín & App Mobile nPL Driver",
    badge: { vi: "📱 iOS & Android Deployed", en: "📱 iOS & Android Deployed" },
    category: "Logistics",
    role: "Frontend Engineer / Mobile Lead",
    company: "MEKSMART",
    link: "https://uatcontrol-dms.kimtingroup.com:44354/",
    appStoreImage: "./apps/kimtin_appstore.jpg",
    appStoreName: "nPL-Tài Xế (nPL Drivers)",
    playStoreImage: "./apps/kimtin_playstore.png",
    playStoreName: "nPL Driver",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    desc: {
      vi: "Hệ thống quản lý chuỗi cung ứng Tập đoàn Kim Tín kèm ứng dụng Mobile App 'nPL Driver' (nPL-Tài Xế) trên iOS App Store & Android Google Play cho tài xế theo dõi chuyến xe, lương/phí & sự cố.",
      en: "Supply chain management system for Kim Tin Group featuring 'nPL Driver' Mobile App on iOS App Store & Android Google Play for driver trip tracking, salary & incident reporting."
    },
    tech: ["React Native", "Vue.js", "Bootstrap Vue", "Chart.js", "vue-i18n", "AG Grid", "Leaflet Maps", "Firebase"],
    features: [
      {
        vi: "Đã deploy ứng dụng Mobile App 'nPL Driver' (nPL-Tài Xế) lên iOS App Store và Google Play (Android) thành công",
        en: "Successfully deployed 'nPL Driver' (nPL-Tài Xế) Mobile App to iOS App Store & Android Google Play Store"
      },
      {
        vi: "Tính năng tài xế: Xem danh sách chuyến xe, Lương & Phí, Yêu cầu đổ dầu, Báo cáo sự cố vận tải",
        en: "Driver features: Trip management, Salary & Fees tracking, Fuel requests, Incident reporting"
      },
      {
        vi: "Bảng dữ liệu AG Grid xử lý hàng nghìn dòng bản ghi mượt mà",
        en: "AG Grid data table handling thousands of records smoothly"
      },
      {
        vi: "Bản đồ định vị phương tiện Leaflet tương tác nhanh",
        en: "Fast interactive Leaflet vehicle location map"
      }
    ]
  },
  {
    id: "wms-elmich",
    name: "WMS Elmich - Quản Lý Kho Hàng Thông Minh",
    badge: { vi: "Có sẵn Demo Staging", en: "Staging Demo Available" },
    category: "Logistics",
    role: "Frontend Lead",
    company: "MEKSMART",
    link: "https://elmich.wms.staging.meksmart.com/",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: {
      vi: "Hệ thống quản lý kho tổng Elmich từ khâu nhập kho (Inbound), xuất kho (Outbound), kiểm kê tồn kho đến báo cáo.",
      en: "Elmich warehouse management system covering Inbound, Outbound, Cycle Count inventory, and reporting."
    },
    tech: ["Vue.js 3", "Pinia", "Tailwind CSS", "Chart.js", "Ant Design", "vue-i18n"],
    features: [
      {
        vi: "Quy trình quản lý nhập/xuất kho tự động hóa",
        en: "Automated inbound and outbound warehouse workflows"
      },
      {
        vi: "Import dữ liệu tồn kho hàng loạt qua file Excel/CSV",
        en: "Batch inventory data import via Excel/CSV files"
      },
      {
        vi: "Quản lý vị trí kệ kho (Bin/Location) thông minh",
        en: "Smart bin and location warehouse management"
      },
      {
        vi: "Báo cáo tỷ lệ lấp đầy kho & luồng hàng tồn",
        en: "Warehouse fill rate and inventory turnover reports"
      }
    ]
  },
  {
    id: "baoviet-pay",
    name: "Bảo Việt Insurance - Payment Gateway",
    badge: { vi: "Tích hợp FinTech", en: "FinTech Integration" },
    category: "Fintech",
    role: "Frontend Contractor",
    company: "BaoViet Insurance",
    link: null,
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    desc: {
      vi: "Hệ thống thanh toán phí bảo hiểm trực tuyến tích hợp đa kênh thanh toán MoMo, ZaloPay và VietQR.",
      en: "Online insurance premium payment platform integrating MoMo, ZaloPay, and VietQR payment channels."
    },
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS", "TanStack Query", "VietQR", "MoMo API", "ZaloPay API"],
    features: [
      {
        vi: "Tự động tạo mã VietQR động theo mã đơn hàng",
        en: "Dynamic VietQR code generation per order ID"
      },
      {
        vi: "Xử lý callback thanh toán tức thì qua WebSocket",
        en: "Instant payment callback processing via WebSocket"
      },
      {
        vi: "Giao diện chuẩn responsive bảo mật & mượt mà",
        en: "Secure, smooth responsive user interface"
      },
      {
        vi: "Tối ưu trải nghiệm thanh toán 1-click cho khách hàng",
        en: "Optimized 1-click checkout experience for customers"
      }
    ]
  },
  {
    id: "internal-chat",
    name: "Real-time Enterprise Internal Chat",
    badge: { vi: "Sản phẩm Nội bộ", en: "Internal Product" },
    category: "Enterprise",
    role: "Fullstack / Frontend Lead",
    company: "Bizman Media",
    link: null,
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    desc: {
      vi: "Ứng dụng trò chuyện nội bộ doanh nghiệp với phân quyền chặt chẽ, chat 1-1, chat nhóm và gửi file trực tiếp.",
      en: "Enterprise real-time chat application featuring role-based access, 1-on-1 messaging, group chats, and file sharing."
    },
    tech: ["Next.js", "Express.js", "Convex", "MongoDB", "PostgreSQL", "Socket.IO", "ShadCN UI"],
    features: [
      {
        vi: "Truyền tải tin nhắn thời gian thực độ trễ dưới 50ms",
        en: "Real-time message delivery with sub-50ms latency"
      },
      {
        vi: "Phân quyền truy cập theo Admin, Manager, Employee",
        en: "Role-based access control for Admin, Manager, Employee"
      },
      {
        vi: "Hỗ trợ gửi hình ảnh, tài liệu & biểu cảm (emoji)",
        en: "Support for image, document, and emoji sharing"
      },
      {
        vi: "Lưu trữ và tìm kiếm lịch sử trò chuyện thông minh",
        en: "Smart chat history storage and full-text search"
      }
    ]
  },
  {
    id: "cms-labbit",
    name: "CMS Labbit - Course Registration Platform",
    badge: { vi: "Live Demo", en: "Live Demo" },
    category: "Enterprise",
    role: "Frontend Developer",
    company: "VINOVA",
    link: "https://vinova.sg/portfolio/labbit/#pll_switcher",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: {
      vi: "Website đăng ký khóa học trực tuyến phát triển cho Vinova client, tối ưu UI responsive và tích hợp API đăng ký.",
      en: "Online course registration platform developed for Vinova client with optimized responsive UI and registration APIs."
    },
    tech: ["React.js", "Redux", "Material UI", "TypeScript"],
    features: [
      {
        vi: "Xây dựng giao diện đăng ký khóa học mượt mà theo thiết kế Figma",
        en: "Built smooth course registration UI following Figma specifications"
      },
      {
        vi: "Tích hợp REST APIs đăng ký học viên & xử lý lỗi",
        en: "Integrated student registration REST APIs & error handling"
      }
    ]
  },
  {
    id: "cms-ftlol",
    name: "For The Love of Laundry (FTLOL)",
    badge: { vi: "Live Site Demo", en: "Live Site Demo" },
    category: "Enterprise",
    role: "Frontend Developer",
    company: "VINOVA",
    link: "https://fortheloveoflaundry.com/",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    desc: {
      vi: "Hệ thống dịch vụ giặt ủi trực tuyến cao cấp với tích hợp thanh toán PayPal và tối ưu hóa React Hooks.",
      en: "Premium online laundry service platform integrated with PayPal payment gateway and optimized React Hooks."
    },
    tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "PayPal API", "Jenkins"],
    features: [
      {
        vi: "Tích hợp cổng thanh toán PayPal trực tuyến bảo mật",
        en: "Integrated secure online PayPal payment gateway"
      },
      {
        vi: "Áp dụng React Hooks nâng cao trải nghiệm người dùng & hiệu năng render",
        en: "Applied React Hooks to enhance user experience & rendering performance"
      }
    ]
  },
  {
    id: "gsoft-asset",
    name: "G-SOFT - Quản Lý Tài Sản Doanh Nghiệp",
    badge: { vi: "System Demo", en: "System Demo" },
    category: "Enterprise",
    role: "Fullstack Developer",
    company: "G-SOFT / Sacombank",
    link: "https://it.gsoft.com.vn:3035/",
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    desc: {
      vi: "Hệ thống quản lý tài sản, kiểm kê & vận hành nội bộ triển khai cho G-SOFT và ngân hàng Sacombank.",
      en: "Enterprise asset management, inventory & operational system deployed for G-SOFT and Sacombank."
    },
    tech: ["ASP.NET", "SQL Server", "Angular", "Bootstrap", "SVN"],
    features: [
      {
        vi: "Quản lý luồng kiểm kê tài sản & khấu hao theo thời gian",
        en: "Asset inventory tracking & depreciation over time management"
      },
      {
        vi: "Tối ưu câu lệnh SQL Server truy xuất báo cáo tốc độ cao",
        en: "Optimized SQL Server queries for high-speed report generation"
      }
    ]
  }
];

export const codeSnippet = `{
  "developer": {
    "name": "Trần Anh Kiệt",
    "role": "Senior Frontend Engineer",
    "location": "Ho Chi Minh City, Vietnam",
    "experience_years": 5,
    "core_stack": ["Vue.js", "Nuxt.js", "React.js", "Next.js", "TypeScript"],
    "domain_expertise": [
      "Warehouse Management System (WMS)",
      "Transportation Management System (TMS)",
      "Fintech & Payment Gateway Integration",
      "Real-time Social & Enterprise Chat"
    ],
    "open_for_hire": true
  }
}`;
