# Resume Portfolio – Project Rules

## Stack & Tech
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion (primary) + GSAP (for complex scroll effects)
- **Icons:** Lucide React
- **Fonts:** Load via @fontsource — فونت اصلی: "Plus Jakarta Sans" (Latin) + "Vazirmatn" (فارسی)
- **3D / Visual Wow:** Three.js (background particle mesh) یا Lottie React (for micro-animations)
- **Smooth Scroll:** Lenis (smooth scrolling library)
- **Scroll Reveal:** Framer Motion `useInView` + `whileInView`

## Animation Rules
- هر section باید با یک `motion.div` و `initial/animate/whileInView` ظاهر شود
- از `staggerChildren` برای لیست‌ها (skills, projects) استفاده کن
- Cursor custom اگر desktop بود (گرادیان دایره‌ای که دنبال موس میاد)
- Hero section: text typewriter effect با Framer Motion یا `react-type-animation`
- Navbar: blur glass morphism با `backdrop-filter`
- Scroll progress bar در بالای صفحه
- تمام hover stateها smooth باشند (0.3s ease)
- `prefers-reduced-motion` رو رعایت کن — اگه user motion رو disable کرده، انیمیشن‌ها حذف بشن

## Design System
- **Palette:**
  - Background: `#0A0A0F` (near black با رنگ آبی خیلی تیره)
  - Primary Accent: `#6C63FF` (بنفش الکتریکی)
  - Secondary Accent: `#00D9FF` (سیان نئون)
  - Surface: `#12121A`
  - Text Primary: `#F0F0FF`
  - Text Muted: `#6B6B8A`
- **Border Radius:** 12px برای کارت‌ها، 999px برای badge‌ها
- **Shadows:** glow effect با رنگ accent (box-shadow: 0 0 30px rgba(108,99,255,0.3))
- هیچ‌وقت از رنگ سفید خالص استفاده نکن

## File Structure

src/
├── components/
│ ├── layout/
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ ├── sections/
│ │ ├── Hero.jsx
│ │ ├── About.jsx
│ │ ├── Skills.jsx
│ │ ├── Projects.jsx
│ │ ├── Experience.jsx
│ │ └── Contact.jsx
│ └── ui/
│ ├── AnimatedText.jsx
│ ├── GlowCard.jsx
│ ├── CustomCursor.jsx
│ ├── ScrollProgress.jsx
│ └── ParticleBackground.jsx
├── data/
│ └── resume.js ← تمام محتوا اینجاست، هیچ متن hard-code‌ای در کامپوننت نباشد
├── hooks/
│ └── useScrollAnimation.js
└── App.jsx


## Section Order
1. **Hero** — اسم بزرگ + تایتل + CTA دکمه + پارتیکل یا mesh پشت‌زمینه
2. **About** — معرفی کوتاه + عکس با border glow
3. **Skills** — گرید با progress bar‌های انیمیشن‌دار یا آیکون‌های floating
4. **Experience** — timeline عمودی با خط وسط + کارت‌های چپ/راست
5. **Projects** — کارت‌های 3D tilt (react-parallax-tilt) با لینک و تگ‌های تکنولوژی
6. **Contact** — فرم minimal + آیکون‌های شبکه اجتماعی

## Code Rules
- فقط Functional Component و hooks
- هر کامپوننت زیر 150 خط باشد
- prop-types یا TypeScript interface برای همه props
- هیچ inline style ای — فقط Tailwind class
- تمام انیمیشن‌ها در خود کامپوننت با Framer Motion تعریف بشن، نه فایل جداگانه
- موبایل-فرست: همه section‌ها responsive باشند

## Performance
- از `React.lazy` و `Suspense` برای بارگذاری sections استفاده کن
- تصاویر با `loading="lazy"`
- Three.js background فقط در desktop رندر بشه (window.innerWidth > 768)