const { useState, useEffect, useRef, useMemo, useCallback } = React;

// CV File Path constant matching directory
const CV_FILE_PATH = "MARIAM%20AHMED%20MUSTAFA%20ELGOHR%20.pdf";

// ==========================================================================
// BILINGUAL CONTENT DATA (English & Arabic)
// ==========================================================================
const CONTENT = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      education: "Education",
      playground: "Simulation",
      toolkit: "Stack",
      experience: "Experience",
      projects: "Work",
      contact: "Contact",
      cta: "Get in touch",
      cvBtn: "Download CV",
      langToggle: "العربية",
      langCode: "ar",
      themeDark: "Dark Mode",
      themeLight: "Editorial Mode"
    },
    hero: {
      location: "Cairo, Egypt",
      greeting: "Hello, I'm",
      name: "Mariam Ahmed Elgohr",
      headlinePre: "Machine Learning &",
      headlinePost: "Data Science Engineer",
      statement: "Bridging mathematical intuition and clean engineering logic to turn raw complex data into robust predictive pipelines and intelligent algorithms.",
      ctaWork: "Selected Work",
      ctaContact: "Get in Touch",
      ctaCV: "Download Resume",
      tag1: "Predictive Modeling",
      tag2: "DEPI Fellow"
    },
    marquee: [
      "Mariam Ahmed Elgohr",
      "Machine Learning Engineer",
      "Data Science Student",
      "DEPI Fellow",
      "System Analysis & AI",
      "Statistical Preprocessing",
      "Predictive Pipelines"
    ],
    stats: [
      { number: "15+", label: "Predictive Models Evaluated" },
      { number: "500+", label: "Hours in Python & SQL" },
      { number: "98%", label: "Target Precision & Accuracy" },
      { number: "3rd", label: "Year CS & AI Specialization" }
    ],
    about: {
      tag: "01 / Background & Narrative",
      statement: "Turning raw, unstructured data into actionable intelligence through principled statistical foundations and disciplined engineering.",
      p1: "Third-year Computer Science student specializing in System Analysis, Database Engineering, and Artificial Intelligence at the Faculty of Computers and Artificial Intelligence.",
      p2: "Currently mastering hands-on machine learning systems within the prestigious Digital Egypt Pioneers Initiative (DEPI) Data Science & AI track. My core focus centers on exploratory data analysis, mathematical feature engineering, and deploying supervised predictive models.",
      caps: [
        "Statistical Modeling & EDA",
        "Supervised & Unsupervised ML",
        "Relational Database Architecture",
        "Linear Algebra & Probability Rigor"
      ]
    },
    education: {
      tag: "02 / Academic Journey",
      degree: "Bachelor of Computer Science (Third-Year Student)",
      faculty: "Faculty of Computers and Artificial Intelligence",
      dept: "System Analysis, Database Engineering & AI",
      period: "2024 – 2028",
      desc: "Comprehensive coursework in Algorithm Analysis, Advanced Relational Databases, Linear Algebra, Probability Theory, Discrete Mathematics, and Machine Learning Fundamentals.",
      tags: ["Linear Algebra", "Calculus", "Database Systems", "Data Structures", "Algorithms"]
    },
    experience: {
      tag: "03 / Professional Fellowship",
      role: "Data Science & AI Track Trainee",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Jul 2026 – Dec 2026",
      desc: "Executing rigorous end-to-end machine learning workflows: end-to-end exploratory data analysis (EDA), automated data cleaning pipelines, feature engineering, and training high-precision classification and regression models.",
      tags: ["Exploratory Data Analysis", "Scikit-Learn", "Feature Engineering", "Data Pipelines", "Model Tuning"]
    },
    projects: {
      tag: "04 / Selected Work",
      title: "Featured Engineering Projects",
      liveDemo: "Live Demo",
      github: "Source Code",
      items: [
        {
          id: "p1",
          num: "01",
          title: "SmartStay Price Predictor",
          image: "assets/projects/smartstay_preview.jpg",
          type: "Regression & Rental Forecasting",
          metric: "R²: 0.934 | RMSE: $14.20",
          desc: "Regression engine engineered with Python and Scikit-Learn to forecast real-time property rental prices based on geospatial markers, capacity metrics, and seasonal demand swings.",
          stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p2",
          num: "02",
          title: "VisionAI Image Classifier",
          image: "assets/projects/visionai_preview.jpg",
          type: "Supervised Computer Vision",
          metric: "Accuracy: 94.8% | Top-1: 5.2%",
          desc: "Supervised classification pipeline for multi-category image categorization, featuring automated image augmentation, feature extraction, confusion matrix visualization, and precision-recall trade-off metrics.",
          stack: ["Python", "Computer Vision", "Scikit-Learn", "Seaborn"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p3",
          num: "03",
          title: "DataPulse Churn Analytics",
          image: "assets/projects/datapulse_preview.jpg",
          type: "Classification & Business Intelligence",
          metric: "AUC-ROC: 0.912 | Recall: 89.4%",
          desc: "In-depth exploratory data analysis and predictive classification model identifying high-risk customer churn patterns with automated feature importance evaluation.",
          stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "SQL"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        }
      ]
    },
    playground: {
      tag: "05 / Interactive Laboratory",
      title: "ML Hyperparameter & Loss Simulator",
      subtitle: "Observe simulated gradient descent convergence and loss decay in real-time as dimensionality and learning rates vary.",
      featuresLabel: "Features Dimensionality:",
      lrLabel: "Learning Rate (α):",
      datasetLabel: "Sample Records (N):",
      epochsLabel: "Training Epochs:",
      algorithmLabel: "Classifier Architecture:",
      models: [
        { id: "rf", name: "Random Forest" },
        { id: "gb", name: "Gradient Boosting" },
        { id: "svm", name: "Support Vector Machine" }
      ],
      accuracy: "Accuracy",
      loss: "Final Loss",
      f1: "F1-Score",
      statusReady: "Optimizer Converged • Gradient Descent Successful",
      runSim: "Run Optimization"
    },
    toolkit: {
      tag: "06 / Capabilities & Stack",
      title: "Technical Stack & Architecture",
      subtitle: "The core programming languages, mathematical libraries, and developer tools powering my work.",
      cat1Title: "Languages & Databases",
      cat1Items: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "phpMyAdmin", icon: "fa-solid fa-server" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ],
      cat2Title: "Data Science & Machine Learning",
      cat2Items: [
        { name: "Pandas", icon: "devicon-pandas-plain colored" },
        { name: "NumPy", icon: "devicon-numpy-plain colored" },
        { name: "Scikit-Learn", icon: "fa-solid fa-brain" },
        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
        { name: "Seaborn", icon: "fa-solid fa-chart-pie" }
      ],
      cat3Title: "Development & Systems Ecosystem",
      cat3Items: [
        { name: "Jupyter Notebook", icon: "devicon-jupyter-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Linux Ubuntu", icon: "devicon-ubuntu-plain colored" },
        { name: "Packet Tracer", icon: "fa-solid fa-network-wired" }
      ]
    },
    spiritual: {
      verse: "﴿وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ﴾",
      surah: "(سورة هود - الآية 88)"
    },
    contact: {
      tag: "07 / Contact & Collaboration",
      headline: "Let's build intelligent systems together.",
      subhead: "Available for Machine Learning internships, data science roles, and technical collaborations.",
      ctaCircle: "Get in touch",
      emailLabel: "Direct Email",
      phoneLabel: "Phone & WhatsApp",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
      sendMsg: "Send Message",
      successMsg: "Message sent successfully. I will get back to you shortly."
    },
    footer: {
      rights: "© 2026 Mariam Ahmed Elgohr. All rights reserved."
    }
  },

  // Arabic Content (RTL)
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      education: "التعليم",
      playground: "المحاكاة",
      toolkit: "المهارات",
      experience: "الخبرة",
      projects: "المشاريع",
      contact: "تواصل",
      cta: "ابدأ التواصل",
      cvBtn: "تحميل السيرة الذاتية",
      langToggle: "English",
      langCode: "en",
      themeDark: "الوضع الليلي",
      themeLight: "الوضع الإيديتوريال"
    },
    hero: {
      location: "القاهرة، مصر",
      greeting: "أهلاً بك، أنا",
      name: "مريم أحمد الجحر",
      headlinePre: "مهندسة تعلم آلة و",
      headlinePost: "علوم البيانات",
      statement: "تحويل البيانات الأولية المعقدة إلى خطوط إنتاج تنبؤية وخوارزميات ذكية مدعومة بأسس رياضية راسخة ومنطق هندسي دقيق.",
      ctaWork: "استعراض المشاريع",
      ctaContact: "تواصل معي",
      ctaCV: "تحميل السيرة الذاتية",
      tag1: "النمذجة التنبؤية",
      tag2: "متدربة مبادرة DEPI"
    },
    marquee: [
      "مريم أحمد الجحر",
      "مهندسة تعلم آلة",
      "طالبة علوم بيانات",
      "مبادرة رواد مصر الرقمية",
      "تحليل النظم والذكاء الاصطناعي",
      "المعالجة الإحصائية للبيانات",
      "النمذجة التنبؤية"
    ],
    stats: [
      { number: "+15", label: "نموذج تنبؤي مدرّب ومقيّم" },
      { number: "+500", label: "ساعة برمجة في Python & SQL" },
      { number: "98%", label: "تركيز فائق على الدقة والأداء" },
      { number: "السنة 3", label: "طالبة حاسبات وذكاء اصطناعي" }
    ],
    about: {
      tag: "01 / الرؤية والمسار",
      statement: "بناء أنظمة ذكية تحوّل ركام البيانات إلى قرارات دقيقة عبر الصرامة الإحصائية والهندسة البرمجية النظيفة.",
      p1: "طالبة بالسنة الثالثة في كلية الحاسبات والذكاء الاصطناعي، متخصصة في قسم تحليل النظم وهندسة قواعد البيانات والذكاء الاصطناعي.",
      p2: "أعمل على صقل مهاراتي العملية عبر مسار علوم البيانات والذكاء الاصطناعي بمبادرة رواد مصر الرقمية (DEPI). ينصب تركيزي على التحليل الاستكشافي للبيانات، وهندسة الميزات الرياضية، ونشر نماذج التعلم الخاضع للإشراف.",
      caps: [
        "المعالجة الإحصائية والاستكشافية (EDA)",
        "نماذج التعلم الخاضع وغير الخاضع لإشراف",
        "تصميم وهندسة قواعد البيانات (SQL)",
        "الصرامة الرياضية والخوارزمية"
      ]
    },
    education: {
      tag: "02 / المسار الأكاديمي",
      degree: "بكالوريوس علوم الحاسب (طالبة بالفرقة الثالثة)",
      faculty: "كلية الحاسبات والذكاء الاصطناعي",
      dept: "تحليل النظم، هندسة قواعد البيانات، والذكاء الاصطناعي",
      period: "2024 – 2028",
      desc: "منهج أكاديمي شامل يركز على هياكل البيانات، تحليل الخوارزميات، بنية قواعد البيانات المتقدمة، مبادئ تعلم الآلة، الجبر الخطي، والتفاضل والتكامل وحساب الاحتمالات.",
      tags: ["الجبر الخطي", "التفاضل والاحتمالات", "بنية قواعد البيانات", "تحليل النظم", "هياكل البيانات"]
    },
    experience: {
      tag: "03 / التدريب والزمالة المهنية",
      role: "متدربة مسار علوم البيانات والذكاء الاصطناعي",
      company: "مبادرة رواد مصر الرقمية (DEPI)",
      period: "يوليو 2026 – ديسمبر 2026",
      desc: "تنفيذ مشاريع متكاملة في علوم البيانات: التحليل الاستكشافي للبيانات (EDA)، تنظيف وهندسة الخصائص، وتدريب خوارزميات تعلم الآلة المتقدمة وتعديل المعاملات الفائقة.",
      tags: ["التحليل الاستكشافي", "هندسة الخصائص", "Scikit-Learn", "تقييم أداء النماذج", "خطوط معالجة البيانات"]
    },
    projects: {
      tag: "04 / المشاريع المختارة",
      title: "أبرز المشاريع الهندسية",
      liveDemo: "معاينة حية",
      github: "مستودع الكود",
      items: [
        {
          id: "p1",
          num: "01",
          title: "SmartStay Price Predictor",
          image: "assets/projects/smartstay_preview.jpg",
          type: "نموذج انحدار وتنبؤ بأسعار الإيجار",
          metric: "R²: 0.934 | RMSE: $14.20",
          desc: "نموذج انحدار مبني باستخدام Python وScikit-Learn للتنبؤ بالأسعار الحقيقية لتأجير العقارات بناءً على الموقع الجغرافي وخصائص الغرف والخدمات ومواسم الطلب.",
          stack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p2",
          num: "02",
          title: "VisionAI Image Classifier",
          image: "assets/projects/visionai_preview.jpg",
          type: "تصنيف الصور بالتعلم الخاضع للإشراف",
          metric: "الدقة: 94.8% | خطأ أعلى-1: 5.2%",
          desc: "خط معالجة ذكي لتصنيف مجموعات الصور متعددة الفئات، يشمل تكثيف البيانات بصرياً، استخراج الميزات، ومصفوفة الارتباك لتقييم الدقة والاستدعاء.",
          stack: ["Python", "Computer Vision", "Scikit-Learn", "Seaborn"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        },
        {
          id: "p3",
          num: "03",
          title: "DataPulse Churn Analytics",
          image: "assets/projects/datapulse_preview.jpg",
          type: "تحليل استكشافي وتنبؤ باحتفاظ العملاء",
          metric: "AUC-ROC: 0.912 | استدعاء: 89.4%",
          desc: "دراسة استكشافية متعمقة (EDA) ونموذج تصنيف للتنبؤ باحتمالية تسرب العملاء والاحتفاظ بهم، مع استخراج العوامل المؤثرة لتزويد صناع القرار بتوصيات فورية.",
          stack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "SQL"],
          demoUrl: "https://github.com/mariamelgohrr",
          repoUrl: "https://github.com/mariamelgohrr"
        }
      ]
    },
    playground: {
      tag: "05 / المختبر التفاعلي",
      title: "محاكي المعاملات الفائقة ودالة الخسارة",
      subtitle: "شاهد تلاشي دالة الخسارة وتقارب الانحدار التدريجي مباشرة مع تغيير عدد الميزات ومعدل التعلم.",
      featuresLabel: "أبعاد الخصائص (Dimensionality):",
      lrLabel: "معدل التعلم (Learning Rate α):",
      datasetLabel: "حجم البيانات (Sample N):",
      epochsLabel: "دورات التدريب (Epochs):",
      algorithmLabel: "بنية النموذج المصنف:",
      models: [
        { id: "rf", name: "الغابة العشوائية (Random Forest)" },
        { id: "gb", name: "التدرج المعزز (Gradient Boosting)" },
        { id: "svm", name: "آلات المتجهات (SVM)" }
      ],
      accuracy: "دقة النموذج",
      loss: "الخسارة النهائية",
      f1: "معامل F1",
      statusReady: "تم تقارب النموذج • انتهت عملية التحسين بنجاح",
      runSim: "تشغيل عملية التحسين"
    },
    toolkit: {
      tag: "06 / المهارات والتقنيات",
      title: "المجموعة التقنية وأدوات العمل",
      subtitle: "لغات البرمجة، المكتبات التحليلية، وبيئات العمل التي أعتمد عليها في المشاريع الهندسية.",
      cat1Title: "لغات البرمجة وقواعد البيانات",
      cat1Items: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "phpMyAdmin", icon: "fa-solid fa-server" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
      ],
      cat2Title: "مكتبات علوم البيانات وتعلم الآلة",
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
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Linux Ubuntu", icon: "devicon-ubuntu-plain colored" },
        { name: "Packet Tracer", icon: "fa-solid fa-network-wired" }
      ]
    },
    spiritual: {
      verse: "﴿وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ﴾",
      surah: "(سورة هود - الآية 88)"
    },
    contact: {
      tag: "07 / التواصل والتعاون",
      headline: "فلنصنع أنظمة ذكية رائدة معاً.",
      subhead: "متاحة لفرص العمل والتدريب في تعلم الآلة، علوم البيانات، والمشاريع البرمجية المبتكرة.",
      ctaCircle: "تواصل معي",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف والواتساب",
      linkedinLabel: "لينكد إن",
      githubLabel: "جيت هَب",
      sendMsg: "إرسال الرسالة",
      successMsg: "تم إرسال رسالتك بنجاح، وسأتواصل معك في أقرب وقت."
    },
    footer: {
      rights: "© 2026 مريم أحمد الجحر • جميع الحقوق محفوظة."
    }
  }
};

