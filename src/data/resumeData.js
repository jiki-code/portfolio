export const personalInfo = {
  name: "Trần Anh Kiệt",
  englishName: "TRAN ANH KIET",
  title: "Frontend Engineer",
  subtitle: "5+ năm kinh nghiệm xây dựng ứng dụng Web, App & Hệ thống Enterprise quy mô lớn",
  dob: "23/03/1998",
  location: "TP. Hồ Chí Minh, Việt Nam",
  phone: "0924435345",
  phoneFormatted: "0924 435 345",
  email: "jikid0973@gmail.com",
  linkedin: "https://linkedin.com/in/kiet-tran-819613223",
  linkedinHandle: "kiet-tran-819613223",
  status: "Đang sẵn sàng cho các cơ hội mới",
  education: {
    degree: "Cử nhân Kỹ thuật Phần mềm (B.E. in Software Engineering)",
    school: "Trường Đại học Công nghệ TP.HCM (HUTECH)",
    period: "2016 – 2021",
    englishCert: "Tiếng Anh: B1 Certificate (HUTECH) | TOEIC 550"
  },
  summary: `Software Engineer với 5 năm kinh nghiệm chuyên sâu trong việc xây dựng các ứng dụng web/app responsive và hệ thống doanh nghiệp phức tạp (Logistics, WMS, TMS, E-commerce, FinTech payment & Internal operations). Thành thạo Vue.js (Nuxt.js), React.js (Next.js), Electron.js, TypeScript, quản lý state linh hoạt (Pinia, Redux, Zustand), tích hợp REST API, Socket.IO real-time. Có khả năng phối hợp chặt chẽ giữa Frontend & Backend (Node.js, Express.js, MySQL, PostgreSQL, MongoDB, Supabase, Firebase, Convex, Docker).`
};

export const stats = [
  { value: "05+", label: "Năm kinh nghiệm", desc: "Phát triển Web & Enterprise App", icon: "Clock" },
  { value: "10+", label: "Dự án quy mô", desc: "WMS, TMS, E-commerce, Chat Real-time", icon: "Layers" },
  { value: "20+", label: "Công nghệ & Tools", desc: "Vue, React, Next, Node, TS, Docker...", icon: "Cpu" },
  { value: "100%", label: "Cam kết UI/UX", desc: "Giao diện mượt mà, tối ưu hiệu năng", icon: "CheckCircle" }
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "Vue.js / Nuxt.js", level: 80, exp: "3+ năm", tag: "Core Skill" },
      { name: "React.js / Next.js", level: 90, exp: "4+ năm", tag: "Core Skill" },
      { name: "TypeScript / JavaScript (ES6+)", level: 95, exp: "5 năm", tag: "Expert" },
      { name: "HTML5 / CSS3 / SCSS", level: 95, exp: "5 năm", tag: "Expert" },
      { name: "Tailwind CSS", level: 79, exp: "3+ năm", tag: "UI" },
      { name: "ShadCN UI / Material UI / Ant Design", level: 88, exp: "2 năm", tag: "UI Components" }
    ]
  },
  {
    id: "state_api",
    title: "State & API Integration",
    icon: "Network",
    skills: [
      { name: "Pinia / Vuex", level: 70, exp: "3+ năm", tag: "State Management" },
      { name: "Redux / Zustand", level: 80, exp: "3+ năm", tag: "State Management" },
      { name: "TanStack Query (React Query)", level: 70, exp: "1+ năm", tag: "Data Fetching" },
      { name: "REST APIs / Axios / Swagger", level: 90, exp: "5 năm", tag: "API" },
      { name: "WebSocket / Socket.IO", level: 68, exp: "2+ năm", tag: "Real-time" },
      { name: "Payment Gateways (VietQR, MoMo, ZaloPay, PayPal)", level: 60, exp: "2 năm", tag: "Fintech" }
    ]
  },
  {
    id: "backend_data",
    title: "Backend & Database",
    icon: "Database",
    skills: [
      { name: "Node.js / Express.js", level: 62, exp: "3+ năm", tag: "Backend" },
      { name: "MySQL / PostgreSQL", level: 70, exp: "3+ năm", tag: "SQL DB" },
      { name: "MongoDB", level: 60, exp: "3+ năm", tag: "NoSQL DB" },
      { name: "Supabase / Firebase", level: 60, exp: "3+ năm", tag: "BaaS" },
      { name: "Convex Realtime DB", level: 50, exp: "1+ năm", tag: "BaaS" }
    ]
  },
  {
    id: "tools_workflow",
    title: "DevOps & Workflow",
    icon: "Workflow",
    skills: [
      { name: "Docker", level: 60, exp: "2+ năm", tag: "Container" },
      { name: "Git / GitHub / GitLab", level: 80, exp: "5 năm", tag: "Version Control" },
      { name: "Jenkins CI/CD", level: 50, exp: "1 năm", tag: "DevOps" },
      { name: "Agile / Scrum / Jira / Trello", level: 90, exp: "5 năm", tag: "Management" },
      { name: "Unit Testing", level: 60, exp: "1 năm", tag: "Testing" }
    ]
  },
  {
    id: "ai_tools",
    title: "AI Tools & Productivity",
    icon: "Sparkles",
    skills: [
      { name: "OpenAI ChatGPT", level: 90, exp: "Daily Use", tag: "AI Assistant" },
      { name: "Claude Code", level: 90, exp: "Daily Use", tag: "AI Assistant" },
      { name: "Cursor AI IDE", level: 85, exp: "Daily Use", tag: "AI Coding" }
    ]
  },
  {
    id: "familiar",
    title: "Kinh nghiệm khác",
    icon: "Code",
    skills: [
      { name: "Angular", level: 70, exp: "Thực tế dự án", tag: "Framework" },
      { name: "React Native", level: 60, exp: "Mobile App", tag: "Mobile" },
      { name: "ASP.NET", level: 50, exp: "Sacombank", tag: "Backend" },
      { name: "WordPress", level: 60, exp: "CMS", tag: "CMS" }
    ]
  }
];

