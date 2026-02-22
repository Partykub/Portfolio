export type Language = "en" | "th";

export const translations = {
  en: {
    hero: {
      greeting: "Ratchanon Kunyodying",
      role: "Frontend Developer",
      description:
        "Specializing in developing web applications that bring designs to life while handling complex systems across UI and logic from dashboards to systems integrated with IoT and hardware.",
      downloadResume: "Download Resume",
      availableForWork: "Available for work",
    },
    expertise: {
      title: "Core Capabilities",
      items: {
        design: {
          title: "Design Engineering",
          desc: "Bridging the gap between design and code. Translating Figma to pixel-perfect UI using HTML5, CSS3, and jQuery.",
        },
        interactive: {
          title: "Interactive Data",
          desc: "Building complex dashboards using HTML5 Canvas, D3/ApexCharts, and WebSockets.",
        },
        architecture: {
          title: "Scalable Architecture",
          desc: "Crafting modular, type-safe codebases with Next.js, emphasizing performance and maintainability.",
        },
      },
    },
    projects: {
      careos: {
        title: "CareOS",
        description:
          "Full-cycle Hospital Management System redesigned from legacy HOSxP. Covers EMR, doctor examination, pharmacy queue with drug allergy alerts, and real-time billing.",
      },
      traffix: {
        title: "Traffix",
        description:
          "Advanced LPR system with membership/visitor verification, automated gate control for Channel 7, and real-time vehicle session management.",
      },
      "banthi-hospital": {
        title: "Banthi Hospital",
        description:
          "A modern, accessible, and responsive official website for Banthi Hospital, Lamphun. Featuring patient services, doctor schedules, and hospital news.",
      },
      ch7election: {
        title: "CH7 Election 2026",
        description:
          "Developed the responsive UI for Thailand's 2026 Election real-time results, featuring an interactive Hexagon map representing constituencies and detailed regional dashboard layouts.",
      },
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Software Developer",
          company: "BBTV New Media",
          period: "Jun 2025 – Present",
          details: [
            "Find solutions to business problems using machine learning vision technology.",
            "Develop Proof of Concept (POC) to validate proposed solutions before production.",
            "Build production software after POC approval, such as the Traffix project (LPR system).",
            "Design and implement full-stack web applications using Next.js, React, and modern frontend technologies.",
          ],
        },
        {
          role: "Software Developer Intern",
          company: "Banana Coding",
          period: "Nov 2024 – Feb 2025",
          details: [
            "Constructed interactive analytics dashboards using ApexCharts and Angular.",
            "Engineered frontend validation logic for bulk Excel data imports.",
            "Established strict linting rules and unit testing patterns to ensure code maintainability.",
          ],
        },
      ],
      education: {
        title: "Education",
        degree: "B.Eng. Computer Engineering",
        university: "Rajamangala University of Technology Lanna",
        gpa: "3.29",
        period: "2021 – 2025",
      },
    },
    contact: {
      title: "Get in Touch",
      cta: "Open to frontend roles and collaboration opportunities.",
      email: "Email Me",
      resume: "Download Resume",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone",
      location: "Location",
      city: "Bangkok",
      connect: "Connect",
      follow: "Follow",
    },
    common: {
      viewProject: "View Case Study",
    },
    sections: {
      techStack: "Tech Stack",
      softSkills: "Soft Skills",
      projects: "Featured Projects",
    },
    skills: {
      soft: {
        problemSolving: "Problem Solving",
        teamCollaboration: "Team Collaboration",
        criticalThinking: "Critical Thinking",
        fastLearner: "Fast Learner",
        effectiveCommunication: "Effective Communication",
      },
    },
  },
  th: {
    hero: {
      greeting: "รัชชานนท์ คุณยศยิ่ง",
      role: "Frontend Developer",
      description:
        "เชี่ยวชาญการพัฒนา Web Application ที่ตรงตาม Design และรองรับระบบที่ซับซ้อนทั้งฝั่ง UI และ Logic ตั้งแต่ Dashboard ไปจนถึงระบบที่ต้องต่อกับ IoT และ Hardware",
      downloadResume: "ดาวน์โหลดเรซูเม่",
      availableForWork: "เปิดรับงาน",
    },
    expertise: {
      title: "ความสามารถหลัก",
      items: {
        design: {
          title: "Design Engineering",
          desc: "เปลี่ยนงานออกแบบจาก Figma เป็นโค้ด Pixel-perfect ด้วย HTML5, CSS3 และ jQuery",
        },
        interactive: {
          title: "Interactive Data",
          desc: "พัฒนา Dashboard ซับซ้อนด้วย HTML5 Canvas และการเชื่อมต่อข้อมูล Real-time",
        },
        architecture: {
          title: "Scalable Architecture",
          desc: "เขียนโค้ดแบบ Modular เน้นดูแลรักษาง่ายและรองรับการขยายตัวด้วย Next.js",
        },
      },
    },
    projects: {
      careos: {
        title: "CareOS",
        description:
          "ระบบจัดการโรงพยาบาลครบวงจร รีดีไซน์จาก HOSxP ให้ทันสมัย ครอบคลุมเวชระเบียน ห้องตรวจ ระบบคิวยาพร้อมแจ้งเตือนอาการแพ้ และการเงิน",
      },
      traffix: {
        title: "Traffix",
        description:
          "ระบบอ่านป้ายทะเบียนอัจฉริยะ พร้อมตรวจสอบสมาชิก/ผู้มาติดต่อ ควบคุมประตูอัตโนมัติของช่อง 7 และจัดการ Session ตรวจสอบสถานะรถยนต์แบบ Real-time",
      },
      "banthi-hospital": {
        title: "Banthi Hospital",
        description:
          "เว็บไซต์หลักอย่างเป็นทางการของโรงพยาบาลบ้านธิ จังหวัดลำพูน ที่ทันสมัย รองรับการใช้งานทุกอุปกรณ์ และเข้าถึงง่าย อัดแน่นด้วยบริการสำหรับผู้ป่วย ตารางตรวจของแพทย์ และข่าวสารโรงพยาบาล",
      },
      ch7election: {
        title: "CH7 Election 2026",
        description:
          "พัฒนา UI ระบบรายงานผลตารางและแผนที่การเลือกตั้งปี 2569 (Hexagon Map) เพื่อแสดงที่นั่ง ส.ส. แบ่งเขตทั่วประเทศแบบเรียลไทม์ พร้อมการออกแบบที่รองรับ Responsive ทุกขนาดหน้าจอ",
      },
    },
    experience: {
      title: "ประสบการณ์ทำงาน",
      jobs: [
        {
          role: "Software Developer",
          company: "BBTV New Media",
          period: "มิ.ย. 2025 – ปัจจุบัน",
          details: [
            "หา Solution เพื่อแก้ปัญหาทางธุรกิจโดยใช้เทคโนโลยี Machine Learning Vision",
            "ทำ Proof of Concept (POC) เพื่อทดสอบความเป็นไปได้ของโซลูชันก่อนพัฒนาจริง",
            "สร้าง Software Product จริงหลังจาก POC ผ่าน เช่น โปรเจกต์ Traffix (ระบบ LPR)",
            "ออกแบบและพัฒนา Web Application แบบ Full-stack ด้วย Next.js, React และเทคโนโลยี Frontend สมัยใหม่",
          ],
        },
        {
          role: "Software Developer Intern",
          company: "Banana Coding",
          period: "พ.ย. 2024 – ก.พ. 2025",
          details: [
            "สร้าง Dashboard แสดงผลข้อมูลเชิงลึกแบบ Interactive ด้วย ApexCharts และ Angular",
            "พัฒนาระบบ Validation ตรวจสอบข้อมูล Excel ฝั่ง Frontend ก่อนอัปโหลด",
            "กำหนดมาตรฐาน Code Quality ด้วยการทำ Linting และ Unit Testing",
          ],
        },
      ],
      education: {
        title: "การศึกษา",
        degree: "วิศวกรรมคอมพิวเตอร์ (ปริญญาตรี)",
        university: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
        gpa: "3.29",
        period: "2021 – 2025",
      },
    },
    contact: {
      title: "ติดต่อ",
      cta: "เปิดรับโอกาสร่วมงานด้าน Frontend และการพัฒนาโปรเจกต์",
      email: "ส่งอีเมล",
      resume: "ดาวน์โหลดเรซูเม่",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "เบอร์โทรศัพท์",
      location: "ที่อยู่",
      city: "กรุงเทพฯ",
      connect: "เชื่อมต่อ",
      follow: "ติดตาม",
    },
    common: {
      viewProject: "ดูรายละเอียด",
    },
    sections: {
      techStack: "เทคโนโลยีที่ใช้",
      softSkills: "ทักษะเสริม",
      projects: "ผลงานโปรเจกต์",
    },
    skills: {
      soft: {
        problemSolving: "การแก้ปัญหา",
        teamCollaboration: "การทำงานเป็นทีม",
        criticalThinking: "การคิดวิเคราะห์",
        fastLearner: "เรียนรู้เร็ว",
        effectiveCommunication: "สื่อสารอย่างมีประสิทธิภาพ",
      },
    },
  },
};
