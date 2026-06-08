import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import useSEO from '../hooks/useSEO';

// Images from project resources
const menuHeroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6S2BxH2kfYpbaYkgfm7aqLtg9RkZnxwVBzyzCS8V0c1QlJOGvC1P2B1DEpnFs0DZG9lOjdNdVeJOGHoJWMGBZloEWcDfwdd1FGNfq4iZeLN2cW814Ij_yml-TFoXvFAHOpq4cjKyN5jcBF8o2bAZkC1Wdywa7MPKfw6rfwygIPRoG5AyYhfPP9kS8XUezBuf40kII17ZuID1OBQuy7Xb4FnbnnyYBYmogKnwKLFWJpIDdfpZHpz7NiId63m5C5QYmXe9Bwgw";
const sunsetLounge = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYAPrDhmv_zmYRatbyCFZT_0Z-LxletuLMVpuZCGtCKg092u31eBEfiKuYBMENc-WO3f1OMZ8K0R-AgOSMXSIB3wgejz6k6rJma1ELWN_mbvIUU_D63LM7zlBgE-laePxGDAOcEewAG_RmeeaGmG_hv_cTrbk-izrX5QwQDeE24ucnhJYyt-TzI2iovwDiHWn7r6uu0vHV3Zxov6xkRwNX2lpqjxlCpu9I1j-eYIKoXLlBUZN1SoPIwRcwhsd10KQ5rk9UM8";
const pierNight = "https://lh3.googleusercontent.com/aida-public/AB6AXuB8YOGnJJ1naIeiziEl2TX67avxXhUtU6-wvlxwDKEuX0wFSxedXqpBUpE_PqZQTxqjL5X8Q4Q8u6w0p97Ut6fOn6QYF17xW6fa514txGhLMttyH-vZzweNPbFkw-_Kei6SikEdeyrvsRA8LpyDGQP8pZNk2jnrbgLSkN9Uigw5lRHznfTncMsaMqZPpUq13LsCgL6IuU6vEjGoESzjQP7fBMf-sfIn4HRv83r8vk71IyvlaOSSPa8S2qgJht8lqQhZ_ZWSf8w";

// Real Categories Setup
const MENU_CATEGORIES = [
  { id: 'all', name: 'Все' },
  { id: 'breakfast', name: 'Завтраки' },
  { id: 'starters', name: 'Закуски' },
  { id: 'salads', name: 'Салаты' },
  { id: 'seafood_raw', name: 'Морские деликатесы' },
  { id: 'soups', name: 'Супы' },
  { id: 'don', name: 'Донская кухня' },
  { id: 'mains', name: 'Основные блюда' },
  { id: 'pasta', name: 'Паста' },
  { id: 'grill', name: 'Гриль: рыба и морепродукты' }
];

