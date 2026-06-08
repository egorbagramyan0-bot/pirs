import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Clock, Coffee, ShieldCheck, ChevronRight, ChevronLeft, CalendarPlus, HelpCircle, Check, MapPin, Compass } from 'lucide-react';
import useSEO from '../hooks/useSEO';

// Hardcoded tables for the interactive map
const tablesConfig = {
  hall: [
    { id: 'H1', name: 'Стол 1', capacity: 2, status: 'free', x: '15%', y: '25%' },
    { id: 'H2', name: 'Стол 2', capacity: 4, status: 'free', x: '45%', y: '25%' },
    { id: 'H3', name: 'Стол 3', capacity: 2, status: 'reserved', x: '75%', y: '25%' },
    { id: 'H4', name: 'Стол 4', capacity: 6, status: 'free', x: '15%', y: '70%' },
    { id: 'H5', name: 'Стол 5', capacity: 4, status: 'reserved', x: '45%', y: '70%' },
    { id: 'H6', name: 'Стол 6', capacity: 2, status: 'free', x: '75%', y: '70%' }
  ],
  terrace: [
    { id: 'T1', name: 'Стол 11', capacity: 2, status: 'free', x: '20%', y: '30%' },
    { id: 'T2', name: 'Стол 12', capacity: 4, status: 'reserved', x: '50%', y: '20%' },
    { id: 'T3', name: 'Стол 13', capacity: 4, status: 'free', x: '80%', y: '30%' },
    { id: 'T4', name: 'Стол 14', capacity: 2, status: 'free', x: '20%', y: '75%' },
    { id: 'T5', name: 'Стол 15', capacity: 8, status: 'free', x: '50%', y: '75%' },
    { id: 'T6', name: 'Стол 16', capacity: 2, status: 'reserved', x: '80%', y: '75%' }
  ],
  pier: [
    { id: 'P1', name: 'Стол 21', capacity: 2, status: 'free', x: '25%', y: '20%' },
    { id: 'P2', name: 'Стол 22', capacity: 2, status: 'reserved', x: '75%', y: '20%' },
    { id: 'P3', name: 'Стол 23', capacity: 4, status: 'free', x: '25%', y: '50%' },
    { id: 'P4', name: 'Стол 24', capacity: 4, status: 'free', x: '75%', y: '50%' },
    { id: 'P5', name: 'Стол 25', capacity: 2, status: 'free', x: '50%', y: '80%' }
  ]
};

