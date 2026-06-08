import { Link } from 'react-router-dom';
import { Anchor, Navigation, Phone, Clock } from 'lucide-react';


export default function Footer() {
  const handleRouteClick = () => {
    window.open('https://yandex.ru/maps/?text=Ростов-на-Дону+Береговая+улица+16А+ресторан+Пирс', '_blank');
  };

  return (
    <footer className="bg-brand-blue text-brand-cream/80 border-t border-brand-gold/10 py-20 relative">
      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-8 text-brand-cream fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H0V56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <span className="flex items-center justify-center w-12 h-12 border border-brand-gold/30 rounded-full bg-white/5">
                <Anchor className="w-6 h-6 text-brand-gold" />
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-brand-cream">ПИРС</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold -mt-1 font-bold">РЕСТОРАН У ВОДЫ</span>
              </div>
            </Link>
            <p className="font-sans text-sm max-w-sm leading-relaxed text-brand-cream/60">
              Ресторан у воды в Ростове-на-Дону. Место, где встречаются спокойствие Дона, летняя веранда и авторская кухня.
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              {['TG', 'WA', 'VK'].map((social) => {
                let link = '#';
                if (social === 'TG') link = 'https://t.me/pirs_rostov';
                if (social === 'WA') link = 'https://wa.me/79281954461';
                if (social === 'VK') link = 'https://vk.com/pirs_rostov';
                return (
                  <a
                    key={social}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-brand-cream/10 hover:border-brand-gold hover:text-brand-gold flex items-center justify-center text-xs tracking-widest font-semibold transition-all duration-300 bg-white/5"
                  >
                    {social}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h5 className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6">Навигация</h5>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors duration-300">О ресторане</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-gold transition-colors duration-300">Меню</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-gold transition-colors duration-300">Мероприятия</Link>
              </li>
              <li>
                <a href="#/#gallery" className="hover:text-brand-gold transition-colors duration-300">Галерея</a>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-brand-gold transition-colors duration-300">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* Contacts Summary */}
          <div className="space-y-4">
            <h5 className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-6">Контакты</h5>
            <div className="space-y-4 text-sm font-light">
              <p className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
                <span>Ростов-на-Дону,<br />Береговая улица, 16А</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href="tel:+79281954461" className="hover:text-brand-gold">+7 (928) 195-44-61</a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Уточняйте режим работы по телефону</span>
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <Link 
                to="/booking"
                className="w-full text-center bg-brand-gold hover:bg-brand-cream text-brand-blue font-bold py-3 text-[10px] uppercase tracking-[0.25em] transition-all duration-300 rounded-[4px] shadow-sm flex items-center justify-center"
              >
                Забронировать стол
              </Link>
              <button 
                onClick={handleRouteClick}
                className="w-full flex items-center justify-center gap-2 border border-brand-gold/30 hover:border-brand-gold text-brand-gold hover:text-brand-blue hover:bg-brand-gold py-3 text-[10px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-[4px] bg-transparent cursor-pointer"
              >
                <Navigation className="w-3 h-3" />
                <span>Построить маршрут</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-cream/10 text-xs font-light text-brand-cream/40 gap-4">
          <p>© 2026 Ресторан «Пирс». Все права защищены.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-brand-gold transition-colors">Политика конфиденциальности</Link>
            <span>•</span>
            <a href="https://github.com/affaan-m" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Разработка и дизайн</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
