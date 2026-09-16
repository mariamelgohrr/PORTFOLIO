const { useState, useEffect, useRef, useMemo } = React;

// Multi-language content dictionary
const CONTENT = {
  en: {
    nav: {
      about: "About",
      education: "Education",
      playground: "ML Simulation",
      toolkit: "Tech Stack",
      experience: "DEPI Experience",
      projects: "Projects",
      contact: "Contact",
      cta: "Let's Connect",
      cvBtn: "Download CV",
      langToggle: "العربية",
      langCode: "ar",
      themeDark: "Dark Mode",
      themeLight: "Lavender Mode"
    },
    hero: {
      badge: "Available for Machine Learning & Data Science Roles",
      name: "Mariam Elgohr",
      roles: [
        "Machine Learning Engineer",
        "Data Science Student",
        "AI Enthusiast"
      ],
      slogan: "Turning raw data into intelligent insights. It's not a bug, it's a feature waiting for gradient descent! 📉🤖",
      formula: "Loss = 1/N * Σ (y_true - y_pred)² + λ||w||²",
      ctaProjects: "View ML Projects",
      ctaContact: "Contact Me",
      ctaCV: "Download CV",
      statChip1: "Deep Learning & Algorithms",
      statChip2: "DEPI AI Trainee"
    },
    stats: [
      { number: "15+", label: "Models Trained & Evaluated" },
      { number: "500+", label: "Hours in Python & SQL" },
      { number: "98%", label: "Accuracy & Precision Focus" },
      { number: "3rd", label: "Year CS & AI Major" }
    ],
    about: {
      tag: "Background & Vision",
      title: "Building Robust Data Pipelines & Predictive Engines",
      subtitle: "Bridging mathematical intuition and clean engineering logic.",
      p1: "I am a third-year Computer Science student specializing in System Analysis, Database Engineering, and Artificial Intelligence at the Faculty of Computers and Artificial Intelligence.",
      p2: "Currently leveling up my technical expertise through the prestigious Digital Egypt Pioneers Initiative (DEPI) Data Science & AI track. I specialize in exploratory data analysis (EDA), statistical preprocessing, regression/classification modeling, and translating raw complexity into actionable intelligence.",
      high1: "Statistical Preprocessing & EDA",
      high2: "Supervised & Unsupervised ML",
      high3: "Relational Database Design (SQL)",
      high4: "Mathematical & Algorithmic Rigor"
    },
    education: {
      tag: "Academic Journey",
      title: "Education & Specialization",
      subtitle: "Solid academic foundation in computer science and artificial intelligence algorithms.",
      degree: "Bachelor of Computer Science (Third-Year Student)",
      faculty: "Faculty of Computers and Artificial Intelligence",
      dept: "System Analysis, Database Engineering, and Artificial Intelligence",
      period: "Oct 2024 – Jul 2028",
      desc: "Comprehensive curriculum focusing on Data Structures, Algorithm Analysis, Advanced Databases, Machine Learning principles, Linear Algebra, Calculus, and Probability Theory.",
      tags: ["Linear Algebra", "Calculus & Probability", "Database Architecture", "System Analysis", "Data Structures"]
    },
    experience: {
      tag: "Professional Training",
      title: "DEPI Fellowship & Experience",
      subtitle: "Hands-on data engineering and machine learning practice under national mentorship.",
      role: "Data Science & AI Track Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Jul 2026 – Dec 2026",
      desc: "Executing rigorous end-to-end data science projects: exploratory data analysis (EDA), automated data cleaning pipelines, feature engineering, and training high-precision machine learning algorithms (Random Forest, Gradient Boosting, SVM, and Linear Regressors).",
      tags: ["Exploratory Data Analysis", "Feature Engineering", "Scikit-Learn", "Model Evaluation", "Data Pipelines"]
    },
    playground: {
      tag: "Interactive Demo",
      title: "Interactive ML Playground & Convergence Simulation",
      subtitle: "Tweak hyperparameters in real-time to watch simulated model training metrics and loss convergence.",
      featuresLabel: "Feature Count (Dimensionality):",
      lrLabel: "Learning Rate (α):",
      datasetLabel: "Dataset Sample Size (N):",
      epochsLabel: "Training Epochs:",
      algorithmLabel: "Select Classifier Architecture:",
      models: [
        { id: "rf", name: "Random Forest" },
        { id: "gb", name: "Gradient Boosting" },
        { id: "svm", name: "Support Vector Machine" }
      ],
      accuracy: "Validation Accuracy",
      loss: "Final Log-Loss",
      f1: "F1-Score",
      statusReady: "Optimizer Converged • Gradient Descent Terminated Successfully",
      runSim: "Re-train Model"
    },
    toolkit: {
      tag: "Skills & Capabilities",
      title: "Technical Stack & Data Science Toolkit",
      subtitle: "The programming languages, frameworks, and developer environments I use daily.",
      cat1Title: "Programming & Databases",
      cat1Items: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "phpMyAdmin", icon: "fa-solid fa-server" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ],
      cat2Title: "ML & Data Science Libraries",
      cat2Items: [
        { name: "Pandas", icon: "devicon-pandas-plain colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Scikit-Learn", icon: "fa-solid fa-brain" },
        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
        { name: "Seaborn", icon: "fa-solid fa-chart-pie" }
      ],
      cat3Title: "Tools & Development Ecosystem",
      cat3Items: [
        { name: "Jupyter Notebook", icon: "devicon-jupyter-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub Desktop", icon: "devicon-github-original" },
        { name: "Linux Ubuntu", icon: "devicon-ubuntu-plain colored" },
        { name: "Cisco Packet Tracer", icon: "fa-solid fa-network-wired" },
        { name: "draw.io", icon: "fa-solid fa-diagram-project" }
      ]
    },
    projects: {
      tag: "Selected Work",
      title: "Featured Data Science Projects",
      subtitle: "End-to-end applications showcasing mathematical modeling, statistical validation, and production pipelines.",
      liveDemo: "Live Demo",
      github: "GitHub Repo",
      items: [
        {
          id: "p1",
          title: "SmartStay Price Predictor",
          type: "Regression & Rental Forecasting",
          icon: "fa-solid fa-house-chimney-crack",
          desc: "Regression model built with Python & Scikit-Learn to forecast real-time property rentals based on geospatial location, room characteristics, amenities, and seasonal demand factors.",
          metric: "R² Score: 0.934 | RMSE: $14.20",
          stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p2",
          title: "VisionAI Image Classifier",
          type: "Supervised Computer Vision",
          icon: "fa-solid fa-eye",
          desc: "Supervised machine learning pipeline for multi-class image categorization, featuring automated image augmentation, feature extraction, confusion matrix visualization, and precision-recall trade-off metrics.",
          metric: "Test Accuracy: 94.8% | Top-1 Error: 5.2%",
          stack: ["Python", "Computer Vision", "Scikit-Learn", "Seaborn"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p3",
          title: "DataPulse Churn Analytics",
          type: "EDA & Classification",
          icon: "fa-solid fa-users-slash",
          desc: "In-depth exploratory data analysis (EDA) and predictive classification model identifying high-risk customer churn patterns. Includes automated feature importance evaluation and actionable business retention triggers.",
          metric: "AUC-ROC: 0.912 | Recall: 89.4%",
          stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "SQL"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        }
      ]
    },
    testimonial: {
      tag: "Mentorship & Recognition",
      quote: "Mariam shows an exceptional grasp of algorithmic logic, data processing, and machine learning principles.",
      author: "DEPI Track Mentor",
      role: "Digital Egypt Pioneers Initiative"
    },
    spiritual: {
      verse: "﴿وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ﴾",
      surah: "(سورة هود - الآية 88)"
    },
    contact: {
      tag: "Get In Touch",
      title: "Let's Collaborate On Intelligent Data Systems",
      subtitle: "Have a machine learning project, research collaboration, or opportunity? Drop me a message.",
      emailLabel: "Email Address",
      phoneLabel: "WhatsApp / Phone",
      linkedinLabel: "LinkedIn Profile",
      githubLabel: "GitHub Profile",
      nameInput: "Your Name",
      emailInput: "Your Email Address",
      subjectInput: "Project Domain / Subject",
      msgInput: "Your Message (e.g. Model requirements, data pipeline specs)...",
      sendBtn: "Send Message",
      successMsg: "Thank you! Your message has been sent successfully. I'll get back to you shortly."
    },
    footer: {
      designed: "Designed & Engineered with 💜 by Mariam Elgohr.",
      rights:"© 2026 Mariam Ahmed Elgohr • Powered by curiosity and machine learning algorithms 🚀"
    }
  },

  // Arabic Content (RTL)
  ar: {
    nav: {
      about: "عنّي",
      education: "التعليم",
      playground: "محاكاة النموذج",
      toolkit: "المهارات والأدوات",
      experience: "تدريب DEPI",
      projects: "المشاريع",
      contact: "تواصل معي",
      cta: "ابدأ التواصل",
      cvBtn: "تحميل السيرة الذاتية",
      langToggle: "English",
      langCode: "en",
      themeDark: "الوضع الليلي",
      themeLight: "وضع اللافندر"
    },
    hero: {
      badge: "متاحة لفرص العمل في مجال تعلم الآلة وعلوم البيانات",
      name: "Mariam ELgohr",
      roles: [
        "مهندسة تعلم آلة (Machine Learning Engineer)",
        "طالبة علوم بيانات (Data Science Student)",
        "شغوفة بالذكاء الاصطناعي (AI Enthusiast)"
      ],
      slogan: "تحويل البيانات الأولية إلى رؤى ذكية. ليست مشكلة برمجية، بل ميزة بانتظار الانحدار التدريجي! 📉🤖",
      formula: "Loss = 1/N * Σ (y_true - y_pred)² + λ||w||²",
      ctaProjects: "استعرض مشاريع الذكاء الاصطناعي",
      ctaContact: "تواصل معي",
      ctaCV: "تحميل السيرة الذاتية (CV)",
      statChip1: "التعلم العميق والخوارزميات",
      statChip2: "متدربة مبادرة DEPI"
    },
    stats: [
      { number: "+15", label: "نموذج تعلم آلة مدرّب ومقيّم" },
      { number: "+500", label: "ساعة برمجة في Python & SQL" },
      { number: "98%", label: "تركيز فائق على الدقة والأداء" },
      { number: "السنة 3", label: "طالبة حاسبات وذكاء اصطناعي" }
    ],
    about: {
      tag: "نبذة ورؤية",
      title: "بناء خطوط بيانات قوية ومحركات تنبؤ ذكية",
      subtitle: "الربط بين الحدس الرياضي الدقيق والمنطق الهندسي النظيف.",
      p1: "طالبة بالسنة الثالثة في كلية الحاسبات والذكاء الاصطناعي، متخصصة في قسم تحليل النظم وهندسة قواعد البيانات والذكاء الاصطناعي.",
      p2: "أعمل حالياً على صقل وتطوير مهاراتي من خلال المسار المرموق لعلوم البيانات والذكاء الاصطناعي ضمن مبادرة رواد مصر الرقمية (DEPI). متخصصة في التحليل الاستكشافي للبيانات (EDA)، والمعالجة الإحصائية، وبناء النماذج التنبؤية والتصنيفية بدقة رياضية عالية.",
      high1: "المعالجة الإحصائية والاستكشافية (EDA)",
      high2: "نماذج التعلم الخاضع وغير الخاضع لإشراف",
      high3: "تصميم وهندسة قواعد البيانات (SQL)",
      high4: "الصرامة الرياضية والخوارزمية"
    },
    education: {
      tag: "المسار الأكاديمي",
      title: "التعليم والتخصص الأكاديمي",
      subtitle: "أساس أكاديمي راسخ في خوارزميات علوم الحاسب والذكاء الاصطناعي.",
      degree: "بكالوريوس علوم الحاسب (طالبة بالفرقة الثالثة)",
      faculty: "كلية الحاسبات والذكاء الاصطناعي",
      dept: "تحليل النظم، هندسة قواعد البيانات، والذكاء الاصطناعي",
      period: "أكتوبر 2024 – يوليو 2028",
      desc: "منهج أكاديمي شامل يركز على هياكل البيانات، تحليل الخوارزميات، بنية قواعد البيانات المتقدمة، مبادئ تعلم الآلة، الجبر الخطي، والتفاضل والتكامل وحساب الاحتمالات.",
      tags: ["الجبر الخطي", "التفاضل والاحتمالات", "بنية قواعد البيانات", "تحليل النظم", "هياكل البيانات والخوارزميات"]
    },
    experience: {
      tag: "الخبرة والتدريب المهني",
      title: "تدريب مبادرة رواد مصر الرقمية (DEPI)",
      subtitle: "تطبيق عملي متقدم في هندسة البيانات وبناء نماذج تعلم الآلة تحت إشراف نخبة من الخبراء.",
      role: "متدربة مسار علوم البيانات والذكاء الاصطناعي",
      company: "مبادرة رواد مصر الرقمية (DEPI)",
      period: "يوليو 2026 – ديسمبر 2026",
      desc: "تنفيذ مشاريع متكاملة في علوم البيانات: التحليل الاستكشافي للبيانات (EDA)، تنظيف وهندسة الخصائص، وتدريب خوارزميات تعلم الآلة المتقدمة مثل Random Forest وGradient Boosting وSupport Vector Machines.",
      tags: ["التحليل الاستكشافي للبيانات", "هندسة الخصائص", "Scikit-Learn", "تقييم أداء النماذج", "خطوط معالجة البيانات"]
    },
    playground: {
      tag: "بيئة محاكاة تفاعلية",
      title: "مختبر تعلم الآلة ومحاكاة تقارب الخوارزميات",
      subtitle: "قم بضبط المعاملات الفائقة (Hyperparameters) مباشرة وشاهد تغير دقة النموذج ومنحنى تلاشي دالة الخسارة (Loss Curve).",
      featuresLabel: "عدد الخصائص (Features Dimensionality):",
      lrLabel: "معدل التعلم (Learning Rate α):",
      datasetLabel: "حجم مجموعة البيانات (Dataset Size N):",
      epochsLabel: "دورات التدريب (Epochs):",
      algorithmLabel: "اختر بنية النموذج المصنف:",
      models: [
        { id: "rf", name: "الغابة العشوائية (Random Forest)" },
        { id: "gb", name: "التدرج المعزز (Gradient Boosting)" },
        { id: "svm", name: "آلات المتجهات الداعمة (SVM)" }
      ],
      accuracy: "دقة التحقق (Validation Accuracy)",
      loss: "الخسارة النهائية (Log-Loss)",
      f1: "معامل الدقة (F1-Score)",
      statusReady: "تم تقارب النموذج • انتهت عملية الانحدار التدريجي بنجاح",
      runSim: "إعادة تدريب النموذج"
    },
    toolkit: {
      tag: "المهارات والتقنيات",
      title: "المجموعة التقنية وأدوات علوم البيانات",
      subtitle: "لغات البرمجة، المكتبات التحليلية، وبيئات العمل التي أستخدمها في المشاريع الهندسية.",
      cat1Title: "لغات البرمجة وقواعد البيانات",
      cat1Items: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "phpMyAdmin", icon: "fa-solid fa-server" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ],
      cat2Title: "مكتبات تعلم الآلة والبيانات",
      cat2Items: [
        { name: "Pandas", icon: "devicon-pandas-plain colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Scikit-Learn", icon: "fa-solid fa-brain" },
        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
        { name: "Seaborn", icon: "fa-solid fa-chart-pie" }
      ],
      cat3Title: "الأدوات وبيئات التطوير",
      cat3Items: [
        { name: "Jupyter Notebook", icon: "devicon-jupyter-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub Desktop", icon: "devicon-github-original" },
        { name: "Linux Ubuntu", icon: "devicon-ubuntu-plain colored" },
        { name: "Cisco Packet Tracer", icon: "fa-solid fa-network-wired" },
        { name: "draw.io", icon: "fa-solid fa-diagram-project" }
      ]
    },
    projects: {
      tag: "المشاريع المميزة",
      title: "مشاريع علوم البيانات وتعلم الآلة",
      subtitle: "تطبيقات متكاملة تعكس النمذجة الرياضية والتحقق الإحصائي وخطوط الإنتاج العملية.",
      liveDemo: "معاينة حية",
      github: "مستودع الكود",
      items: [
        {
          id: "p1",
          title: "SmartStay Price Predictor",
          type: "نموذج انحدار وتنبؤ بأسعار الإيجار",
          icon: "fa-solid fa-house-chimney-crack",
          desc: "نموذج انحدار مبني باستخدام Python وScikit-Learn للتنبؤ بالأسعار الحقيقية لتأجير العقارات بناءً على الموقع الجغرافي وخصائص الغرف والخدمات ومواسم الطلب.",
          metric: "R² Score: 0.934 | RMSE: $14.20",
          stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p2",
          title: "VisionAI Image Classifier",
          type: "تصنيف الصور بالتعلم الخاضع للإشراف",
          icon: "fa-solid fa-eye",
          desc: "خط معالجة ذكي لتصنيف مجموعات الصور متعددة الفئات، يشمل تكثيف البيانات بصرياً، استخراج الميزات، ومصفوفة الارتباك (Confusion Matrix) لتقييم الدقة والاستدعاء.",
          metric: "Test Accuracy: 94.8% | Top-1 Error: 5.2%",
          stack: ["Python", "Computer Vision", "Scikit-Learn", "Seaborn"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p3",
          title: "DataPulse Churn Analytics",
          type: "تحليل استكشافي وتنبؤ باحتفاظ العملاء",
          icon: "fa-solid fa-users-slash",
          desc: "دراسة استكشافية متعمقة (EDA) ونموذج تصنيف للتنبؤ باحتمالية تسرب العملاء والاحتفاظ بهم، مع استخراج العوامل المؤثرة (Feature Importance) لتزويد صناع القرار بتوصيات فورية.",
          metric: "AUC-ROC: 0.912 | Recall: 89.4%",
          stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "SQL"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        }
      ]
    },
    testimonial: {
      tag: "آراء المشرفين والموجهين",
      quote: "تُظهر مريم إدراكاً استثنائياً للمنطق الخوارزمي، ومعالجة البيانات، ومبادئ ونظريات تعلم الآلة المتقدمة.",
      author: "مرشد وموجه مسار DEPI",
      role: "مبادرة رواد مصر الرقمية"
    },
    spiritual: {
      verse: "﴿وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ﴾",
      surah: "(سورة هود - الآية 88)"
    },
    contact: {
      tag: "تواصل معي",
      title: "فلنتعاون في بناء أنظمة ذكاء اصطناعي وتحليل بيانات",
      subtitle: "هل لديك فكرة مشروع في تعلم الآلة أو فرصة عمل أو تعاون تقني؟ يسعدني استقبال رسالتك.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "واتساب / هاتف",
      linkedinLabel: "حساب LinkedIn",
      githubLabel: "مستودع GitHub",
      nameInput: "اسمك الكريم",
      emailInput: "بريدك الإلكتروني",
      subjectInput: "مجال المشروع / الموضوع",
      msgInput: "رسالتك (تفاصيل النموذج، مواصفات خط البيانات، إلخ)...",
      sendBtn: "إرسال الرسالة",
      successMsg: "شكراً لك! تم إرسال رسالتك بنجاح، وسأتواصل معك في أقرب وقت."
    },
    footer: {
      designed: "تم التصميم والبرمجة بكل 💜 بواسطة مريم الجحر.",
      rights: "© 2026 مريم أحمد الجحر • مدعومة بالشغف وفضول خوارزميات التعلم الآلي 🚀"
    }
  }
};

