import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, ShieldCheck, ChevronRight, CalendarPlus, Check, MapPin } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const zones = [
  { id: 'hall', name: 'Главный зал', desc: 'Уютный интерьер с камином и мягким светом', info: 'Тепло и тихо' },
  { id: 'terrace', name: 'Панорамная терраса', desc: 'Остекленная веранда у воды с обогревом', info: 'Панорамный вид' },
  { id: 'pier', name: 'Открытый причал', desc: 'Столики на свежем воздухе у самой воды', info: 'У воды, пледы' }
];

const timeSlots = [
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
];

export default function Booking() {
  useSEO({
    title: 'Забронировать стол | Ресторан Пирс в Ростове-на-Дону',
    description: 'Онлайн-бронирование столов в ресторане «Пирс». Выберите дату, время, количество гостей и зону: летняя веранда, основной зал, VIP-зона.',
    keywords: 'забронировать стол Ростов, резерв стола Береговая, ресторан Пирс заказать столик, бронирование веранды у воды'
  });

  const location = useLocation();
  
  // Steps: 1 = Form, 2 = Success Ticket
  const [step, setStep] = useState(1);

  // Form Fields
  const [date, setDate] = useState(() => {
    if (location.state && location.state.bookingDate) {
      return location.state.bookingDate;
    }
    return new Date().toISOString().split('T')[0];
  });
  const [time, setTime] = useState(() => {
    if (location.state && location.state.bookingTime) {
      return location.state.bookingTime;
    }
    return '18:00';
  });
  const [guests, setGuests] = useState(() => {
    if (location.state && location.state.guests) {
      return Number(location.state.guests);
    }
    return 2;
  });
  const [zone, setZone] = useState('hall');
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [notifMethod, setNotifMethod] = useState('whatsapp');

  // Stable random code for the ticket
  const [resCode] = useState(() => Math.floor(1000 + Math.random() * 9000));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !name || !phone) return;
    setStep(2);
  };

  const handleAddToCalendar = () => {
    alert('Событие добавлено в ваш календарь (Mock)');
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen pb-24">
      {/* Page Header Hero */}
      <section className="relative h-[240px] flex items-center justify-center bg-brand-blue -mt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/70 z-10" />
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YOGnJJ1naIeiziEl2TX67avxXhUtU6-wvlxwDKEuX0wFSxedXqpBUpE_PqZQTxqjL5X8Q4Q8u6w0p97Ut6fOn6QYF17xW6fa514txGhLMttyH-vZzweNPbFkw-_Kei6SikEdeyrvsRA8LpyDGQP8pZNk2jnrbgLSkN9Uigw5lRHznfTncMsaMqZPpUq13LsCgL6IuU6vEjGoESzjQP7fBMf-sfIn4HRv83r8vk71IyvlaOSSPa8S2qgJht8lqQhZ_ZWSf8w" 
            alt="Вечерний вид на столики у воды в ресторане Пирс" 
          />
        </div>
        <div className="relative z-20 text-center space-y-3 max-w-2xl px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            Резерв стола
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream font-medium italic">
            Онлайн бронирование
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
        </div>
      </section>

      {/* Main booking container */}
      <section className="max-w-[800px] mx-auto px-6 mt-12">
        <div className="bg-brand-cream border border-brand-sand/30 rounded-[32px] shadow-2xl p-6 md:p-10 text-left overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Booking Form */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-8">
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Забронировать столик</h2>
                  <p className="text-xs text-brand-blue/60 mt-1 font-light">Пожалуйста, заполните форму ниже. Мы свяжемся с вами для подтверждения визита.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Visited parameters */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">1. Параметры визита</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Date */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Дата</span>
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

                      {/* Time */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Clock className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Время</span>
                        </label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0 cursor-pointer"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts}>{ts}</option>
                          ))}
                        </select>
                      </div>

                      {/* Guests */}
                      <div className="border border-brand-sand/40 p-4 rounded-2xl bg-brand-cream/50 hover:border-brand-gold/50 transition-colors">
                        <label className="text-[9px] uppercase font-bold tracking-wider text-brand-blue/50 flex items-center gap-2 mb-1">
                          <Users className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Количество гостей</span>
                        </label>
                        <div className="flex justify-between items-center">
                          <button 
                            type="button"
                            onClick={() => setGuests((g) => Math.max(1, g - 1))}
                            className="w-7 h-7 rounded-full border border-brand-sand/55 flex items-center justify-center text-xs font-bold text-brand-blue hover:bg-brand-gold hover:text-brand-cream transition-all"
                          >
                            -
                          </button>
                          <span className="font-sans text-sm font-bold text-brand-blue">{guests}</span>
                          <button 
                            type="button"
                            onClick={() => setGuests((g) => g + 1)}
                            className="w-7 h-7 rounded-full border border-brand-sand/55 flex items-center justify-center text-xs font-bold text-brand-blue hover:bg-brand-gold hover:text-brand-cream transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Zone selection */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">2. Предпочтительная зона</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {zones.map((z) => {
                        const isSelected = zone === z.id;
                        return (
                          <div 
                            key={z.id}
                            onClick={() => setZone(z.id)}
                            className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 space-y-1 ${
                              isSelected 
                                ? 'border-brand-gold bg-brand-blue/5 shadow-md scale-[1.01]' 
                                : 'border-brand-sand/30 bg-transparent hover:border-brand-sand hover:bg-brand-cream/40'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-serif text-sm font-semibold text-brand-blue">{z.name}</h4>
                              {isSelected && (
                                <div className="w-4 h-4 rounded-full bg-brand-gold flex items-center justify-center">
                                  <Check className="w-2.5 h-2.5 text-brand-cream" />
                                </div>
                              )}
                            </div>
                            <p className="text-[10px] text-brand-blue/60 font-light leading-relaxed">{z.desc}</p>
                            <span className="text-[8px] uppercase tracking-wider text-brand-gold font-bold block pt-1">
                              {z.info}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contact details */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">3. Контактные данные</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="border-b border-brand-sand/40 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-1">Имя</label>
                        <input 
                          type="text" 
                          placeholder="Александр"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      {/* Email */}
                      <div className="border-b border-brand-sand/40 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-1">Эл. почта</label>
                        <input 
                          type="email" 
                          placeholder="alexander@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/20"
                          required
                        />
                      </div>

                      {/* Notification Method */}
                      <div className="border-b border-brand-sand/40 pb-2">
                        <label className="block text-[9px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-1">Способ подтверждения</label>
                        <select
                          value={notifMethod}
                          onChange={(e) => setNotifMethod(e.target.value)}
                          className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full cursor-pointer"
                        >
                          <option value="whatsapp">Сообщение в WhatsApp</option>
                          <option value="telegram">Сообщение в Telegram</option>
                          <option value="phone">Звонок от хостес</option>
                          <option value="email">Письмо на эл. почту</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Wishes */}
                  <div className="space-y-4">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-gold">4. Особые пожелания</h3>
                    <div className="border-b border-brand-sand/40 pb-2">
                      <input 
                        type="text" 
                        placeholder="Например: день рождения, нужен детский стульчик, столик у окна..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/20"
                      />
                    </div>
                  </div>

                  {/* Info Warning */}
                  <div className="p-4 bg-brand-blue/5 rounded-2xl border border-brand-sand/20 flex gap-3 text-xs text-brand-blue/70 leading-relaxed font-light">
                    <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                    <span>Нажимая кнопку, вы отправляете запрос на бронирование. Администратор свяжется с вами по выбранному каналу связи в течение 10-15 минут.</span>
                  </div>

                  {/* CTA button */}
                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <span>Отправить заявку</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 2: Success Ticket */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="text-center py-6 space-y-8"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto animate-pulse">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl text-brand-blue font-semibold italic">Заявка отправлена!</h2>
                  <p className="text-xs text-brand-blue/60 font-light max-w-sm mx-auto leading-relaxed">
                    Спасибо, {name}! Наш администратор свяжется с вами в ближайшее время для подтверждения бронирования.
                  </p>
                </div>

                {/* Ticket styled Summary card */}
                <div className="max-w-md mx-auto bg-brand-cream/80 border border-brand-sand/35 rounded-2xl p-6 relative overflow-hidden text-left shadow-md">
                  {/* Visual cutouts for ticket look */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-brand-cream border-r border-brand-sand/30 -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-brand-cream border-l border-brand-sand/30 -translate-y-1/2" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-brand-sand/20">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">Ресторан «Пирс»</span>
                      <span className="text-[10px] uppercase font-bold text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded">
                        № RES-{resCode}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Дата</span>
                        <span className="font-semibold text-brand-blue">{date}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Время</span>
                        <span className="font-semibold text-brand-blue">{time}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Гости</span>
                        <span className="font-semibold text-brand-blue">{guests} {guests === 1 ? 'персона' : guests < 5 ? 'персоны' : 'персон'}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Выбранная зона</span>
                        <span className="font-semibold text-brand-blue font-serif italic">
                          {zones.find(z => z.id === zone)?.name || 'Главный зал'}
                        </span>
                      </div>
                    </div>

                    {comment && (
                      <div className="pt-3 border-t border-brand-sand/20">
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block mb-0.5">Пожелания</span>
                        <p className="text-[11px] text-brand-blue/80 italic font-light">«{comment}»</p>
                      </div>
                    )}

                    <div className="pt-3 border-t border-dashed border-brand-sand/30 text-[10px] text-brand-blue/60 font-light flex items-center justify-between">
                      <span>Адрес: Береговая улица, 16А</span>
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
                    onClick={handleAddToCalendar}
                    className="flex items-center gap-2 border border-brand-blue hover:bg-brand-blue hover:text-brand-cream px-6 py-3 text-[10px] uppercase tracking-wider font-bold rounded-lg transition-all duration-300"
                  >
                    <CalendarPlus className="w-4 h-4 text-brand-gold" />
                    <span>Добавить в календарь</span>
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setComment('');
                    }}
                    className="text-[10px] uppercase font-bold text-brand-blue hover:text-brand-gold transition-colors tracking-wider"
                  >
                    Забронировать еще раз
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
