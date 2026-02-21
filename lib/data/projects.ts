// Project data with detailed information for detail pages

export interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  role: string;
  timeline: string;
  coreStack: string[];
  challenge: {
    title: string;
    content: string;
  };
  sections: {
    id: string;
    title: string;
  }[];
  responsive?: {
    desktop: { image: string; label: string; description: string };
    tablet: { image: string; label: string; description: string };
    mobile: { image: string; label: string; description: string };
  };
  architecture?: {
    description: string;
    features: string[];
    codeSnippet?: string;
  };
  metrics?: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export const projects: Record<string, { en: ProjectData; th: ProjectData }> = {
  careos: {
    en: {
      slug: "careos",
      title: "CareOS",
      subtitle: "Hospital Management System",
      description: "Full-cycle Hospital Management System redesigned from legacy HOSxP. Covers EMR, doctor examination, pharmacy queue with drug allergy alerts, and real-time billing.",
      heroImage: "/projects/careos-preview-v3.png",
      tags: ["PHP", "jQuery", "HTML5", "CSS3", "MySQL"],
      liveUrl: "http://localhost:8081",
      role: "Lead Frontend Developer",
      timeline: "Jan 2025 – Present",
      coreStack: ["PHP", "jQuery", "HTML5", "CSS3", "MySQL", "Bootstrap"],
      challenge: {
        title: "The Challenge",
        content: "The legacy HOSxP system was outdated, difficult to navigate, and lacked modern responsive design. Healthcare staff spent excessive time navigating complex interfaces, leading to reduced efficiency and potential errors in patient care. Our goal was to completely redesign the UI/UX while maintaining data integrity and backward compatibility with existing hospital workflows."
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
        { id: "architecture", title: "Component Architecture" },
        { id: "impact", title: "Impact & Performance" }
      ],
      responsive: {
        desktop: {
          image: "/projects/careos-desktop-v3.png",
          label: "Desktop View",
          description: "Full dashboard with sidebar navigation, patient queue, and detailed examination forms"
        },
        tablet: {
          image: "/projects/careos-tablet-v3.png",
          label: "Tablet View",
          description: "Optimized for bedside use with larger touch targets and simplified navigation"
        },
        mobile: {
          image: "/projects/careos-mobile-v3.png",
          label: "Mobile View",
          description: "Quick access to patient alerts and pharmacy queue on the go"
        }
      },
      architecture: {
        description: "Built with a modular PHP architecture, separating concerns between data access, business logic, and presentation layers. jQuery handles dynamic UI updates without full page reloads.",
        features: [
          "Modular page components for reusability",
          "AJAX-powered dynamic content loading",
          "Session-based authentication with role permissions",
          "Real-time drug interaction checking",
          "Responsive CSS Grid layout system"
        ],
        codeSnippet: `// Dynamic Patient Search with jQuery
$('#patient-search').on('keyup', debounce(function() {
  const query = $(this).val();
  
  $.ajax({
    url: '/api/patients/search',
    data: { q: query },
    success: function(patients) {
      renderPatientList(patients);
      highlightAllergyWarnings(patients);
    }
  });
}, 300));`
      },
      metrics: {
        performance: 85,
        accessibility: 92,
        bestPractices: 88,
        seo: 90
      }
    },
    th: {
      slug: "careos",
      title: "CareOS",
      subtitle: "ระบบบริหารจัดการโรงพยาบาล",
      description: "ระบบจัดการโรงพยาบาลครบวงจร รีดีไซน์จาก HOSxP ให้ทันสมัย ครอบคลุมเวชระเบียน ห้องตรวจ ระบบคิวยาพร้อมแจ้งเตือนอาการแพ้ และการเงิน",
      heroImage: "/projects/careos-preview-v3.png",
      tags: ["PHP", "jQuery", "HTML5", "CSS3", "MySQL"],
      liveUrl: "http://localhost:8081",
      role: "Lead Frontend Developer",
      timeline: "ม.ค. 2025 – ปัจจุบัน",
      coreStack: ["PHP", "jQuery", "HTML5", "CSS3", "MySQL", "Bootstrap"],
      challenge: {
        title: "ความท้าทาย",
        content: "ระบบ HOSxP เดิมนั้นล้าสมัย ใช้งานยาก และไม่รองรับ Responsive Design บุคลากรทางการแพทย์ต้องเสียเวลามากในการใช้งาน Interface ที่ซับซ้อน ทำให้ประสิทธิภาพลดลงและอาจเกิดความผิดพลาดในการดูแลผู้ป่วย เป้าหมายของเราคือการออกแบบ UI/UX ใหม่ทั้งหมด โดยยังคงรักษาความถูกต้องของข้อมูลและความเข้ากันได้กับ Workflow ที่มีอยู่"
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
        { id: "architecture", title: "สถาปัตยกรรมระบบ" },
        { id: "impact", title: "ผลลัพธ์และประสิทธิภาพ" }
      ],
      responsive: {
        desktop: {
          image: "/projects/careos-desktop-v3.png",
          label: "หน้าจอ Desktop",
          description: "Dashboard เต็มรูปแบบพร้อม Sidebar navigation, คิวผู้ป่วย และฟอร์มตรวจโดยละเอียด"
        },
        tablet: {
          image: "/projects/careos-tablet-v3.png",
          label: "หน้าจอ Tablet",
          description: "ปรับให้เหมาะกับการใช้งานข้างเตียงผู้ป่วย มีปุ่มใหญ่และ Navigation ที่ง่ายขึ้น"
        },
        mobile: {
          image: "/projects/careos-mobile-v3.png",
          label: "หน้าจอ Mobile",
          description: "เข้าถึงการแจ้งเตือนผู้ป่วยและคิวยาได้อย่างรวดเร็วขณะเคลื่อนที่"
        }
      },
      architecture: {
        description: "สร้างด้วยสถาปัตยกรรม PHP แบบ modular แยกส่วนระหว่าง data access, business logic และ presentation อย่างชัดเจน jQuery จัดการการอัปเดต UI แบบ dynamic โดยไม่ต้อง reload หน้า",
        features: [
          "Page components แบบ modular เพื่อการใช้ซ้ำ",
          "โหลด content แบบ dynamic ด้วย AJAX",
          "ระบบ authentication ตาม session พร้อมสิทธิ์ตาม role",
          "ตรวจสอบปฏิกิริยายาแบบ real-time",
          "ระบบ layout ด้วย Responsive CSS Grid"
        ],
        codeSnippet: `// Dynamic Patient Search with jQuery
$('#patient-search').on('keyup', debounce(function() {
  const query = $(this).val();
  
  $.ajax({
    url: '/api/patients/search',
    data: { q: query },
    success: function(patients) {
      renderPatientList(patients);
      highlightAllergyWarnings(patients);
    }
  });
}, 300));`
      },
      metrics: {
        performance: 85,
        accessibility: 92,
        bestPractices: 88,
        seo: 90
      }
    }
  },
  smartdashboard: {
    en: {
      slug: "smartdashboard",
      title: "SmartDashboard",
      subtitle: "Executive Hospital Analytics",
      description: "Executive-grade hospital dashboard with AI Predictive Analytics (91% accuracy), real-time Command Center monitoring 420+ patients, and KPI alert system.",
      heroImage: "/projects/smartdashboard-XXX.png",
      tags: ["PHP", "ApexCharts", "AI/ML", "Real-time"],
      liveUrl: "http://localhost:8080",
      role: "Full-stack Developer",
      timeline: "Feb 2025 – Present",
      coreStack: ["PHP", "ApexCharts", "JavaScript", "MySQL", "Python ML"],
      challenge: {
        title: "The Challenge",
        content: "Hospital executives lacked real-time visibility into operational metrics. Decision-making was delayed due to manual report generation, and critical KPI breaches often went unnoticed until it was too late. We needed to build an intelligent dashboard that not only displays real-time data but also predicts potential issues before they occur."
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
        { id: "architecture", title: "System Architecture" },
        { id: "impact", title: "Impact & Performance" }
      ],
      responsive: {
        desktop: {
          image: "/projects/smartdashboard-XXX.png",
          label: "Command Center",
          description: "Full executive dashboard with real-time charts, AI predictions, and department drill-downs"
        },
        tablet: {
          image: "/projects/smartdashboard-XXX.png",
          label: "Tablet Dashboard",
          description: "Key metrics at a glance for rounds and meetings"
        },
        mobile: {
          image: "/projects/smartdashboard-XXX.png",
          label: "Alert Center",
          description: "Push notifications and critical KPI alerts on mobile"
        }
      },
      architecture: {
        description: "Multi-layered architecture combining PHP backend for data aggregation, Python microservice for ML predictions, and real-time WebSocket updates to the frontend. ApexCharts renders interactive visualizations.",
        features: [
          "Real-time data streaming via WebSocket",
          "Python ML service for predictive analytics",
          "Role-based dashboard customization",
          "Automated KPI threshold alerting",
          "Export to PDF/Excel functionality"
        ],
        codeSnippet: `// Real-time Chart Update
const socket = new WebSocket('ws://dashboard/live');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  patientChart.updateSeries([{
    name: 'Patients',
    data: [...patientChart.w.config.series[0].data, data.count]
  }]);
  
  if (data.count > THRESHOLD) {
    showAlertNotification('High patient volume detected');
  }
};`
      },
      metrics: {
        performance: 88,
        accessibility: 85,
        bestPractices: 92,
        seo: 78
      }
    },
    th: {
      slug: "smartdashboard",
      title: "SmartDashboard",
      subtitle: "Dashboard วิเคราะห์ข้อมูลผู้บริหาร",
      description: "Dashboard ผู้บริหารโรงพยาบาล มี AI คาดการณ์ผู้ป่วย (ความแม่นยำ 91%) Command Center ติดตามผู้ป่วย 420+ คน Real-time และระบบแจ้งเตือน KPI วิกฤต",
      heroImage: "/projects/smartdashboard-XXX.png",
      tags: ["PHP", "ApexCharts", "AI/ML", "Real-time"],
      liveUrl: "http://localhost:8080",
      role: "Full-stack Developer",
      timeline: "ก.พ. 2025 – ปัจจุบัน",
      coreStack: ["PHP", "ApexCharts", "JavaScript", "MySQL", "Python ML"],
      challenge: {
        title: "ความท้าทาย",
        content: "ผู้บริหารโรงพยาบาลขาดการมองเห็นข้อมูล operational แบบ real-time การตัดสินใจล่าช้าเนื่องจากต้องรอรายงานแบบ manual และการแจ้งเตือน KPI วิกฤตมักมาช้าเกินไป เราต้องสร้าง dashboard อัจฉริยะที่ไม่เพียงแสดงข้อมูล real-time แต่ยังคาดการณ์ปัญหาล่วงหน้าได้"
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
        { id: "architecture", title: "สถาปัตยกรรมระบบ" },
        { id: "impact", title: "ผลลัพธ์และประสิทธิภาพ" }
      ],
      responsive: {
        desktop: {
          image: "/projects/smartdashboard-XXX.png",
          label: "Command Center",
          description: "Dashboard ผู้บริหารเต็มรูปแบบพร้อมกราฟ real-time, การคาดการณ์ AI และข้อมูลแยกรายแผนก"
        },
        tablet: {
          image: "/projects/smartdashboard-XXX.png",
          label: "Tablet Dashboard",
          description: "ตัวชี้วัดสำคัญสำหรับการ round และการประชุม"
        },
        mobile: {
          image: "/projects/smartdashboard-XXX.png",
          label: "ศูนย์แจ้งเตือน",
          description: "Push notification และการแจ้งเตือน KPI วิกฤตบนมือถือ"
        }
      },
      architecture: {
        description: "สถาปัตยกรรมหลายชั้นผสมผสาน PHP backend สำหรับรวบรวมข้อมูล, Python microservice สำหรับ ML predictions และการอัปเดต real-time ผ่าน WebSocket ApexCharts render กราฟแบบ interactive",
        features: [
          "Streaming ข้อมูล real-time ผ่าน WebSocket",
          "Python ML service สำหรับ predictive analytics",
          "ปรับแต่ง dashboard ตาม role",
          "แจ้งเตือนอัตโนมัติเมื่อ KPI ถึง threshold",
          "Export เป็น PDF/Excel ได้"
        ],
        codeSnippet: `// Real-time Chart Update
const socket = new WebSocket('ws://dashboard/live');

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  patientChart.updateSeries([{
    name: 'Patients',
    data: [...patientChart.w.config.series[0].data, data.count]
  }]);
  
  if (data.count > THRESHOLD) {
    showAlertNotification('High patient volume detected');
  }
};`
      },
      metrics: {
        performance: 88,
        accessibility: 85,
        bestPractices: 92,
        seo: 78
      }
    }
  },
  "banthi-hospital": {
    en: {
      slug: "banthi-hospital",
      title: "Banthi Hospital",
      subtitle: "Official Hospital Website",
      description: "A modern, accessible, and responsive official website for Banthi Hospital, Lamphun. Featuring patient services, doctor schedules, and hospital news.",
      heroImage: "/projects/banthi-hospital-desktop.png",
      tags: ["WordPress", "PHP", "Responsive", "Accessible"],
      liveUrl: "http://localhost:8082",
      role: "Web Developer",
      timeline: "2024",
      coreStack: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
      challenge: {
        title: "The Challenge",
        content: "The hospital needed a digital presence that is accessible to all demographics, particularly the elderly. The website had to be fast, easy to navigate, and clearly display essential information like operating hours and department contacts."
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
        { id: "metrics", title: "Impact & Performance" }
      ],
      responsive: {
        desktop: {
          image: "/projects/banthi-hospital-desktop.png",
          label: "Desktop View",
          description: "Clear navigation and prominent calls-to-action for essential hospital services"
        },
        tablet: {
          image: "/projects/banthi-hospital-tablet.png",
          label: "Tablet View",
          description: "Optimized layout for reading news and viewing schedules on touch devices"
        },
        mobile: {
          image: "/projects/banthi-hospital-mobile.png",
          label: "Mobile View",
          description: "Quick access to emergency contacts and directions for on-the-go users"
        }
      },
      metrics: {
        performance: 90,
        accessibility: 95,
        bestPractices: 85,
        seo: 92
      }
    },
    th: {
      slug: "banthi-hospital",
      title: "โรงพยาบาลบ้านธิ",
      subtitle: "เว็บไซต์หลักโรงพยาบาล",
      description: "เว็บไซต์หลักอย่างเป็นทางการของโรงพยาบาลบ้านธิ จังหวัดลำพูน ที่ทันสมัย รองรับการใช้งานทุกอุปกรณ์ และเข้าถึงง่าย อัดแน่นด้วยบริการสำหรับผู้ป่วย ตารางตรวจของแพทย์ และข่าวสารโรงพยาบาล",
      heroImage: "/projects/banthi-hospital-desktop.png",
      tags: ["WordPress", "PHP", "Responsive", "Accessible"],
      liveUrl: "http://localhost:8082",
      role: "Web Developer",
      timeline: "ปี 2024",
      coreStack: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL"],
      challenge: {
        title: "ความท้าทาย",
        content: "โรงพยาบาลต้องการตัวตนบนโลกออนไลน์ที่สามารถเข้าถึงได้โดยทุกกลุ่มคน โดยเฉพาะผู้สูงอายุ เว็บไซต์ต้องโหลดเร็ว นำทางง่าย และแสดงข้อมูลที่จำเป็น เช่น เวลาทำการ และวิธีการติดต่อแผนกต่างๆ ได้อย่างชัดเจน"
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
        { id: "metrics", title: "ผลลัพธ์และประสิทธิภาพ" }
      ],
      responsive: {
        desktop: {
          image: "/projects/banthi-hospital-desktop.png",
          label: "หน้าจอ Desktop",
          description: "มีเมนูนำทางที่ชัดเจนและปุ่มกดที่โดดเด่นเพื่อเข้าถึงบริการสำคัญของโรงพยาบาล"
        },
        tablet: {
          image: "/projects/banthi-hospital-tablet.png",
          label: "หน้าจอ Tablet",
          description: "ปรับรูปแบบการจัดวางให้อ่านข่าวสารและดูตารางตรวจบนอุปกรณ์สัมผัสได้ดีขึ้น"
        },
        mobile: {
          image: "/projects/banthi-hospital-mobile.png",
          label: "หน้าจอ Mobile",
          description: "เข้าถึงเบอร์ติดต่อฉุกเฉินและแผนที่ได้อย่างรวดเร็วสำหรับผู้ใช้งานผ่านมือถือ"
        }
      },
      metrics: {
        performance: 90,
        accessibility: 95,
        bestPractices: 85,
        seo: 92
      }
    }
  }
};

export function getProject(slug: string, lang: 'en' | 'th'): ProjectData | undefined {
  return projects[slug]?.[lang];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
