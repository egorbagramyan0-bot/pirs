import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const eventsHeroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuB87cqDwH_XCHvz7sPHg--ju4hffHBsk0Pz359P3Wpih_nSyWPSNLVtPIYzQl2B1X-CqKRPlCi3F0Tl3g84u9_U_xlt4ASqTPfS_D9TO5cXKjJtyquEU9zz-UTR2ldxYsaI4EIuR74wdApqB5DnrhmksI1pguLgsORmO2Y4VOs3J37kvvjNQxohXWLcljVg1CoriTvuKZwp9UzWFhRLIlmRFUJlLL6HMKdxTR2VNtcKo1TBz60I3CwR_jKK1v1JIbwpAwNLFiU";
const birthdayImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYAPrDhmv_zmYRatbyCFZT_0Z-LxletuLMVpuZCGtCKg092u31eBEfiKuYBMENc-WO3f1OMZ8K0R-AgOSMXSIB3wgejz6k6rJma1ELWN_mbvIUU_D63LM7zlBgE-laePxGDAOcEewAG_RmeeaGmG_hv_cTrbk-izrX5QwQDeE24ucnhJYyt-TzI2iovwDiHWn7r6uu0vHV3Zxov6xkRwNX2lpqjxlCpu9I1j-eYIKoXLlBUZN1SoPIwRcwhsd10KQ5rk9UM8"; // sunset lounge vibe
const weddingImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuB8YOGnJJ1naIeiziEl2TX67avxXhUtU6-wvlxwDKEuX0wFSxedXqpBUpE_PqZQTxqjL5X8Q4Q8u6w0p97Ut6fOn6QYF17xW6fa514txGhLMttyH-vZzweNPbFkw-_Kei6SikEdeyrvsRA8LpyDGQP8pZNk2jnrbgLSkN9Uigw5lRHznfTncMsaMqZPpUq13LsCgL6IuU6vEjGoESzjQP7fBMf-sfIn4HRv83r8vk71IyvlaOSSPa8S2qgJht8lqQhZ_ZWSf8w"; // night lights pier

const eventFormats = [
  {
    title: 'Свадьба',
    guests: 'до 100 гостей',
    desc: 'Свадебное торжество на берегу Дона с живописным видом и возможностью выездной регистрации у воды.',
    features: ['Летняя веранда у воды', 'Индивидуальное банкетное меню', 'Персональный менеджер события'],
    image: weddingImg
  },
  {
    title: 'День рождения',
    guests: 'до 80 гостей',
    desc: 'Праздничный вечер с близкими, живой музыкой и авторскими блюдами кавказской и европейской кухни.',
    features: ['Праздничный декор столов', 'Авторская винная карта', 'Внимание к каждому гостю'],
    image: birthdayImg
  },
  {
    title: 'Семейный ужин',
    guests: 'до 20 гостей',
    desc: 'Уютный вечер в кругу семьи с панорамным видом на реку и атмосферой тепла и заботы.',
    features: ['Уединенная зона', 'Блюда для компании', 'Комфорт для детей и взрослых'],
    image: eventsHeroImg
  },
  {
    title: 'Корпоратив',
    guests: 'до 100 гостей',
    desc: 'Яркое событие для вашей компании с возможностью полного закрытия ресторана или террасы.',
    features: ['Современное оборудование', 'Различные варианты рассадки', 'Развлекательная программа'],
    image: weddingImg
  },
  {
    title: 'Деловая встреча',
    guests: 'до 15 гостей',
    desc: 'Формат для переговоров, презентаций или деловых обедов в спокойной и приватной атмосфере.',
    features: ['Быстрый Wi-Fi и экран', 'Спец-меню для обедов', 'Высокий уровень конфиденциальности'],
    image: birthdayImg
  },
  {
    title: 'Банкет',
    guests: 'до 100 гостей',
    desc: 'Масштабный праздник в любом формате с индивидуальным подходом к рассадке и деталям.',
    features: ['Гибкая планировка зала', 'Шеф-показ при подаче блюд', 'Своя парковка для гостей'],
    image: eventsHeroImg
  }
];

export default function Events() {
  useSEO({
    title: 'Мероприятия и банкеты в ресторане Пирс | Заказать праздник',
    description: 'Организация праздников, свадеб, юбилеев и корпоративов в ресторане «Пирс» у воды. Банкетные залы с видом на Дон, индивидуальное меню, живой звук.',
    keywords: 'банкет Ростов Береговая, свадьба у воды Ростов-на-Дону, заказать день рождения в ресторане, ресторан Пирс банкеты'
  });

  const navigate = useNavigate();

  return (
    <div className="space-y-0 bg-brand-cream/40 min-h-screen pb-24">
      {/* 1. Page Header Hero */}
      <section className="relative h-[350px] flex items-center justify-center bg-brand-blue -mt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/60 z-10" />
          <img 
            className="w-full h-full object-cover" 
            src={eventsHeroImg} 
            alt="Оформление зала для проведения банкета в ресторане Пирс у воды" 
          />
        </div>
        <div className="relative z-20 text-center space-y-4 max-w-3xl px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            События у воды
          </span>
          <h1 className="font-serif text-5xl text-brand-cream font-medium italic">
            События у воды
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-cream/80 text-base font-light max-w-xl mx-auto leading-relaxed">
            От семейного ужина до большого праздника — проведите особенный день в ресторане с видом на Дон.
          </p>
        </div>
      </section>

      {/* 2. Formats Showcase Grid */}
      <section className="py-24 max-w-[1280px] mx-auto px-8 space-y-16">
        <div className="text-center space-y-4">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
            Форматы торжеств
          </span>
          <h2 className="font-serif text-4xl text-brand-blue font-semibold">
            Ваше событие у воды
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eventFormats.map((format, index) => (
            <div 
              key={index} 
              className="bg-brand-cream border border-brand-sand/20 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700" 
                  src={format.image} 
                  alt={format.title} 
                />
                <div className="absolute top-4 right-4 bg-brand-blue/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-brand-gold font-sans font-bold uppercase tracking-wider">
                  {format.guests}
                </div>
              </div>

              {/* Contents */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-brand-blue group-hover:text-brand-gold transition-colors duration-300">
                    {format.title}
                  </h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                    {format.desc}
                  </p>
                  <ul className="space-y-2 text-xs font-light text-brand-blue/60 pt-2">
                    {format.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => navigate('/booking-event', { state: { eventType: format.title, guestsLimit: format.guests } })}
                  className="w-full py-3.5 border border-brand-blue/20 hover:border-brand-gold text-brand-blue hover:text-brand-blue hover:bg-brand-gold/10 text-center text-[10px] uppercase tracking-widest font-bold rounded-[6px] transition-all duration-300 block cursor-pointer bg-transparent"
                >
                  Обсудить мероприятие
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
