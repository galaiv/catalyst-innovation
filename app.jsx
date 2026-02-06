const { useState, useEffect } = React;

function CatalystInnovations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('bg');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Initialize Lucide icons after component mounts
  useEffect(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, [selectedArticle, selectedCategory, isMenuOpen, language]);

  // Blog articles with relevant content
  const [articles, setArticles] = useState([
    // Article 1: Digital Transformation Urgency
    {
      id: 1,
      title: {
        bg: 'Времето изтича: Защо производителите в Русе не могат да си позволят да чакат с дигиталната трансформация',
        en: 'The Clock is Ticking: Why Ruse Manufacturers Can\'t Afford to Wait on Digital Transformation'
      },
      excerpt: {
        bg: 'Производствената картина по коридора на Дунав се трансформира с безпрецедентна скорост. Докато индустриалните компании в Русе са инвестирали значително в модерно оборудване през последното десетилетие, критичен пропуск остава: повечето производители използват само 20-30% от действителния потенциал на технологията си.',
        en: 'The manufacturing landscape along the Danube corridor is transforming at unprecedented speed. While industrial companies in Ruse have invested heavily in modern equipment over the past decade, a critical gap remains: most manufacturers are utilizing only 20-30% of their technology\'s actual potential.'
      },
      content: {
        bg: `# Времето изтича: Защо производителите в Русе не могат да си позволят да чакат с дигиталната трансформация

## Проверка на реалността, която производителите в Русе срещат днес

Производствената картина по коридора на Дунав се трансформира с безпрецедентна скорост. Докато индустриалните компании в Русе са инвестирали значително в модерно оборудване и производствена технология през последното десетилетие, критичен пропуск остава: повечето производители използват само 20-30% от действителния потенциал на технологията си.

Това не е проблем с технологията. Това е предизвикателство на лидерството и организационната култура, което струва на местните производители милиони в загубена производителност, пропуснати пазарни възможности и намаляваща конкурентоспособност.

## Цифрите не лъжат: Цената на чакането

Европейската производствена статистика рисува сурова картина. Компаниите, които забавят дигиталната трансформация, изпитват:

- **15-25% ерозия на пазарен дял** към дигитално активирани конкуренти в рамките на 3 години
- **30-40% по-високи оперативни разходи** в сравнение с индустриалните лидери
- **50% по-дълго време до пазара** за нови продукти
- **Трудности при привличане и задържане на квалифицирана работна сила**, особено млади таланти, които очакват модерни работни среди

За средна по размер производствена компания в Русе с 10 милиона евро годишни приходи, това се превръща в 1.5-2.5 милиона евро загубени възможности всяка година. Въпросът не е дали можете да си позволите да се трансформирате — а дали можете да си позволите да не го направите.`,
        
        en: `# The Clock is Ticking: Why Ruse Manufacturers Can't Afford to Wait on Digital Transformation

## The Reality Check Ruse Manufacturers Face Today

The manufacturing landscape along the Danube corridor is transforming at unprecedented speed. While industrial companies in Ruse have invested heavily in modern equipment and production technology over the past decade, a critical gap remains: most manufacturers are utilizing only 20-30% of their technology's actual potential.

This isn't a technology problem. It's a leadership and organizational culture challenge that's costing local manufacturers millions in lost productivity, missed market opportunities, and declining competitiveness.

## The Numbers Don't Lie: The Cost of Waiting

European manufacturing statistics paint a stark picture. Companies that delay digital transformation are experiencing:

- **15-25% market share erosion** to digitally-enabled competitors within 3 years
- **30-40% higher operational costs** compared to industry leaders
- **50% longer time-to-market** for new products
- **Difficulty attracting and retaining skilled workforce**, particularly young talent who expect modern work environments

For a mid-sized Ruse manufacturer with €10 million annual revenue, this translates to €1.5-2.5 million in lost opportunity every year. The question isn't whether you can afford to transform—it's whether you can afford not to.`
      },
      category: 'industry40',
      date: '2026-02-05',
      image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&q=80&w=2000'
    },

    // Article 2: Choosing Consulting Partner
    {
      id: 2,
      title: {
        bg: 'Как да изберете правилния партньор за иновационно консултиране: Ръководство за производители',
        en: 'How to Choose the Right Innovation Consulting Partner: A Manufacturer\'s Guide'
      },
      excerpt: {
        bg: 'Всяка седмица производствените лидери в България получават предложения от консултантски фирми, обещаващи революционни резултати. Но статистиките разказват различна история: 70% от проектите за дигитална трансформация не успяват да постигнат целите си.',
        en: 'Every week, manufacturing leaders in Bulgaria receive proposals from consulting firms promising revolutionary results. Yet statistics tell a different story: 70% of digital transformation projects fail to achieve their objectives.'
      },
      content: {
        bg: `# Как да изберете правилния партньор за иновационно консултиране

Всяка седмица производствените лидери в България получават предложения от консултантски фирми. Разликата между успех и неуспех не е технологията или методологията — а изборът на правилния консултантски партньор.`,
        
        en: `# How to Choose the Right Innovation Consulting Partner

Every week, manufacturing leaders in Bulgaria receive proposals from consulting firms. The difference between success and failure isn't the technology or methodology recommended—it's choosing the right consulting partner.`
      },
      category: 'leadership',
      date: '2026-02-06',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000'
    },

    // Article 3: AI Adoption
    {
      id: 3,
      title: {
        bg: 'ИИ в производството: Как да приемете изкуствения интелект без ажиотажа',
        en: 'AI in Manufacturing: How to Adopt Artificial Intelligence Without the Hype'
      },
      excerpt: {
        bg: 'Изкусственият интелект се превърна в най-обсъжданата технология в производството. Но повечето производители, които се втурват в инициативи за ИИ, не постигат значими резултати.',
        en: 'Artificial Intelligence has become the most discussed technology in manufacturing. But most manufacturers who rush into AI initiatives fail to achieve meaningful results.'
      },
      content: {
        bg: `# ИИ в производството: Как да приемете изкуствения интелект без ажиотажа

Изкусственият интелект се превърна в най-обсъжданата технология в производството. Но ето какво не ви казват: Повечето производители не постигат значими резултати.`,
        
        en: `# AI in Manufacturing: How to Adopt Artificial Intelligence Without the Hype

Artificial Intelligence has become the most discussed technology in manufacturing. But here's what they don't tell you: Most manufacturers fail to achieve meaningful results.`
      },
      category: 'innovation',
      date: '2026-02-07',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000'
    },

    // Article 4: Organizational Readiness
    {
      id: 4,
      title: {
        bg: 'Правилото 90%: Защо повечето технологични инвестиции се провалят',
        en: 'The 90% Rule: Why Most Technology Investments Fail'
      },
      excerpt: {
        bg: 'Средна производствена компания инвестира €500,000 в система за управление. Осемнадесет месеца по-късно системата стои неизползвана.',
        en: 'A mid-sized manufacturer invests €500,000 in a management system. Eighteen months later, the system sits largely unused.'
      },
      content: {
        bg: `# Правилото 90%: Защо повечето технологични инвестиции се провалят

Успешното приемане на технология е 10% технология и 90% хора, лидерство и организационна култура.`,
        
        en: `# The 90% Rule: Why Most Technology Investments Fail

Successful technology adoption is 10% technology and 90% people, leadership, and organizational culture.`
      },
      category: 'leadership',
      date: '2026-02-08',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000'
    },

    // Article 5: Business Model Innovation
    {
      id: 5,
      title: {
        bg: 'Защо вашият текущ бизнес модел няма да оцелее',
        en: 'Why Your Current Business Model Won\'t Survive'
      },
      excerpt: {
        bg: 'Традиционният модел на договорно производство умира. Не бавно. Не евентуално. Точно сега.',
        en: 'The traditional contract manufacturing business model is dying. Not slowly. Not eventually. Right now.'
      },
      content: {
        bg: `# Защо вашият текущ бизнес модел няма да оцелее

Традиционният модел на договорно производство умира. Производителите трябва да преосмислят фундаментално бизнес модела си.`,
        
        en: `# Why Your Current Business Model Won't Survive

The traditional contract manufacturing business model is dying. Manufacturers must fundamentally rethink their business model.`
      },
      category: 'innovation',
      date: '2026-02-09',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    },

    // Article 6: Ruse Specific Urgency
    {
      id: 6,
      title: {
        bg: 'Дилемата на дунавския коридор: Защо производителите в Русе трябва да действат сега',
        en: 'The Danube Corridor Dilemma: Why Ruse Manufacturers Must Act Now'
      },
      excerpt: {
        bg: 'Конкурентното предимство на Русе нараства ли или тихо ерозира? Неудобният отговор: То ерозира.',
        en: 'Is Ruse\'s manufacturing advantage growing stronger or quietly eroding? The uncomfortable answer: It\'s eroding.'
      },
      content: {
        bg: `# Дилемата на дунавския коридор

Конкурентното предимство на Русе нараства ли или тихо ерозира? Неудобният отговор за повечето производители: То ерозира.`,
        
        en: `# The Danube Corridor Dilemma

Is Ruse's manufacturing advantage growing stronger or quietly eroding? The uncomfortable answer for most manufacturers: It's eroding.`
      },
      category: 'industry40',
      date: '2026-02-10',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=2000'
    }
  ]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    setSelectedArticle(null);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    scrollToSection('blog');
  };

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const toggleLanguage = () => {
    setLanguage(language === 'bg' ? 'en' : 'bg');
  };

  const content = {
    bg: {
      nav: {
        home: 'Начало',
        about: 'За мен',
        services: 'Услуги',
        vision: 'Визия',
        blog: 'Блог',
        contact: 'Контакт'
      },
      hero: {
        title: 'Трансформираме',
        title2: 'иновациите в реалност',
        subtitle: 'Консултантски услуги за лидерство и дигитална трансформация',
        cta: 'СВЪРЖЕТЕ СЕ С НАС'
      },
      about: {
        title: 'Галена Схаутен',
        p1: 'Иновационен консултант и предприемач, учредяваща консултантска фирма в Русе, фокусирана върху дигитална трансформация и стратегическо иновационно лидерство за производствени компании.',
        p2: 'След международна кариера в модната индустрия, завърших икономическо образование и MBA със специализация Innovation Management в SUPSI, Швейцария.',
        p3: 'Работила съм по консултантски проекти в областта на Индустрия 4.0, circular economy и организационна трансформация.',
        p4: 'Моят подход комбинира технологична готовност с cultural change management и Open Innovation стратегии за устойчив бизнес успех.',
        education: 'ОБРАЗОВАНИЕ',
        mba: 'MBA Innovation Management',
        location: 'SUPSI, Швейцария',
        economics: 'Икономика и Управление',
        uniMilano: 'Università degli Studi di Milano-Bicocca',
        linkedin: 'LINKEDIN',
        connect: 'Свържете се с мен'
      },
      services: {
        title: 'Услуги',
        subtitle: 'Холистичен подход към иновационната трансформация',
        s1: 'Лидерска трансформация',
        s1desc: 'Подготовка на лидери за управление на иновационни процеси',
        s2: 'Стратегическа иновация',
        s2desc: 'Персонализирани стратегии базирани на готовността на организацията',
        s3: 'Change Management',
        s3desc: 'Управление на културата и подготовка на екипите за промяна',
        s4: 'Open Innovation',
        s4desc: 'Създаване на иновационни екосистеми чрез collaboration',
        s5: 'Industry 4.0',
        s5desc: 'Оценка на готовността и roadmap за дигитална трансформация',
        s6: 'Мрежово интегриране',
        s6desc: 'Свързване с международни мрежи за високи постижения'
      },
      vision: {
        title: 'Визия за индустрията',
        problem: 'Предизвикателството',
        problemText: 'Компаниите инвестират в нови технологии, но използват само 20-30% от капацитета. Защото технологията е лесната част - хората, културата и лидерството са истинското предизвикателство.',
        solution: 'Решението',
        solutionText: 'Създаване на иновационна екосистема, където компаниите си сътрудничат за взаимна полза чрез Open Innovation модел.',
        point1: 'Партньорства между компании и стартъпи',
        point2: 'Колаборации с университети и research центрове',
        point3: 'Интегриране в международни мрежи',
        quote: 'От подиума на Giorgio Armani до производствените цехове в Русе - моето пътешествие ме научи на едно:'
      },
      manifesto: {
        p1: 'Success е 10% технологии, 90% хора, лидерство и култура.',
        p2: 'Обичам предизвикателствата. Не се отказвам лесно. И знам как да превръщам vision в reality.',
        p3: 'Ако вашата компания иска:',
        point1: 'Да инвестира умно, не просто много',
        point2: 'Да трансформира хора, не само процеси',
        point3: 'Да създаде sustainable competitive advantage',
        p4: 'Нека говорим.',
        p5: 'Иновациите не чакат. И аз също.'
      },
      blog: {
        title: 'Блог',
        subtitle: 'Мисли и прозрения за иновациите и трансформацията',
        readMore: 'Прочети повече',
        backToBlog: 'Назад към блога',
        noArticles: 'Скоро ще публикувам първата си статия. Следете за актуализации.',
        categories: 'Категории',
        all: 'Всички',
        innovation: 'Иновации',
        leadership: 'Лидерство',
        industry40: 'Индустрия 4.0'
      },
      contact: {
        title: 'Контакт',
        subtitle: 'Готови за трансформация? Нека работим заедно.',
        email: 'EMAIL',
        phone: 'ТЕЛЕФОН',
        location: 'ЛОКАЦИЯ',
        locationValue: 'Русе, България',
        linkedin: 'LINKEDIN',
        connect: 'Свържете се',
        consultation: 'Предлагам безплатна първична консултация за оценка на готовността на вашата компания за иновации.'
      },
      footer: {
        tagline: 'Трансформираме иновациите в реалност',
        copyright: '© 2026 Catalyst Innovation. Всички права запазени.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        vision: 'Vision',
        blog: 'Blog',
        contact: 'Contact'
      },
      hero: {
        title: 'Transforming',
        title2: 'innovations into reality',
        subtitle: 'Consulting services for leadership and digital transformation',
        cta: 'GET IN TOUCH'
      },
      about: {
        title: 'Galena Schouten',
        p1: 'Innovation consultant and entrepreneur, establishing a consulting firm in Ruse, focused on digital transformation and strategic innovation leadership for manufacturing companies.',
        p2: 'Following an international career in the fashion industry, she completed economics education at UNIVERSITÀ DEGLI STUDI DI MILANO-BICOCCA and MBA with specialization in Innovation Management at SUPSI, Switzerland.',
        p3: 'She has worked on consulting projects in Industry 4.0, circular economy and organizational transformation.',
        p4: 'Her approach combines technological readiness with cultural change management and Open Innovation strategies for sustainable business success.',
        education: 'EDUCATION',
        mba: 'MBA Innovation Management',
        location: 'SUPSI, Switzerland',
        economics: 'Economics and Management',
        uniMilano: 'Università degli Studi di Milano-Bicocca',
        linkedin: 'LINKEDIN',
        connect: 'Connect with me'
      },
      services: {
        title: 'Services',
        subtitle: 'Holistic approach to innovation transformation',
        s1: 'Leadership Transformation',
        s1desc: 'Preparing leaders to manage innovation processes',
        s2: 'Strategic Innovation',
        s2desc: 'Customized strategies based on organizational readiness',
        s3: 'Change Management',
        s3desc: 'Managing culture and preparing teams for change',
        s4: 'Open Innovation',
        s4desc: 'Creating innovation ecosystems through collaboration',
        s5: 'Industry 4.0',
        s5desc: 'Readiness assessment and roadmap for digital transformation',
        s6: 'Network Integration',
        s6desc: 'Connecting with international networks for high performance'
      },
      vision: {
        title: 'Vision for Industry',
        problem: 'The Challenge',
        problemText: 'Companies invest in new technologies but use only 20-30% of capacity. Because technology is the easy part - people, culture and leadership are the real challenge.',
        solution: 'The Solution',
        solutionText: 'Creating an innovation ecosystem where companies collaborate for mutual benefit through Open Innovation model.',
        point1: 'Partnerships between companies and startups',
        point2: 'Collaborations with universities and research centers',
        point3: 'Integration into international networks',
        quote: 'From Giorgio Armani runway to manufacturing floors in Ruse - my journey taught me one thing:'
      },
      manifesto: {
        p1: 'Success is 10% technology, 90% people, leadership and culture.',
        p2: 'I love challenges. I don\'t give up easily. And I know how to turn vision into reality.',
        p3: 'If your company wants to:',
        point1: 'Invest smartly, not just heavily',
        point2: 'Transform people, not just processes',
        point3: 'Create sustainable competitive advantage',
        p4: 'Let\'s talk.',
        p5: 'Innovation doesn\'t wait. Neither do I.'
      },
      blog: {
        title: 'Blog',
        subtitle: 'Thoughts and insights on innovation and transformation',
        readMore: 'Read more',
        backToBlog: 'Back to blog',
        noArticles: 'Coming soon. Stay tuned for my first article.',
        categories: 'Categories',
        all: 'All',
        innovation: 'Innovation',
        leadership: 'Leadership',
        industry40: 'Industry 4.0'
      },
      contact: {
        title: 'Contact',
        subtitle: 'Ready for transformation? Let\'s work together.',
        email: 'EMAIL',
        phone: 'PHONE',
        location: 'LOCATION',
        locationValue: 'Ruse, Bulgaria',
        linkedin: 'LINKEDIN',
        connect: 'Connect',
        consultation: 'I offer a free initial consultation to assess your company\'s readiness for innovation.'
      },
      footer: {
        tagline: 'Transforming innovations into reality',
        copyright: '© 2026 Catalyst Innovation. All rights reserved.'
      }
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="./logo.jpg" alt="Catalyst Innovation Logo" className="h-12 w-auto" />
              <span className="ml-3 text-2xl font-light tracking-wide text-gray-900">CATALYST INNOVATION</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.services}</button>
              <button onClick={() => scrollToSection('vision')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.vision}</button>
              <button onClick={() => scrollToSection('blog')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.blog}</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">{t.nav.contact}</button>
              <a href="https://www.linkedin.com/in/galena-schouten" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                <i data-lucide="linkedin" className="h-5 w-5"></i>
              </a>
              <button onClick={toggleLanguage} className="flex items-center text-gray-600 hover:text-gray-900 transition">
                <i data-lucide="globe" className="h-5 w-5 mr-1"></i>
                <span className="text-sm font-medium">{language === 'bg' ? 'EN' : 'BG'}</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={toggleLanguage} className="text-gray-600">
                <i data-lucide="globe" className="h-5 w-5"></i>
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <i data-lucide="x" className="h-6 w-6"></i> : <i data-lucide="menu" className="h-6 w-6"></i>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.about}</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.services}</button>
              <button onClick={() => scrollToSection('vision')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.vision}</button>
              <button onClick={() => scrollToSection('blog')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.blog}</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50">{t.nav.contact}</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              {t.hero.title}<br />{t.hero.title2}
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
          
          {/* Industry 4.0 Image */}
          <div className="mb-16">
            <img 
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80" 
              alt="Industry 4.0" 
              className="w-full h-96 object-cover grayscale rounded-sm"
            />
          </div>

          <div className="text-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-gray-800 transition inline-flex items-center"
            >
              {t.hero.cta}
              <i data-lucide="chevron-right" className="ml-2 h-4 w-4"></i>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">{t.about.title}</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
                <p>{t.about.p4}</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">{t.about.education}</h3>
                <p className="text-xl text-gray-900 mb-1">{t.about.mba}</p>
                <p className="text-gray-600 mb-4">{t.about.location}</p>
                <p className="text-xl text-gray-900 mb-1">{t.about.economics}</p>
                <p className="text-gray-600">{t.about.uniMilano}</p>
              </div>
              
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-sm font-medium text-gray-400 mb-2">{t.about.linkedin}</h3>
                <a href="https://www.linkedin.com/in/galena-schouten" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600 transition inline-flex items-center">
                  <i data-lucide="linkedin" className="h-5 w-5 mr-2"></i>
                  {t.about.connect}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.services.title}</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="mb-4">
                <i data-lucide="users" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s1}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s1desc}</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <i data-lucide="target" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s2}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s2desc}</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <i data-lucide="trending-up" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s3}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s3desc}</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <i data-lucide="award" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s4}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s4desc}</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <i data-lucide="book-open" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s5}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s5desc}</p>
            </div>

            <div className="group">
              <div className="mb-4">
                <i data-lucide="users" className="h-10 w-10 text-gray-400 group-hover:text-gray-900 transition"></i>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{t.services.s6}</h3>
              <p className="text-gray-600 leading-relaxed">{t.services.s6desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-50 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12 text-center">{t.vision.title}</h2>
          
          <div className="space-y-12">
            <div className="border-l-2 border-gray-900 pl-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4">{t.vision.problem}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{t.vision.problemText}</p>
            </div>

            <div className="border-l-2 border-gray-900 pl-8">
              <h3 className="text-2xl font-light text-gray-900 mb-4">{t.vision.solution}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{t.vision.solutionText}</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t.vision.point1}</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t.vision.point2}</span>
                </li>
                <li className="flex items-start">
                  <div className="h-1.5 w-1.5 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t.vision.point3}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10">
              <p className="text-xl font-light mb-6 italic">{t.vision.quote}</p>
              <div className="space-y-4 text-lg">
                <p className="font-medium">{t.manifesto.p1}</p>
                <p>{t.manifesto.p2}</p>
                <p className="font-medium mt-6">{t.manifesto.p3}</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.manifesto.point1}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.manifesto.point2}</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{t.manifesto.point3}</span>
                  </li>
                </ul>
                <p className="font-medium mt-6">{t.manifesto.p4}</p>
                <p className="italic">{t.manifesto.p5}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          {selectedArticle ? (
            /* Article Detail View */
            <div>
              <button 
                onClick={closeArticle}
                className="text-gray-600 hover:text-gray-900 mb-8 inline-flex items-center"
              >
                <i data-lucide="chevron-right" className="h-4 w-4 rotate-180 mr-2"></i>
                {t.blog.backToBlog}
              </button>
              
              <article className="max-w-4xl mx-auto">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title[language]}
                  className="w-full h-96 object-cover grayscale mb-8"
                />
                
                <div className="mb-6">
                  <span className="text-sm text-gray-400 uppercase tracking-wide">
                    {new Date(selectedArticle.date).toLocaleDateString(language === 'bg' ? 'bg-BG' : 'en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  {selectedArticle.title[language]}
                </h1>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedArticle.content[language]}
                  </p>
                </div>
              </article>
            </div>
          ) : (
            /* Blog List View */
            <div>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.blog.title}</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                  {t.blog.subtitle}
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex justify-center mb-12 flex-wrap gap-3">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-6 py-2 text-sm font-medium transition ${
                    selectedCategory === 'all'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.blog.all}
                </button>
                <button
                  onClick={() => setSelectedCategory('innovation')}
                  className={`px-6 py-2 text-sm font-medium transition ${
                    selectedCategory === 'innovation'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.blog.innovation}
                </button>
                <button
                  onClick={() => setSelectedCategory('leadership')}
                  className={`px-6 py-2 text-sm font-medium transition ${
                    selectedCategory === 'leadership'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.blog.leadership}
                </button>
                <button
                  onClick={() => setSelectedCategory('industry40')}
                  className={`px-6 py-2 text-sm font-medium transition ${
                    selectedCategory === 'industry40'
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t.blog.industry40}
                </button>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <article 
                      key={article.id}
                      className="group cursor-pointer"
                      onClick={() => openArticle(article)}
                    >
                      <div className="mb-4 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title[language]}
                          className="w-full h-64 object-cover grayscale group-hover:scale-105 transition duration-300"
                        />
                      </div>
                      
                      <div className="mb-2">
                        <span className="text-xs text-gray-400 uppercase tracking-wide">
                          {new Date(article.date).toLocaleDateString(language === 'bg' ? 'bg-BG' : 'en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-gray-600 transition">
                        {article.title[language]}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {article.excerpt[language]}
                      </p>
                      
                      <span className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition inline-flex items-center">
                        {t.blog.readMore}
                        <i data-lucide="chevron-right" className="h-4 w-4 ml-1"></i>
                      </span>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">{t.blog.noArticles}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">{t.contact.title}</h2>
          <p className="text-xl text-gray-500 mb-12">{t.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="border-l-2 border-gray-900 pl-6">
              <p className="text-sm text-gray-400 mb-2">{t.contact.email}</p>
              <p className="text-lg text-gray-900">galena.schouten@catalystinnovation.eu</p>
            </div>
            <div className="border-l-2 border-gray-900 pl-6">
              <p className="text-sm text-gray-400 mb-2">{t.contact.phone}</p>
              <p className="text-lg text-gray-900">+359 877 200 991</p>
            </div>
            <div className="border-l-2 border-gray-900 pl-6">
              <p className="text-sm text-gray-400 mb-2">{t.contact.location}</p>
              <p className="text-lg text-gray-900">{t.contact.locationValue}</p>
            </div>
            <div className="border-l-2 border-gray-900 pl-6">
              <p className="text-sm text-gray-400 mb-2">{t.contact.linkedin}</p>
              <a href="https://www.linkedin.com/in/galena-schouten" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 hover:text-gray-600 transition inline-flex items-center">
                <i data-lucide="linkedin" className="h-5 w-5 mr-2"></i>
                {t.contact.connect}
              </a>
            </div>
          </div>

          <p className="text-gray-600">{t.contact.consultation}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" className="h-12 w-auto">
              <rect x="10" y="20" width="60" height="60" fill="none" stroke="#ffffff" strokeWidth="5" rx="3"/>
              <path d="M 20 70 L 60 30" stroke="#ffffff" strokeWidth="5" strokeLinecap="round"/>
              <path d="M 48 30 L 60 30 L 60 42" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <text x="85" y="50" fill="#ffffff" fontSize="24" fontWeight="600" fontFamily="Arial, sans-serif">CATALYST</text>
              <text x="85" y="72" fill="#ffffff" fontSize="24" fontWeight="300" fontFamily="Arial, sans-serif">INNOVATION</text>
            </svg>
          </div>
          <p className="text-gray-400 mb-4 font-light">{t.footer.tagline}</p>
          <p className="text-gray-600 text-sm">{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CatalystInnovations />);
