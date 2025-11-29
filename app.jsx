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
    {
      id: 1,
      title: {
        bg: 'Защо технологията не е достатъчна: Уроци от модната индустрия за производствените компании',
        en: 'Why Technology Isn\'t Enough: Lessons from Fashion Industry for Manufacturing Companies'
      },
      excerpt: {
        bg: 'Дигиталната трансформация не е само въпрос на технология. От подиума на Milano до производствените цехове в България - как културата определя успеха.',
        en: 'Digital transformation isn\'t just about technology. From Milano runways to Bulgarian manufacturing floors - how culture determines success.'
      },
      content: {
        bg: 'През годините си в модната индустрия, работейки с някои от най-престижните марки като Giorgio Armani, научих нещо фундаментално: технологията е лесната част. Истинското предизвикателство е да трансформираш хората, културата и начина на мислене.\n\nДнес, когато консултирам производствени компании в България за Индустрия 4.0 и дигитална трансформация, виждам същата грешка отново и отново. Компаниите инвестират милиони в нови машини, софтуер и технологии, но използват само 20-30% от капацитета им.\n\nЗащо?\n\nЗащото купуват технология, но не инвестират в хората. Внедряват системи, но не променят културата. Модернизират оборудването, но запазват старите начини на мислене.\n\nОт модната индустрия научих, че иновацията не се случва в заседателните зали или в технологичните спецификации. Тя се случва когато хората са готови да мислят различно, да експериментират, да приемат грешките като част от процеса на учене.\n\nУспехът на една дигитална трансформация зависи 10% от технологията и 90% от хората, лидерството и културата. Това не е красива фраза - това е реалност, която виждам всеки ден в работата си с производствени компании.\n\nАко вашата компания иска да успее в Индустрия 4.0, започнете не с избора на технология, а с подготовката на вашите хора и трансформацията на вашата култура.',
        en: 'During my years in the fashion industry, working with some of the most prestigious brands like Giorgio Armani, I learned something fundamental: technology is the easy part. The real challenge is transforming people, culture, and mindset.\n\nToday, when I consult manufacturing companies in Bulgaria on Industry 4.0 and digital transformation, I see the same mistake repeated. Companies invest millions in new machines, software, and technology, but use only 20-30% of their capacity.\n\nWhy?\n\nBecause they buy technology but don\'t invest in people. They implement systems but don\'t change culture. They modernize equipment but keep old ways of thinking.\n\nFrom the fashion industry, I learned that innovation doesn\'t happen in boardrooms or technical specifications. It happens when people are ready to think differently, to experiment, to accept mistakes as part of the learning process.\n\nThe success of digital transformation depends 10% on technology and 90% on people, leadership, and culture. This isn\'t a nice phrase - it\'s a reality I see every day working with manufacturing companies.\n\nIf your company wants to succeed in Industry 4.0, start not with choosing technology, but with preparing your people and transforming your culture.'
      },
      category: 'leadership',
      date: '2025-11-15',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: {
        bg: 'Open Innovation: Как малките и средни компании могат да конкурират глобалните гиганти',
        en: 'Open Innovation: How SMEs Can Compete with Global Giants'
      },
      excerpt: {
        bg: 'Бъдещето не принадлежи на компаниите с най-много ресурси, а на тези които умеят да си сътрудничат. Защо Open Innovation е ключът към успеха.',
        en: 'The future doesn\'t belong to companies with the most resources, but to those who know how to collaborate. Why Open Innovation is the key to success.'
      },
      content: {
        bg: 'Една от най-големите заблуди в бизнеса е, че иновациите трябва да идват отвътре. Че трябва да имаш огромен R&D отдел, милиони за изследвания, и армия от инженери.\n\nРеалността е различна.\n\nНай-иновативните компании днес не са тези с най-големите бюджети за R&D. Те са компаниите, които умеят да създават екосистеми - да си партнират със стартъпи, да колаборират с университети, да интегрират външни иновации във вътрешните си процеси.\n\nТова е Open Innovation.\n\nЗа производствените компании в България това означава огромна възможност. Не трябва да конкурирате German Mittelstand на техния терен. Вместо това, можете да създадете иновационна екосистема, където:\n\n• Партнирате с локални стартъпи за дигитални решения\n• Колаборирате с университети за R&D проекти\n• Интегрирате се в международни мрежи за знания и технологии\n• Споделяте ресурси с други компании за взаимна полза\n\nOpen Innovation не е само за технологични компании. То е стратегия за всяка компания, която иска да остане конкурентна в бързо променящия се свят.\n\nВъпросът не е дали имате ресурсите на голяма корпорация. Въпросът е дали имате гъвкавостта и отвореността да си сътрудничите с правилните партньори.',
        en: 'One of the biggest misconceptions in business is that innovation must come from within. That you need a huge R&D department, millions for research, and an army of engineers.\n\nThe reality is different.\n\nThe most innovative companies today aren\'t those with the biggest R&D budgets. They\'re companies that know how to create ecosystems - to partner with startups, collaborate with universities, integrate external innovations into internal processes.\n\nThis is Open Innovation.\n\nFor manufacturing companies in Bulgaria, this means enormous opportunity. You don\'t have to compete with German Mittelstand on their turf. Instead, you can create an innovation ecosystem where:\n\n• You partner with local startups for digital solutions\n• You collaborate with universities for R&D projects\n• You integrate into international networks for knowledge and technology\n• You share resources with other companies for mutual benefit\n\nOpen Innovation isn\'t just for tech companies. It\'s a strategy for any company that wants to stay competitive in a rapidly changing world.\n\nThe question isn\'t whether you have the resources of a large corporation. The question is whether you have the flexibility and openness to collaborate with the right partners.'
      },
      category: 'innovation',
      date: '2025-10-28',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: {
        bg: 'Индустрия 4.0 в България: Реалност, предизвикателства и възможности',
        en: 'Industry 4.0 in Bulgaria: Reality, Challenges and Opportunities'
      },
      excerpt: {
        bg: 'Къде е България в пътя към Индустрия 4.0? Какви са реалните предизвикателства и как българските компании могат да ги превърнат във възможности.',
        en: 'Where is Bulgaria on the path to Industry 4.0? What are the real challenges and how can Bulgarian companies turn them into opportunities.'
      },
      content: {
        bg: 'България има уникална позиция в контекста на Индустрия 4.0. От една страна, имаме силна производствена традиция и квалифицирана работна ръка. От друга - изоставаме в дигитализацията спрямо Западна Европа.\n\nНо това не е недостатък. Това е възможност.\n\nДокато западноевропейските компании се борят с legacy системи и съпротива срещу промяна от дългогодишни служители, българските компании могат да направят скока директно към най-новите технологии. Можем да избегнем техните грешки и да приложим техните lessons learned.\n\nРеалните предизвикателства пред българските производствени компании не са технологични:\n\n1. Липса на дигитални компетенции в ръководството\nМного управители разбират производството, но не разбират дигиталната трансформация.\n\n2. Краткосрочно мислене\nИнвестициите в Индустрия 4.0 се изплащат след години, не след месеци.\n\n3. Културна съпротива\nХората се страхуват, че технологията ще ги замени, вместо да ги направи по-ефективни.\n\n4. Липса на екосистема\nКомпаниите действат изолирано, вместо да си сътрудничат.\n\nНо всяко от тези предизвикателства е преодолимо. С правилния подход, българските компании могат не просто да наваксат, а да станат лидери в определени области на Индустрия 4.0.\n\nКлючът е да започнем не с технологията, а с хората и стратегията.',
        en: 'Bulgaria has a unique position in the context of Industry 4.0. On one hand, we have a strong manufacturing tradition and skilled workforce. On the other - we lag behind Western Europe in digitalization.\n\nBut this isn\'t a disadvantage. It\'s an opportunity.\n\nWhile Western European companies struggle with legacy systems and resistance to change from long-term employees, Bulgarian companies can make the leap directly to the latest technologies. We can avoid their mistakes and apply their lessons learned.\n\nThe real challenges facing Bulgarian manufacturing companies aren\'t technological:\n\n1. Lack of digital competencies in leadership\nMany managers understand manufacturing but don\'t understand digital transformation.\n\n2. Short-term thinking\nInvestments in Industry 4.0 pay off after years, not months.\n\n3. Cultural resistance\nPeople fear that technology will replace them instead of making them more effective.\n\n4. Lack of ecosystem\nCompanies act in isolation instead of collaborating.\n\nBut each of these challenges is surmountable. With the right approach, Bulgarian companies can not just catch up, but become leaders in certain areas of Industry 4.0.\n\nThe key is to start not with technology, but with people and strategy.'
      },
      category: 'industry40',
      date: '2025-11-01',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: {
        bg: 'От Vision към Reality: Как да трансформирате иновационната стратегия в резултати',
        en: 'From Vision to Reality: How to Transform Innovation Strategy into Results'
      },
      excerpt: {
        bg: 'Всяка компания има визия. Малко имат резултати. Каква е разликата между успешните и неуспешните иновационни инициативи?',
        en: 'Every company has a vision. Few have results. What\'s the difference between successful and unsuccessful innovation initiatives?'
      },
      content: {
        bg: 'Работила съм с десетки компании които имат "иновационна стратегия". Красиви презентации, амбициозни планове, впечатляващи бюджети.\n\nНо след година? Нищо.\n\nПроблемът не е в липсата на визия. Проблемът е в execution gap-а - разликата между това което планираме и това което реално постигаме.\n\nТова което разделя успешните от неуспешните иновационни инициативи не е качеството на стратегията. То е:\n\n1. Leadership Commitment\nНе само на думи, а с реални действия и ресурси. Когато CEO-то лично участва в иновационните проекти, те имат 5 пъти по-висок шанс за успех.\n\n2. Change Management\nХората трябва да разберат не само КАКВО се променя, но ЗАЩО. И да имат подкрепа в процеса на адаптация.\n\n3. Quick Wins\nГолемите трансформации се случват чрез малки, последователни победи. Всяка победа гради momentum и увереност.\n\n4. Measurable Results\nКакво точно измервате? Какъв е success criteria? Ако не можете да го измерите, не можете да го управлявате.\n\n5. Learning Culture\nГрешките са неизбежни. Въпросът е дали учите от тях или ги повтаряте.\n\nУспешната иновационна трансформация не е събитие. Тя е процес. И успехът идва не от перфектния план, а от постоянното адаптиране и учене по пътя.\n\nНе се питайте "Имаме ли добра стратегия?". Питайте се "Какво направихме миналата седмица за да я реализираме?"',
        en: 'I\'ve worked with dozens of companies that have an "innovation strategy". Beautiful presentations, ambitious plans, impressive budgets.\n\nBut after a year? Nothing.\n\nThe problem isn\'t lack of vision. The problem is the execution gap - the difference between what we plan and what we actually achieve.\n\nWhat separates successful from unsuccessful innovation initiatives isn\'t the quality of strategy. It\'s:\n\n1. Leadership Commitment\nNot just in words, but with real actions and resources. When the CEO personally participates in innovation projects, they have 5 times higher chance of success.\n\n2. Change Management\nPeople need to understand not just WHAT is changing, but WHY. And they need support in the adaptation process.\n\n3. Quick Wins\nBig transformations happen through small, consistent victories. Each victory builds momentum and confidence.\n\n4. Measurable Results\nWhat exactly are you measuring? What\'s the success criteria? If you can\'t measure it, you can\'t manage it.\n\n5. Learning Culture\nMistakes are inevitable. The question is whether you learn from them or repeat them.\n\nSuccessful innovation transformation isn\'t an event. It\'s a process. And success comes not from the perfect plan, but from constant adaptation and learning along the way.\n\nDon\'t ask "Do we have a good strategy?". Ask "What did we do last week to implement it?"'
      },
      category: 'leadership',
      date: '2025-10-15',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
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
        industry40: 'Индустрия 4.0',
        caseStudy: 'Case Studies'
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
        industry40: 'Industry 4.0',
        caseStudy: 'Case Studies'
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