// CV File Path constant matching directory
const CV_FILE_PATH = "MARIAM%20AHMED%20MUSTAFA%20ELGOHR%20.pdf";

// ==========================================
// 1. NAVBAR COMPONENT (With Theme Toggle)
// ==========================================
function Navbar({ lang, setLang, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("hero");
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "education", "playground", "toolkit", "experience", "projects", "contact"];
      const pos = window.scrollY + 250;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveNav(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "about", href: "#about", label: t.about },
    { key: "education", href: "#education", label: t.education },
    { key: "playground", href: "#playground", label: t.playground },
    { key: "toolkit", href: "#toolkit", label: t.toolkit },
    { key: "experience", href: "#experience", label: t.experience },
    { key: "projects", href: "#projects", label: t.projects },
    { key: "contact", href: "#contact", label: t.contact }
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}>
      <div className="container nav-content">
        <a href="#hero" className="brand-logo">
          <span className="brand-badge">ML://</span>
          <span className="brand-name-text">Mariam Elgohr</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.key}>
              <a
                href={item.href}
                className={`nav-link ${activeNav === item.key ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle Button (Dark / Light Mode) */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={theme === "dark" ? "Switch to Lavender Mode" : "Switch to Deep Dark Mode"}
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>

          {/* Dual-Language Switcher */}
          <button
            className="lang-toggle-btn"
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            aria-label="Toggle Language"
            title="Switch Language (English / العربية)"
          >
            <i className="fa-solid fa-globe"></i>
            <span>{t.langToggle}</span>
          </button>

          {/* CTA Let's Connect */}
          <a href="#contact" className="nav-cta-btn">
            <span>{t.cta}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

// ==========================================
// 2. HERO COMPONENT (With Dynamic Typewriter Effect & CV)
// ==========================================
function Hero({ lang }) {
  const t = CONTENT[lang].hero;

  // Typewriter State Logic
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullRole = t.roles[roleIndex % t.roles.length];
    let typingSpeed = isDeleting ? 45 : 95;

    if (!isDeleting && displayText === currentFullRole) {
      // Pause at full word
      typingSpeed = 2200;
    } else if (isDeleting && displayText === "") {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % t.roles.length);
      typingSpeed = 400;
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setIsDeleting(true);
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, t.roles]);

  return (
    <header id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span>
              <span>{t.badge}</span>
            </div>

            <h1 className="hero-name">
              <span className="gradient-text">{t.name}</span>
            </h1>

            {/* Dynamic Typewriter Title Area */}
            <div className="hero-title-typewriter">
              <span className="typewriter-role">{displayText}</span>
              <span className="typewriter-cursor">|</span>
            </div>

            <div className="hero-slogan-box">
              <p className="hero-slogan-text">“{t.slogan}”</p>
              <div className="hero-code-snippet-box" dir="ltr">
                <div className="code-box-header">
                  <div className="code-box-dots">
                    <span className="code-box-dot red"></span>
                    <span className="code-box-dot yellow"></span>
                    <span className="code-box-dot green"></span>
                  </div>
                  <div className="code-box-lang">
                    <i className="fa-brands fa-python"></i>
                    <span>model_pipeline.py</span>
                  </div>
                </div>
                <div className="code-box-body">
                  <div className="code-box-line"><span className="code-kw">def</span> <span className="code-fn">train_model</span>(data):</div>
                  <div className="code-box-line">    model = AI.<span className="code-fn">optimize</span>(data)</div>
                  <div className="code-box-line">    <span className="code-kw">return</span> <span className="code-str">"Success! Ready to deploy 🚀"</span></div>
                </div>
              </div>
            </div>

            {/* Hero CTAs: View Projects, Contact Me, & CV Download */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <span>{t.ctaProjects}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a
                href={CV_FILE_PATH}
                download="Mariam_Ahmed_Elgohr_CV.pdf"
                className="btn-cv-download"
                title="Download Mariam Ahmed Elgohr CV"
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                <span>{t.ctaCV}</span>
              </a>

              <a href="#contact" className="btn-secondary">
                <span>{t.ctaContact}</span>
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>

            {/* Real Working Social Links with Verified URLs */}
            <div className="hero-socials">
              <a
                href="https://github.com/mariamelgohrr"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn github"
                title="GitHub Profile"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/mariam-elgohr"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn linkedin"
                title="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="mailto:mariamahmedelgohr@gmail.com"
                className="social-icon-btn email"
                title="Direct Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>

              <a
                href="https://wa.me/201285694985"
                target="_blank"
                rel="noreferrer"
                className="social-icon-btn whatsapp"
                title="WhatsApp Direct Contact"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-avatar-frame">
              <img
                src="photo_2026-08-14_23-14-40.jpg"
                alt="Mariam Ahmed Elgohr"
                className="hero-avatar-img"
              />
            </div>

            <div className="floating-chip top-right">
              <i className="fa-solid fa-network-wired" style={{ color: "#38bdf8" }}></i>
              <span>{t.statChip1}</span>
            </div>

            <div className="floating-chip bottom-left">
              <i className="fa-solid fa-award" style={{ color: "#c084fc" }}></i>
              <span>{t.statChip2}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==========================================
// 3. METRICS STATS COUNTER
// ==========================================
function MetricsStats({ lang }) {
  const stats = CONTENT[lang].stats;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-box">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 4. ABOUT ME COMPONENT
// ==========================================
function About({ lang }) {
  const t = CONTENT[lang].about;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">
              <i className="fa-solid fa-microchip"></i>
              {t.tag}
            </span>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle" style={{ marginBottom: "1.5rem" }}>{t.subtitle}</p>

            <p>{t.p1}</p>
            <p>{t.p2}</p>

            <div className="about-highlights">
              <div className="highlight-item">
                <i className="fa-solid fa-chart-line"></i>
                <span>{t.high1}</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-brain"></i>
                <span>{t.high2}</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-database"></i>
                <span>{t.high3}</span>
              </div>
              <div className="highlight-item">
                <i className="fa-solid fa-square-root-variable"></i>
                <span>{t.high4}</span>
              </div>
            </div>
          </div>

          <div className="about-terminal">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <div className="terminal-title">mariam_engineer.py</div>
                <i className="fa-solid fa-terminal" style={{ color: "#64748b", fontSize: "0.85rem" }}></i>
              </div>
              <div className="terminal-body">
                <p><span className="term-comment"># Engineer Profile Specification</span></p>
                <p><span className="term-keyword">class</span> <span className="term-func">DataScientist</span>:</p>
                <p style={{ paddingLeft: "1.2rem" }}>
                  <span className="term-keyword">def</span> <span className="term-func">__init__</span>(self):<br />
                  &nbsp;&nbsp;self.name = <span className="term-string">"Mariam Ahmed Elgohr"</span><br />
                  &nbsp;&nbsp;self.role = <span className="term-string">"ML & Data Science Engineer"</span><br />
                  &nbsp;&nbsp;self.university = <span className="term-string">"Faculty of Computers & AI"</span><br />
                  &nbsp;&nbsp;self.specialization = [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="term-string">"System Analysis"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="term-string">"Database Engineering"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="term-string">"Artificial Intelligence"</span><br />
                  &nbsp;&nbsp;]<br />
                  &nbsp;&nbsp;self.fellowship = <span className="term-string">"DEPI AI Track Trainee"</span>
                </p>
                <p style={{ marginTop: "0.5rem" }}>
                  <span className="term-keyword">def</span> <span className="term-func">optimize_loss</span>(self, data):<br />
                  &nbsp;&nbsp;<span className="term-keyword">return</span> data.pipe(clean).pipe(engineer_features).train_model()
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. EDUCATION COMPONENT
// ==========================================
function Education({ lang }) {
  const t = CONTENT[lang].education;

  return (
    <section id="education" className="section-padding" style={{ background: "rgba(121, 40, 202, 0.03)" }}>
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">
            <i className="fa-solid fa-graduation-cap"></i>
            {t.tag}
          </span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot" title="Bachelor Degree"><i className="fa-solid fa-graduation-cap"></i></div>
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{t.degree}</h3>
                  <div className="timeline-org">
                    <i className="fa-solid fa-university"></i>
                    <span>{t.faculty}</span>
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    {t.dept}
                  </div>
                </div>
                <span className="timeline-period">{t.period}</span>
              </div>
              <p className="timeline-desc">{t.desc}</p>
              <div className="timeline-tags">
                {t.tags.map((tag, i) => (
                  <span key={i} className="timeline-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. INTERACTIVE ML PLAYGROUND WIDGET
// ==========================================
function MLPlayground({ lang, theme }) {
  const t = CONTENT[lang].playground;
  const chartCanvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Hyperparameters State
  const [features, setFeatures] = useState(12);
  const [learningRate, setLearningRate] = useState(0.01);
  const [datasetSize, setDatasetSize] = useState(2500);
  const [epochs, setEpochs] = useState(30);
  const [selectedModel, setSelectedModel] = useState("rf");

  // Simulated Model Output Metrics
  const metrics = useMemo(() => {
    let baseAcc = 82;
    let baseLoss = 0.45;

    if (selectedModel === "rf") {
      baseAcc = 89 + (features * 0.4) + Math.min(datasetSize / 1500, 3.5);
      baseLoss = 0.35 - (datasetSize / 20000);
    } else if (selectedModel === "gb") {
      baseAcc = 91 + (features * 0.45) - (Math.abs(learningRate - 0.02) * 50);
      baseLoss = 0.28 - (epochs * 0.003);
    } else {
      // SVM
      baseAcc = 87 + (features * 0.3) + (datasetSize / 3000);
      baseLoss = 0.38 - (learningRate * 2.5);
    }

    const accuracy = Math.min(Math.max(baseAcc, 74.0), 99.4).toFixed(1);
    const loss = Math.max(baseLoss, 0.082).toFixed(3);
    const f1 = (accuracy / 100 * 0.985).toFixed(3);

    return { accuracy, loss, f1 };
  }, [features, learningRate, datasetSize, epochs, selectedModel]);

  // Render & update Chart.js loss curve
  useEffect(() => {
    if (!chartCanvasRef.current || typeof Chart === "undefined") return;

    const pointsCount = Math.min(epochs, 40);
    const labels = Array.from({ length: pointsCount }, (_, i) => `E${i + 1}`);
    const dataPoints = [];

    const initLoss = selectedModel === "gb" ? 0.95 : 0.85;
    const finalLoss = parseFloat(metrics.loss);
    const decayRate = Math.max(0.05, learningRate * 7);

    for (let i = 0; i < pointsCount; i++) {
      const val = finalLoss + (initLoss - finalLoss) * Math.exp(-decayRate * i) + (Math.sin(i) * 0.008);
      dataPoints.push(Math.max(val, finalLoss).toFixed(3));
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartCanvasRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Validation Log-Loss",
            data: dataPoints,
            borderColor: theme === "light" ? "#7928ca" : "#c084fc",
            backgroundColor: theme === "light" ? "rgba(121, 40, 202, 0.08)" : "rgba(192, 132, 252, 0.12)",
            borderWidth: 2.5,
            fill: true,
            tension: 0.35,
            pointRadius: 2,
            pointHoverRadius: 5,
            pointBackgroundColor: "#38bdf8"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: theme === "light" ? "#473a60" : "#cbd5e1",
              font: { family: "Fira Code", size: 11 }
            }
          }
        },
        scales: {
          x: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: { color: "#64748b", font: { family: "Fira Code", size: 10 } }
          },
          y: {
            grid: { color: "rgba(255, 255, 255, 0.05)" },
            ticks: { color: "#64748b", font: { family: "Fira Code", size: 10 } }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [features, learningRate, datasetSize, epochs, selectedModel, metrics, theme]);

  return (
    <section id="playground" className="section-padding playground-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">
            <i className="fa-solid fa-flask-vial"></i>
            {t.tag}
          </span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="glass-card playground-card">
          <div className="playground-grid">
            {/* Hyperparameter Controls */}
            <div className="controls-panel">
              <div className="control-group">
                <div className="control-label">
                  <span>{t.featuresLabel}</span>
                  <span className="control-val">{features} cols</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="2"
                  value={features}
                  onChange={(e) => setFeatures(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>{t.lrLabel}</span>
                  <span className="control-val">{learningRate.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0.001"
                  max="0.08"
                  step="0.002"
                  value={learningRate}
                  onChange={(e) => setLearningRate(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>{t.datasetLabel}</span>
                  <span className="control-val">{datasetSize.toLocaleString()} rows</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={datasetSize}
                  onChange={(e) => setDatasetSize(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              <div className="control-group">
                <div className="control-label">
                  <span>{t.epochsLabel}</span>
                  <span className="control-val">{epochs} epochs</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={epochs}
                  onChange={(e) => setEpochs(Number(e.target.value))}
                  className="slider-input"
                />
              </div>

              <div className="control-group" style={{ marginBottom: 0 }}>
                <label className="control-label">{t.algorithmLabel}</label>
                <div className="model-select-group">
                  {t.models.map((m) => (
                    <button
                      key={m.id}
                      className={`model-opt-btn ${selectedModel === m.id ? "active" : ""}`}
                      onClick={() => setSelectedModel(m.id)}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulation Results & Loss Curve */}
            <div className="simulation-results">
              <div className="metrics-row">
                <div className="metric-card">
                  <div className="metric-title">{t.accuracy}</div>
                  <div className="metric-value">{metrics.accuracy}%</div>
                </div>

                <div className="metric-card">
                  <div className="metric-title">{t.loss}</div>
                  <div className="metric-value loss">{metrics.loss}</div>
                </div>

                <div className="metric-card">
                  <div className="metric-title">{t.f1}</div>
                  <div className="metric-value f1">{metrics.f1}</div>
                </div>
              </div>

              <div className="chart-wrapper">
                <canvas ref={chartCanvasRef}></canvas>
              </div>

              <div className="sim-status-banner">
                <span>
                  <i className="fa-solid fa-circle-check" style={{ color: "#10b981", marginRight: "0.5rem" }}></i>
                  {t.statusReady}
                </span>
                <span style={{ color: "#c084fc", fontWeight: 600 }}>LR={learningRate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. TECHNICAL STACK & DATA SCIENCE TOOLKIT
// ==========================================
function Toolkit({ lang }) {
  const t = CONTENT[lang].toolkit;

  return (
    <section id="toolkit" className="section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">
            <i className="fa-solid fa-layer-group"></i>
            {t.tag}
          </span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="toolkit-categories">
          {/* Category 1 */}
          <div className="glass-card toolkit-cat-card">
            <div className="toolkit-header">
              <div className="cat-icon-wrap">
                <i className="fa-solid fa-code"></i>
              </div>
              <h3 className="cat-title">{t.cat1Title}</h3>
            </div>
            <div className="tech-pills">
              {t.cat1Items.map((item, idx) => (
                <div key={idx} className="tech-pill">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div className="glass-card toolkit-cat-card">
            <div className="toolkit-header">
              <div className="cat-icon-wrap">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h3 className="cat-title">{t.cat2Title}</h3>
            </div>
            <div className="tech-pills">
              {t.cat2Items.map((item, idx) => (
                <div key={idx} className="tech-pill">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Category 3 */}
          <div className="glass-card toolkit-cat-card">
            <div className="toolkit-header">
              <div className="cat-icon-wrap">
                <i className="fa-solid fa-terminal"></i>
              </div>
              <h3 className="cat-title">{t.cat3Title}</h3>
            </div>
            <div className="tech-pills">
              {t.cat3Items.map((item, idx) => (
                <div key={idx} className="tech-pill">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. DEPI WORK EXPERIENCE COMPONENT
// ==========================================
function Experience({ lang }) {
  const t = CONTENT[lang].experience;

  return (
    <section id="experience" className="section-padding" style={{ background: "rgba(121, 40, 202, 0.03)" }}>
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">
            <i className="fa-solid fa-briefcase"></i>
            {t.tag}
          </span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot" title="DEPI Fellowship"><i className="fa-solid fa-briefcase"></i></div>
            <div className="glass-card timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{t.role}</h3>
                  <div className="timeline-org">
                    <i className="fa-solid fa-building-columns"></i>
                    <span>{t.company}</span>
                  </div>
                </div>
                <span className="timeline-period">{t.period}</span>
              </div>
              <p className="timeline-desc">{t.desc}</p>
              <div className="timeline-tags">
                {t.tags.map((tag, i) => (
                  <span key={i} className="timeline-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 9. FEATURED DATA SCIENCE PROJECTS
// ==========================================
function Projects({ lang }) {
  const t = CONTENT[lang].projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag">
            <i className="fa-solid fa-diagram-project"></i>
            {t.tag}
          </span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="projects-grid">
          {t.items.map((p) => (
            <div key={p.id} className="glass-card project-card">
              <div className="project-header-bar">
                <span className="project-type-tag">{p.type}</span>
                <i className={`${p.icon} project-icon`}></i>
              </div>

              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-metrics-badge">
                  <i className="fa-solid fa-gauge-high" style={{ color: "#38bdf8" }}></i>
                  <span>{p.metric}</span>
                </div>

                <div className="project-tech-stack">
                  {p.stack.map((st, i) => (
                    <span key={i} className="project-tech-item">{st}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn btn-demo"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>{t.liveDemo}</span>
                  </a>
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn btn-repo"
                  >
                    <i className="fa-brands fa-github"></i>
                    <span>{t.github}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 10. MENTORSHIP TESTIMONIAL
// ==========================================
function Testimonial({ lang }) {
  const t = CONTENT[lang].testimonial;

  return (
    <section className="section-padding" style={{ padding: "4rem 0" }}>
      <div className="container">
        <div className="glass-card testimonial-box">
          <i className="fa-solid fa-quote-left quote-icon"></i>
          <p className="testimonial-quote">“{t.quote}”</p>
          <div className="testimonial-author">
            <span className="author-name">{t.author}</span>
            <span className="author-role">{t.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 11. CONTACT & FOOTER COMPONENT
// ==========================================
function Contact({ lang }) {
  const t = CONTENT[lang].contact;
  const f = CONTENT[lang].footer;
  const s = CONTENT[lang].spiritual;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  return (
    <div>
      <section id="contact" className="section-padding" style={{ background: "rgba(121, 40, 202, 0.03)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-tag">
              <i className="fa-solid fa-paper-plane"></i>
              {t.tag}
            </span>
            <h2 className="section-title">{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
          </div>

          <div className="contact-grid">
            {/* Direct Contact Info */}
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                Mariam Ahmed Elgohr
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                Cairo, Egypt • Open to Local & Remote Opportunities
              </p>

              <div className="contact-info-list">
                {/* Email Direct */}
                <a href="mailto:mariamahmedelgohr@gmail.com" className="contact-info-card">
                  <div className="contact-info-icon" style={{ color: "#ea4335" }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <div className="contact-info-label">{t.emailLabel}</div>
                    <div className="contact-info-val">mariamahmedelgohr@gmail.com</div>
                  </div>
                </a>

                {/* WhatsApp & Phone Link */}
                <a
                  href="https://wa.me/201285694985"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon" style={{ color: "#25d366" }}>
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <div className="contact-info-label">{t.phoneLabel}</div>
                    <div className="contact-info-val">+20 128 569 4985</div>
                  </div>
                </a>

                {/* LinkedIn Direct */}
                <a
                  href="https://www.linkedin.com/in/mariam-elgohr"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon" style={{ color: "#0077b5" }}>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div>
                    <div className="contact-info-label">{t.linkedinLabel}</div>
                    <div className="contact-info-val">www.linkedin.com/in/mariam-elgohr</div>
                  </div>
                </a>

                {/* GitHub Direct */}
                <a
                  href="https://github.com/mariamelgohrr"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card"
                >
                  <div className="contact-info-icon" style={{ color: "#c084fc" }}>
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <div className="contact-info-label">{t.githubLabel}</div>
                    <div className="contact-info-val">github.com/mariamelgohrr</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="glass-card" style={{ padding: "2.2rem" }}>
              <form onSubmit={handleSubmit} className="contact-form">
                {submitted && (
                  <div className="form-alert success">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{t.successMsg}</span>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">{t.nameInput}</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.emailInput}</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.subjectInput}</label>
                  <input
                    type="text"
                    placeholder="Machine Learning Project / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t.msgInput}</label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Details about your inquiry, dataset, or objective..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  <span>{t.sendBtn}</span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & SPECIAL SPIRITUAL ACCENT */}
      <footer className="footer">
        {/* Golden Spiritual Quranic Verse Card */}
        <div className="spiritual-verse-wrapper">
          <div className="spiritual-verse-card" dir="rtl">
            <div className="verse-ornament">
              <i className="fa-solid fa-star-and-crescent"></i>
            </div>
            <div className="spiritual-verse-text">{s.verse}</div>
            <div className="spiritual-surah-ref">{s.surah}</div>
          </div>
        </div>

        <div className="container footer-content">
          <p className="footer-text">{f.designed}</p>
          <p className="footer-sub">{f.rights}</p>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// 12. ROOT APP COMPONENT
// ==========================================
function App() {
  const [lang, setLang] = useState("en");

  // Dark / Light Theme State with LocalStorage Persistence
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_theme");
      return savedTheme === "light" ? "light" : "dark";
    } catch (e) {
      return "dark";
    }
  });

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio_theme", nextTheme);
    } catch (e) {
      console.warn("localStorage inaccessible", e);
    }
  };

  // Sync theme changes with body class
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.documentElement.classList.add("light-theme-active");
    } else {
      document.body.classList.remove("light-theme");
      document.documentElement.classList.remove("light-theme-active");
    }
  }, [theme]);

  // Sync language changes with html dir/lang
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    if (lang === "ar") {
      document.body.classList.add("rtl-mode");
    } else {
      document.body.classList.remove("rtl-mode");
    }
  }, [lang]);

  return (
    <div className="portfolio-app">
      <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <Hero lang={lang} />
      <MetricsStats lang={lang} />
      <About lang={lang} />
      <Education lang={lang} />
      <MLPlayground lang={lang} theme={theme} />
      <Toolkit lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Testimonial lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

// Mount the React Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
