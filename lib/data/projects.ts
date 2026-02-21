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
    desktop: { image: string | string[]; label: string; description: string };
    tablet: { image: string | string[]; label: string; description: string };
    mobile: { image: string | string[]; label: string; description: string };
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
  traffix: {
    en: {
      slug: "traffix",
      title: "Traffix",
      subtitle: "Traffic Management System",
      description: "Real-time traffic analytics and incident management system with a comprehensive custom Design System and UI Template gallery.",
      heroImage: "/projects/traffix-preview.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Design System"],
      liveUrl: "http://localhost:3000",
      role: "Frontend Developer",
      timeline: "2026",
      coreStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      challenge: {
        title: "The Challenge",
        content: "Smart city infrastructure required a scalable, real-time dashboard for monitoring intersections and managing incidents. Furthermore, creating a unified developer experience required building a robust custom Design System (Traffix UI) with over 150 tokens and 25 components to ensure consistent user experiences across future applications."
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
        { id: "architecture", title: "Design System & Architecture" }
      ],
      responsive: {
        desktop: {
          image: ["/projects/traffix-entry.png", "/projects/traffix-desktop.png"],
          label: "Entry Operations Dashboard",
          description: "Real-time vehicle entry monitoring and gate control with live CCTV feeds."
        },
        tablet: {
          image: "/projects/traffix-tablet.png",
          label: "Tablet UI Templates",
          description: "Responsive UI templates optimized for touch interactions on field devices."
        },
        mobile: {
          image: "/projects/traffix-mobile.png",
          label: "Mobile Incident Logs",
          description: "Critical access logs and alerts formatted for on-the-go quick reading."
        }
      },
      architecture: {
        description: "Built with a token-based Design System foundation using Next.js and Tailwind CSS. The UI is completely modular, separating foundation tokens, utility classes, and business components.",
        features: [
          "Custom Design System (Traffix UI) with 150+ tokens",
          "Interactive UI Template Gallery with viewport testing",
          "Real-time data visualization layouts",
          "Comprehensive developer documentation",
          "Light, Dark, and System theme support"
        ]
      }
    },
    th: {
      slug: "traffix",
      title: "Traffix",
      subtitle: "ระบบบริหารจัดการจราจรอัจฉริยะ",
      description: "ระบบบริหารจัดการจราจรและวิเคราะห์ข้อมูลแบบ Real-time พร้อม Design System ฉบับเต็มและ UI Template Gallery สำหรับนักพัฒนา",
      heroImage: "/projects/traffix-preview.png",
      tags: ["Next.js", "React", "Tailwind CSS", "Design System"],
      liveUrl: "http://localhost:3000",
      role: "Frontend Developer",
      timeline: "ปี 2026",
      coreStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      challenge: {
        title: "ความท้าทาย",
        content: "โครงสร้างพื้นฐานของ Smart City ต้องการ Dashboard ที่สามารถติดตามทางแยกและจัดการอุบัติเหตุได้แบบ Real-time นอกจากนี้ เพื่อให้ประสบการณ์ของนักพัฒนาเป็นไปในทิศทางเดียวกัน เราจึงต้องสร้าง Design System (Traffix UI) ที่มี Token มากกว่า 150 ตัวและ Component กว่า 25 แบบ เพื่อควบคุมมาตรฐาน UI ของแอปพลิเคชันในอนาคตทั้งหมด"
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
        { id: "architecture", title: "ระบบ Design System" }
      ],
      responsive: {
        desktop: {
          image: ["/projects/traffix-entry.png", "/projects/traffix-desktop.png"],
          label: "หน้า Dashboard ควบคุมการเข้า-ออก",
          description: "ระบบจัดการประตูทางเข้าพร้อมภาพจากกล้องวงจรปิดแบบสด และการลงทะเบียนยานพาหนะ"
        },
        tablet: {
          image: "/projects/traffix-tablet.png",
          label: "หน้าเว็บสำหรับแท็บเล็ต",
          description: "UI Template ที่ปรับเปลี่ยนขนาดรองรับการสัมผัส (Touch) เหมาะสำหรับการใช้งานภาคสนาม"
        },
        mobile: {
          image: "/projects/traffix-mobile.png",
          label: "หน้าจอมือถือ",
          description: "กระชับและเข้าถึงง่าย ขอดูประวัติการตรวจจับได้รวดเร็ว เหมาะกับเจ้าหน้าที่ใช้งานขณะตั้งด่าน"
        }
      },
      architecture: {
        description: "พัฒนาระบบบนโครงสร้างแบบ Token-based ด้วย Next.js และ Tailwind CSS โดยแยกส่วนข้อมูลเชิง Foundation, Utilities และ Components ออกจากกันอย่างชัดเจน",
        features: [
          "ระบบ Design System (Traffix UI) แบบ Custom พร้อม Token 150+ รายการ",
          "หน้า UI Template Gallery แบบ Interactive สำหรับทดสอบ Viewport",
          "โครงสร้างการแสดงผลข้อมูลแบบ Real-time",
          "เอกสารคู่มือสำหรับนักพัฒนาแบบครบถ้วนตามมาตรฐาน",
          "รองรับโหมดสีแบบ Light, Dark และ System"
        ]
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
  },
  ch7election: {
    en: {
      slug: "ch7election",
      title: "CH7 Election 2026",
      subtitle: "Official Election Visualization",
      description: "Developed the responsive UI for Thailand's 2026 Election real-time results, featuring an interactive Hexagon map representing constituencies.",
      heroImage: "/projects/ch7-election-preview.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.ch7.com/election2569/results/constituency",
      role: "Frontend Developer (UI/Map)",
      timeline: "2026",
      coreStack: ["React", "TypeScript", "Tailwind CSS"],
      challenge: {
        title: "The Challenge",
        content: "The goal was to visualize complex, real-time election data intuitively for a massive audience during a major event. A key challenge was rendering the 400 constituency seats as an interactive hexagon map that remains performant and responsive across desktop, tablet, and mobile devices."
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" }
      ],
      responsive: {
        desktop: {
          image: "/projects/ch7-election-preview.png",
          label: "Desktop View",
          description: "Full parliament hexagon map with real-time party leaderboard on the side."
        },
        tablet: {
          image: "/projects/ch7-election-tablet.png",
          label: "Tablet View",
          description: "Adjusted layout to maintain hexagon readability while stacking the leaderboard."
        },
        mobile: {
          image: "/projects/ch7-election-mobile.png",
          label: "Mobile View",
          description: "Optimized mobile experience tailored for fast, on-the-go results updates."
        }
      }
    },
    th: {
      slug: "ch7election",
      title: "เลือกตั้ง 69 อนาคตประเทศไทย",
      subtitle: "ระบบรายงานผลแบบเวลาจริง",
      description: "พัฒนา UI แผนที่รังผึ้ง (Hexagon Map) สำหรับรายงานผลการเลือกตั้งปี 2569 พร้อมรองรับ Responsive",
      heroImage: "/projects/ch7-election-preview.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://www.ch7.com/election2569/results/constituency",
      role: "Frontend Developer (ส่วน UI)",
      timeline: "ปี 2026",
      coreStack: ["React", "TypeScript", "Tailwind CSS"],
      challenge: {
        title: "ความท้าทาย",
        content: "เป้าหมายหลักคือการนำเสนอข้อมูลผลการนับคะแนนที่ซับซ้อนให้ผู้ชมเข้าใจได้ง่ายแบบเรียลไทม์ ความท้าทายสำคัญคือการทำ UI รูปหกเหลี่ยมแสดงถึง ส.ส. ทั้ง 400 เขตให้ทำงานได้ลื่นไหล ไม่กระตุก และแสดงผลได้อย่างสมบูรณ์ในทุกขนาดหน้าจอ ทั้งคอมพิวเตอร์และมือถือ"
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" }
      ],
      responsive: {
        desktop: {
          image: "/projects/ch7-election-preview.png",
          label: "หน้าจอ Desktop",
          description: "แสดงแผนที่สภาแบบเต็มรูปแบบ พร้อมตารางสรุปคะแนนของแต่ละพรรคการเมือง"
        },
        tablet: {
          image: "/projects/ch7-election-tablet.png",
          label: "หน้าจอ Tablet",
          description: "ปรับรูปแบบเพื่อให้อ่านข้อมูลจากหกเหลี่ยมได้ชัดเจน"
        },
        mobile: {
          image: "/projects/ch7-election-mobile.png",
          label: "หน้าจอ Mobile",
          description: "หน้าจอขนาดเล็กที่ออกแบบมาให้ดูผลคะแนนแบบฉับไวระหว่างการเดินทาง"
        }
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
