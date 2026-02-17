export type Language = 'en' | 'th';

export const translations = {
  en: {
    hero: {
      greeting: "Hey, I’m Ratchanon.",
      role: "A Software Developer who bridges complex Backend logic with Pixel-Perfect Frontend.",
      description: "Specialized in Next.js, AI Integration, and building scalable web applications.",
      downloadResume: "Download Resume",
    },
    projects: {
      traffix: {
        title: "Traffix",
        description: "Smart Parking AI Platform – Next.js & Python",
      },
      warehouse: {
        title: "Warehouse System",
        description: "Real-time Inventory System – WebSocket & NestJS",
      }
    },
    common: {
      viewProject: "View Project"
    }
  },
  th: {
    hero: {
      greeting: "สวัสดีครับ, ผม รัชชานนท์",
      role: "นักพัฒนาซอฟต์แวร์ผู้เชื่อมโยงตรรกะ Backend ที่ซับซ้อนเข้ากับ Frontend ที่สวยงาม",
      description: "เชียวชาญด้าน Next.js, AI Integration และการสร้าง Web Application ที่รองรับการขยายตัว",
      downloadResume: "ดาวน์โหลดเรซูเม่",
    },
    projects: {
      traffix: {
        title: "Traffix",
        description: "ระบบจอดรถอัจฉริยะด้วย AI – Next.js & Python",
      },
      warehouse: {
        title: "Warehouse System",
        description: "ระบบจัดการสต็อกสินค้าแบบเรียลไทม์ – WebSocket & NestJS",
      }
    },
    common: {
      viewProject: "ดูโปรเจกต์"
    }
  }
};
