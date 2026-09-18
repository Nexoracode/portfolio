export const personalInfo = {
  name: 'علی محمدی',
  roles: ['React Developer', 'Frontend Engineer', 'UI/UX Enthusiast'],
  tagline: 'من تجربه‌های وب سریع، زیبا و روان می‌سازم.',
  location: 'تهران، ایران',
  email: 'maddahi698@gmail.com',
  resumeUrl: '/resume.pdf',
  avatar: '/avatar.jpg',
}

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/', icon: 'linkedin' },
  { name: 'Telegram', url: 'https://t.me/', icon: 'send' },
  { name: 'Email', url: 'mailto:maddahi698@gmail.com', icon: 'mail' },
]

export const navLinks = [
  { label: 'خانه', href: '#hero' },
  { label: 'درباره من', href: '#about' },
  { label: 'مهارت‌ها', href: '#skills' },
  { label: 'سوابق', href: '#experience' },
  { label: 'پروژه‌ها', href: '#projects' },
  { label: 'تماس', href: '#contact' },
]

export const about = {
  heading: 'درباره من',
  paragraphs: [
    'توسعه‌دهنده فرانت‌اند با بیش از ۳ سال تجربه در ساخت رابط‌های کاربری مدرن و واکنش‌گرا با React و اکوسیستم جاوااسکریپت.',
    'علاقه‌مند به جزئیات، انیمیشن‌های روان و کدی تمیز و قابل نگهداری. همیشه در حال یادگیری تکنولوژی‌های جدید هستم.',
  ],
  image: '/about.jpg',
  stats: [
    { label: 'سال تجربه', value: '3+' },
    { label: 'پروژه انجام‌شده', value: '25+' },
    { label: 'مشتری راضی', value: '15+' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML / CSS', level: 95 },
    ],
  },
  {
    category: 'Animation & Tools',
    items: [
      { name: 'Framer Motion', level: 85 },
      { name: 'GSAP', level: 70 },
      { name: 'Three.js', level: 60 },
      { name: 'Vite', level: 85 },
      { name: 'Git', level: 80 },
    ],
  },
]

export const experience = [
  {
    role: 'توسعه‌دهنده فرانت‌اند ارشد',
    company: 'شرکت فناوری الف',
    period: '۱۴۰۲ - اکنون',
    description:
      'توسعه و نگهداری داشبورد اصلی محصول با React و TypeScript، بهبود عملکرد و کاهش زمان بارگذاری تا ۴۰٪.',
    tags: ['React', 'TypeScript', 'Redux'],
  },
  {
    role: 'توسعه‌دهنده فرانت‌اند',
    company: 'استارتاپ ب',
    period: '۱۴۰۰ - ۱۴۰۲',
    description:
      'پیاده‌سازی رابط کاربری اپلیکیشن وب از صفر با Next.js و طراحی سیستم کامپوننت‌های قابل استفاده مجدد.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    role: 'توسعه‌دهنده وب جونیور',
    company: 'آژانس دیجیتال ج',
    period: '۱۳۹۹ - ۱۴۰۰',
    description: 'ساخت وب‌سایت‌های شرکتی و فروشگاهی با HTML, CSS, JavaScript و WordPress.',
    tags: ['JavaScript', 'WordPress', 'CSS'],
  },
]

export const projects = [
  {
    title: 'داشبورد مدیریت فروش',
    description: 'داشبورد تحلیلی با نمودارهای زنده، فیلترهای پیشرفته و طراحی واکنش‌گرا.',
    image: '/projects/dashboard.jpg',
    tags: ['React', 'TypeScript', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'فروشگاه آنلاین',
    description: 'پلتفرم فروشگاهی کامل با سبد خرید، درگاه پرداخت و پنل مدیریت محصولات.',
    image: '/projects/shop.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'اپلیکیشن مدیریت وظایف',
    description: 'ابزار مدیریت تسک با قابلیت درگ‌اند‌دراپ، همکاری تیمی و اعلان لحظه‌ای.',
    image: '/projects/tasks.jpg',
    tags: ['React', 'Framer Motion', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

export const contact = {
  heading: 'بیایید همکاری کنیم',
  subheading: 'برای همکاری، سوال یا فقط یک سلام، پیام بدید.',
}