const zones = [
  { id: 'hall', name: 'Главный зал', desc: 'Уютный интерьер с камином и мягким светом', temp: 'Тепло и тихо' },
  { id: 'terrace', name: 'Панорамная терраса', desc: 'Остекленная веранда у воды с обогревом', temp: 'Комфортно' },
  { id: 'pier', name: 'Открытый причал', desc: 'Столики на свежем воздухе у самой воды', temp: 'Прохладно, пледы' }
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
  
  // Steps: 1 = Details (Date/Time/Guests), 2 = Table/Zone Selection, 3 = Contacts, 4 = Ticket Summary
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
  const [selectedTable, setSelectedTable] = useState(null);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [notifMethod, setNotifMethod] = useState('whatsapp');

  // Stable random code for the ticket
  const [resCode] = useState(() => Math.floor(1000 + Math.random() * 9000));

  const handleNextStep = () => {
    if (step === 1) {
      if (!date || !time) return;
      setStep(2);
    } else if (step === 2) {
      if (!selectedTable) return;
      setStep(3);
    } else if (step === 3) {
      if (!name || !phone) return;
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
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

      {/* Main booking wizard container */}
      <section className="max-w-[1000px] mx-auto px-8 mt-12">
        {/* Step indicator bar */}
        <div className="flex justify-between items-center mb-10 max-w-md mx-auto relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-brand-sand/30 -translate-y-1/2 z-0" />
          {[1, 2, 3, 4].map((s) => (
            <div 
              key={s} 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-sans z-10 transition-all duration-500 border ${
                step >= s 
                  ? 'bg-brand-blue border-brand-blue text-brand-cream' 
                  : 'bg-brand-cream border-brand-sand/50 text-brand-blue/40'
              }`}
            >
              {step > s ? <Check className="w-4.5 h-4.5 text-brand-gold" /> : s}
            </div>
          ))}
        </div>

        {/* Wizard content cards */}
        <div className="bg-brand-cream border border-brand-sand/30 rounded-[32px] shadow-2xl p-6 md:p-10 text-left overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Date & Time & Guests */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Выберите дату и количество гостей</h2>
                  <p className="text-xs text-brand-blue/60 mt-1 font-light">Настройте основные параметры визита для проверки свободных мест.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date Input */}
                  <div className="border border-brand-sand/30 p-4 rounded-xl space-y-2 bg-brand-cream/50">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-brand-blue/60 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Дата визита</span>
                    </label>
                    <input 
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  {/* Guest Count */}
                  <div className="border border-brand-sand/30 p-4 rounded-xl space-y-2 bg-brand-cream/50">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-brand-blue/60 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Количество гостей</span>
                    </label>
                    <div className="flex justify-between items-center pt-1">
                      <button 
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-8 h-8 rounded-full border border-brand-sand/50 flex items-center justify-center text-sm font-bold text-brand-blue hover:bg-brand-gold/15"
                      >
                        -
                      </button>
                      <span className="font-serif text-base font-bold text-brand-blue">{guests}</span>
                      <button 
                        onClick={() => setGuests((g) => g + 1)}
                        className="w-8 h-8 rounded-full border border-brand-sand/50 flex items-center justify-center text-sm font-bold text-brand-blue hover:bg-brand-gold/15"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="border border-brand-sand/30 p-4 rounded-xl space-y-2 bg-brand-cream/50">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-brand-blue/60 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Время визита</span>
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue w-full focus:ring-0"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts}>{ts}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Slogans summary details */}
                <div className="p-4 bg-brand-blue/5 rounded-xl border border-brand-sand/20 flex gap-3 text-xs text-brand-blue/70 leading-relaxed font-light">
                  <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  <span>Администратор свяжется с вами для подтверждения бронирования. Пожалуйста, убедитесь, что ваши контактные данные указаны верно.</span>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNextStep}
                    className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[6px] shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <span>Выбрать зал и стол</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Interactive Table Map */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Выберите зону и конкретный стол</h2>
                  <p className="text-xs text-brand-blue/60 mt-1 font-light">Каждый стол имеет уникальный вид и атмосферу.</p>
                </div>

                {/* Zone Select Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {zones.map((z) => (
                    <div 
                      key={z.id}
                      onClick={() => { setZone(z.id); setSelectedTable(null); }}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 space-y-1 ${
                        zone === z.id 
                          ? 'border-brand-gold bg-brand-blue/5 shadow-md' 
                          : 'border-brand-sand/30 bg-transparent hover:border-brand-sand'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="font-serif text-base font-semibold text-brand-blue">{z.name}</h3>
                        <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold bg-brand-blue/5 px-2 py-0.5 rounded">
                          {z.temp}
                        </span>
                      </div>
                      <p className="text-[11px] text-brand-blue/60 font-light leading-relaxed">{z.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Map Grid Arena */}
                <div className="relative border border-brand-sand/30 rounded-2xl h-[320px] bg-brand-blue/5 overflow-hidden flex items-center justify-center p-4">
                  {/* Decorative Nautical compass in background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                    <Compass className="w-72 h-72 text-brand-blue" />
                  </div>

                  {/* Water edge indicator for pier/terrace */}
                  {zone !== 'hall' && (
                    <div className="absolute top-0 left-0 w-full h-8 bg-brand-blue/10 border-b border-brand-sand/20 flex items-center justify-center text-[10px] text-brand-blue/40 uppercase tracking-widest font-semibold select-none">
                      Береговая линия / Вода
                    </div>
                  )}

                  {/* Render Configured Tables */}
                  {tablesConfig[zone].map((tab) => {
                    const isSelected = selectedTable?.id === tab.id;
                    const isReserved = tab.status === 'reserved';

                    return (
                      <button
                        key={tab.id}
                        onClick={() => !isReserved && setSelectedTable(tab)}
                        disabled={isReserved}
                        style={{ left: tab.x, top: tab.y }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center transition-all duration-300 border ${
                          isReserved 
                            ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue/30 cursor-not-allowed' 
                            : isSelected
                              ? 'bg-brand-gold border-brand-gold text-brand-blue scale-110 shadow-lg'
                              : 'bg-brand-cream border-brand-sand text-brand-blue hover:border-brand-gold hover:scale-105'
                        } ${
                          tab.capacity >= 6 
                            ? 'w-16 h-16 rounded-[14px]' 
                            : tab.capacity >= 4
                              ? 'w-14 h-14'
                              : 'w-12 h-12'
                        }`}
                      >
                        <span className="text-[10px] font-bold font-sans">{tab.id}</span>
                        <span className="text-[8px] opacity-60 font-light flex items-center gap-0.5">
                          <Users className="w-2.5 h-2.5" />
                          <span>{tab.capacity}</span>
                        </span>
                      </button>
                    );
                  })}

                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 flex gap-4 text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold bg-brand-cream/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-brand-sand/20">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-cream border border-brand-sand" />
                      <span>Свободно</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-gold" />
                      <span>Выбран</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-blue/10 border border-brand-blue/20" />
                      <span>Занят</span>
                    </div>
                  </div>
                </div>

                {/* Selected Summary Details */}
                {selectedTable && (
                  <div className="p-4 bg-brand-gold/10 border border-brand-gold/30 rounded-xl flex justify-between items-center">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-brand-gold font-bold block mb-1">Выбор стола</span>
                      <p className="font-serif text-base font-semibold text-brand-blue">
                        {zone === 'hall' ? 'Главный зал' : zone === 'terrace' ? 'Панорамная терраса' : 'Открытый причал'} — {selectedTable.name} ({selectedTable.id})
                      </p>
                      <p className="text-[11px] text-brand-blue/70 font-light mt-0.5">
                        Вместимость: до {selectedTable.capacity} гостей. Зарезервирован на {date} в {time}.
                      </p>
                    </div>
                    <span className="bg-brand-blue text-brand-gold text-[10px] uppercase font-bold px-3 py-1.5 rounded-md">
                      Выбран
                    </span>
                  </div>
                )}

                {/* Actions Navigation */}
                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={handlePrevStep}
                    className="text-brand-blue hover:text-brand-gold flex items-center gap-1.5 text-[10px] uppercase font-bold transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Назад</span>
                  </button>

                  <button
                    onClick={handleNextStep}
                    disabled={!selectedTable}
                    className={`px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[6px] shadow-md flex items-center gap-2 ${
                      selectedTable 
                        ? 'bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue hover:shadow-lg' 
                        : 'bg-brand-blue/20 text-brand-blue/40 cursor-not-allowed'
                    }`}
                  >
                    <span>Контактные данные</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Contacts Info */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Заполните контактную информацию</h2>
                  <p className="text-xs text-brand-blue/60 mt-1 font-light">Введите данные для подтверждения резервации.</p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="border-b border-brand-sand/40 pb-2">
                      <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Имя получателя</label>
                      <input 
                        type="text" 
                        placeholder="Константин"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="border-b border-brand-sand/40 pb-2">
                      <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Номер телефона</label>
                      <input 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="border-b border-brand-sand/40 pb-2">
                      <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Эл. почта</label>
                      <input 
                        type="email" 
                        placeholder="konstantin@mail.ru"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                        required
                      />
                    </div>

                    {/* Notification Channel */}
                    <div className="border-b border-brand-sand/40 pb-2">
                      <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Способ подтверждения</label>
                      <select
                        value={notifMethod}
                        onChange={(e) => setNotifMethod(e.target.value)}
                        className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full"
                      >
                        <option value="whatsapp">Сообщение в WhatsApp</option>
                        <option value="telegram">Сообщение в Telegram</option>
                        <option value="phone">Звонок от хостес</option>
                        <option value="email">Подтверждение по почте</option>
                      </select>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="border-b border-brand-sand/40 pb-2">
                    <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Особые пожелания</label>
                    <input 
                      type="text" 
                      placeholder="Например: у нас годовщина свадьбы, требуется детское кресло..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                    />
                  </div>

                  {/* Navigation controls */}
                  <div className="flex justify-between items-center pt-6">
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="text-brand-blue hover:text-brand-gold flex items-center gap-1.5 text-[10px] uppercase font-bold transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Назад</span>
                    </button>

                    <button
                      type="submit"
                      className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[6px] shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                      <span>Подтвердить резерв</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: Success Ticket summary */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-8"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-serif text-3xl text-brand-blue font-semibold">Заявка на бронирование принята!</h2>
                  <p className="text-xs text-brand-blue/60 font-light max-w-sm mx-auto">
                    Спасибо, {name}! Администратор свяжется с вами в ближайшее время для подтверждения бронирования.
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
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block">Дата</span>
                        <span className="font-semibold text-brand-blue">{date}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block">Время</span>
                        <span className="font-semibold text-brand-blue">{time}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block">Гости</span>
                        <span className="font-semibold text-brand-blue">{guests} {guests === 1 ? 'персона' : guests < 5 ? 'персоны' : 'персон'}</span>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase font-semibold text-brand-blue/50 block">Место резерва</span>
                        <span className="font-semibold text-brand-blue uppercase">
                          {selectedTable?.id} ({zone === 'hall' ? 'Зал' : zone === 'terrace' ? 'Терраса' : 'Причал'})
                        </span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-dashed border-brand-sand/30 text-[10px] text-brand-blue/60 font-light flex items-center justify-between">
                      <span>Адрес: Береговая улица, 16А</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-gold" />
                        <span>Ростов-на-Дону</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mock Action Actions */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button
                    onClick={handleAddToCalendar}
                    className="flex items-center gap-2 border border-brand-blue hover:bg-brand-blue hover:text-brand-cream px-6 py-3 text-[10px] uppercase tracking-wider font-bold rounded-[4px] transition-all duration-300"
                  >
                    <CalendarPlus className="w-4 h-4 text-brand-gold" />
                    <span>Добавить в календарь</span>
                  </button>
                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedTable(null);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setComment('');
                    }}
                    className="text-[10px] uppercase font-bold text-brand-blue hover:text-brand-gold transition-colors tracking-wider"
                  >
                    Забронировать другой стол
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* Helpful FAQ / Policy banner */}
      <section className="max-w-[1000px] mx-auto px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div className="bg-brand-cream border border-brand-sand/20 p-6 rounded-2xl space-y-2">
          <h3 className="font-serif text-base font-semibold text-brand-blue flex items-center gap-2">
            <Coffee className="w-4.5 h-4.5 text-brand-gold" />
            <span>Дресс-код ресторации</span>
          </h3>
          <p className="text-xs text-brand-blue/70 font-light leading-relaxed">
            В ресторане «Пирс» действует повседневный элегантный стиль (smart casual). Мы просим воздержаться от посещения ресторана в спортивной одежде или пляжных костюмах.
          </p>
        </div>

        <div className="bg-brand-cream border border-brand-sand/20 p-6 rounded-2xl space-y-2">
          <h3 className="font-serif text-base font-semibold text-brand-blue flex items-center gap-2">
            <HelpCircle className="w-4.5 h-4.5 text-brand-gold" />
            <span>Особые случаи и банкеты</span>
          </h3>
          <p className="text-xs text-brand-blue/70 font-light leading-relaxed">
            Для бронирования столов на компании свыше 10 человек, проведения юбилеев или закрытых корпоративных торжеств перейдите на страницу <a href="#/events" className="text-brand-gold font-medium hover:underline">Мероприятия</a> или свяжитесь с менеджером.
          </p>
        </div>
      </section>
    </div>
  );
}