// Real Menu Items Setup
const MENU_ITEMS = {
  breakfast: [
    { name: 'Каша овсяная с вишней', price: 690 },
    { name: 'Каша пшенная с клубникой', price: 690 },
    { name: 'Бенедикт с лососем', price: 790 },
    { name: 'Бенедикт с ветчиной', price: 690 },
    { name: 'Омлет из 3-х яиц', price: 400 },
    { name: 'Сырники со сметаной', price: 690 },
    { name: 'Творожная запеканка с абрикосами', price: 690 },
    { name: 'Вареники с творогом и вишней', price: 690 }
  ],
  starters: [
    { name: 'Буррата с розовыми томатами', price: 890 },
    { name: 'Артишоки с травами', price: 950 },
    { name: 'Ассорти паштетов с гренками', price: 790 },
    { name: 'Тартар из говядины с картофелем фри', price: 890 },
    { name: 'Ассорти местных сыров', price: 890 },
    { name: 'Большая тарелка солений', price: 850 },
    { name: 'Европейские сыры', price: 950 },
    { name: 'Маринованные грибы', price: 920 },
    { name: 'Мясные специалитеты', price: 1200 },
    { name: 'Микс итальянских оливок', price: 850 },
    { name: 'Сельдь с молодым картофелем', price: 750 },
    { name: 'Тарелка рыбных балыков', price: 2700 },
    { name: 'Тарелка свежих овощей', price: 790 }
  ],
  salads: [
    { name: 'Салат с артишоками и кедровым орехом', price: 690 },
    { name: 'Большой зеленый салат со шпинатом и брокколи', price: 830 },
    { name: 'Греческий салат с сыром фета', price: 690 },
    { name: 'Салат из овощей с молодой капустой', price: 590 },
    { name: 'Салат по-деревенски с яйцом', price: 630 },
    { name: 'Салат романо-тоннато', price: 790 },
    { name: 'Салат с баклажанами', price: 690 },
    { name: 'Салат из рукколы', price: 690 },
    { name: 'Салат Цезарь с курицей', price: 730 },
    { name: 'Салат Цезарь с тигровыми креветками', price: 790 }
  ],
  seafood_raw: [
    { name: 'Устрица розовая Джоли', price: 480, isOyster: true },
    { name: 'Острые мидии в томатном соусе', price: 950 },
    { name: 'Мидии в соусе Том ям', price: 950 },
    { name: 'Сливочные мидии в соусе блю-чиз', price: 950 }
  ],
  soups: [
    { name: 'Бульон с курицей', price: 490 },
    { name: 'Гаспачо с тигровыми креветками', price: 690 },
    { name: 'Окрошка с малосольным лососем', price: 630, desc: 'На выбор: на айране или на квасе' }
  ],
  don: [
    { name: 'Карась на гриле', price: 660 },
    { name: 'Донская уха из сазана', price: 690 },
    { name: 'Раки донские, 0,5 кг', price: 2500 },
    { name: 'Раки донские, 1 кг', price: 4500 },
    { name: 'Судачок', price: 850 }
  ],
  mains: [
    { name: 'Барабулька со сметанным кремом', price: 1390 },
    { name: 'Крабовые котлеты', price: 1150 },
    { name: 'Телячьи щечки с картофельным пюре', price: 1190 },
    { name: 'Куриный шницель Цезарь', price: 930 },
    { name: 'Цыпленок на гриле с летним салатом', price: 870 },
    { name: 'Пожарская котлета с картофельным пюре', price: 890 },
    { name: 'Говяжья вырезка с овощами', price: 1300 },
    { name: 'Медальоны из вырезки с картофелем', price: 1300 },
    { name: 'Стриплойн с картофелем пай и соусом жу', price: 3300 },
    { name: 'Стейк Рибай', price: 3900 }
  ],
  pasta: [
    { name: 'Паста с цукини и морепродуктами', price: 890 },
    { name: 'Тальятелле с телятиной в сливочном соусе', price: 890 },
    { name: 'Тальятелле с тигровыми креветками', price: 850 },
    { name: 'Спагетти Карбонара', price: 690 }
  ],
  grill: [
    { name: 'Дорадо', price: 1390 },
    { name: 'Морские гребешки', price: 1700 },
    { name: 'Ассорти из морепродуктов', price: 1800 },
    { name: 'Тигровые креветки', price: 950 },
    { name: 'Форель радужная', price: 950 }
  ]
};