// ==========================================================================
// 1. DENNIS SNELLENBERG PRELOADER (Ultra-Clean Kinetic Typography)
// ==========================================================================
const SNELLENBERG_WORDS = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olá",
  "こんにちは",
  "Guten Tag",
  "مرحباً",
  "أهلاً بكِ"
];

function DennisPreloader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const pathRef = useRef(null);
  const preloaderRef = useRef(null);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < SNELLENBERG_WORDS.length) {
        setIndex(step);
      } else {
        clearInterval(interval);
        // Start Dennis Snellenberg signature curved exit
        if (window.gsap && pathRef.current && preloaderRef.current) {
          const tl = gsap.timeline({
            onComplete: () => {
              setHidden(true);
              if (onFinish) onFinish();
            }
          });

          // Morph curved path upward
          tl.to(pathRef.current, {
            attr: { d: "M0 0 L100 0 L100 100 Q50 50 0 100 Z" },
            duration: 0.65,
            ease: "power3.in"
          }).to(preloaderRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut"
          }, "-=0.2");
        } else {
          setHidden(true);
          if (onFinish) onFinish();
        }
      }
    }, 220);

    return () => clearInterval(interval);
  }, [onFinish]);

  if (hidden) return null;

  return (
    <div ref={preloaderRef} className="snellenberg-preloader">
      <div className="preloader-word-box">
        <span className="preloader-dot"></span>
        <h1 className="preloader-word">{SNELLENBERG_WORDS[index]}</h1>
      </div>

      <svg className="preloader-curve-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path ref={pathRef} d="M0 0 L100 0 L100 100 Q50 140 0 100 Z" />
      </svg>
    </div>
  );
}

