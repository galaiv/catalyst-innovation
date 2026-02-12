const { useState, useEffect } = React;

function CatalystInnovations() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('bg');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [pendingArticle, setPendingArticle] = useState(null);

  // Initialize Lucide icons after component mounts
  useEffect(() => {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, [selectedArticle, selectedCategory, isMenuOpen, language, showEmailPopup]);

  // Check if user has already submitted email
  useEffect(() => {
    const hasSubmitted = localStorage.getItem('emailSubmitted');
    if (hasSubmitted === 'true') {
      setEmailSubmitted(true);
    }
  }, []);

  const handleArticleClick = (article) => {
    if (!emailSubmitted) {
      setPendingArticle(article);
      setShowEmailPopup(true);
    } else {
      openArticle(article);
    }
  };

  

  const articles = [
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
        bg: `Производствената картина по коридора на Дунав се трансформира с безпрецедентна скорост. Докато индустриалните компании в Русе са инвестирали значително в модерно оборудване и производствена технология през последното десетилетие, критичен пропуск остава: повечето производители използват само 20-30% от действителния потенциал на технологията си.

Това не е проблем с технологията. Това е предизвикателство на лидерството и организационната култура, което струва на местните производители милиони в загубена производителност, пропуснати пазарни възможности и намаляваща конкурентоспособност.

ЦИФРИТЕ НЕ ЛЪЖАТ: ЦЕНАТА НА ЧАКАНЕТО

Европейската производствена статистика рисува сурова картина. Компаниите, които забавят дигиталната трансформация, изпитват:

- 15-25% ерозия на пазарен дял към дигитално активирани конкуренти в рамките на 3 години
- 30-40% по-високи оперативни разходи в сравнение с индустриалните лидери
- 50% по-дълго време до пазара за нови продукти
- Трудности при привличане и задържане на квалифицирана работна сила, особено млади таланти

За средна по размер производствена компания в Русе с 10 милиона евро годишни приходи, това се превръща в 1.5-2.5 милиона евро загубени възможности всяка година. Въпросът не е дали можете да си позволите да се трансформирате — а дали можете да си позволите да не го направите.

ЗАЩО ТРАДИЦИОННИТЕ ПОДХОДИ ВЕЧЕ НЕ РАБОТЯТ

Индустриалната екосистема, която подкрепяше производителите в Русе десетилетия наред, се променя фундаментално:

1. Очакванията на клиентите са еволюирали
Западноевропейските клиенти сега изискват проследяване на производството в реално време, предвидими дати на доставка и пълна прозрачност на веригата за доставки. Ръчно отчитане и имейл актуализации вече не отговарят на стандартите.

2. Конкуренцията се е интензифицирала
Румънските производители отвъд Дунав, сръбските съоръжения и дори турските конкуренти са модернизирали операциите си. Те печелят договори не защото са по-евтини, а защото са по-реактивни, прозрачни и надеждни.

3. Демографията на работната сила се променя
Младите инженери и квалифицирани работници не искат да работят с остарели системи. Те избират работодатели, които предлагат модерни дигитални инструменти и възможности за професионално развитие.

4. Регулаторният натиск се увеличава
Изискванията на ЕС за отчитане на устойчивостта и законите за дължима проверка на веригата за доставки стават задължителни, не опционални.

ПРОЗОРЕЦЪТ НА ВЪЗМОЖНОСТТА СЕ ЗАТВАРЯ

Има прозорец от 2-3 години, преди конкурентната разлика да стане непреодолима. Компаниите, които не започнат истинска трансформация сега, ще се окажат в една от три позиции до 2027 г.:

1. Поглънати от по-големи, дигитално способни конкуренти
2. Отпратени към нискомаржинална, стокова производствена работа
3. Принудени към скъпа, спешна трансформация при кризисни условия

Компаниите, които действат сега — докато все още имат финансова стабилност и време за внимателно внедряване — ще се превърнат в регионални лидери.

КАК ИЗГЛЕЖДА УСПЕШНАТА ТРАНСФОРМАЦИЯ

Успешните производители в подобни пазари на ЦИЕ са постигнали:

- 25-35% намаление на производствените срокове
- 20-30% намаление на оперативните разходи
- 40-50% подобрение в навременната доставка
- 15-20% увеличение на удовлетворението и задържането на служителите
- Достъп до по-високи стойностни договори с премиум западноевропейски клиенти

ПЪРВИТЕ СТЪПКИ

Започването изисква:

1. Честна оценка на къде сте днес спрямо къде трябва да бъдете
2. Ясна визия за това какъв изглежда успехът за вашия конкретен бизнес
3. Лидерско съгласуване за спешността и подхода
4. Бързи победи, които демонстрират стойност и изграждат инерция
5. Систематичен подход, който адресира технология, хора и процеси заедно

Изборът е ваш. Но часовникът тиктака.

Готови ли сте да започнете вашето трансформационно пътешествие? Свържете се с Catalyst Innovation за поверителна оценка на дигиталната готовност на вашата организация.`,
        
        en: `The manufacturing landscape along the Danube corridor is transforming at unprecedented speed. While industrial companies in Ruse have invested heavily in modern equipment and production technology over the past decade, a critical gap remains: most manufacturers are utilizing only 20-30% of their technology's actual potential.

This isn't a technology problem. It's a leadership and organizational culture challenge that's costing local manufacturers millions in lost productivity, missed market opportunities, and declining competitiveness.

THE NUMBERS DON'T LIE: THE COST OF WAITING

European manufacturing statistics paint a stark picture. Companies that delay digital transformation are experiencing:

- 15-25% market share erosion to digitally-enabled competitors within 3 years
- 30-40% higher operational costs compared to industry leaders
- 50% longer time-to-market for new products
- Difficulty attracting and retaining skilled workforce, particularly young talent

For a mid-sized Ruse manufacturer with €10 million annual revenue, this translates to €1.5-2.5 million in lost opportunity every year. The question isn't whether you can afford to transform—it's whether you can afford not to.

WHY TRADITIONAL APPROACHES NO LONGER WORK

The industrial ecosystem that supported Ruse manufacturers for decades is fundamentally changing:

1. Customer Expectations Have Evolved
Western European clients now demand real-time production tracking, predictive delivery dates, and complete supply chain transparency. Manual reporting and email updates no longer meet procurement standards.

2. Competition Has Intensified
Romanian manufacturers across the Danube, Serbian facilities, and even Turkish competitors have modernized their operations. They're winning contracts not because they're cheaper, but because they're more responsive, transparent, and reliable.

3. Workforce Demographics Are Shifting
Young engineers and skilled workers don't want to work with outdated systems. They're choosing employers who offer modern digital tools and opportunities for professional growth in cutting-edge technologies.

4. Regulatory Pressure Is Mounting
EU sustainability reporting requirements and supply chain due diligence laws are becoming mandatory, not optional.

THE WINDOW OF OPPORTUNITY IS CLOSING

There's a 2-3 year window before the competitive gap becomes insurmountable. Companies that don't begin genuine transformation now will find themselves in one of three positions by 2027:

1. Absorbed by larger, more digitally-capable competitors
2. Relegated to low-margin, commoditized production work
3. Forced into expensive, rushed transformation under crisis conditions

The companies that act now—while they still have financial stability and time to implement thoughtfully—will emerge as regional leaders.

WHAT SUCCESSFUL TRANSFORMATION LOOKS LIKE

Successful manufacturers in similar CEE markets have achieved:

- 25-35% reduction in production lead times
- 20-30% decrease in operational costs
- 40-50% improvement in on-time delivery
- 15-20% increase in employee satisfaction and retention
- Access to higher-value contracts with premium Western European clients

THE FIRST STEPS

Starting requires:

1. Honest assessment of where you are today versus where you need to be
2. Clear vision of what success looks like for your specific business
3. Leadership alignment on the urgency and approach
4. Quick wins that demonstrate value and build momentum
5. Systematic approach that addresses technology, people, and processes together

The choice is yours. But the clock is ticking.

Ready to begin your transformation journey? Contact Catalyst Innovation for a confidential assessment of your organization's digital readiness.`
      },
      category: 'industry40',
      date: '2026-02-05',
      image: 'https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&q=80&w=2000'
    },

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
        bg: `Всяка седмица производствените лидери в България получават предложения от консултантски фирми, обещаващи революционни резултати: "Внедрете Индустрия 4.0 за 6 месеца!" "Намалете разходите с 40%!" "Гарантирана пълна дигитална трансформация!"

Но статистиките разказват различна история: 70% от проектите за дигитална трансформация не успяват да постигнат целите си. Милиони евро се харчат за консултантски услуги, които доставят впечатляващи PowerPoint презентации, но малко трайна промяна.

Разликата между успех и неуспех не е препоръчаната технология или методология — а изборът на правилния консултантски партньор, който разбира вашия специфичен контекст, предизвикателства и култура.

КРИТИЧНИТЕ ВЪПРОСИ ПРЕДИ НАЕМАНЕ

Въпрос 1: "Разбирате ли нашата индустрия и регионален контекст?"

Производството не е монолитно. Обработката на метали се различава от производството на храни. Българската производствена култура се различава от румънския или сръбския контекст.

Какво да търсите:
- Специфичен опит във вашия индустриален сектор
- Разбиране на динамиката на производството в ЦИЕ
- Познания за регионалните пазарни условия
- Референции от подобни компании на подобни пазари

Червен флаг: Консултанти, които говорят само в общи термини или чийто опит е основно в Западна Европа без разбиране на нуждите от локална адаптация.

Въпрос 2: "Каква е вашата философия за дигиталната трансформация?"

Това разкрива дали разбират, че трансформацията е фундаментално за хора и култура, или са просто внедрители на технологии.

Какво да търсите:
- Признаване, че технологията е само 10-20% от успеха
- Фокус върху развитието на лидерството и управлението на промяната
- Акцент върху ангажираността на служителите
- Дискусия за преработка на процеси преди избор на технология

Червен флаг: Незабавен фокус върху конкретни технологии, без да се разбере първо вашите стратегически цели и културни динамики.

Въпрос 3: "Как измервате успеха?"

Неясните обещания за "подобрение" водят до разочарование. Ясните, измерими цели осигуряват отчетност.

Какво да търсите:
- Фокус върху бизнес резултати: растеж на приходите, подобрение на марженала
- Специфични, количествени цели
- Редовно измерване на прогреса
- Готовност да свързват компенсацията с резултати

Червен флаг: Фокус върху дейностни метрики ("ще проведем 20 работилници"), а не върху бизнес резултати.

ПРОЦЕСЪТ НА ДЪЛЖИМА ПРОВЕРКА

Когато говорите с референции, попитайте:
- Какъв беше действителният срещу очаквания график?
- Какви бяха действителните срещу бюджетираните разходи?
- Постигнати ли бяха обещаните резултати?
- Какво ви изненада?
- Бихте ли ги наели отново?

КРАЙНИЯТ ИЗВОД

Правилният консултантски партньор трябва да се чувства като продължение на вашия лидерски екип — носейки експертен опит, предизвиквайки конструктивно вашето мислене и бидейки истински инвестирани във вашия успех.

Неправилният партньор може да ви върне назад с години. Правилният партньор може да ускори пътуването ви към ставане индустриален лидер.

Изберете мъдро. Бъдещето на вашата компания зависи от това.`,
        
        en: `Every week, manufacturing leaders in Bulgaria receive proposals from consulting firms promising revolutionary results: "Implement Industry 4.0 in 6 months!" "Reduce costs by 40%!" "Complete digital transformation guaranteed!"

Yet statistics tell a different story: 70% of digital transformation projects fail to achieve their objectives. Millions of euros are spent on consulting services that deliver impressive PowerPoint presentations but little lasting change.

The difference between success and failure isn't the technology or methodology recommended—it's choosing the right consulting partner who understands your specific context, challenges, and culture.

THE CRITICAL QUESTIONS BEFORE HIRING

Question 1: "Do You Understand Our Industry and Regional Context?"

Manufacturing is not monolithic. Metal processing differs from food production. Bulgarian manufacturing culture differs from Romanian or Serbian contexts.

What to look for:
- Specific experience in your industrial sector
- Understanding of CEE manufacturing dynamics
- Knowledge of regional market conditions
- References from similar companies in similar markets

Red flag: Consultants who speak only in generic terms or whose experience is primarily in Western Europe without understanding local adaptation needs.

Question 2: "What's Your Philosophy on Digital Transformation?"

This reveals whether they understand transformation is fundamentally about people and culture, or if they're just technology implementers.

What to look for:
- Recognition that technology is only 10-20% of transformation success
- Focus on leadership development and change management
- Emphasis on employee engagement
- Discussion of process redesign before technology selection

Red flag: Immediate focus on specific technologies without first understanding your strategic objectives and cultural dynamics.

Question 3: "How Do You Measure Success?"

Vague promises of "improvement" lead to disappointment. Clear, measurable objectives ensure accountability.

What to look for:
- Business outcome focus: revenue growth, margin improvement
- Specific, quantifiable targets
- Regular progress measurement
- Willingness to tie compensation to results

Red flag: Focus on activity metrics ("we'll conduct 20 workshops") rather than business outcomes.

THE DUE DILIGENCE PROCESS

When speaking with references, ask:
- What was the actual vs. expected timeline?
- What was the actual vs. budgeted cost?
- Were promised results achieved?
- What surprised you?
- Would you hire them again?

THE BOTTOM LINE

The right consulting partner should feel like an extension of your leadership team—bringing expertise you lack, challenging your thinking constructively, and being genuinely invested in your success.

The wrong partner can set you back years. The right partner can accelerate your journey to becoming an industry leader.

Choose wisely. Your company's future depends on it.`
      },
      category: 'leadership',
      date: '2026-02-06',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000'
    },

    {
      id: 3,
      title: {
        bg: 'ИИ в производството: Как да приемете изкуствения интелект без ажиотажа',
        en: 'AI in Manufacturing: How to Adopt Artificial Intelligence Without the Hype'
      },
      excerpt: {
        bg: 'Изкусственият интелект се превърна в най-обсъжданата технология в производството. Всяка конференция обещава, че ИИ ще революционизира вашите операции. Но повечето производители не постигат значими резултати.',
        en: 'Artificial Intelligence has become the most discussed technology in manufacturing. Every conference promises that AI will revolutionize your operations. But most manufacturers fail to achieve meaningful results.'
      },
      content: {
        bg: `Изкусственият интелект се превърна в най-обсъжданата технология в производството. Всяка конференция, всяко търговско списание, всеки технологичен доставчик обещава, че ИИ ще революционизира вашите операции.

Но ето какво не ви казват: Повечето производители, които се втурват в инициативи за ИИ, не постигат значими резултати. Не защото ИИ не работи, а защото го подхождат като технологичен проблем, а не като бизнес възможност.

КЪДЕ ИИ СЪЗДАВА РЕАЛНА СТОЙНОСТ

1. Предвидимо поддържане
- 30-50% намаление на незапланираните престои
- 20-25% намаление на разходите за поддръжка

2. Контрол на качеството
- 40-60% намаление на времето за инспекция
- 95-99% точност при откриване на дефекти

3. Планиране на производството
- 15-25% подобрение в навременната доставка
- 10-20% намаление на инвентара в процес

4. Прогнозиране на търсенето
- 20-30% намаление на разходите за инвентар
- 15-25% подобрение в точността на прогнозите

ПРЕДПОСТАВКИТЕ ЗА УСПЕХ

Преди да инвестирате в ИИ:

1. Качествени данни
- Поне 6-12 месеца исторически данни
- Точни, пълни записи
- Релевантни променливи

2. Ясни бизнес цели
- "Намалете престоите с 40%"
- "Намалете дефектите от 3% на 1%"

3. Техническа инфраструктура
- Сензори за събиране на данни
- Мрежова свързаност
- Интеграция със системи

4. Организационна готовност
- Лидерско ангажиране
- Приемане от служителите
- Управление на промяната

ПРАКТИЧЕСКАТА ПЪТНА КАРТА

Фаза 1: Оценете (Месеци 1-2)
- Идентифицирайте възможности
- Оценете качеството на данните
- Приоритизирайте случаи на употреба

Фаза 2: Изградете основа (Месеци 2-6)
- Почистете данни
- Инсталирайте сензори
- Създайте инфраструктура

Фаза 3: Пилот (Месеци 6-10)
- Внедрете едно решение
- Тествайте в контролирана среда
- Усъвършенствайте модели

Фаза 4: Мащабирайте (Месеци 10-18)
- Разширете успешни решения
- Внедрете допълнителни случаи
- Оптимизирайте непрекъснато

КРАЙНИЯТ ИЗВОД

ИИ предлага истински възможности, но успехът изисква:
- Ясни бизнес цели
- Качествени данни
- Реалистични очаквания
- Организационна готовност
- Дисциплинирано внедряване

Производителите, които ще успеят с ИИ, са тези, които внимателно оценяват стойността, изграждат основи и внедряват методично.`,
        
        en: `Artificial Intelligence has become the most discussed technology in manufacturing. Every conference, every trade magazine, every technology vendor promises that AI will revolutionize your operations.

But here's what they don't tell you: Most manufacturers who rush into AI initiatives fail to achieve meaningful results. Not because AI doesn't work, but because they approach it as a technology problem rather than a business opportunity.

WHERE AI CREATES REAL VALUE

1. Predictive Maintenance
- 30-50% reduction in unplanned downtime
- 20-25% reduction in maintenance costs

2. Quality Control
- 40-60% reduction in inspection time
- 95-99% defect detection accuracy

3. Production Planning
- 15-25% improvement in on-time delivery
- 10-20% reduction in work-in-progress inventory

4. Demand Forecasting
- 20-30% reduction in inventory carrying costs
- 15-25% improvement in forecast accuracy

THE PREREQUISITES FOR SUCCESS

Before investing in AI:

1. Quality Data
- At least 6-12 months historical data
- Accurate, complete records
- Relevant variables

2. Clear Business Objectives
- "Reduce downtime by 40%"
- "Decrease defect rate from 3% to 1%"

3. Technical Infrastructure
- Sensors for data collection
- Network connectivity
- System integration

4. Organizational Readiness
- Leadership commitment
- Employee acceptance
- Change management

THE PRACTICAL ROADMAP

Phase 1: Assess (Months 1-2)
- Identify opportunities
- Evaluate data quality
- Prioritize use cases

Phase 2: Build Foundation (Months 2-6)
- Clean data
- Install sensors
- Create infrastructure

Phase 3: Pilot (Months 6-10)
- Implement one solution
- Test in controlled environment
- Refine models

Phase 4: Scale (Months 10-18)
- Expand successful solutions
- Implement additional cases
- Optimize continuously

THE BOTTOM LINE

AI offers genuine opportunities, but success requires:
- Clear business objectives
- Quality data
- Realistic expectations
- Organizational readiness
- Disciplined implementation

The manufacturers who will succeed with AI are those who thoughtfully assess value, build proper foundations, and implement methodically.`
      },
      category: 'innovation',
      date: '2026-02-07',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000'
    },

    {
      id: 4,
      title: {
        bg: 'Правилото 90%: Защо повечето технологични инвестиции се провалят',
        en: 'The 90% Rule: Why Most Technology Investments Fail'
      },
      excerpt: {
        bg: 'Средна производствена компания инвестира €500,000 в най-съвременна система. Осемнадесет месеца по-късно системата стои неизползвана. Проблемът не е технологията.',
        en: 'A mid-sized manufacturer invests €500,000 in a state-of-the-art system. Eighteen months later, the system sits largely unused. The problem isn\'t the technology.'
      },
      content: {
        bg: `Средна производствена компания инвестира €500,000 в най-съвременна система за управление на производството. Осемнадесет месеца по-късно производствените планиращи все още използват Excel. Операторите координират чрез WhatsApp. Скъпата система стои неизползвана.

Звучи познато?

Компаниите инвестират милиони в технология, обещаваща трансформация, само за да постигнат 20-30% от очакваната стойност.

Проблемът не е технологията. Това е фундаменталното неразбиране на успешното приемане.

ПРАВИЛОТО 90%

Успешното приемане на технология е:
- 10% за самата технология
- 90% за хора, лидерство и организационна култура

Технологията обикновено е лесната част. Трудната част е подготовката на организацията да използва технологията ефективно.

ПЕТТЕ СТЪЛБА НА ГОТОВНОСТТА

Стълб 1: Ангажираност на лидерството

Разликата между подкрепа и ангажираност:
- Подкрепа: "Да, внедряваме тази система. ИТ ще се справи."
- Ангажираност: "Това е стратегически приоритет. Аз лично съм включен."

Ангажираността означава:
- Видимо участие в внедряването
- Разпределение на адекватни ресурси
- Последователно съобщаване

Стълб 2: Преработка на процеса

Фатална грешка: Автоматизиране на съществуващи процеси без да се поставят под въпрос дали са оптимални.

Правилната последователност:
1. Документирайте текущото състояние
2. Идентифицирайте болезнените точки
3. Представете идеално състояние
4. Проектирайте нов процес
5. Внедрете технологията
6. Оптимизирайте непрекъснато

Стълб 3: Управление на промяната

Технологията променя начина, по който хората работят. Без управление на човешкия аспект, приемането се проваля.

Основни елементи:
- Анализ на заинтересованите страни
- Комуникационна стратегия
- Ефективно обучение
- Подкрепа и коучинг

Стълб 4: Култура на данни

Технологията изисква добри данни. Добрите данни изискват организационна дисциплина.

Изграждане на култура на данни:
- Мислене за качество на данните
- Прозрачност като норма
- Експериментирането се оценява
- Учене от грешки

Стълб 5: Развитие на способности

Технологията променя необходимите умения.

Подходи:
- Техническо обучение
- Нови дефиниции на роли
- Постепенна отговорност
- Непрекъснато развитие

ОЦЕНКА НА ГОТОВНОСТТА

Преди голяма инвестиция, оценете:

Готовност на лидерството:
☐ CEO лично ангажиран
☐ Висше ръководство съгласувано
☐ Готовност за инвестиция
☐ Търпение за 18-36 месеца

Готовност на процесите:
☐ Процеси документирани
☐ Възможности идентифицирани
☐ Готовност за промяна
☐ Ясна визия

Културна готовност:
☐ Положително отношение
☐ История на промени
☐ Готовност за експериментиране
☐ Открита комуникация

Готовност на данните:
☐ Разбиране за важността
☐ Дисциплина за данни
☐ Готовност за прозрачност
☐ Практика на използване

Ако не можете да отметнете 70%, не сте готови. Инвестирайте в изграждане на готовност преди технология.

КРАЙНИЯТ ИЗВОД

Трудната част е подготовката на организацията. Това изисква:
- Честна оценка
- Ангажираност на лидерството
- Преработка на процеса
- Управление на промяната
- Културна промяна
- Изграждане на способности

Компаниите, които инвестират в готовност, постигат 60-80% от стойността. Тези, които пропускат тази стъпка, постигат 20-30%.

Изборът е ваш: €500,000 за неизползвана технология, или €300,000 за технология плюс €200,000 за готовност и трансформация, която доставя резултати.`,
        
        en: `A mid-sized manufacturer invests €500,000 in a state-of-the-art production management system. Eighteen months later, production planners still use Excel. Operators coordinate via WhatsApp. The expensive system sits unused.

Sound familiar?

Companies invest millions in technology promising transformation, only to achieve 20-30% of expected value.

The problem isn't the technology. It's the fundamental misunderstanding of successful adoption.

THE 90% RULE

Successful technology adoption is:
- 10% about the technology itself
- 90% about people, leadership, and organizational culture

The technology is usually the easy part. The hard part is preparing your organization to leverage technology effectively.

THE FIVE PILLARS OF READINESS

Pillar 1: Leadership Commitment

The difference between support and commitment:
- Support: "Yes, we're implementing this system. IT will handle it."
- Commitment: "This is strategic priority. I'm personally involved."

Commitment means:
- Visible involvement in implementation
- Adequate resource allocation
- Consistent messaging

Pillar 2: Process Redesign

Fatal mistake: Automating existing processes without questioning whether they're optimal.

The right sequence:
1. Document current state
2. Identify pain points
3. Envision ideal state
4. Design new process
5. Implement technology
6. Optimize continuously

Pillar 3: Change Management

Technology changes how people work. Without managing the human dimension, adoption fails.

Essential elements:
- Stakeholder analysis
- Communication strategy
- Effective training
- Support and coaching

Pillar 4: Data Culture

Technology requires good data. Good data requires organizational discipline.

Building data culture:
- Data quality mindset
- Transparency as normal
- Experimentation valued
- Learning from mistakes

Pillar 5: Capability Development

Technology changes needed skills.

Approaches:
- Technical training
- New role definitions
- Progressive responsibility
- Continuous development

READINESS ASSESSMENT

Before major investment, assess:

Leadership Readiness:
☐ CEO personally committed
☐ Senior leadership aligned
☐ Willingness to invest
☐ Patience for 18-36 months

Process Readiness:
☐ Processes documented
☐ Opportunities identified
☐ Willingness to challenge
☐ Clear vision

Cultural Readiness:
☐ Positive attitude
☐ Track record of changes
☐ Willingness to experiment
☐ Open communication

Data Readiness:
☐ Understanding of importance
☐ Data discipline
☐ Willingness for transparency
☐ Practice of using data

If you can't check 70%, you're not ready. Invest in building readiness before technology.

THE BOTTOM LINE

The hard part is preparing your organization. This requires:
- Honest assessment
- Leadership commitment
- Process redesign
- Change management
- Cultural shift
- Capability building

Companies that invest in readiness achieve 60-80% of value. Those that skip this step achieve 20-30%.

The choice is yours: €500,000 for unused technology, or €300,000 for technology plus €200,000 for readiness and transformation that delivers results.`
      },
      category: 'leadership',
      date: '2026-02-08',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000'
    },

    {
      id: 5,
      title: {
        bg: 'Защо вашият текущ бизнес модел няма да оцелее',
        en: 'Why Your Current Business Model Won\'t Survive'
      },
      excerpt: {
        bg: 'Традиционният модел на договорно производство умира. Не бавно. Не евентуално. Точно сега. Производителите трябва да преосмислят фундаментално бизнес модела си.',
        en: 'The traditional contract manufacturing business model is dying. Not slowly. Not eventually. Right now. Manufacturers must fundamentally rethink their business model.'
      },
      content: {
        bg: `Десетилетия наред бизнес моделът за българските производители беше прост: произвеждай качествени продукти на конкурентни цени за западноевропейски клиенти.

Но всяко едно от тези условия се е променило драматично. Традиционният модел на договорно производство умира. Не бавно. Не евентуално. Точно сега.

ЗАЩО ТРАДИЦИОННИТЕ МОДЕЛИ СЕ ПРОВАЛЯТ

Натиск 1: Компресиране на маржа
- Румънски конкуренти с по-ниски разходи
- Турски производители с агресивно ценообразуване
- Автоматизация, правеща разликите в труда по-малко значими

Типична компания, която се радваше на 18-22% марж преди пет години, сега се бори за 10-12%.

Натиск 2: Превръщане в стока
- Клиентите разглеждат производителите като взаимозаменяеми
- Процесите се фокусират основно върху цената
- Дългосрочните партньорства отстъпват

Натиск 3: Миграция на стойността
Стойността се измества към:
- Дизайн и инженеринг
- Марка и маркетинг
- Следпродажбени услуги
- Данни и прозрения

Компаниите, които притежават клиентски връзки, улавят 60-70% от печалбите. Производителите получават 10-15%.

Натиск 4: Технологична дисрупция
- Адитивно производство
- Автоматизация
- ИИ и оптимизация
- Дигитални платформи

ИМПЕРАТИВЪТ ЗА ИНОВАЦИЯ

Не можете да решите проблем с бизнес модела само с оперативни подобрения.

Иновацията на бизнес модела означава преосмисляне:
- Каква стойност създавате
- Как я създавате
- Как я улавяте
- За кого я създавате

ПЕТ ПЪТЯ ЗА ИНОВАЦИЯ

Път 1: От продукти към решения
Предоставяй пълни решения, включително услуги, поддръжка и оптимизация.

Улавена стойност:
- Текущи клиентски връзки
- По-високи маржове от услуги
- Предвидими приходи

Път 2: От собственост към достъп
Клиентите плащат за способност или резултати, не за притежаване на активи.

Улавена стойност:
- Повтарящи се приходи
- Контрол върху жизнения цикъл
- Дълбоки данни

Път 3: От линеен към кръгов
Проектирай за кръговост, поддържай собственост, улавяй стойност чрез повторна употреба.

Улавена стойност:
- Намалени материални разходи
- Нови потоци на приходи
- Устойчивост

Път 4: От доставчик към партньор
Стани стратегически партньор в иновацията на клиента.

Улавена стойност:
- По-високи маржове
- По-ранно ангажиране
- По-силни връзки

Път 5: От B2B към B2B2C
Използвай способности за създаване на марки за крайните пазари.

Улавена стойност:
- Притежавай клиентски връзки
- Улавяй дребно продажбени маржове
- Директна обратна връзка

КРАЙНИЯТ ИЗВОД

Всеки производител се изправя пред избор:

Избор 1: Управлявай спада
Продължи траекторията, постепенно губейки марж и позиция.

Избор 2: Трансформирай се за оцеляване
Отговори при кризисни условия. Труд но. Успех: нисък.

Избор 3: Трансформирай се за лидерство
Действай сега от позиция на сила. Предизвикателно, но постижимо.

Бъдещето на вашата компания зависи от това.`,
        
        en: `For decades, the business model for Bulgarian manufacturers was straightforward: produce quality products at competitive prices for Western European customers.

But every single one of these conditions has changed dramatically. The traditional contract manufacturing business model is dying. Not slowly. Not eventually. Right now.

WHY TRADITIONAL MODELS ARE FAILING

Pressure 1: Margin Compression
- Romanian competitors with lower costs
- Turkish manufacturers with aggressive pricing
- Automation making labor differences less significant

A typical company that enjoyed 18-22% margins five years ago now struggles for 10-12%.

Pressure 2: Commoditization
- Customers view manufacturers as interchangeable
- Processes focus primarily on price
- Long-term partnerships give way to transactions

Pressure 3: Value Migration
Value is shifting toward:
- Design and engineering
- Brand and marketing
- After-sales services
- Data and insights

Companies that own customer relationships capture 60-70% of profits. Manufacturers get 10-15%.

Pressure 4: Technological Disruption
- Additive manufacturing
- Automation
- AI and optimization
- Digital platforms

THE INNOVATION IMPERATIVE

You cannot solve a business model problem with operational improvements alone.

Business model innovation means rethinking:
- What value you create
- How you create it
- How you capture it
- Who you create it for

FIVE INNOVATION PATHS

Path 1: From Products to Solutions
Provide complete solutions including services, support, and optimization.

Value captured:
- Ongoing customer relationships
- Higher margins on services
- Predictable revenue

Path 2: From Ownership to Access
Customers pay for capability or outcomes, not asset ownership.

Value captured:
- Recurring revenue
- Lifecycle control
- Deep data

Path 3: From Linear to Circular
Design for circularity, maintain ownership, capture value through reuse.

Value captured:
- Reduced material costs
- New revenue streams
- Sustainability

Path 4: From Provider to Partner
Become strategic partner in customer innovation.

Value captured:
- Higher margins
- Earlier engagement
- Stronger relationships

Path 5: From B2B to B2B2C
Leverage capabilities to create branded offerings for end markets.

Value captured:
- Own customer relationships
- Capture retail margins
- Direct feedback

THE BOTTOM LINE

Every manufacturer faces a choice:

Choice 1: Manage Decline
Continue trajectory, gradually losing margin and position.

Choice 2: Transform for Survival
Respond under crisis conditions. Difficult. Success: low.

Choice 3: Transform for Leadership
Act now from position of strength. Challenging but achievable.

Your company's future depends on it.`
      },
      category: 'innovation',
      date: '2026-02-09',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    },

    {
      id: 6,
      title: {
        bg: 'Дилемата на дунавския коридор: Защо производителите в Русе трябва да действат сега',
        en: 'The Danube Corridor Dilemma: Why Ruse Manufacturers Must Act Now'
      },
      excerpt: {
        bg: 'Конкурентното предимство на Русе нараства ли или тихо ерозира? Неудобният отговор за повечето производители: То ерозира. Не катастрофално, но стабилно и ускорявайки се.',
        en: 'Is Ruse\'s manufacturing advantage growing stronger or quietly eroding? The uncomfortable answer for most manufacturers: It\'s eroding. Not catastrophically, but steadily and accelerating.'
      },
      content: {
        bg: `Десетилетия наред производителите в Русе са се радвали на стратегическо местоположение на Дунав, по-ниски разходи от Западна Европа, квалифицирана работна сила.

Но попитайте се честно: Конкурентното предимство на Русе нараства ли или ерозира?

Неудобният отговор: То ерозира. Не катастрофално, но стабилно и ускорявайки се.

ПРЕДУПРЕДИТЕЛНИТЕ ЗНАЦИ

Знак 1: Притискането на маржа
"Преди пет години котирахме с 18-20% маржове. Сега се борим за 10-12%. Клиентите искат 5-7% намаление годишно."

Знак 2: Неизползването
Колко производители работят при:
- Една смяна вместо две
- 60-70% капацитет вместо 85-90%
- Намаляване на извънредната работа

Знак 3: Оттичане на таланти
Младите инженери не искат да останат. Те виждат:
- По-високи заплати в София (30-40% повече)
- По-добри възможности в Западна Европа
- По-модерни среди

Знак 4: Промяна в отношенията
Клиентите се движат към:
- Транзакционни връзки
- Чести повторни наддавания
- Намаляване на размерите
- Пренасяне на производството

Знак 5: Колебание при инвестициите
Въпреки стимули, много се колебаят да инвестират в:
- Автоматизация
- Дигитална инфраструктура
- Нови способности
- Модернизация

КОНКУРЕНЦИЯТА НЕ СТОИ

Румънска конкуренция:
- Тежко инвестиране със структурни фондове
- 10-15% по-ниски разходи
- По-модерни съоръжения

Сръбско възраждане:
- Големи чуждестранни инвестиции
- Модерни съоръжения
- Растящи способности

Турска експанзия:
- Масивни инвестиции
- Агресивно ценообразуване
- Европейска експанзия

ПРЕДИМСТВАТА НА РУСЕ

Въпреки предизвикателствата:

Предимство 1: Индустриална екосистема
- Концентрация на компании
- Мрежи на доставчици
- Технически институции

Предимство 2: Достъп до пазара
- Членство в ЕС
- Близост до пазари
- Дунав за логистика

Предимство 3: Инженерен талант
- Технически университети
- По-ниски разходи
- Многоезична работна сила

Предимство 4: Гъвкавост
- Бързо адаптиране
- Директни връзки
- Персонализиране

Предимство 5: Качество
- Сравнимо със Западна Европа
- По-ниско ценообразуване
- Доказана надеждност

ПЪТНАТА КАРТА

Стъпка 1: Честна оценка (Месец 1)
- Къде сме уязвими?
- Какви са предимствата?
- Кои сегменти предлагат перспективи?

Стъпка 2: Дефинирай посока (Месец 2)
- Кои клиенти да приоритизираш?
- Какви способности да изградиш?
- Как да се диференцираш?

Стъпка 3: Ангажимент (Месец 2-3)
- Изгради консенсус
- Ангажирай ресурси
- Подготви се за 3-5 години

Стъпка 4: Бързи победи (Месец 3-6)
- Видими подобрения
- Изгради инерция
- Тествай стратегия

Стъпка 5: Основи (Месец 6-18)
- Развий способности
- Внедри технология
- Преработи процеси

Стъпка 6: Мащабирай (Месец 18-36)
- Разшири инициативи
- Задълбочи връзки
- Усъвършенствай модел

ИЗБОРЪТ

Избор 1: Управлявай спада
Продължи траекторията, губейки позиция.

Избор 2: Трансформирай за оцеляване
Отговори при криза. Труд но. Успех: нисък.

Избор 3: Трансформирай за лидерство
Действай сега от сила. Предизвикателно, постижимо.

Дунав тече напред. Вашият бизнес също трябва.`,
        
        en: `For decades, Ruse manufacturers have enjoyed strategic location on the Danube, lower costs than Western Europe, skilled workforce.

But ask yourself honestly: Is Ruse's advantage growing or eroding?

The uncomfortable answer: It's eroding. Not catastrophically, but steadily and accelerating.

THE WARNING SIGNS

Sign 1: Margin Squeeze
"Five years ago we quoted 18-20% margins. Now we fight for 10-12%. Customers demand 5-7% annual reductions."

Sign 2: Underutilization
How many manufacturers run at:
- Single shift instead of two
- 60-70% capacity instead of 85-90%
- Cutting overtime

Sign 3: Talent Drain
Young engineers don't want to stay. They see:
- Higher salaries in Sofia (30-40% more)
- Better opportunities in Western Europe
- More modern environments

Sign 4: Relationship Shift
Customers moving toward:
- Transactional relationships
- Frequent rebidding
- Cutting sizes
- Bringing production in-house

Sign 5: Investment Hesitation
Despite incentives, many hesitate to invest in:
- Automation
- Digital infrastructure
- New capabilities
- Modernization

COMPETITION ISN'T STANDING STILL

Romanian Competition:
- Heavy investment with structural funds
- 10-15% lower costs
- More modern facilities

Serbian Renaissance:
- Major foreign investments
- Modern facilities
- Growing capabilities

Turkish Expansion:
- Massive investments
- Aggressive pricing
- European expansion

RUSE'S ADVANTAGES

Despite challenges:

Advantage 1: Industrial Ecosystem
- Company concentration
- Supplier networks
- Technical institutions

Advantage 2: Market Access
- EU membership
- Market proximity
- Danube logistics

Advantage 3: Engineering Talent
- Technical universities
- Lower costs
- Multilingual workforce

Advantage 4: Flexibility
- Quick adaptation
- Direct relationships
- Customization

Advantage 5: Quality
- Comparable to Western Europe
- Lower pricing
- Proven reliability

THE ROADMAP

Step 1: Honest Assessment (Month 1)
- Where are we vulnerable?
- What are advantages?
- Which segments offer prospects?

Step 2: Define Direction (Month 2)
- Which customers to prioritize?
- What capabilities to build?
- How to differentiate?

Step 3: Commitment (Month 2-3)
- Build consensus
- Commit resources
- Prepare for 3-5 years

Step 4: Quick Wins (Month 3-6)
- Visible improvements
- Build momentum
- Test strategy

Step 5: Foundations (Month 6-18)
- Develop capabilities
- Implement technology
- Redesign processes

Step 6: Scale (Month 18-36)
- Expand initiatives
- Deepen relationships
- Refine model

THE CHOICE

Choice 1: Manage Decline
Continue trajectory, losing position.

Choice 2: Transform for Survival
Respond in crisis. Difficult. Success: low.

Choice 3: Transform for Leadership
Act now from strength. Challenging, achievable.

The Danube flows forward. Your business must too.`
      },
      category: 'industry40',
      date: '2026-02-10',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=2000'
    }
  ];

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
      emailPopup: {
        title: 'Получете достъп до пълните статии',
        subtitle: 'Присъединете се към над 500 производствени лидери, които получават практически прозрения за дигитална трансформация.',
        bonus: '🎁 Бонус: Безплатна консултация + оценка на готовността ви за Индустрия 4.0',
        emailPlaceholder: 'Вашият имейл адрес',
        button: 'Получете достъп',
        privacy: 'Без спам. Отписване по всяко време.'
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
      emailPopup: {
        title: 'Get Access to Full Articles',
        subtitle: 'Join 500+ manufacturing leaders receiving practical insights on digital transformation.',
        bonus: '🎁 Free consultation + personalized Industry 4.0 readiness',
        emailPlaceholder: 'Your email address',
        button: 'Get Access',
        privacy: 'No spam. Unsubscribe anytime.'
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
      {/* Email Collection Popup */}
     {/* Email Collection Popup - Connected to Mailchimp */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full p-8 relative rounded-xl shadow-2xl">
            <button 
              onClick={() => { setShowEmailPopup(false); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="text-2xl font-light text-gray-900 mb-3">
              {language === 'bg' ? 'Получете достъп до пълните статии' : 'Get Full Article Access'}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {language === 'bg' 
                ? 'Присъединете се към над 500 производствени лидери, които получават практически прозрения за дигитална трансформация.' 
                : 'Join 500+ manufacturing leaders receiving practical digital transformation insights.'}
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-6">
              <p className="text-sm text-amber-900">
                {language === 'bg' 
                  ? '🎁 Бонус: Безплатна консултация + оценка на готовността ви за Индустрия 4.0' 
                  : '🎁 Bonus: Free consultation + Industry 4.0 readiness assessment'}
              </p>
            </div>
            
            <form 
              action="https://catalystinnovation.us12.list-manage.com/subscribe/post?u=0fb07686475035f35ed0fa028&id=90ec566c5e&f_id=008ee4e1f0" 
              method="post" 
              target="_blank"
              onSubmit={() => {
                localStorage.setItem('emailSubmitted', 'true');
                setEmailSubmitted(true);
                setShowEmailPopup(false);
                if (pendingArticle) {
                  setTimeout(() => { openArticle(pendingArticle); setPendingArticle(null); }, 500);
                }
              }}
            >
              <input
                type="email"
                name="EMAIL"
                placeholder={language === 'bg' ? 'Вашият имейл адрес' : 'Your email address'}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              />

              {/* Anti-spam bot field - DO NOT REMOVE */}
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                <input type="text" name="b_0fb07686475035f35ed0fa028_90ec566c5e" tabIndex="-1" defaultValue="" />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition font-light tracking-wide"
              >
                {language === 'bg' ? 'Получете достъп' : 'Get Access'}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                {language === 'bg' ? 'Без спам. Отписване по всяко време.' : 'No spam. Unsubscribe anytime.'}
              </p>
            </form>
          </div>
        </div>
      )}

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
                      onClick={() => handleArticleClick(article)}
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
# 📧 Mailchimp Newsletter Signup — Ready to Paste into app.jsx

## YOUR MAILCHIMP DETAILS (already filled in):
- **Action URL:** `https://catalystinnovation.us12.list-manage.com/subscribe/post?u=0fb07686475035f35ed0fa028&id=90ec566c5e&f_id=008ee4e1f0`
- **Bot field:** `b_0fb07686475035f35ed0fa028_90ec566c5e`

---

## STEP 1: Open your app.jsx on GitHub

1. Go to your GitHub repository
2. Open **app.jsx**
3. Click the **pencil icon** (Edit)

---

## STEP 2: Find where to paste

Search for `{/* Contact Section */}` in your code.

**PASTE THE CODE BELOW** right BEFORE that line.

---

## STEP 3: Copy and paste this code

```jsx
      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-3xl font-light mb-3 text-gray-900">
                {language === 'bg' ? 'Безплатна консултация' : 'Free Consultation'}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed">
                {language === 'bg' 
                  ? 'Запишете се и получете безплатна 30-минутна консултация за дигитална трансформация на вашата компания.' 
                  : 'Sign up and get a free 30-minute consultation on digital transformation for your company.'}
              </p>
            </div>

            <form 
              action="https://catalystinnovation.us12.list-manage.com/subscribe/post?u=0fb07686475035f35ed0fa028&id=90ec566c5e&f_id=008ee4e1f0" 
              method="post" 
              id="mc-embedded-subscribe-form" 
              name="mc-embedded-subscribe-form" 
              className="validate" 
              target="_blank"
            >
              <div className="space-y-4">
                <div>
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition" 
                    id="mce-EMAIL" 
                    placeholder={language === 'bg' ? 'Вашият email адрес' : 'Your email address'} 
                    required 
                  />
                </div>

                <div>
                  <input 
                    type="text" 
                    name="FNAME" 
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition" 
                    id="mce-FNAME" 
                    placeholder={language === 'bg' ? 'Вашето име' : 'Your name'} 
                  />
                </div>

                <div>
                  <input 
                    type="text" 
                    name="COMPANY" 
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-gray-900 placeholder-gray-400 transition" 
                    id="mce-MMERGE6" 
                    placeholder={language === 'bg' ? 'Компания (по избор)' : 'Company (optional)'} 
                  />
                </div>

                {/* Anti-spam bot field - DO NOT REMOVE */}
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                  <input type="text" name="b_0fb07686475035f35ed0fa028_90ec566c5e" tabIndex="-1" defaultValue="" />
                </div>

                <button 
                  type="submit" 
                  name="subscribe" 
                  id="mc-embedded-subscribe" 
                  className="w-full bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 font-light tracking-wider text-sm uppercase"
                >
                  {language === 'bg' ? 'Запазете безплатна консултация' : 'Book Free Consultation'}
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-400 text-center mt-6 font-light">
              {language === 'bg' 
                ? '🔒 Поверителността ви е важна. Няма да споделяме вашия email.' 
                : '🔒 Your privacy matters. We will never share your email.'}
            </p>
          </div>
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