export default function MenuPage() {
  useSEO({
    title: 'Меню ресторана Пирс | Цены, авторские блюда и морепродукты',
    description: 'Изысканное меню ресторана «Пирс»: свежие морепродукты, устрицы, донские раки, мясо на гриле, окрошка с лососем и авторские блюда у воды в Ростове-на-Дону.',
    keywords: 'меню Пирс, цены ресторан Пирс, устрицы Ростов, донские раки Береговая, гриль ресторан Ростов'
  });

  const [activeCategory, setActiveCategory] = useState('all');
  const [isCategorySticky, setIsCategorySticky] = useState(false);
  const scrollContainerRef = useRef(null);

  // Smooth scroll or toggle filter
  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    const element = document.getElementById('menu-list-start');
    if (element) {
      const offset = 140; // Navbar + Sticky bar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Sticky Category bar state & Active category observer (only when viewing "all")
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.45; // hero is ~50vh
      if (window.scrollY > heroHeight) {
        setIsCategorySticky(true);
      } else {
        setIsCategorySticky(false);
      }

      // Check current section in view to auto-highlight categories on scroll
      if (activeCategory === 'all') {
        const scrolledY = window.scrollY;
        const visibleCategory = MENU_CATEGORIES.filter(c => c.id !== 'all').find(cat => {
          const el = document.getElementById(`category-${cat.id}`);
          if (el) {
            const rect = el.getBoundingClientRect();
            const topBoundary = rect.top + scrolledY - 200;
            const bottomBoundary = rect.bottom + scrolledY - 200;
            return scrolledY >= topBoundary && scrolledY <= bottomBoundary;
          }
          return false;
        });

        if (visibleCategory) {
          const button = document.getElementById(`btn-${visibleCategory.id}`);
          if (button && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const btnLeft = button.offsetLeft;
            const btnWidth = button.offsetWidth;
            const containerScrollLeft = container.scrollLeft;
            const containerWidth = container.offsetWidth;

            if (btnLeft < containerScrollLeft || (btnLeft + btnWidth) > (containerScrollLeft + containerWidth)) {
              container.scrollTo({
                left: btnLeft - containerWidth / 2 + btnWidth / 2,
                behavior: 'smooth'
              });
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory]);

  return (
    <div className="space-y-0 bg-[#fff8f4] min-h-screen pb-24">
      {/* 1. Compact Hero Header */}
      <section className="relative h-[45vh] md:h-[50vh] flex items-center justify-center bg-brand-blue -mt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/65 z-10" />
          <img 
            className="w-full h-full object-cover transform scale-102" 
            src={menuHeroImg} 
            alt="Летняя терраса и накрытые столы в ресторане Пирс у реки Дон" 
          />
        </div>
        <div className="relative z-20 text-center space-y-4 px-6 max-w-3xl">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            ПИРС
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-cream font-medium tracking-wide">
            Меню
          </h1>
          <p className="font-sans text-brand-gold text-xs uppercase tracking-[0.25em] font-semibold">
            Кухня для красивых вечеров у воды
          </p>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-cream/80 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed">
            Европейские и кавказские блюда, донская кухня, морепродукты и напитки для неспешного отдыха с видом на Дон.
          </p>
          <div className="pt-2">
            <Link 
              to="/booking"
              className="inline-block bg-brand-gold hover:bg-brand-cream text-brand-blue font-bold px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 rounded-[4px] shadow-lg"
            >
              Забронировать стол
            </Link>
          </div>
        </div>
      </section>

      {/* Anchor for list start scrolling */}
      <div id="menu-list-start" className="h-0 scroll-mt-28" />

      {/* 2. Sticky Filters Bar */}
      <div 
        className={`w-full z-30 transition-all duration-500 ${
          isCategorySticky 
            ? 'fixed top-[60px] md:top-[73px] left-0 bg-[#fdfbf7]/95 backdrop-blur-md shadow-md border-b border-brand-sand/20 py-2.5' 
            : 'relative bg-transparent border-y border-brand-sand/15 py-4'
        }`}
      >
        <div 
          ref={scrollContainerRef}
          className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-nowrap md:flex-wrap gap-2.5 md:gap-3 justify-start md:justify-center overflow-x-auto md:overflow-x-visible no-scrollbar scroll-smooth"
        >
          {MENU_CATEGORIES.map((cat) => (
            <button
              id={`btn-${cat.id}`}
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`flex-shrink-0 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-brand-blue text-brand-cream border-brand-blue shadow-md'
                  : 'bg-transparent text-brand-blue/70 border-brand-sand/20 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
          {/* Spacer to preserve right padding on mobile horizontal scroll */}
          <div className="w-6 flex-shrink-0 md:hidden" />
        </div>
      </div>

      {/* 3. Main Menu Lists */}
      <section className="max-w-[1024px] mx-auto px-6 md:px-8 pt-12 space-y-20">
        {MENU_CATEGORIES.filter(c => c.id !== 'all' && (activeCategory === 'all' || activeCategory === c.id)).map((cat, idx) => {
          const items = MENU_ITEMS[cat.id] || [];
          if (items.length === 0) return null;

          return (
            <div 
              id={`category-${cat.id}`} 
              key={cat.id} 
              className="space-y-8 text-left scroll-mt-28"
            >
              {/* Category Header */}
              <div className="space-y-3 border-b border-brand-sand/15 pb-4">
                <div className="flex justify-between items-end">
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold tracking-wide uppercase">
                    {cat.name}
                  </h2>
                  <span className="font-sans text-[9px] text-brand-blue/40 uppercase tracking-[0.2em] font-semibold">
                    {items.length} позиций
                  </span>
                </div>
                {/* Wavy line divider SVG */}
                <div className="origin-left py-1 text-brand-gold/60">
                  <svg width="60" height="6" viewBox="0 0 60 6" fill="none">
                    <path d="M0 3 Q 7.5 0, 15 3 T 30 3 T 45 3 T 60 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Items List (1 column on mobile, 2 columns on desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3">
                {items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="group py-3 flex flex-col justify-between border-b border-brand-sand/10 last:border-b-0 md:border-b md:border-brand-sand/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="font-serif text-base font-semibold text-brand-blue group-hover:text-brand-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-brand-sand/20 mx-2 self-end mb-1" />
                      
                      <div className="flex-shrink-0 font-serif text-base font-semibold text-brand-blue">
                        {item.isOyster ? (
                          <div className="flex flex-col items-end text-right">
                            <span className="text-sm font-semibold text-brand-blue">480 ₽ <span className="text-[10px] font-light text-brand-blue/50">/ 1 шт.</span></span>
                            <span className="text-xs font-semibold text-brand-gold">4 800 ₽ <span className="text-[9px] font-light text-brand-gold/75">/ 12 шт.</span></span>
                          </div>
                        ) : (
                          `${item.price.toLocaleString('ru-RU')} ₽`
                        )}
                      </div>
                    </div>
                    {item.desc && (
                      <p className="text-xs font-light text-brand-blue/50 mt-1 italic leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Atmospheric image visual pauses */}
              {activeCategory === 'all' && idx === 3 && (
                <div className="my-16 relative h-[250px] md:h-[320px] rounded-[24px] overflow-hidden shadow-md group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-blue/45 z-10" />
                    <img 
                      src={sunsetLounge} 
                      alt="Живописный вид на реку Дон с летней террасы ресторана Пирс на закате" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[1200ms]"
                    />
                  </div>
                  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold">Философия Пирса</span>
                    <blockquote className="font-serif text-xl md:text-2xl text-brand-cream italic max-w-lg leading-relaxed">«Блюда, которыми хочется делиться с близкими у воды»</blockquote>
                    <div className="w-12 h-px bg-brand-gold" />
                  </div>
                </div>
              )}

              {activeCategory === 'all' && idx === 6 && (
                <div className="my-16 relative h-[250px] md:h-[320px] rounded-[24px] overflow-hidden shadow-md group">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-brand-blue/45 z-10" />
                    <img 
                      src={pierNight} 
                      alt="Теплые вечерние огни причала и летней веранды ресторана Пирс" 
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[1200ms]"
                    />
                  </div>
                  <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                    <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold">Вечерний отдых</span>
                    <blockquote className="font-serif text-xl md:text-2xl text-brand-cream italic max-w-lg leading-relaxed">«Время замедлиться и насладиться моментом на берегу Дона»</blockquote>
                    <div className="w-12 h-px bg-brand-gold" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* 4. Final CTA Section */}
      <section className="py-20 max-w-[800px] mx-auto px-6 md:px-8 text-center">
        <div className="bg-brand-cream border border-brand-sand/30 rounded-[32px] p-8 md:p-12 shadow-xl space-y-6">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
            Резерв стола
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-blue font-semibold">
            Выберите стол для вашего вечера
          </h2>
          <p className="text-sm text-brand-blue/70 leading-relaxed font-light max-w-md mx-auto">
            Оставьте заявку — администратор ресторана свяжется с вами для подтверждения бронирования.
          </p>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/booking"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[4px] shadow-md hover:shadow-lg text-center"
            >
              Забронировать стол
            </Link>
            <a 
              href="tel:+79281954461"
              className="w-full sm:w-auto border border-brand-sand text-brand-blue hover:bg-brand-sand/10 px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[4px] block text-center"
            >
              Позвонить в ресторан
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs font-light text-brand-blue/50 pt-4 border-t border-brand-sand/10">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <span>Ростов-на-Дону, Береговая улица, 16А</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
              <a href="tel:+79281954461" className="hover:text-brand-gold transition-colors">+7 (928) 195-44-61</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