// ==========================================================================
// 2. LIVE CAIRO TIME COMPONENT
// ==========================================================================
function CairoClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = { timeZone: "Africa/Cairo", hour: "2-digit", minute: "2-digit", hour12: false };
        const timeStr = new Intl.DateTimeFormat([], options).format(now);
        setTime(timeStr);
      } catch (e) {
        setTime("18:30");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  return <span className="time-text">{time || "18:30"} GMT+3</span>;
}

// ==========================================================================
// 2. CUSTOM INTERACTIVE CURSOR (GSAP quickTo Hardware-Accelerated)
// ==========================================================================
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || !window.gsap) return;
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.3, ease: "power2.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a, button, .btn-magnetic, .btn-giant-circle, .action-pill-btn, .floating-menu-btn, input, select")
      ) {
        document.body.classList.add("cursor-hover");
      } else {
        document.body.classList.remove("cursor-hover");
      }

      if (target.closest(".project-row")) {
        document.body.classList.add("cursor-project");
      } else {
        document.body.classList.remove("cursor-project");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("cursor-hover", "cursor-project");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

// ==========================================================================
// 2.5 SNELLENBERG MAGNETIC BUTTON WRAPPER (GSAP Elastic Physics & Cursor Tracking)
// ==========================================================================
function Magnetic({ children, factor = 0.35, textFactor = 0.45, rotateFactor = 0 }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el || !window.gsap) return;
    // Disable on touch-only devices to ensure native scrolling & gestures
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const x = distX * factor;
      const y = distY * factor;
      const rotation = rotateFactor ? x * rotateFactor : 0;

      // Magnetic body translation with responsive tracking
      gsap.to(el, {
        x,
        y,
        rotation,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto"
      });

      // Dennis Snellenberg inner parallax for direct children (text & icons)
      if (el.children && el.children.length > 0) {
        gsap.to(el.children, {
          x: x * textFactor,
          y: y * textFactor,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    const handleMouseLeave = () => {
      // Elastic snap-back to rest position
      gsap.to(el, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.85,
        ease: "elastic.out(1.2, 0.35)",
        overwrite: "auto"
      });

      if (el.children && el.children.length > 0) {
        gsap.to(el.children, {
          x: 0,
          y: 0,
          duration: 0.85,
          ease: "elastic.out(1.2, 0.35)",
          overwrite: "auto"
        });
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [factor, textFactor, rotateFactor]);

  return React.cloneElement(React.Children.only(children), { ref: itemRef });
}

// ==========================================================================
// 3. EDITORIAL HEADER & FLOATING CIRCULAR MENU (Dennis Snellenberg Style)
// ==========================================================================
function EditorialHeader({ lang, setLang, theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = CONTENT[lang].nav;

  // Track scroll to toggle Dennis Snellenberg dual-state header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when curved drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "#hero", index: "01", label: t.home },
    { href: "#about", index: "02", label: t.about },
    { href: "#projects", index: "03", label: t.projects },
    { href: "#playground", index: "04", label: t.playground },
    { href: "#toolkit", index: "05", label: t.toolkit },
    { href: "#experience", index: "06", label: t.experience },
    { href: "#contact", index: "07", label: t.contact }
  ];

  return (
    <>
      <header className={`snellenberg-header ${scrolled ? "header-hidden" : ""}`}>
        <div className="container header-content">
          <a href="#hero" className="brand-monogram">
            <span className="brand-dot"></span>
            <span>© Code by Mariam</span>
          </a>

          <div className="header-nav-group">
            <ul className="header-links">
              <li className="header-link-item"><a href="#projects">{t.projects}</a></li>
              <li className="header-link-item"><a href="#about">{t.about}</a></li>
              <li className="header-link-item"><a href="#contact">{t.contact}</a></li>
            </ul>

            <div className="header-actions">
              {/* Theme Toggle Pill */}
              <Magnetic factor={0.25} textFactor={0.3}>
                <button
                  className="action-pill-btn"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                  title={theme === "dark" ? "Light Mode" : "Dark Mode"}
                >
                  <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
                </button>
              </Magnetic>

              {/* Language Switcher Pill */}
              <Magnetic factor={0.25} textFactor={0.3}>
                <button
                  className="action-pill-btn"
                  onClick={() => setLang(lang === "en" ? "ar" : "en")}
                  aria-label="Switch Language"
                >
                  <i className="fa-solid fa-globe"></i>
                  <span>{t.langToggle}</span>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Circular Burger Button */}
      <Magnetic factor={0.35} textFactor={0.4}>
        <button
          className={`floating-menu-btn ${drawerOpen ? "active" : ""} ${scrolled || drawerOpen ? "btn-visible" : ""}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Toggle Menu"
        >
          <div className="burger-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </Magnetic>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop ${drawerOpen ? "open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      ></div>

      {/* Curved Navigation Drawer */}
      <aside className={`curved-nav-drawer ${drawerOpen ? "open" : ""}`} aria-label="Navigation Menu">
        <div>
          <div className="drawer-nav-label">Navigation</div>
          <ul className="drawer-links">
            {navLinks.map((item) => (
              <li key={item.index} className="drawer-link-item">
                <a href={item.href} onClick={() => setDrawerOpen(false)}>
                  <span className="drawer-link-index">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="drawer-footer">
          <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <Magnetic factor={0.25} textFactor={0.3}>
              <a
                href={CV_FILE_PATH}
                download="Mariam_Ahmed_Elgohr_CV.pdf"
                className="action-pill-btn"
                style={{ background: "#455ce9", color: "#fff", borderColor: "#455ce9" }}
              >
                <i className="fa-solid fa-file-arrow-down"></i>
                <span>{t.cvBtn}</span>
              </a>
            </Magnetic>

            {/* Theme Switcher in Drawer */}
            <Magnetic factor={0.25} textFactor={0.3}>
              <button
                className="action-pill-btn"
                onClick={toggleTheme}
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
              >
                <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
                <span>{theme === "dark" ? t.themeLight : t.themeDark}</span>
              </button>
            </Magnetic>

            {/* Language Switcher in Drawer */}
            <Magnetic factor={0.25} textFactor={0.3}>
              <button
                className="action-pill-btn"
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
              >
                <i className="fa-solid fa-globe"></i>
                <span>{t.langToggle}</span>
              </button>
            </Magnetic>
          </div>

          <div className="drawer-socials">
            <a href="https://github.com/mariamelgohrr" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mariam-elgohr" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://wa.me/201285694985" target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:mariamahmedelgohr@gmail.com">Email</a>
          </div>
        </div>
      </aside>
    </>
  );
}

// ==========================================================================
// 4. INFINITE MARQUEE COMPONENT (Dennis Snellenberg Signature)
// ==========================================================================
function InfiniteMarquee({ items, lang }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((text, idx) => (
          <div key={idx} className="marquee-item">
            <span>{text}</span>
            <span className="star-divider">—</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================================================
// 5. HERO SECTION (Dennis Snellenberg Exact Reference Screenshot 1)
// ==========================================================================
function Hero({ lang }) {
  const t = CONTENT[lang].hero;
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = gsap.context(() => {
      // 1. Studio portrait subtle parallax scrub
      if (imageRef.current && heroRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5
          }
        });
      }

      // 2. Horizontal name scrub with velocity/direction (targets .name-h1)
      if (nameRef.current && heroRef.current) {
        const nameH1 = nameRef.current.querySelector(".name-h1");
        if (nameH1) {
          gsap.to(nameH1, {
            xPercent: lang === "ar" ? 15 : -15,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.5
            }
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, [lang]);

  const tickerName = t.name;

  return (
    <section id="hero" ref={heroRef} className="snellenberg-hero home-header">
      {/* Full-Bleed Studio Portrait Background (Screenshot 1) */}
      <div className="personal-image" ref={imageRef}>
        <img
          src="assets/hero/mariam_elgohr_hero.jpg"
          alt="Mariam Ahmed Elgohr"
          className="personal-image-img"
        />
      </div>

      {/* Left Capsule Pill (Dennis Snellenberg Screenshot 1) */}
      <div className="hero-located-pill">
        <div className="located-text">
          <span>{lang === "ar" ? "الموقع" : "Located"}</span>
          <span>{lang === "ar" ? "في مصر" : "in Egypt"}</span>
        </div>
        <div className="globe-circle">
          <i className="fa-solid fa-globe"></i>
        </div>
      </div>

      {/* Right Role Block with Arrow (Dennis Snellenberg Screenshot 1) */}
      <div className="hero-role-block">
        <span className="hero-role-arrow">
          <i className={`fa-solid ${lang === "ar" ? "fa-arrow-down-left" : "fa-arrow-down-right"}`}></i>
        </span>
        <h3 className="hero-role-title">
          {lang === "ar" ? (
            <>
              مهندسة تعلم آلة<br />
              ونظم ذكية
            </>
          ) : (
            <>
              Machine Learning<br />
              Engineer
            </>
          )}
        </h3>
      </div>

      {/* Dennis Snellenberg Signature Giant Name Ticker (Screenshot 1) */}
      <div className="big-name" ref={nameRef} aria-hidden="true">
        <div className="name-h1">
          <div className="name-wrap">
            <h1>{tickerName} <span className="spacer">—</span></h1>
            <h1>{tickerName} <span className="spacer">—</span></h1>
            <h1>{tickerName} <span className="spacer">—</span></h1>
            <h1>{tickerName} <span className="spacer">—</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// 6. METRICS STATS ROW (Animated Numbers)
// ==========================================================================
function MetricsStats({ lang }) {
  const stats = CONTENT[lang].stats;

  return (
    <div className="editorial-stats-row">
      <div className="container">
        <div className="stats-flex-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="editorial-stat-item">
              <span className="stat-huge-number">{s.number}</span>
              <span className="stat-desc-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================================================
// 7. EDITORIAL ABOUT NARRATIVE (Dennis Snellenberg Screenshot 2)
// ==========================================================================
function About({ lang }) {
  const t = CONTENT[lang].about;
  const heroContent = CONTENT[lang].hero;

  return (
    <section id="about" className="section-editorial about-snellenberg-section">
      <div className="container">
        <div className="editorial-section-tag">
          <span className="editorial-tag-dot"></span>
          <span>{t.tag}</span>
        </div>

        {/* Dennis Snellenberg Two-Column Editorial Statement (Screenshot 2) */}
        <div className="about-editorial-columns">
          <div className="about-main-lead">
            <h2>{t.statement}</h2>
          </div>
          <div className="about-sub-lead">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </div>
        </div>

        {/* Hero CTA Strip placed right below narrative as requested */}
        <div className="about-cta-strip">
          <Magnetic factor={0.3} textFactor={0.35}>
            <a href="#projects" className="btn-magnetic btn-magnetic-primary">
              <span>{heroContent.ctaWork}</span>
              <i className={`fa-solid ${lang === "ar" ? "fa-arrow-down-left" : "fa-arrow-down-right"}`}></i>
            </a>
          </Magnetic>

          <Magnetic factor={0.3} textFactor={0.35}>
            <a
              href={CV_FILE_PATH}
              download="Mariam_Ahmed_Elgohr_CV.pdf"
              className="btn-magnetic btn-magnetic-outline"
              title="Download CV"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              <span>{heroContent.ctaCV}</span>
            </a>
          </Magnetic>

          <Magnetic factor={0.3} textFactor={0.35}>
            <a href="#contact" className="btn-magnetic btn-magnetic-outline">
              <span>{heroContent.ctaContact}</span>
              <i className="fa-regular fa-envelope"></i>
            </a>
          </Magnetic>
        </div>

        <div className="about-editorial-grid" style={{ marginTop: "4rem" }}>
          <div className="about-key-capabilities">
            {t.caps.map((cap, i) => (
              <div key={i} className="capability-item">
                <i className="fa-solid fa-arrow-right"></i>
                <span>{cap}</span>
              </div>
            ))}
          </div>

          <div className="editorial-code-terminal" dir="ltr">
            <div className="terminal-header-bar">
              <div className="terminal-dots-row">
                <span className="terminal-dot-circle dot-close"></span>
                <span className="terminal-dot-circle dot-min"></span>
                <span className="terminal-dot-circle dot-max"></span>
              </div>
              <span className="terminal-file-name">mariam_profile.py</span>
              <i className="fa-brands fa-python" style={{ color: "#38bdf8" }}></i>
            </div>
            <div className="terminal-code-body">
              <span className="comment"># Engineering Identity Specification</span><br />
              <span className="kw">class</span> <span className="fn">DataScientist</span>:<br />
              &nbsp;&nbsp;<span className="kw">def</span> <span className="fn">__init__</span>(self):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="str">"Mariam Ahmed Elgohr"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.focus = <span className="str">"Machine Learning & AI"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.track = <span className="str">"DEPI Data Science Fellow"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;self.status = <span className="str">"Ready for Impact 🚀"</span><br /><br />
              &nbsp;&nbsp;<span className="kw">def</span> <span className="fn">optimize</span>(self, problem):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span> problem.apply(MathematicalRigor)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// 8. TIMELINE (Education & DEPI Experience)
// ==========================================================================
function JourneyTimeline({ lang }) {
  const edu = CONTENT[lang].education;
  const exp = CONTENT[lang].experience;

  return (
    <section id="experience" className="section-editorial">
      <div className="container">
        <div className="editorial-section-tag">
          <span className="editorial-tag-dot"></span>
          <span>{edu.tag} & {exp.tag}</span>
        </div>

        <div className="timeline-editorial-list">
          {/* DEPI Fellowship */}
          <div className="timeline-row-item">
            <span className="timeline-period-badge">{exp.period}</span>
            <div>
              <h3 className="timeline-main-title">{exp.role}</h3>
              <div className="timeline-org-name">{exp.company}</div>
              <p className="timeline-desc-text">{exp.desc}</p>
              <div className="timeline-tag-pills">
                {exp.tags.map((tg, i) => (
                  <span key={i} className="timeline-tag-pill">{tg}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="editorial-tag-dot" style={{ background: "#10b981" }}></span>
            </div>
          </div>

          {/* Academic Degree */}
          <div id="education" className="timeline-row-item">
            <span className="timeline-period-badge">{edu.period}</span>
            <div>
              <h3 className="timeline-main-title">{edu.degree}</h3>
              <div className="timeline-org-name">{edu.faculty} • {edu.dept}</div>
              <p className="timeline-desc-text">{edu.desc}</p>
              <div className="timeline-tag-pills">
                {edu.tags.map((tg, i) => (
                  <span key={i} className="timeline-tag-pill">{tg}</span>
                ))}
              </div>
            </div>
            <div>
              <span className="editorial-tag-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// 9. EDITORIAL PROJECTS SHOWCASE (Dennis Snellenberg Style with Mouse Follower)
// ==========================================================================
function Projects({ lang }) {
  const t = CONTENT[lang].projects;
  const [modalActive, setModalActive] = useState(false);
  const [activeProject, setActiveProject] = useState(t.items[0]);
  const [expandedMobile, setExpandedMobile] = useState(null);
  const modalRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (modalRef.current) {
      if (window.gsap) {
        gsap.to(modalRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        modalRef.current.style.left = `${e.clientX}px`;
        modalRef.current.style.top = `${e.clientY}px`;
      }
    }
  }, []);

  const handleMouseEnterRow = (project) => {
    setActiveProject(project);
    setModalActive(true);
  };

  const handleMouseLeaveRow = () => {
    setModalActive(false);
  };

  return (
    <section id="projects" className="section-editorial" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="projects-editorial-header">
          <div>
            <div className="editorial-section-tag">
              <span className="editorial-tag-dot"></span>
              <span>{t.tag}</span>
            </div>
            <h2 className="projects-editorial-title">{t.title}</h2>
          </div>
        </div>

        <div className="projects-rows-table">
          {t.items.map((p) => (
            <div
              key={p.id}
              className="project-row"
              onMouseEnter={() => handleMouseEnterRow(p)}
              onMouseLeave={handleMouseLeaveRow}
              onClick={() => setExpandedMobile(expandedMobile === p.id ? null : p.id)}
            >
              <span className="proj-col-num">{p.num}</span>
              <span className="proj-col-name">{p.title}</span>
              <span className="proj-col-type">{p.type}</span>
              <span className="proj-col-metric">{p.metric}</span>
              <div className="proj-col-arrow">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>

              {/* Mobile Expanded Details with Visual Preview */}
              <div
                className="mobile-project-details"
                style={{
                  gridColumn: "1 / -1",
                  display: expandedMobile === p.id ? "block" : "none"
                }}
              >
                <img src={p.image} alt={p.title} className="mobile-project-img-preview" />
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "0.8rem" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                  {p.stack.map((st, i) => (
                    <span key={i} className="timeline-tag-pill">{st}</span>
                  ))}
                </div>
                <div className="project-mobile-actions">
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn-mobile-link">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    <span>{t.liveDemo}</span>
                  </a>
                  <a href={p.repoUrl} target="_blank" rel="noreferrer" className="btn-mobile-link">
                    <i className="fa-brands fa-github"></i>
                    <span>{t.github}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Modal Preview (Desktop Mouse Follower - Dennis Snellenberg Signature) */}
      <div
        ref={modalRef}
        className={`project-floating-modal ${modalActive ? "active" : ""}`}
      >
        <div className="modal-img-wrap">
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="modal-project-img"
          />
        </div>
        <div className="modal-inner-overlay">
          <div className="modal-inner-tag">{activeProject.type}</div>
          <h4 className="modal-inner-title">{activeProject.title}</h4>
          <div style={{ fontSize: "0.85rem", color: "#38bdf8", fontFamily: "var(--font-mono)" }}>
            {activeProject.metric}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// 10. MINIMALIST LABORATORY ML SIMULATION
// ==========================================================================
function MLPlayground({ lang, theme }) {
  const t = CONTENT[lang].playground;
  const chartCanvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const [features, setFeatures] = useState(12);
  const [learningRate, setLearningRate] = useState(0.01);
  const [datasetSize, setDatasetSize] = useState(2500);
  const [epochs, setEpochs] = useState(30);
  const [selectedModel, setSelectedModel] = useState("rf");
  const [isTraining, setIsTraining] = useState(false);

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
      baseAcc = 87 + (features * 0.3) + (datasetSize / 3000);
      baseLoss = 0.38 - (learningRate * 2.5);
    }

    const accuracy = Math.min(Math.max(baseAcc, 74.0), 99.4).toFixed(1);
    const loss = Math.max(baseLoss, 0.082).toFixed(3);
    const f1 = (accuracy / 100 * 0.985).toFixed(3);

    return { accuracy, loss, f1 };
  }, [features, learningRate, datasetSize, epochs, selectedModel]);

  const handleRetrain = () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      if (typeof confetti === "function") {
        confetti({
          particleCount: 60,
          spread: 65,
          origin: { y: 0.65 }
        });
      }
    }, 750);
  };

  useEffect(() => {
    if (!chartCanvasRef.current || typeof Chart === "undefined") return;

    const pointsCount = Math.min(epochs, 40);
    const labels = Array.from({ length: pointsCount }, (_, i) => `E${i + 1}`);
    const dataPoints = [];

    const initLoss = selectedModel === "gb" ? 0.92 : 0.85;
    const finalLoss = parseFloat(metrics.loss);
    const decayRate = Math.max(0.05, learningRate * 7);

    for (let i = 0; i < pointsCount; i++) {
      const val = finalLoss + (initLoss - finalLoss) * Math.exp(-decayRate * i) + (Math.sin(i) * 0.006);
      dataPoints.push(Math.max(val, finalLoss).toFixed(3));
    }

    if (chartInstanceRef.current) chartInstanceRef.current.destroy();

    const ctx = chartCanvasRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Validation Log-Loss",
            data: dataPoints,
            borderColor: theme === "light" ? "#455ce9" : "#455ce9",
            backgroundColor: "rgba(69, 92, 233, 0.08)",
            borderWidth: 2,
            fill: true,
            tension: 0.35,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            grid: { color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.05)" },
            ticks: { color: theme === "light" ? "#71767f" : "#666666", font: { family: "Fira Code", size: 10 } }
          },
          y: {
            grid: { color: theme === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.05)" },
            ticks: { color: theme === "light" ? "#71767f" : "#666666", font: { family: "Fira Code", size: 10 } }
          }
        }
      }
    });

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [features, learningRate, datasetSize, epochs, selectedModel, metrics, theme]);

  return (
    <section id="playground" className="section-editorial">
      <div className="container">
        <div className="editorial-section-tag">
          <span className="editorial-tag-dot"></span>
          <span>{t.tag}</span>
        </div>

        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
          {t.title}
        </h2>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>{t.subtitle}</p>

        <div className="playground-editorial-card">
          <div className="playground-grid-split">
            {/* Parameters Controls */}
            <div>
              <div className="editorial-slider-group">
                <div className="slider-top-labels">
                  <span>{t.featuresLabel}</span>
                  <span className="slider-val-mono">{features} cols</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="40"
                  step="2"
                  value={features}
                  onChange={(e) => setFeatures(Number(e.target.value))}
                  className="minimal-range-input"
                />
              </div>

              <div className="editorial-slider-group">
                <div className="slider-top-labels">
                  <span>{t.lrLabel}</span>
                  <span className="slider-val-mono">{learningRate.toFixed(3)}</span>
                </div>
                <input
                  type="range"
                  min="0.001"
                  max="0.08"
                  step="0.002"
                  value={learningRate}
                  onChange={(e) => setLearningRate(Number(e.target.value))}
                  className="minimal-range-input"
                />
              </div>

              <div className="editorial-slider-group">
                <div className="slider-top-labels">
                  <span>{t.datasetLabel}</span>
                  <span className="slider-val-mono">{datasetSize.toLocaleString()} rows</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={datasetSize}
                  onChange={(e) => setDatasetSize(Number(e.target.value))}
                  className="minimal-range-input"
                />
              </div>

              <div className="editorial-slider-group">
                <div className="slider-top-labels">
                  <span>{t.epochsLabel}</span>
                  <span className="slider-val-mono">{epochs} epochs</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  step="5"
                  value={epochs}
                  onChange={(e) => setEpochs(Number(e.target.value))}
                  className="minimal-range-input"
                />
              </div>

              <div>
                <label style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>{t.algorithmLabel}</label>
                <div className="model-chips-row">
                  {t.models.map((m) => (
                    <button
                      key={m.id}
                      className={`model-chip-btn ${selectedModel === m.id ? "active" : ""}`}
                      onClick={() => setSelectedModel(m.id)}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="btn-magnetic btn-magnetic-primary"
                onClick={handleRetrain}
                disabled={isTraining}
                style={{ marginTop: "2rem", width: "100%", justifyContent: "center" }}
              >
                <i className={`fa-solid ${isTraining ? "fa-spinner fa-spin" : "fa-arrows-rotate"}`}></i>
                <span>{isTraining ? (lang === "ar" ? "جارٍ تحسين الأوزان..." : "Optimizing...") : t.runSim}</span>
              </button>
            </div>

            {/* Results & Visual Loss Graph */}
            <div>
              <div className="metrics-metrics-strip">
                <div className="metric-strip-card">
                  <div className="metric-strip-label">{t.accuracy}</div>
                  <div className="metric-strip-value">{metrics.accuracy}%</div>
                </div>

                <div className="metric-strip-card">
                  <div className="metric-strip-label">{t.loss}</div>
                  <div className="metric-strip-value" style={{ color: "var(--accent-blue)" }}>{metrics.loss}</div>
                </div>

                <div className="metric-strip-card">
                  <div className="metric-strip-label">{t.f1}</div>
                  <div className="metric-strip-value">{metrics.f1}</div>
                </div>
              </div>

              <div className="chart-editorial-box">
                <canvas ref={chartCanvasRef}></canvas>
              </div>

              <div style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span className="live-pulse-dot"></span>
                <span>{t.statusReady}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================================================
// 11. CAPABILITIES & TOOLKIT (Grouped Editorial Layout)
// ==========================================================================
function Toolkit({ lang }) {
  const t = CONTENT[lang].toolkit;

  return (
    <section id="toolkit" className="section-editorial">
      <div className="container">
        <div className="editorial-section-tag">
          <span className="editorial-tag-dot"></span>
          <span>{t.tag}</span>
        </div>

        <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
          {t.title}
        </h2>
        <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>{t.subtitle}</p>

        <div className="skills-grouped-grid">
          {/* Column 1 */}
          <div className="skill-category-col">
            <h3 className="skill-cat-title">
              <i className="fa-solid fa-code"></i>
              <span>{t.cat1Title}</span>
            </h3>
            <div className="skill-pills-cluster">
              {t.cat1Items.map((item, i) => (
                <div key={i} className="skill-editorial-pill">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="skill-category-col">
            <h3 className="skill-cat-title">
              <i className="fa-solid fa-brain"></i>
              <span>{t.cat2Title}</span>
            </h3>
            <div className="skill-pills-cluster">
              {t.cat2Items.map((item, i) => (
                <div key={i} className="skill-editorial-pill">
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="skill-category-col">
            <h3 className="skill-cat-title">
              <i className="fa-solid fa-terminal"></i>
              <span>{t.cat3Title}</span>
            </h3>
            <div className="skill-pills-cluster">
              {t.cat3Items.map((item, i) => (
                <div key={i} className="skill-editorial-pill">
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

// ==========================================================================
// 12. SNELLENBERG CONTACT CTA & SPIRITUAL FOOTER
// ==========================================================================
function Contact({ lang }) {
  const t = CONTENT[lang].contact;
  const s = CONTENT[lang].spiritual;
  const f = CONTENT[lang].footer;
  const contactRef = useRef(null);
  const footerCurveRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const ctx = gsap.context(() => {
      if (footerCurveRef.current && contactRef.current) {
        gsap.to(footerCurveRef.current, {
          height: 0,
          ease: "none",
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 95%",
            end: "top 35%",
            scrub: 0.5
          }
        });
      }
    }, contactRef);
    return () => ctx.revert();
  }, [lang]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* Above-footer More Work Button (Dennis Snellenberg Screenshot 3) */}
      <div className="footer-more-work-container">
        <a href="#projects" className="btn-more-work">
          <span>{lang === "ar" ? "المزيد من المشاريع" : "More work"} <sup>3</sup></span>
        </a>
      </div>

      <footer id="contact" ref={contactRef} className="snellenberg-contact-cta">
        {/* Dennis Snellenberg Physical Curved Section Divider (Upward Dome Arch ∩) */}
        <div className="footer-rounded-div-wrap" ref={footerCurveRef}>
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="footer-curve-svg">
            <path d="M 0,100 Q 720,0 1440,100 L 1440,100 L 0,100 Z" fill="#1c1d20" />
          </svg>
        </div>

        <div className="container">
          {/* Headline Row with Avatar, Title & Arrow (Screenshot 3) */}
          <div className="contact-header-block">
            <img
              src="assets/hero/mariam_elgohr_hero.jpg"
              alt="Mariam Ahmed Elgohr"
              className="contact-avatar-img"
            />
            <h2 className="contact-huge-headline">
              {lang === "ar" ? "لنعمل معاً" : "Let's work together"}
            </h2>
            <span className="contact-arrow-indicator">
              <i className={`fa-solid ${lang === "ar" ? "fa-arrow-down-left" : "fa-arrow-down-right"}`}></i>
            </span>
          </div>

          {/* Action Zone with Hairline and Floating Circle (Screenshot 3) */}
          <div className="contact-action-zone">
            <div className="contact-hairline-separator"></div>
            <div className="contact-circle-anchor">
              <Magnetic factor={0.45} textFactor={0.4} rotateFactor={0.06}>
                <a
                  href="mailto:mariamahmedelgohr@gmail.com"
                  className="btn-giant-circle"
                  title="Send Email"
                >
                  <span>{t.ctaCircle}</span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Contact Pills Row (Screenshot 3) */}
          <div className="contact-pills-row">
            <a href="mailto:mariamahmedelgohr@gmail.com" className="contact-pill-link">
              mariamahmedelgohr@gmail.com
            </a>
            <a href="https://wa.me/201285694985" target="_blank" rel="noreferrer" className="contact-pill-link">
              +20 128 569 4985
            </a>
            <a href="https://www.linkedin.com/in/mariam-elgohr" target="_blank" rel="noreferrer" className="contact-pill-link">
              LinkedIn ↗
            </a>
            <a href="https://github.com/mariamelgohrr" target="_blank" rel="noreferrer" className="contact-pill-link">
              GitHub ↗
            </a>
          </div>

        {/* Dignified Quranic Verse */}
        <div className="spiritual-editorial-card" dir="rtl">
          <div className="spiritual-arabic-verse">{s.verse}</div>
          <div className="spiritual-surah-tag">{s.surah}</div>
        </div>

        {/* Bottom Bar */}
        <div className="editorial-footer-bar">
          <div>{f.rights}</div>
          <div className="footer-local-time">
            <span className="live-pulse-dot"></span>
            <span>Cairo, Egypt</span>
            <CairoClock />
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

// ==========================================================================
// 13. ROOT APP COMPONENT (With Lenis Smooth Scroll Integration)
// ==========================================================================
function App() {
  const [lang, setLang] = useState("en");
  const [introFinished, setIntroFinished] = useState(false);

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      return saved === "light" ? "light" : "dark";
    } catch (e) {
      return "dark";
    }
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("portfolio_theme", next);
    } catch (e) {}
  };

  // Lenis Smooth Scroll initialization
  useEffect(() => {
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
        orientation: "vertical",
        gestureOrientation: "vertical"
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      if (window.ScrollTrigger) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  // Theme synchronization
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.documentElement.classList.add("light-theme-active");
    } else {
      document.body.classList.remove("light-theme");
      document.documentElement.classList.remove("light-theme-active");
    }
  }, [theme]);

  // Language synchronization
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
    <div className="snellenberg-portfolio">
      <CustomCursor />
      <DennisPreloader onFinish={() => setIntroFinished(true)} />
      <EditorialHeader lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <Hero lang={lang} />
      <About lang={lang} />
      <MetricsStats lang={lang} />
      <JourneyTimeline lang={lang} />
      <Projects lang={lang} />
      <MLPlayground lang={lang} theme={theme} />
      <Toolkit lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}

// Mount the React Application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
