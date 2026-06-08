import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Anchor } from 'lucide-react';

const navItems = [
  { name: 'О ресторане', path: '/about' },
  { name: 'Меню', path: '/menu' },
  { name: 'Мероприятия', path: '/events' },
  { name: 'Контакты', path: '/contacts' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [modalData, setModalData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 2,
    zone: 'hall',
    name: '',
    phone: ''
  });

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!modalData.name || !modalData.phone) return;
    setModalStep(2);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setModalStep(1);
    }, 400);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close nav on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const textColorClass = !isScrolled 
    ? 'text-brand-cream/80 hover:text-brand-gold' 
    : 'text-brand-blue/80 hover:text-brand-gold';

  const activeColorClass = 'text-brand-gold';
  const navBorderClass = isScrolled 
    ? 'bg-[#fdfbf7]/95 backdrop-blur-xl border-b border-brand-sand/20 shadow-[0_2px_15px_rgba(4,22,39,0.05)]' 
    : 'bg-transparent border-b border-white/10';


  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navBorderClass}`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex justify-between items-center relative py-3 md:py-4">
          
          {/* Logo Plaque Container */}
          <div className="w-[100px] md:w-[140px] z-50">
            <div className="absolute top-0 left-6 md:left-8">
              <Link to="/" className="block group">
                <div className="w-[100px] h-[105px] md:w-[140px] md:h-[145px] bg-[#fdfbf7] rounded-b-[24px] md:rounded-b-[32px] shadow-[0_12px_30px_rgba(4,22,39,0.08)] border-x border-b border-brand-sand/15 flex flex-col items-center justify-center p-2 md:p-3 transition-all duration-500 group-hover:translate-y-1 group-hover:shadow-[0_16px_35px_rgba(4,22,39,0.12)]">
                  {/* Highly Detailed Circular Logo */}
                  <svg viewBox="0 0 160 160" className="w-full h-full text-brand-blue fill-current">
                    <defs>
                      <path id="restaurant-curve" d="M 22 52 A 62 62 0 0 1 138 52" fill="none" />
                      <path id="lounge-curve" d="M 28 122 A 56 56 0 0 0 132 122" fill="none" />
                      <g id="anchor-graphic-nav" className="stroke-brand-blue stroke-[1.5] fill-none" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="0" y1="-10" x2="0" y2="10" />
                        <line x1="-6" y1="-6" x2="6" y2="-6" />
                        <circle cx="0" cy="-10" r="2.5" />
                        <path d="M -8 3 C -8 9 8 9 8 3" />
                        <path d="M -9 4 L -8 1 L -6.5 2.5" />
                        <path d="M 9 4 L 8 1 L 6.5 2.5" />
                      </g>
                    </defs>

                    {/* RESTAURANT Curved Text */}
                    <text className="font-sans text-[8px] uppercase tracking-[0.3em] font-semibold fill-brand-blue">
                      <textPath href="#restaurant-curve" startOffset="50%" textAnchor="middle">
                        RESTAURANT
                      </textPath>
                    </text>

                    {/* Crossed Anchors */}
                    <g transform="translate(80, 52) scale(1.15)">
                      <use href="#anchor-graphic-nav" transform="rotate(-30)" />
                      <use href="#anchor-graphic-nav" transform="rotate(30)" />
                    </g>

                    {/* ПИРС Serif Bold */}
                    <text x="80" y="94" textAnchor="middle" className="font-serif text-[28px] font-bold tracking-[0.08em] fill-brand-blue">
                      ПИРС
                    </text>

                    {/* Ampersand in Frame */}
                    <circle cx="80" cy="111" r="8" className="fill-none stroke-brand-blue stroke-[1]" />
                    <text x="80" y="114" textAnchor="middle" className="font-serif text-[9px] font-bold fill-brand-blue">
                      &
                    </text>

                    {/* LOUNGE Curved Text */}
                    <text className="font-sans text-[8px] uppercase tracking-[0.35em] font-semibold fill-brand-blue">
                      <textPath href="#lounge-curve" startOffset="50%" textAnchor="middle">
                        LOUNGE
                      </textPath>
                    </text>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-sans text-[11px] uppercase tracking-[0.22em] font-medium transition-all duration-300 relative py-1 ${
                    isActive ? activeColorClass : textColorClass
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right CTAs (Phone Icon Button, Golden Booking CTA & Hamburg Toggle) */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Phone Call Icon Button */}
            <a 
              href="tel:+79281954461" 
              className="w-10 h-10 rounded-full bg-[#fdfbf7] text-brand-blue shadow-[0_4px_15px_rgba(4,22,39,0.08)] hover:shadow-[0_6px_20px_rgba(191,162,96,0.2)] hover:bg-[#bfa260] hover:text-[#fdfbf7] flex items-center justify-center transition-all duration-300 border border-brand-sand/15 cursor-pointer group"
              aria-label="Позвонить в ресторан"
            >
              <Phone className="w-4 h-4 text-brand-gold group-hover:text-inherit transition-colors duration-300" />
            </a>

            {/* Premium Golden Booking Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-gold hover:bg-brand-blue text-brand-blue hover:text-brand-cream border border-brand-gold/30 px-4 md:px-5 py-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold transition-all duration-300 rounded-[4px] shadow-sm hover:shadow-md cursor-pointer"
            >
              Забронировать
            </button>
            
            {/* Premium Round Menu Button (Mobile Only) */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-[#fdfbf7] text-brand-blue shadow-[0_4px_15px_rgba(4,22,39,0.08)] hover:shadow-[0_6px_20px_rgba(191,162,96,0.2)] hover:bg-[#bfa260] hover:text-[#fdfbf7] flex items-center justify-center transition-all duration-300 border border-brand-sand/15 cursor-pointer z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4 transition-transform duration-300" /> : <Menu className="w-4 h-4 transition-transform duration-300" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-Down Navigation Drawer for Desktop & Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 pt-24 md:pt-28 pb-10 z-40 bg-[#fdfbf7] border-b border-brand-sand/20 shadow-2xl"
          >
            <div className="max-w-[1280px] mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              {/* Menu Links Column */}
              <div className="md:col-span-6 flex flex-col gap-4 text-left">
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold mb-2">Навигация</span>
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`font-serif text-2xl md:text-3xl transition-colors duration-300 hover:text-brand-gold ${
                        isActive ? 'text-brand-gold font-semibold' : 'text-brand-blue/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>

              {/* Contacts & Info Column */}
              <div className="md:col-span-6 flex flex-col justify-between text-left gap-6 border-t md:border-t-0 md:border-l border-brand-sand/20 pt-6 md:pt-0 md:pl-12">
                <div className="space-y-4">
                  <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold">Контакты & Бронь</span>
                  <div className="space-y-2">
                    <a 
                      href="tel:+79281954461" 
                      className="block font-serif text-xl text-brand-blue hover:text-brand-gold transition-colors"
                    >
                      +7 (928) 195-44-61
                    </a>
                    <p className="text-sm text-brand-blue/70 font-light">
                      Ростов-на-Дону, Береговая улица, 16А <br />
                      Уточняйте режим работы по телефону
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link 
                    to="/booking"
                    className="inline-block bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-3.5 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[4px] shadow-md"
                  >
                    Забронировать стол
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleModalClose}
              className="fixed inset-0 bg-brand-blue/60 backdrop-blur-md"
            />

            {/* Modal Positioning Container */}
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-lg bg-[#fdfbf7] border border-brand-sand/30 rounded-[32px] p-6 md:p-8 shadow-2xl overflow-hidden text-left"
              >
                {/* Close Button */}
                <button
                  onClick={handleModalClose}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-brand-blue/5 hover:bg-brand-blue hover:text-brand-cream text-brand-blue flex items-center justify-center transition-all duration-300 border border-brand-sand/15 cursor-pointer z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                {modalStep === 1 ? (
                  <form onSubmit={handleModalSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
                        Бронирование стола
                      </span>
                      <h3 className="font-serif text-3xl text-brand-blue font-semibold">
                        Ждем вас в гости
                      </h3>
                      <p className="text-xs text-brand-blue/60 font-light leading-relaxed">
                        Заполните небольшую форму, и наш администратор свяжется с вами для подтверждения бронирования стола.
                      </p>
                    </div>

                    <div className="w-12 h-px bg-brand-gold" />

                    <div className="grid grid-cols-2 gap-4">
                      {/* Date */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Дата</label>
                        <input 
                          type="date" 
                          value={modalData.date}
                          onChange={(e) => setModalData({ ...modalData, date: e.target.value })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full"
                          required
                        />
                      </div>
                      
                      {/* Time */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Время</label>
                        <input 
                          type="time" 
                          value={modalData.time}
                          onChange={(e) => setModalData({ ...modalData, time: e.target.value })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Guests */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Гости</label>
                        <select 
                          value={modalData.guests}
                          onChange={(e) => setModalData({ ...modalData, guests: Number(e.target.value) })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full cursor-pointer focus:outline-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num} className="bg-[#fdfbf7] text-brand-blue font-semibold">
                              {num} {num === 1 ? 'персона' : num < 5 ? 'персоны' : 'персон'}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Zone */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Зона</label>
                        <select 
                          value={modalData.zone}
                          onChange={(e) => setModalData({ ...modalData, zone: e.target.value })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full cursor-pointer focus:outline-none"
                        >
                          <option value="hall" className="bg-[#fdfbf7] text-brand-blue font-semibold">Основной зал</option>
                          <option value="terrace" className="bg-[#fdfbf7] text-brand-blue font-semibold">Летняя веранда</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Name */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Имя</label>
                        <input 
                          type="text" 
                          placeholder="Имя"
                          value={modalData.name}
                          onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="border-b border-brand-sand/35 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Телефон</label>
                        <input 
                          type="tel" 
                          placeholder="+7 (999) 000-00-00"
                          value={modalData.phone}
                          onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                          required
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue py-4 text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 rounded-[4px] shadow-md cursor-pointer"
                    >
                      Отправить запрос
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto animate-bounce">
                      <Anchor className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl font-bold text-brand-blue">Заявка на бронь принята!</h3>
                      <p className="text-xs text-brand-blue/60 font-light max-w-sm mx-auto leading-relaxed">
                        Спасибо, {modalData.name}! Наш администратор свяжется с вами по номеру <span className="font-semibold">{modalData.phone}</span> в ближайшее время для подтверждения.
                      </p>
                    </div>
                    <div className="w-12 h-px bg-brand-gold mx-auto" />
                    <button 
                      type="button"
                      onClick={handleModalClose}
                      className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-3.5 text-[9px] uppercase tracking-widest font-bold transition-all duration-300 rounded-[4px] cursor-pointer"
                    >
                      Закрыть
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
