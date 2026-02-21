export type Language = 'en' | 'th';

export const translations = {
  en: {
    hero: {
      greeting: "Hi, I’m Ratchanon.",
      role: "Frontend Developer turning Figma concepts into responsive, production-ready web interfaces.",
      description: "Focused on component modularity, type-safe integration, and building real-time dashboards with Next.js & Tailwind.",
      downloadResume: "Download Resume",
    },
    expertise: {
      title: "Core Capabilities",
      items: {
        design: {
          title: "Design Engineering",
          desc: "Bridging the gap between design and code. Translating Figma to pixel-perfect UI using HTML5, CSS3, and jQuery."
        },
        interactive: {
          title: "Interactive Data",
          desc: "Building complex dashboards using HTML5 Canvas, D3/ApexCharts, and WebSockets."
        },
        architecture: {
          title: "Scalable Architecture",
          desc: "Crafting modular, type-safe codebases with Next.js, emphasizing performance and maintainability."
        }
      }
    },
    projects: {
      careos: {
        title: "CareOS",
        description: "Full-cycle Hospital Management System redesigned from legacy HOSxP. Covers EMR, doctor examination, pharmacy queue with drug allergy alerts, and real-time billing.",
      },
      traffix: {
        title: "Traffix",
        description: "Real-time traffic analytics and incident management system with a comprehensive custom Design System and UI Template gallery.",
      },
      "banthi-hospital": {
        title: "Banthi Hospital",
        description: "A modern, accessible, and responsive official website for Banthi Hospital, Lamphun. Featuring patient services, doctor schedules, and hospital news.",
      },
      ch7election: {
        title: "CH7 Election 2026",
        description: "Developed the responsive UI for Thailand's 2026 Election real-time results, featuring an interactive Hexagon map representing constituencies and detailed regional dashboard layouts.",
      }
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          role: "Software Developer",
          company: "BBTV New Media",
          period: "Jun 2025 – Present",
          details: [
            "Developed responsive, component-driven dashboards using Next.js and Tailwind CSS.",
            "Built pixel-perfect, fully responsive UI components using HTML5 and CSS3, ensuring consistent rendering across browsers.",
            "Implemented real-time data visualization connecting WebSocket streams to React state.",
            "Collaborated with designers to deliver accessible interfaces for AI-powered Smart Parking and Warehouse systems."
          ]
        },
        {
          role: "Software Developer Intern",
          company: "Banana Coding",
          period: "Nov 2024 – Feb 2025",
          details: [
            "Constructed interactive analytics dashboards using ApexCharts and Angular.",
            "Engineered frontend validation logic for bulk Excel data imports.",
            "Established strict linting rules and unit testing patterns to ensure code maintainability."
          ]
        }
      ],
      education: {
        title: "Education",
        degree: "B.Eng. Computer Engineering",
        university: "Rajamangala University of Technology Lanna",
        gpa: "3.29",
        period: "2021 – 2025"
      }
    },
    contact: {
      title: "Get in Touch",
      cta: "Open to frontend roles and collaboration opportunities.",
      email: "Email Me",
      resume: "Download Resume",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "Phone",
      location: "Location"
    },
    common: {
      viewProject: "View Case Study"
    }
  },
  th: {
    hero: {
      greeting: "สวัสดีครับ ผมรัชชานนท์",
      role: "Frontend Developer ผู้เชี่ยวชาญการแปลงดีไซน์ Figma เป็นเว็บไซต์ที่พร้อมใช้งานจริง",
      description: "เน้นการเขียนโค้ดแบบ Modular, Type-safe และการเชื่อมต่อข้อมูล Real-time ด้วย Next.js และ Tailwind",
      downloadResume: "ดาวน์โหลดเรซูเม่",
    },
    expertise: {
      title: "ความสามารถหลัก",
      items: {
        design: {
          title: "Design Engineering",
          desc: "เปลี่ยนงานออกแบบจาก Figma เป็นโค้ด Pixel-perfect ด้วย HTML5, CSS3 และ jQuery"
        },
        interactive: {
          title: "Interactive Data",
          desc: "พัฒนา Dashboard ซับซ้อนด้วย HTML5 Canvas และการเชื่อมต่อข้อมูล Real-time"
        },
        architecture: {
          title: "Scalable Architecture",
          desc: "เขียนโค้ดแบบ Modular เน้นดูแลรักษาง่ายและรองรับการขยายตัวด้วย Next.js"
        }
      }
    },
    projects: {
      careos: {
        title: "CareOS",
        description: "ระบบจัดการโรงพยาบาลครบวงจร รีดีไซน์จาก HOSxP ให้ทันสมัย ครอบคลุมเวชระเบียน ห้องตรวจ ระบบคิวยาพร้อมแจ้งเตือนอาการแพ้ และการเงิน",
      },
      traffix: {
        title: "Traffix",
        description: "ระบบบริหารจัดการจราจรและวิเคราะห์ข้อมูลแบบ Real-time พร้อม Design System ฉบับเต็มและ UI Template Gallery สำหรับนักพัฒนา",
      },
      "banthi-hospital": {
        title: "โรงพยาบาลบ้านธิ",
        description: "เว็บไซต์หลักอย่างเป็นทางการของโรงพยาบาลบ้านธิ จังหวัดลำพูน ที่ทันสมัย รองรับการใช้งานทุกอุปกรณ์ และเข้าถึงง่าย อัดแน่นด้วยบริการสำหรับผู้ป่วย ตารางตรวจของแพทย์ และข่าวสารโรงพยาบาล",
      },
      ch7election: {
        title: "CH7 Election 2026",
        description: "พัฒนา UI ระบบรายงานผลตารางและแผนที่การเลือกตั้งปี 2569 (Hexagon Map) เพื่อแสดงที่นั่ง ส.ส. แบ่งเขตทั่วประเทศแบบเรียลไทม์ พร้อมการออกแบบที่รองรับ Responsive ทุกขนาดหน้าจอ",
      }
    },
    experience: {
      title: "ประสบการณ์ทำงาน",
      jobs: [
        {
          role: "Software Developer",
          company: "BBTV New Media",
          period: "มิ.ย. 2025 – ปัจจุบัน",
          details: [
            "พัฒนา Dashboard แบบ Component-driven ด้วย Next.js และ Tailwind CSS",
            "สร้าง UI ที่สวยงามและรองรับ Responsive เต็มรูปแบบด้วย HTML5 และ CSS3",
            "เชื่อมต่อ WebSocket เข้ากับ React State เพื่อแสดงผลข้อมูล Real-time อย่างลื่นไหล",
            "ทำงานร่วมกับทีมดีไซน์เพื่อสร้าง Interface สำหรับระบบ Smart Parking และ Warehouse AI"
          ]
        },
        {
          role: "Software Developer Intern",
          company: "Banana Coding",
          period: "พ.ย. 2024 – ก.พ. 2025",
          details: [
            "สร้าง Dashboard แสดงผลข้อมูลเชิงลึกแบบ Interactive ด้วย ApexCharts และ Angular",
            "พัฒนาระบบ Validation ตรวจสอบข้อมูล Excel ฝั่ง Frontend ก่อนอัปโหลด",
            "กำหนดมาตรฐาน Code Quality ด้วยการทำ Linting และ Unit Testing"
          ]
        }
      ],
      education: {
        title: "การศึกษา",
        degree: "วิศวกรรมคอมพิวเตอร์ (ปริญญาตรี)",
        university: "มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา",
        gpa: "3.29",
        period: "2021 – 2025"
      }
    },
    contact: {
      title: "ติดต่อ",
      cta: "เปิดรับโอกาสร่วมงานด้าน Frontend และการพัฒนาโปรเจกต์",
      email: "ส่งอีเมล",
      resume: "ดาวน์โหลดเรซูเม่",
      linkedin: "LinkedIn",
      github: "GitHub",
      phone: "เบอร์โทรศัพท์",
      location: "ที่อยู่"
    },
    common: {
      viewProject: "ดูรายละเอียด"
    }
  }
};