export const experiences = [
  {
    id: "baoviet",
    period: "4 tháng (Gần đây)",
    role: "Frontend Developer",
    company: "BaoViet Insurance",
    type: "Freelance contract",
    color: "#10B981",
    summary: "Triển khai các tính năng mới, khắc phục lỗi và liên kết luồng giao dịch tích hợp cổng thanh toán trực tuyến cho website Bảo Việt.",
    highlights: [
      "Tích hợp các kênh thanh toán phổ biến tại Việt Nam: VietQR, MoMo API, ZaloPay API.",
      "Xây dựng giao diện responsive mượt mà với Next.js (React), Shadcn UI, Tailwind CSS.",
      "Xử lý state và đồng bộ dữ liệu real-time với TanStack Query và WebSocket."
    ],
    tech: ["Next.js (React)", "Shadcn UI", "Tailwind CSS", "TanStack Query", "WebSocket", "VietQR", "MoMo API", "ZaloPay API"]
  },
  {
    id: "bizman",
    period: "01/2025 – 07/2026",
    role: "Web Developer (Frontend / Backend)",
    company: "Bizman Media",
    type: "Full-time",
    color: "#3B82F6",
    summary: "Phát triển các module web quản lý vận hành nội bộ và hệ thống sản phẩm phục vụ người dùng cuối quy mô lớn.",
    projects: [
      {
        name: "Backoffice",
        desc: "Hệ thống nội bộ theo dõi điểm danh, thời gian nghỉ trưa, quản lý cuộc gọi telesales và quản lý SEO domain/backlink.",
        tech: ["Next.js", "Express.js", "MySQL", "MongoDB", "Firebase", "REST APIs", "Socket.IO", "JWT/OAuth2", "Redux", "TanStack Query", "ShadCN UI", "Docker"]
      },
      {
        name: "5Gao Social Network",
        link: "https://5gaoo.com/",
        desc: "Mạng xã hội giải trí hài hước hỗ trợ đăng bài, nhóm cộng đồng, livestream và horoscope xem tử vi.",
        tech: ["Next.js", "Express.js", "MySQL", "Supabase", "Socket.IO", "REST APIs", "Docker", "Ant Design"]
      },
      {
        name: "Internal Chat Real-time",
        desc: "Ứng dụng trò chuyện nội bộ thời gian thực hỗ trợ phân quyền Admin, Manager, User, chat 1-1 và chat nhóm phòng ban.",
        tech: ["Next.js", "Express.js", "Convex", "MongoDB", "PostgreSQL", "REST APIs", "JWT/OAuth2", "ShadCN UI", "Socket.IO"]
      }
    ],
    tech: ["Next.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "Firebase", "Docker", "Socket.IO", "Redux", "Convex"]
  },
  {
    id: "meksmart",
    period: "07/2022 – 12/2024",
    role: "Frontend Developer",
    company: "MEKSMART",
    type: "Full-time",
    color: "#8B5CF6",
    summary: "Phát triển các module Frontend cho hệ thống Quản lý kho (WMS) và Quản lý vận tải (TMS) quy mô lớn: dashboard báo cáo, AG Grid, bản đồ Leaflet / Google Maps và i18n.",
    projects: [
      {
        name: "DMS Kim Tín",
        link: "https://uatcontrol-dms.kimtingroup.com:44354/",
        desc: "Nền tảng quản lý vận tải tích hợp dashboard điều hành, bản đồ Leaflet và quy trình logistics chuyên sâu.",
        tech: ["Vue.js", "Bootstrap Vue", "Chart.js", "vue-i18n", "AG Grid", "Leaflet", "Firebase", "Vuex"]
      },
      {
        name: "WMS Elmich",
        desc: "Hệ thống quản lý kho tổng Elmich: nghiệp vụ nhập/xuất kho, kiểm kê (cycle count), báo cáo tồn kho và import dữ liệu.",
        tech: ["Vue.js", "Tailwind CSS", "Pinia", "Chart.js", "Ant Design", "vue-i18n"]
      },
      {
        name: "TMS Gonsa",
        link: "https://tms-staging.gonsa.vn/",
        desc: "Giải pháp quản lý giao nhận đơn hàng & chuyến xe, tích hợp hệ thống bên thứ 3 (SAP, WMS, NEOX), thống kê và luồng bản đồ.",
        tech: ["Vue.js", "Tailwind CSS", "Vuex", "Google Maps", "Axios", "Swagger", "Payment gateway", "vue-i18n"]
      },
      {
        name: "TSM Sovigaz",
        desc: "Hệ thống quản lý vận tải sử dụng Google Maps động (vẽ tuyến đường, điểm xuất phát, điểm dừng), tính lương tài xế theo chuyến xe.",
        tech: ["Angular", "TypeScript", "RxJS", "Bootstrap", "Google Maps", "Chart.js", "Firebase"]
      }
    ],
    tech: ["Vue.js", "Pinia", "Vuex", "Leaflet", "Google Maps", "Chart.js", "AG Grid", "Tailwind CSS", "Angular"]
  },
  {
    id: "vinova",
    period: "10/2021 – 07/2022",
    role: "Frontend Developer",
    company: "VINOVA",
    type: "Full-time",
    color: "#F59E0B",
    summary: "Xây dựng & bảo trì các dự án CMS và thương mại điện tử trên nền React.js, chuyển đổi thiết kế Figma sang UI responsive và tích hợp REST API.",
    projects: [
      {
        name: "CMS Labbit",
        desc: "Website đăng ký khóa học: xây dựng UI responsive, tích hợp API đăng ký và bảo trì.",
        tech: ["React.js", "Redux", "Material UI", "TypeScript"]
      },
      {
        name: "CMS FTLOL",
        desc: "Bảo trì & tối ưu tính năng hệ thống, áp dụng React Hooks nâng cao trải nghiệm người dùng.",
        tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "Axios", "PayPal API", "Jenkins"]
      },
      {
        name: "CMS SMTHGOOD",
        desc: "Phát triển các trang quản lý bán hàng (seller management) và trang web quảng cáo chính.",
        tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "Jenkins", "Axios"]
      }
    ],
    tech: ["React.js", "Redux", "Redux-Saga", "Material UI", "TypeScript", "PayPal API", "Jenkins"]
  },
  {
    id: "gsoft",
    period: "03/2021 – 09/2021",
    role: ".Net Developer",
    company: "G-SOFT",
    type: "On-site Sacombank",
    color: "#EC4899",
    summary: "Làm việc trực tiếp tại Sacombank phát triển phần mềm quản lý tài sản & thanh toán ngân hàng.",
    tech: ["ASP.NET", "SQL Server", "Angular", "SVN", "Bootstrap"]
  }
];

