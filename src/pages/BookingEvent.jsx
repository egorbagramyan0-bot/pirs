import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ShieldCheck, ChevronRight, Check, MapPin, Sparkles, UserCheck } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const eventOptions = [
  { id: 'wedding', name: 'Свадьба' },
  { id: 'birthday', name: 'День рождения' },
  { id: 'family', name: 'Семейный ужин' },
  { id: 'corporate', name: 'Корпоратив' },
  { id: 'business', name: 'Деловая встреча' },
  { id: 'banquet', name: 'Банкет' }
];

const guestOptions = [
  { value: '10', label: 'до 10 гостей' },
  { value: '20', label: 'до 20 гостей' },
  { value: '30', label: 'до 30 гостей' },
  { value: '50', label: 'до 50 гостей' },
  { value: '80', label: 'до 80 гостей' },
  { value: '100', label: 'до 100 гостей' },
  { value: '150+', label: 'более 100 гостей' }
];

// Random manager names for high-end look
const managers = ['Елена Ковалева', 'Михаил Воронов', 'Анна Кузнецова', 'Дмитрий Соколов'];

export default function BookingEvent() {
  useSEO({
    title: 'Забронировать мероприятие | Ресторан Пирс Ростов-на-Дону',
    description: 'Индивидуальное бронирование банкетов, свадеб и корпоративов в ресторане «Пирс». Заполните форму для расчета сметы вашего мероприятия.',
    keywords: 'заказать банкет Ростов, забронировать свадьбу Береговая, ресторан Пирс аренда зала'
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve initial values from location state (if navigated from Events cards)
  const initialEventType = () => {
    if (location.state && location.state.eventType) {
      const match = eventOptions.find(opt => opt.name.toLowerCase() === location.state.eventType.toLowerCase());
      return match ? match.id : 'wedding';
    }
    return 'wedding';
  };

  const initialGuests = () => {
    if (location.state && location.state.guestsLimit) {
      // e.g. "до 100 гостей" -> find closest label or value
      const match = guestOptions.find(opt => location.state.guestsLimit.includes(opt.value));
      return match ? match.value : '30';
    }
    return '30';
  };

  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState(initialEventType);
  const [guests, setGuests] = useState(initialGuests);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [consent, setConsent] = useState(false);

  // Stable random managers and event code
  const [managerName] = useState(() => managers[Math.floor(Math.random() * managers.length)]);
  const [eventCode] = useState(() => Math.floor(2000 + Math.random() * 7999));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !name || !phone || !consent) return;
    setStep(2);
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen pb-24">
      {/* Page Header Hero */}
      <section className="relative h-[240px] flex items-center justify-center bg-brand-blue -mt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/70 z-10" />
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB87cqDwH_XCHvz7sPHg--ju4hffHBsk0Pz359P3Wpih_nSyWPSNLVtPIYzQl2B1X-CqKRPlCi3F0Tl3g84u9_U_xlt4ASqTPfS_D9TO5cXKjJtyquEU9zz-UTR2ldxYsaI4EIuR74wdApqB5DnrhmksI1pguLgsORmO2Y4VOs3J37kvvjNQxohXWLcljVg1CoriTvuKZwp9UzWFhRLIlmRFUJlLL6HMKdxTR2VNtcKo1TBz60I3CwR_jKK1v1JIbwpAwNLFiU" 
            alt="Аренда зала под банкет в ресторане Пирс" 
          />
        </div>
        <div className="relative z-20 text-center space-y-3 max-w-2xl px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            Банкеты & Торжества
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream font-medium italic">
            Бронирование мероприятия
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* Main booking container */}
      <section className="max-w-[800px] mx-auto px-6 mt-12">
        <div className="bg-brand-cream border border-brand-sand/30 rounded-[32px] shadow-2xl p-6 md:p-10 text-left overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Event Booking Form */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8 flex justify-between items-start">
                  <div>
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Заявка на мероприятие</h2>
                    <p className="text-xs text-brand-blue/60 mt-1 font-light">
                      Заполните детали праздника. Наш банкетный менеджер разработает для вас индивидуальную смету.
                    </p>
                  </div>
                  <button 
                    onClick={() => navigate('/events')}
                    className="text-[10px] uppercase font-bold text-brand-blue/60 hover:text-brand-gold transition-colors"
                  >
                    Вернуться к форматам
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Event details */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">1. Детали события</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Event Type Select */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Тип события</span>
                        </label>
                        <select
                          value={eventType}
                          onChange={(e) => setEventType(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0 cursor-pointer"
                        >
                          {eventOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Guest Count Selector (10, 20, 30, 50, 80, 100, etc.) */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Users className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Количество гостей</span>
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0 cursor-pointer"
                        >
                          {guestOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Date */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Дата проведения</span>
                        </label>
                        <input 
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0 cursor-pointer"
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">2. Контактные данные организатора</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="border-b border-brand-sand/40 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-1">ФИО Организатора</label>
                        <input 
                          type="text" 
                          placeholder="Алексей Иванов"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/20"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="border-b border-brand-sand/40 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-1">Номер телефона</label>
                        <input 
                          type="tel" 
                          placeholder="+7 (999) 123-45-67"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/20"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">3. Пожелания по банкетному обслуживанию</h3>
                    <div className="border-b border-brand-sand/40 pb-2">
                      <input 
                        type="text" 
                        placeholder="Например: оформление веранды цветами, музыкальная сцена, детская анимация..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/20"
                      />
                    </div>
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start gap-3 text-xs text-brand-blue/70">
                    <input 
                      type="checkbox"
                      id="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-brand-sand text-brand-gold focus:ring-brand-gold bg-transparent cursor-pointer"
                      required
                    />
                    <label htmlFor="consent" className="cursor-pointer select-none leading-relaxed font-light">
                      Я согласен на <span className="text-brand-gold font-medium hover:underline">обработку персональных данных</span> для организации банкетного обслуживания.
                    </label>
                  </div>

                  {/* Warnings info */}
                  <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-sand/20 flex gap-3 text-xs text-brand-blue/70 leading-relaxed font-light">
                    <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span>Смета и варианты банкетного меню будут высланы на указанный номер телефона персональным банкетным менеджером в течение часа.</span>
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={!consent}
                      className={`bg-brand-blue text-brand-cream px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-lg shadow-md flex items-center gap-2 ${
                        !consent 
                          ? 'opacity-40 cursor-not-allowed' 
                          : 'hover:bg-brand-gold hover:text-brand-blue hover:shadow-lg'
                      }`}
                    >
                      <span>Забронировать</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 2: Event Invitation Success Card */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="text-center py-6 space-y-8"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl text-brand-blue font-semibold italic">Заявка на банкет принята!</h2>
                  <p className="text-xs text-brand-blue/60 font-light max-w-sm mx-auto leading-relaxed">
                    Спасибо, {name}! Мы уже рассчитываем смету по вашим параметрам. Банкетный менеджер свяжется с вами в ближайшее время.
                  </p>
                </div>

                {/* Event Invitation Styled card */}
                <div className="max-w-md mx-auto bg-brand-cream/80 border border-brand-sand/35 rounded-2xl p-6 relative overflow-hidden text-left shadow-md">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-gold/40 rounded-tl" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-gold/40 rounded-tr" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-gold/40 rounded-bl" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-gold/40 rounded-br" />

                  <div className="space-y-5">
                    <div className="flex justify-between items-center pb-3 border-b border-brand-sand/20">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">БАНКЕТНАЯ КАРТА</span>
                      <span className="text-[10px] uppercase font-bold text-brand-blue bg-brand-blue/5 px-2.5 py-0.5 rounded">
                        № EVT-{eventCode}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Дата события</span>
                        <span className="font-semibold text-brand-blue">{date}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Количество гостей</span>
                        <span className="font-semibold text-brand-blue">
                          {guestOptions.find(opt => opt.value === guests)?.label || 'до 30 гостей'}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Формат торжества</span>
                        <span className="font-semibold text-brand-blue font-serif italic">
                          {eventOptions.find(opt => opt.id === eventType)?.name || 'Свадьба'}
                        </span>
                      </div>
                      <div className="flex gap-1.5 items-center">
                        <UserCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                        <div>
                          <span className="text-[8px] uppercase font-semibold text-brand-blue/50 block">Менеджер</span>
                          <span className="font-semibold text-brand-blue text-[11px] whitespace-nowrap">{managerName}</span>
                        </div>
                      </div>
                    </div>

                    {comment && (
                      <div className="pt-3 border-t border-brand-sand/20">
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Пожелания организатора</span>
                        <p className="text-[11px] text-brand-blue/80 italic font-light">«{comment}»</p>
                      </div>
                    )}

                    <div className="pt-3 border-t border-dashed border-brand-sand/30 text-[10px] text-brand-blue/60 font-light flex items-center justify-between">
                      <span>Ресторан у воды «Пирс»</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        <span>Ростов-на-Дону</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                  <button
                    onClick={() => navigate('/events')}
                    className="flex items-center gap-2 border border-brand-blue hover:bg-brand-blue hover:text-brand-cream px-6 py-3 text-[10px] uppercase tracking-wider font-bold rounded-lg transition-all duration-300"
                  >
                    <span>Вернуться к мероприятиям</span>
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      setName('');
                      setPhone('');
                      setComment('');
                      setConsent(false);
                    }}
                    className="text-[10px] uppercase font-bold text-brand-blue hover:text-brand-gold transition-colors tracking-wider"
                  >
                    Отправить другую заявку
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
