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
      description:
        "Prototype of a full-cycle Hospital Management System redesigned from legacy HOSxP. Covers EMR, doctor examination, pharmacy queue with drug allergy alerts, and real-time billing.",
      heroImage: "/projects/careos-preview-v3.png",
      tags: ["Next.js", "React", "CSS Modules", "UI Refactor", "Responsive"],
      liveUrl: "http://localhost:8081",
      role: "Lead Frontend Developer",
      timeline: "Jan 2025 – Present",
      coreStack: ["Next.js", "React", "TypeScript", "CSS Modules"],
      challenge: {
        title: "The Challenge",
        content:
          "The legacy HOSxP system was outdated, difficult to navigate, and lacked modern responsive design. Healthcare staff spent excessive time navigating complex interfaces, leading to reduced efficiency and potential errors in patient care. Our goal was to completely redesign the UI/UX while maintaining data integrity and backward compatibility with existing hospital workflows.",
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
      ],
      responsive: {
        desktop: {
          image: "/projects/careos-desktop-v3.png",
          label: "Desktop View",
          description:
            "Full dashboard with sidebar navigation, patient queue, and detailed examination forms",
        },
        tablet: {
          image: "/projects/careos-tablet-v3.png",
          label: "Tablet View",
          description:
            "Optimized for bedside use with larger touch targets and simplified navigation",
        },
        mobile: {
          image: "/projects/careos-mobile-v3.png",
          label: "Mobile View",
          description:
            "Quick access to patient alerts and pharmacy queue on the go",
        },
      },
      architecture: {
        description:
          "Built with Next.js and React, transforming a legacy system into a modern, static-optimized frontend. UI styling is scoped using CSS Modules for predictable and maintainable designs.",
        features: [
          "Static Site Generation with Next.js",
          "Scoped component styling with CSS Modules",
          "Session-based authentication with role permissions",
          "Real-time drug interaction checking",
          "Responsive Flexbox and Grid layout system",
        ],
        codeSnippet: `// React Component with CSS Modules
import styles from './PatientSearch.module.css';
import { useState } from 'react';

export function PatientSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  
  const handleInput = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        className={styles.searchInput}
        value={query}
        onChange={handleInput} 
        placeholder="ค้นหาผู้ป่วย..." 
      />
    </div>
  );
}`,
      },
      metrics: {
        performance: 85,
        accessibility: 92,
        bestPractices: 88,
        seo: 90,
      },
    },
    th: {
      slug: "careos",
      title: "CareOS",
      subtitle: "ระบบบริหารจัดการโรงพยาบาล",
      description:
        "ต้นแบบระบบจัดการโรงพยาบาลครบวงจร รีดีไซน์จาก HOSxP ให้ทันสมัย ครอบคลุมเวชระเบียน ห้องตรวจ ระบบคิวยาพร้อมแจ้งเตือนอาการแพ้ และการเงิน",
      heroImage: "/projects/careos-preview-v3.png",
      tags: ["Next.js", "React", "CSS Modules", "UI Refactor", "Responsive"],
      liveUrl: "http://localhost:8081",
      role: "Lead Frontend Developer",
      timeline: "ม.ค. 2025 – ปัจจุบัน",
      coreStack: ["Next.js", "React", "TypeScript", "CSS Modules"],
      challenge: {
        title: "ความท้าทาย",
        content:
          "ระบบ HOSxP เดิมนั้นล้าสมัย ใช้งานยาก บุคลากรทางการแพทย์ต้องเสียเวลามากในการใช้งาน Interface ที่ซับซ้อน ทำให้ประสิทธิภาพลดลงและอาจเกิดความผิดพลาดในการดูแลผู้ป่วย เป้าหมายของเราคือการออกแบบ UI/UX ใหม่ทั้งหมด โดยยังคงรักษาความถูกต้องของข้อมูลและความเข้ากันได้กับ Workflow ที่มีอยู่",
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
      ],
      responsive: {
        desktop: {
          image: "/projects/careos-desktop-v3.png",
          label: "หน้าจอ Desktop",
          description:
            "Dashboard เต็มรูปแบบพร้อม Sidebar navigation, คิวผู้ป่วย และฟอร์มตรวจโดยละเอียด",
        },
        tablet: {
          image: "/projects/careos-tablet-v3.png",
          label: "หน้าจอ Tablet",
          description:
            "ปรับให้เหมาะกับการใช้งานข้างเตียงผู้ป่วย มีปุ่มใหญ่และ Navigation ที่ง่ายขึ้น",
        },
        mobile: {
          image: "/projects/careos-mobile-v3.png",
          label: "หน้าจอ Mobile",
          description:
            "เข้าถึงการแจ้งเตือนผู้ป่วยและคิวยาได้อย่างรวดเร็วขณะเคลื่อนที่",
        },
      },
      architecture: {
        description:
          "สถาปัตยกรรมพัฒนาบน Next.js และ React โดยเปลี่ยนจากระบบเดิมที่เป็น Legacy ให้กลายเป็น Frontend ที่ทันสมัยและโหลดเร็วขึ้น ใช้ CSS Modules ในการจัดการ Style เพื่อป้องกันไม่ให้คลาสชนกัน",
        features: [
          "สร้างหน้าเว็บความเร็วสูงด้วยเทคโนโลยีของ Next.js",
          "การจัดการคลาสแยกย่อยระดับ Component ด้วย CSS Modules",
          "ระบบ authentication ตาม session พร้อมสิทธิ์ตาม role",
          "ตรวจสอบปฏิกิริยายาแบบ real-time",
          "ระบบ layout ด้วย Responsive Flexbox และ Grid",
        ],
        codeSnippet: `// React Component with CSS Modules
import styles from './PatientSearch.module.css';
import { useState } from 'react';

export function PatientSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  
  const handleInput = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input 
        type="text" 
        className={styles.searchInput}
        value={query}
        onChange={handleInput} 
        placeholder="ค้นหาผู้ป่วย..." 
      />
    </div>
  );
}`,
      },
      metrics: {
        performance: 85,
        accessibility: 92,
        bestPractices: 88,
        seo: 90,
      },
    },
  },
  traffix: {
    en: {
      slug: "traffix",
      title: "Traffix",
      subtitle: "LPR & Automated Gate Access System",
      description:
        "Advanced LPR (License Plate Recognition) system designed for automated premises access. Features membership/visitor verification and real-time session management for gate control at Channel 7.",
      heroImage: "/projects/traffix-preview.png",
      tags: ["LPR", "OCR", "FastAPI", "Next.js", "IoT", "MQTT", "Real-time"],
      liveUrl: "http://localhost:3000",
      role: "Full Stack Developer",
      timeline: "Jun 2025 – Present",
      coreStack: ["Next.js", "FastAPI", "PostgreSQL", "MQTT", "Redis"],
      challenge: {
        title: "The Challenge",
        content:
          "Integrating high-speed OCR plate recognition with real-time membership databases and physical gate hardware (IoT). The system must handle high-volume traffic during peak hours at Channel 7 with near-zero latency for authentication and barrier control, ensuring smooth entry for authorized vehicles while maintaining security.",
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
      ],
      responsive: {
        desktop: {
          image: [
            "/projects/traffix-entry.png",
            "/projects/traffix-desktop.png",
          ],
          label: "Entry Operations Dashboard",
          description:
            "Real-time vehicle entry monitoring and gate control with live CCTV feeds.",
        },
        tablet: {
          image: "/projects/traffix-tablet.png",
          label: "Tablet UI Templates",
          description:
            "Responsive UI templates optimized for touch interactions on field devices.",
        },
        mobile: {
          image: "/projects/traffix-mobile.png",
          label: "Mobile Incident Logs",
          description:
            "Critical access logs and alerts formatted for on-the-go quick reading.",
        },
      },
      architecture: {
        description:
          "A robust full-stack architecture integrating IoT hardware and scalable data services. The frontend harnesses Next.js 15 and React 19 with a custom Tailwind 4 Design System, while the backend relies on FastAPI, Celery, and PostgreSQL. IoT communication is managed via Mosquitto and Node-RED.",
        features: [
          "Frontend: Next.js 15 (React 19), Tailwind V4, Redux Toolkit, Zod",
          "Backend: FastAPI (Python 3.11), SQLAlchemy 2, Celery",
          "IoT & Real-time: Mosquitto MQTT, Node-RED, AIOMQTT",
          "Infrastructure: PostgreSQL 15, Redis 7, MinIO",
          "Data Procressing: Fuzzy Matching (Levenshtein)",
        ],
      },
    },
    th: {
      slug: "traffix",
      title: "Traffix",
      subtitle: "ระบบอ่านป้ายทะเบียนและควบคุมประตูอัตโนมัติ",
      description:
        "ระบบอ่านป้ายทะเบียน (LPR) อัจฉริยะสำหรับควบคุมการเข้า-ออกอาคาร ตรวจสอบสมาชิกและผู้มาติดต่อ พร้อมระบบจัดการสถานะรถยนต์ (Session) และสั่งเปิดไม้กั้นอัตโนมัติสำหรับพื้นที่ช่อง 7",
      heroImage: "/projects/traffix-preview.png",
      tags: ["LPR", "FastAPI", "Next.js", "IoT", "MQTT", "Real-time"],
      liveUrl: "http://localhost:3000",
      role: "Full Stack Developer",
      timeline: "มิ.ย. 2025 – ปัจจุบัน",
      coreStack: ["Next.js", "FastAPI", "PostgreSQL", "MQTT", "Redis"],
      challenge: {
        title: "ความท้าทาย",
        content:
          "การเชื่อมต่อระบบประมวลผลวิดีโอ (OCR) ความเร็วสูงเข้ากับฐานข้อมูลสมาชิกและฮาร์ดแวร์ประตู (IoT) แบบ Real-time เพื่อรองรับการจราจรในช่วงเร่งด่วนของสถานีโทรทัศน์ช่อง 7 โดยต้องมีความแม่นยำสูงสุดในการระบุป้ายทะเบียนและสั่งการไม้กั้นแบบไร้ความหน่วง เพื่อความสะดวกและปลอดภัยของพื้นที่",
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
      ],
      responsive: {
        desktop: {
          image: [
            "/projects/traffix-entry.png",
            "/projects/traffix-desktop.png",
          ],
          label: "หน้า Dashboard ควบคุมการเข้า-ออก",
          description:
            "ระบบจัดการประตูทางเข้าพร้อมภาพจากกล้องวงจรปิดแบบสด และการลงทะเบียนยานพาหนะ",
        },
        tablet: {
          image: "/projects/traffix-tablet.png",
          label: "หน้าเว็บสำหรับแท็บเล็ต",
          description:
            "UI Template ที่ปรับเปลี่ยนขนาดรองรับการสัมผัส (Touch) เหมาะสำหรับการใช้งานภาคสนาม",
        },
        mobile: {
          image: "/projects/traffix-mobile.png",
          label: "หน้าจอมือถือ",
          description:
            "กระชับและเข้าถึงง่าย ขอดูประวัติการตรวจจับได้รวดเร็ว เหมาะกับเจ้าหน้าที่ใช้งานขณะตั้งด่าน",
        },
      },
      architecture: {
        description:
          "สถาปัตยกรรม Full-stack รอบรับ IoT และระบบข้อมูลแบบ Real-time ขนาดใหญ่ ฝั่ง Frontend ใช้ Next.js 15 (React 19) ร่วมกับ Tailwind 4 ฝั่ง Backend เป็น FastAPI และการจัดการ Background Tasks ด้วย Celery การสื่อสารระดับฮาร์ดแวร์ใช้ Mosquitto และ Node-RED",
        features: [
          "Frontend: Next.js 15 (React 19), Tailwind V4, Redux Toolkit, Zod",
          "Backend: FastAPI (Python 3.11), SQLAlchemy 2, Celery",
          "IoT & Real-time: Mosquitto MQTT Broker, Node-RED, AIOMQTT",
          "Infrastructure: Docker Compose, PostgreSQL 15, Redis 7, MinIO",
          "Data Processing: เทียบค่าความเหมือนป้ายทะเบียนด้วย Levenshtein",
        ],
      },
    },
  },
  "banthi-hospital": {
    en: {
      slug: "banthi-hospital",
      title: "Banthi Hospital",
      subtitle: "Official Hospital Website",
      description:
        "A modern, accessible, and responsive official website for Banthi Hospital, Lamphun. Featuring patient services, doctor schedules, and hospital news.",
      heroImage: "/projects/banthi-hospital-desktop.png",
      tags: ["HTML5", "CSS3", "Vanilla JS", "PHP", "Responsive"],
      liveUrl: "http://localhost:8082",
      role: "Frontend",
      timeline: "Aug 2025 – Present",
      coreStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      challenge: {
        title: "The Challenge",
        content:
          "The hospital needed a digital presence that is accessible to all demographics, particularly the elderly. The website had to be fast, easy to navigate, and clearly display essential information like operating hours and department contacts.",
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
      ],
      responsive: {
        desktop: {
          image: "/projects/banthi-hospital-desktop.png",
          label: "Desktop View",
          description:
            "Clear navigation and prominent calls-to-action for essential hospital services",
        },
        tablet: {
          image: "/projects/banthi-hospital-tablet.png",
          label: "Tablet View",
          description:
            "Optimized layout for reading news and viewing schedules on touch devices",
        },
        mobile: {
          image: "/projects/banthi-hospital-mobile.png",
          label: "Mobile View",
          description:
            "Quick access to emergency contacts and directions for on-the-go users",
        },
      },
      metrics: {
        performance: 92,
        accessibility: 98,
        bestPractices: 90,
        seo: 95,
      },
    },
    th: {
      slug: "banthi-hospital",
      title: "โรงพยาบาลบ้านธิ",
      subtitle: "เว็บไซต์หลักโรงพยาบาล",
      description:
        "เว็บไซต์หลักอย่างเป็นทางการของโรงพยาบาลบ้านธิ จังหวัดลำพูน ที่ทันสมัย รองรับการใช้งานทุกอุปกรณ์ และเข้าถึงง่าย อัดแน่นด้วยบริการสำหรับผู้ป่วย ตารางตรวจของแพทย์ และข่าวสารโรงพยาบาล",
      heroImage: "/projects/banthi-hospital-desktop.png",
      tags: ["HTML5", "CSS3", "Vanilla JS", "PHP", "Responsive"],
      liveUrl: "http://localhost:8082",
      role: "Frontend",
      timeline: "ส.ค. 2025 – ปัจจุบัน",
      coreStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      challenge: {
        title: "ความท้าทาย",
        content:
          "โรงพยาบาลต้องการตัวตนบนโลกออนไลน์ที่สามารถเข้าถึงได้โดยทุกกลุ่มคน โดยเฉพาะผู้สูงอายุ เว็บไซต์ต้องโหลดเร็ว นำทางง่าย และแสดงข้อมูลที่จำเป็น เช่น เวลาทำการ และวิธีการติดต่อแผนกต่างๆ ได้อย่างชัดเจน",
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
      ],
      responsive: {
        desktop: {
          image: "/projects/banthi-hospital-desktop.png",
          label: "หน้าจอ Desktop",
          description:
            "มีเมนูนำทางที่ชัดเจนและปุ่มกดที่โดดเด่นเพื่อเข้าถึงบริการสำคัญของโรงพยาบาล",
        },
        tablet: {
          image: "/projects/banthi-hospital-tablet.png",
          label: "หน้าจอ Tablet",
          description:
            "ปรับรูปแบบการจัดวางให้อ่านข่าวสารและดูตารางตรวจบนอุปกรณ์สัมผัสได้ดีขึ้น",
        },
        mobile: {
          image: "/projects/banthi-hospital-mobile.png",
          label: "หน้าจอ Mobile",
          description:
            "เข้าถึงเบอร์ติดต่อฉุกเฉินและแผนที่ได้อย่างรวดเร็วสำหรับผู้ใช้งานผ่านมือถือ",
        },
      },
      metrics: {
        performance: 92,
        accessibility: 98,
        bestPractices: 90,
        seo: 95,
      },
    },
  },
  ch7election: {
    en: {
      slug: "ch7election",
      title: "CH7 Election 2026",
      subtitle: "Official Election Visualization",
      description:
        "Developed the responsive UI for Thailand's 2026 Election real-time results, featuring an interactive Hexagon map representing constituencies.",
      heroImage: "/projects/ch7-election-preview.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "D3.js",
        "Design Token",
        "Atomic Design",
        "Responsive",
        "Real-time",
      ],
      liveUrl: "https://www.ch7.com/election2569/results/constituency",
      role: "Frontend Developer (UI/Map)",
      timeline: "Dec 2025 – Feb 2026",
      coreStack: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
      challenge: {
        title: "The Challenge",
        content:
          "The goal was to visualize complex, real-time election data intuitively for a massive audience during a major event. A key challenge was rendering the 400 constituency seats as an interactive hexagon map that remains performant and responsive across desktop, tablet, and mobile devices.",
      },
      sections: [
        { id: "challenge", title: "The Challenge" },
        { id: "responsive", title: "Responsive Execution" },
      ],
      responsive: {
        desktop: {
          image: "/projects/ch7-election-preview.png",
          label: "Desktop View",
          description:
            "Full parliament hexagon map with real-time party leaderboard on the side.",
        },
        tablet: {
          image: "/projects/ch7-election-tablet.png",
          label: "Tablet View",
          description:
            "Adjusted layout to maintain hexagon readability while stacking the leaderboard.",
        },
        mobile: {
          image: "/projects/ch7-election-mobile.png",
          label: "Mobile View",
          description:
            "Optimized mobile experience tailored for fast, on-the-go results updates.",
        },
      },
    },
    th: {
      slug: "ch7election",
      title: "เลือกตั้ง 69 อนาคตประเทศไทย",
      subtitle: "ระบบรายงานผลแบบเวลาจริง",
      description:
        "พัฒนา UI แผนที่รังผึ้ง (Hexagon Map) สำหรับรายงานผลการเลือกตั้งปี 2569 พร้อมรองรับ Responsive",
      heroImage: "/projects/ch7-election-preview.png",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "D3.js",
        "Design Token",
        "Atomic Design",
        "Responsive",
        "Real-time",
      ],
      liveUrl: "https://www.ch7.com/election2569/results/constituency",
      role: "Frontend Developer (ส่วน UI)",
      timeline: "ธ.ค. 2568 – ก.พ. 2569",
      coreStack: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
      challenge: {
        title: "ความท้าทาย",
        content:
          "เป้าหมายหลักคือการนำเสนอข้อมูลผลการนับคะแนนที่ซับซ้อนให้ผู้ชมเข้าใจได้ง่ายแบบเรียลไทม์ ความท้าทายสำคัญคือการทำ UI รูปหกเหลี่ยมแสดงถึง ส.ส. ทั้ง 400 เขตให้ทำงานได้ลื่นไหล ไม่กระตุก และแสดงผลได้อย่างสมบูรณ์ในทุกขนาดหน้าจอ ทั้งคอมพิวเตอร์และมือถือ",
      },
      sections: [
        { id: "challenge", title: "ความท้าทาย" },
        { id: "responsive", title: "การรองรับทุกหน้าจอ" },
      ],
      responsive: {
        desktop: {
          image: "/projects/ch7-election-preview.png",
          label: "หน้าจอ Desktop",
          description:
            "แสดงแผนที่สภาแบบเต็มรูปแบบ พร้อมตารางสรุปคะแนนของแต่ละพรรคการเมือง",
        },
        tablet: {
          image: "/projects/ch7-election-tablet.png",
          label: "หน้าจอ Tablet",
          description: "ปรับรูปแบบเพื่อให้อ่านข้อมูลจากหกเหลี่ยมได้ชัดเจน",
        },
        mobile: {
          image: "/projects/ch7-election-mobile.png",
          label: "หน้าจอ Mobile",
          description:
            "หน้าจอขนาดเล็กที่ออกแบบมาให้ดูผลคะแนนแบบฉับไวระหว่างการเดินทาง",
        },
      },
    },
  },
};

export function getProject(
  slug: string,
  lang: "en" | "th",
): ProjectData | undefined {
  return projects[slug]?.[lang];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projects);
}