export const publicProjects = [
  {
    id: "5gao",
    name: "5Gao - Mạng Xã Hội Giải Trí",
    badge: "Public Product",
    category: "Social",
    role: "Fullstack / Frontend",
    company: "Bizman Media",
    link: "https://5gaoo.com/",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
    desc: "Mạng xã hội giải trí hài hước hỗ trợ đăng bài, nhóm cộng đồng, livestream tương tác và tính năng tử vi horoscope.",
    tech: ["Next.js", "Express.js", "MySQL", "Supabase", "Socket.IO", "Ant Design", "Docker"],
    features: [
      "Hệ thống tin tức, tương tác & bình luận real-time với Socket.IO",
      "Quản lý nhóm cộng đồng & tính năng livestream",
      "Tích hợp module bói toán tử vi horoscope vui vẻ",
      "Tối ưu tốc độ tải trang & SEO SSR chuẩn chỉnh"
    ]
  },
  {
    id: "tms-gonsa",
    name: "TMS Gonsa - Quản Lý Vận Tải & Giao Nhận",
    badge: "Staging Demo Available",
    category: "Logistics",
    role: "Frontend Engineer",
    company: "MEKSMART",
    link: "https://tms-staging.gonsa.vn/",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
    desc: "Giải pháp chuyển đổi số quản lý đơn hàng, chuyến xe giao nhận và thống kê chi tiết tích hợp Google Maps API.",
    tech: ["Vue.js", "Tailwind CSS", "Vuex", "Google Maps API", "Axios", "Swagger", "vue-i18n"],
    features: [
      "Bản đồ điều hướng trực quan & theo dõi lộ trình xe real-time",
      "Tích hợp hệ thống bên thứ 3 (SAP, WMS, NEOX)",
      "Thống kê doanh thu & chi phí giao hàng thời gian thực",
      "Hỗ trợ đa ngôn ngữ i18n linh hoạt"
    ]
  },
  {
    id: "dms-kimtin",
    name: "DMS Kim Tín - Nền Tảng Điều Hành Vận Tải",
    badge: "UAT Control System",
    category: "Logistics",
    role: "Frontend Engineer",
    company: "MEKSMART",
    link: "https://uatcontrol-dms.kimtingroup.com:44354/",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    desc: "Hệ thống quản lý chuỗi cung ứng và điều hành giao nhận tập trung cho Tập đoàn Kim Tín với bản đồ Leaflet & AG Grid.",
    tech: ["Vue.js", "Bootstrap Vue", "Chart.js", "vue-i18n", "AG Grid", "Leaflet Maps", "Firebase"],
    features: [
      "Bảng dữ liệu AG Grid xử lý hàng nghìn dòng bản ghi mượt mà",
      "Bản đồ định vị phương tiện Leaflet tương tác nhanh",
      "Dashboard biểu đồ trực quan hóa dữ liệu kinh doanh với Chart.js",
      "Phân quyền người dùng & quản lý luồng phê duyệt"
    ]
  },
  {
    id: "wms-elmich",
    name: "WMS Elmich - Quản Lý Kho Hàng Thông Minh",
    badge: "Enterprise System",
    category: "Logistics",
    role: "Frontend Lead",
    company: "MEKSMART",
    link: null,
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    desc: "Hệ thống quản lý kho tổng Elmich từ khâu nhập kho (Inbound), xuất kho (Outbound), kiểm kê tồn kho đến báo cáo.",
    tech: ["Vue.js 3", "Pinia", "Tailwind CSS", "Chart.js", "Ant Design", "vue-i18n"],
    features: [
      "Quy trình quản lý nhập/xuất kho tự động hóa",
      "Import dữ liệu tồn kho hàng loạt qua file Excel/CSV",
      "Quản lý vị trí kệ kho (Bin/Location) thông minh",
      "Báo cáo tỷ lệ lấp đầy kho & luồng hàng tồn"
    ]
  },
  {
    id: "baoviet-pay",
    name: "Bảo Việt Insurance - Payment Gateway",
    badge: "Fintech Integration",
    category: "Fintech",
    role: "Frontend Contractor",
    company: "BaoViet Insurance",
    link: null,
    gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
    desc: "Hệ thống thanh toán phí bảo hiểm trực tuyến tích hợp đa kênh thanh toán MoMo, ZaloPay và VietQR.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS", "TanStack Query", "VietQR", "MoMo API", "ZaloPay API"],
    features: [
      "Tự động tạo mã VietQR động theo mã đơn hàng",
      "Xử lý callback thanh toán tức thì qua WebSocket",
      "Giao diện chuẩn responsive bảo mật & mượt mà",
      "Tối ưu trải nghiệm thanh toán 1-click cho khách hàng"
    ]
  },
  {
    id: "internal-chat",
    name: "Real-time Enterprise Internal Chat",
    badge: "Internal Product",
    category: "Enterprise",
    role: "Fullstack / Frontend Lead",
    company: "Bizman Media",
    link: null,
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
    desc: "Ứng dụng trò chuyện nội bộ doanh nghiệp với phân quyền chặt chẽ, chat 1-1, chat nhóm và gửi file trực tiếp.",
    tech: ["Next.js", "Express.js", "Convex", "MongoDB", "PostgreSQL", "Socket.IO", "ShadCN UI"],
    features: [
      "Truyền tải tin nhắn thời gian thực độ trễ dưới 50ms",
      "Phân quyền truy cập theo Admin, Manager, Employee",
      "Hỗ trợ gửi hình ảnh, tài liệu & biểu cảm (emoji)",
      "Lưu trữ và tìm kiếm lịch sử trò chuyện thông minh"
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
