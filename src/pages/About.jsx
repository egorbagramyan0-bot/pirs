import { Link } from 'react-router-dom';
import { Anchor, Compass, Heart, Award } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const aboutHeroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuApkSAziQvoH-d3wyuQ36ZbDFx2AT6m-2VdK2IYiw4gC4Ksw5Q8pNoOglaEDahvON-Ansx3p825goB6ujJc8NLQikiZYGo0Rx16-_vF40mvo1T3gHSvjXSSUJRWahutkpcjOVhVBfaVP12AaOkhJyNEgy95YpkyaNhDTXOymHtlTDVzJW0hSbfGHIYbdQ4-Ph58SBA-_-NCS7FKVB6iRSQQkzoQmTqGDP56W8Ws_oTLLB7oJolmu7co92zXBNmggrSe-7QFVig";
const historyImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYAPrDhmv_zmYRatbyCFZT_0Z-LxletuLMVpuZCGtCKg092u31eBEfiKuYBMENc-WO3f1OMZ8K0R-AgOSMXSIB3wgejz6k6rJma1ELWN_mbvIUU_D63LM7zlBgE-laePxGDAOcEewAG_RmeeaGmG_hv_cTrbk-izrX5QwQDeE24ucnhJYyt-TzI2iovwDiHWn7r6uu0vHV3Zxov6xkRwNX2lpqjxlCpu9I1j-eYIKoXLlBUZN1SoPIwRcwhsd10KQ5rk9UM8";


export default function About() {
  useSEO({
    title: 'О ресторане Пирс | Наша философия и концепция отдыха',
    description: 'История и концепция ресторана «Пирс» в Ростове-на-Дону. Атмосфера загородного отдыха в черте города, премиальный сервис, панорамные виды на Дон.',
    keywords: 'о ресторане Пирс, концепция Пирс Ростов, шеф-повар Пирс, ресторан у воды Ростов история'
  });

  return (
    <div className="space-y-0 pb-24">
      {/* 1. Page Header Hero */}
      <section className="relative h-[450px] flex items-center justify-center bg-brand-blue -mt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/60 z-10" />
          <img 
            className="w-full h-full object-cover" 
            src={aboutHeroImg} 
            alt="Ресторан Пирс на берегу реки Дон" 
          />
        </div>
        <div className="relative z-20 text-center space-y-4 max-w-2xl px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            Пирс
          </span>
          <h1 className="font-serif text-5xl text-brand-cream font-medium leading-tight">
            Ресторан на берегу Дона
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-cream/80 text-base font-light leading-relaxed">
            Место для неспешных встреч, семейных ужинов и красивых вечеров у воды.
          </p>
        </div>
      </section>

      {/* 2. History & Philosophy Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
              Место для встреч, которые хочется повторить
            </span>
            <h2 className="font-serif text-4xl text-brand-blue font-semibold leading-tight">
              Вечера с видом на Дон
            </h2>
            <div className="w-12 h-px bg-brand-gold" />
            <p className="font-sans text-brand-blue/70 text-sm leading-relaxed font-light">
              «Пирс» расположен на набережной Ростова-на-Дону. Летняя веранда, вид на реку, живая музыка и спокойная атмосфера создают пространство, в котором хочется задержаться подольше.
            </p>
            <p className="font-sans text-brand-blue/70 text-sm leading-relaxed font-light">
              В интерьере и философии нашего ресторана мы отразили ценность момента и возможность замедлиться. Теплое дерево, мягкий вечерний свет и близость воды помогают забыть о городском ритме и насладиться встречей с близкими.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <span className="font-serif text-3xl text-brand-gold block font-semibold">2022</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-blue/50">Год основания</span>
              </div>
              <div className="space-y-2">
                <span className="font-serif text-3xl text-brand-gold block font-semibold">120+</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-brand-blue/50">Посадочных мест</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[450px] group">
              <img 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" 
                src={historyImg} 
                alt="Интерьер причала ПИРС" 
              />
              <div className="absolute inset-0 bg-brand-blue/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote Divider Block */}
      <section className="bg-brand-blue text-brand-cream py-24 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-6">
          <Anchor className="w-8 h-8 text-brand-gold mx-auto animate-pulse" />
          <h3 className="font-serif text-3xl italic leading-relaxed text-brand-gold">
            «ПИРС — это место, где вечер переходит в таинство заката, а речной воздух наполняет мысли спокойствием.»
          </h3>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-brand-cream/60 font-semibold">
            Время замедлиться
          </p>
        </div>
      </section>

      {/* 4. Team Showcase */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
            Лица проекта
          </span>
          <h2 className="font-serif text-4xl text-brand-blue font-semibold">
            Команда ресторана «Пирс»
          </h2>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Александр Демидов', role: 'Шеф-повар', desc: 'Более 12 лет опыта в премиальных ресторанах Европы, создатель уникального авторского меню.', icon: Award },
            { name: 'Михаил Кротов', role: 'Шеф-бармен', desc: 'Эксперт в области миксологии, автор коктейлей с использованием редких экстрактов и трав.', icon: Compass },
            { name: 'Анна Павлова', role: 'Сомелье', desc: 'Составитель нашей винной карты, прошедшая стажировки на лучших винодельнях Франции и Италии.', icon: Heart }
          ].map((member, idx) => {
            const Icon = member.icon;
            return (
              <div 
                key={idx} 
                className="bg-brand-cream border border-brand-sand/20 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 space-y-6 text-left group"
              >
                <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-cream group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
                  <Icon className="w-5 h-5 text-brand-gold group-hover:text-brand-cream transition-colors" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-lg font-semibold text-brand-blue group-hover:text-brand-gold transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="font-sans text-[10px] uppercase tracking-wider text-brand-blue/50 font-bold">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                  {member.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Details Section */}
      <section className="bg-brand-cream border-t border-brand-sand/20 py-24">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-left">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
              Атмосфера и особенности
            </span>
            <h2 className="font-serif text-4xl text-brand-blue font-semibold leading-tight">
              Интерьер и настроение
            </h2>
            <div className="w-12 h-px bg-brand-gold" />
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <h3 className="font-serif text-base font-semibold text-brand-blue">Вид на воду</h3>
                <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                  Веранда выходит к Дону и позволяет провести вечер вдали от городского шума, оставаясь в центре Ростова.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-semibold text-brand-blue">Кухня</h3>
                <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                  Европейские и кавказские блюда, авторские позиции и винная карта дополняют атмосферу отдыха.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-semibold text-brand-blue">Встречи и события</h3>
                <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                  Ресторан подходит для свиданий, семейных ужинов, встреч с друзьями и праздничных мероприятий.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                to="/booking"
                className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-[4px]"
              >
                Забронировать вечер
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-[24px] overflow-hidden h-[200px] shadow-md">
              <img className="w-full h-full object-cover" src={historyImg} alt="Элегантный интерьер ресторана Пирс" />
            </div>
            <div className="rounded-[24px] overflow-hidden h-[200px] shadow-md mt-6">
              <img className="w-full h-full object-cover" src={aboutHeroImg} alt="Летняя терраса ресторана Пирс у воды" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
