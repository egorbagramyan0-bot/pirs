import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Anchor, Calendar, Clock, Users, ArrowRight, MapPin, ShieldCheck } from 'lucide-react';
import useSEO from '../hooks/useSEO';

const heroBackground = "/hero3.png";
const octopusPlate = "https://lh3.googleusercontent.com/aida-public/AB6AXuD6S2BxH2kfYpbaYkgfm7aqLtg9RkZnxwVBzyzCS8V0c1QlJOGvC1P2B1DEpnFs0DZG9lOjdNdVeJOGHoJWMGBZloEWcDfwdd1FGNfq4iZeLN2cW814Ij_yml-TFoXvFAHOpq4cjKyN5jcBF8o2bAZkC1Wdywa7MPKfw6rfwygIPRoG5AyYhfPP9kS8XUezBuf40kII17ZuID1OBQuy7Xb4FnbnnyYBYmogKnwKLFWJpIDdfpZHpz7NiId63m5C5QYmXe9Bwgw";
const cocktail = "https://lh3.googleusercontent.com/aida-public/AB6AXuD2l96CuvjnE3ieKPhEgbAq4N84K4IcW0UGDAHASFGZDLnLQcaMjzxS4EYqqoV03wmXksXE9TFInztUAPhOe-Y3lHSlNTei3S2fW6JKQIyofWdDsdA2L7rVY5MggwM40nLT7_lJtdjF0FYynW_MD3zw_GUhFGp_Aee3Ai-azMSQykbGtGSBmr99fPOCnwgT7zFgWspBpVLxBfNT2Qz7nQLZNwejFRmqdU3JRdhSji0kk3XboDeLocn3QDfQt5qBN0vyNJzmLHs";
const dessert = "https://lh3.googleusercontent.com/aida-public/AB6AXuCrFDChW_PtvEVBJGxNavCMPLtEWvvKsjcJ_oz9OwZLZdc5C7yJq4tGsGwMFALzbgIPDpqOrcT4hLeBHylJ6kG65emXaay6QbaT-izwvgB9Ejp4qPPMjJRKOqIfzOZtY1oaG-mIw4tx58TWuwonWwpp6eTVIUhypLRDE8Mm-O2LvG50Suf_HBvmCAQOxWPYKVUiOqoLZ8twYw3BRTgrldkLdYx9WVW-VuKPG1rD-VmS-dfNW7znMNfj45ptykuhZXRHdCtorOA";
const sunsetLounge = "https://lh3.googleusercontent.com/aida-public/AB6AXuCYYAPrDhmv_zmYRatbyCFZT_0Z-LxletuLMVpuZCGtCKg092u31eBEfiKuYBMENc-WO3f1OMZ8K0R-AgOSMXSIB3wgejz6k6rJma1ELWN_mbvIUU_D63LM7zlBgE-laePxGDAOcEewAG_RmeeaGmG_hv_cTrbk-izrX5QwQDeE24ucnhJYyt-TzI2iovwDiHWn7r6uu0vHV3Zxov6xkRwNX2lpqjxlCpu9I1j-eYIKoXLlBUZN1SoPIwRcwhsd10KQ5rk9UM8";
const candleWine = "https://lh3.googleusercontent.com/aida-public/AB6AXuB87cqDwH_XCHvz7sPHg--ju4hffHBsk0Pz359P3Wpih_nSyWPSNLVtPIYzQl2B1X-CqKRPlCi3F0Tl3g84u9_U_xlt4ASqTPfS_D9TO5cXKjJtyquEU9zz-UTR2ldxYsaI4EIuR74wdApqB5DnrhmksI1pguLgsORmO2Y4VOs3J37kvvjNQxohXWLcljVg1CoriTvuKZwp9UzWFhRLIlmRFUJlLL6HMKdxTR2VNtcKo1TBz60I3CwR_jKK1v1JIbwpAwNLFiU";
const pierNight = "https://lh3.googleusercontent.com/aida-public/AB6AXuB8YOGnJJ1naIeiziEl2TX67avxXhUtU6-wvlxwDKEuX0wFSxedXqpBUpE_PqZQTxqjL5X8Q4Q8u6w0p97Ut6fOn6QYF17xW6fa514txGhLMttyH-vZzweNPbFkw-_Kei6SikEdeyrvsRA8LpyDGQP8pZNk2jnrbgLSkN9Uigw5lRHznfTncMsaMqZPpUq13LsCgL6IuU6vEjGoESzjQP7fBMf-sfIn4HRv83r8vk71IyvlaOSSPa8S2qgJht8lqQhZ_ZWSf8w";
const mapImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmZ6irh38BgYt2jVpKH35qVRe_pRRndxXs1ul8Jdn558td7jBNE0JVS-DVMJTHIJDB-gPyako6ymLRMRuIO47zOOeNBf61oS55hjnnC4dGeSYeJh_Shd5oze2QsPTfQBYq6Fy1fKHX-BwFKD8L-9p2Jnr5CkQsPoaTQ6BMKHQv5_CL21UsdRqH7tQURpGn8gefmgdrqP9AQOpkBGtfF1cZtfw3zlIIFKHHmcm-c3rxFC7rA7NhSkHWItvHvQUtLROIeZ15zYk";

export default function Home() {
  useSEO({
    title: 'Ресторан Пирс | Премиальный ресторан у воды в Ростове-на-Дону',
    description: 'Ресторан «Пирс» на набережной Ростова-на-Дону (Береговая, 16А). Летняя веранда с видом на Дон, авторская европейская и кавказская кухня, живая музыка.',
    keywords: 'Пирс Ростов, Ресторан Пирс, ресторан у воды, Ростов-на-Дону Береговая, ресторан Ростов, веранда у воды, вид на Дон, забронировать стол, банкеты Ростов'
  });

  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState('2026-06-06');
  const [bookingTime, setBookingTime] = useState('19:00');
  const [guests, setGuests] = useState('2');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    navigate('/booking', { state: { bookingDate, bookingTime, guests } });
  };

  const handleBuildRoute = () => {
    window.open('https://yandex.ru/maps/?text=Ростов-на-Дону+Береговая+улица+16А+ресторан+Пирс', '_blank');
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <header className="relative min-h-[92vh] md:h-[92vh] w-full overflow-hidden bg-[#fff8f4] flex flex-col justify-between -mt-24">
        {/* Main photo container (asymmetric right margin on desktop) */}
        <div className="absolute inset-y-0 left-0 right-0 md:right-[70px] overflow-hidden z-10 rounded-br-[60px] md:rounded-br-[110px] shadow-[0_15px_40px_rgba(4,22,39,0.12)] bg-brand-blue">
          {/* Background Image with slow zoom motion */}
          <motion.div 
            initial={{ scale: 1.06 }}
            animate={{ scale: 1.01 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              className="w-full h-full object-cover object-[75%_center] md:object-center opacity-85" 
              src={heroBackground} 
              alt="Ресторан Пирс у воды в Ростове-на-Дону вечером" 
            />
          </motion.div>

          {/* Local Gradient Darkening Overlay (left only for readability) */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/80 via-brand-blue/30 to-transparent z-10 pointer-events-none" />
          
          {/* Additional ambient shadows */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-blue/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-blue/40 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Right Vertical Decorative Stripe (hidden on mobile) */}
        <div className="absolute right-0 top-0 bottom-0 w-[70px] bg-[#fdfbf7] border-l border-brand-sand/15 z-20 hidden md:flex flex-col items-center justify-between py-12 select-none overflow-hidden">
          {/* Thin sea map lines at the top */}
          <div className="absolute inset-x-0 top-0 h-40 opacity-30 pointer-events-none">
            <svg className="w-full h-full text-brand-gold stroke-current stroke-[0.75]" viewBox="0 0 70 200">
              <path d="M-10,30 Q30,10 80,30" fill="none" />
              <path d="M-10,50 Q30,30 80,50" fill="none" strokeDasharray="3,3" />
              <path d="M-10,70 Q30,50 80,70" fill="none" />
              <path d="M-10,120 Q30,100 80,120" fill="none" />
            </svg>
          </div>

          {/* Vertical text */}
          <div className="flex-grow flex items-center justify-center">
            {/* Empty space */}
          </div>

          {/* Anchor at the bottom */}
          <div className="relative flex flex-col items-center gap-4 z-10">
            <div className="w-[1px] h-16 bg-brand-gold/30" />
            <Anchor className="w-5 h-5 text-brand-gold animate-pulse" />
          </div>
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-8 w-full flex-grow flex grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-32 md:pt-40 pb-36 md:pb-28">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6 text-left">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block"
            >
              ПИРС
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl md:text-[60px] text-brand-cream leading-[1.15] font-medium tracking-wide"
            >
              Ресторан у воды <br />
              <span className="italic font-normal text-brand-gold text-3xl md:text-[46px] tracking-normal block mt-2">
                в центре Ростова
              </span>
            </motion.h1>
            
            {/* Elegant wavy underline divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="origin-left py-1"
            >
              <svg width="60" height="6" viewBox="0 0 60 6" fill="none" className="text-brand-gold/60">
                <path d="M0 3 Q 7.5 0, 15 3 T 30 3 T 45 3 T 60 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-sans text-brand-cream/80 max-w-lg text-sm md:text-[17px] font-light leading-relaxed"
            >
              Летняя веранда с видом на Дон, <br className="hidden sm:inline" />
              авторская кухня и вечера, к которым хочется возвращаться.
            </motion.p>

            {/* Address & Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-brand-cream/70 text-xs md:text-sm font-light pt-2"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Ростов-на-Дону, Береговая улица, 16А</span>
              </div>
              <div className="h-4 w-px bg-brand-cream/20 hidden sm:block" />
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-brand-gold font-bold">4,6</span>
                <span>в Яндекс Картах</span>
                <span className="text-brand-cream/40">•</span>
                <span>Более 2 800 оценок гостей</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-3 md:pt-4"
            >
              <Link 
                to="/menu" 
                className="inline-block bg-brand-gold hover:bg-brand-cream text-brand-blue font-bold px-10 py-4 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 rounded-[4px] shadow-lg hover:shadow-xl"
              >
                Смотреть меню
              </Link>
            </motion.div>
          </div>

          {/* Spacer for right column on desktop (since booking form floats at the bottom right) */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>

        {/* Bottom Curved Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 md:right-[70px] z-20 pointer-events-none select-none">
          {/* Smooth wave shape */}
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            preserveAspectRatio="none" 
            className="w-full h-[70px] md:h-[130px] block"
          >
            <path 
              d="M0,160 Q360,60 720,110 T1440,100 L1440,160 L0,160 Z" 
              fill="#fff8f4" 
            />
          </svg>
          
          {/* Thin decorative sea contour lines under the wave */}
          <svg 
            viewBox="0 0 1440 160" 
            fill="none" 
            preserveAspectRatio="none" 
            className="w-full h-[70px] md:h-[130px] block absolute inset-0 opacity-25"
          >
            <path 
              d="M0,130 Q360,40 720,90 T1440,80" 
              stroke="#bfa260" 
              strokeWidth="1" 
            />
            <path 
              d="M0,145 Q360,55 720,105 T1440,95" 
              stroke="#bfa260" 
              strokeWidth="0.5" 
              strokeDasharray="4,4" 
            />
          </svg>
        </div>

        {/* Desktop Compact Booking Card (overlapping bottom wave) */}
        <div className="absolute bottom-[-20px] right-[100px] z-30 hidden lg:block w-full max-w-[760px]">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="bg-[#fdfbf7] border border-brand-sand/35 rounded-2xl shadow-[0_20px_50px_rgba(4,22,39,0.12)] p-6 flex flex-col gap-4 text-left"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold px-1">
              БРОНИРОВАНИЕ СТОЛА
            </span>
            
            <form onSubmit={handleBookingSubmit} className="flex items-center gap-4">
              <div className="flex-grow flex items-center border border-brand-sand/25 rounded-lg bg-white divide-x divide-brand-sand/15 py-1 px-2">
                {/* Date Picker */}
                <div className="flex-1 flex items-center gap-2 px-3 py-2">
                  <Calendar className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Дата</span>
                    <input 
                      type="date" 
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full leading-tight cursor-pointer outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Time Selector */}
                <div className="flex-1 flex items-center gap-2 px-3 py-2">
                  <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Время</span>
                    <select 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full leading-tight cursor-pointer outline-none"
                    >
                      <option value="12:00">12:00</option>
                      <option value="14:00">14:00</option>
                      <option value="16:00">16:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                </div>

                {/* Guests Selector */}
                <div className="flex-1 flex items-center gap-2 px-3 py-2">
                  <Users className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Гости</span>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full leading-tight cursor-pointer outline-none"
                    >
                      <option value="1">1 гость</option>
                      <option value="2">2 гостя</option>
                      <option value="3">3 гостя</option>
                      <option value="4">4 гостя</option>
                      <option value="6">6 гостей</option>
                      <option value="8">8 гостей</option>
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-7 py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-[6px] shadow-md hover:shadow-lg flex-shrink-0 cursor-pointer"
              >
                Найти стол
              </button>
            </form>

            <div className="flex items-center gap-1.5 text-[10px] text-brand-blue/50 italic px-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>Администратор свяжется с вами для подтверждения бронирования.</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Booking Card (rendered directly below hero section on mobile) */}
      <div className="block lg:hidden px-6 py-8 bg-[#fff8f4] border-b border-brand-sand/15">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#fdfbf7] border border-brand-sand/35 rounded-xl shadow-lg p-5 space-y-4 text-left"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block">
            БРОНИРОВАНИЕ СТОЛА
          </span>
          
          <form onSubmit={handleBookingSubmit} className="space-y-4">
            <div className="space-y-3">
              {/* Date */}
              <div className="flex items-center gap-3 border border-brand-sand/25 rounded-lg bg-white p-3">
                <Calendar className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <div className="flex-grow">
                  <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Дата</span>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Time */}
                <div className="flex items-center gap-3 border border-brand-sand/25 rounded-lg bg-white p-3">
                  <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Время</span>
                    <select 
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full outline-none"
                    >
                      <option value="12:00">12:00</option>
                      <option value="14:00">14:00</option>
                      <option value="16:00">16:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div className="flex items-center gap-3 border border-brand-sand/25 rounded-lg bg-white p-3">
                  <Users className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <div className="flex-grow">
                    <span className="block text-[8px] uppercase tracking-wider text-brand-blue/50 font-semibold mb-0.5">Гости</span>
                    <select 
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="bg-transparent border-none p-0 text-xs font-semibold text-brand-blue focus:ring-0 w-full outline-none"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="6">6</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue py-3.5 text-[10px] uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-[6px] shadow-md cursor-pointer"
            >
              Найти стол
            </button>
          </form>

          <div className="flex items-center gap-1.5 text-[9px] text-brand-blue/50 italic justify-center text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span>Администратор свяжется с вами для подтверждения бронирования.</span>
          </div>
        </motion.div>
      </div>

      {/* 2. Cuisine Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text Description */}
          <div className="lg:col-span-4 space-y-6 text-left lg:pr-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
              Авторская кухня
            </span>
            <div className="w-12 h-px bg-brand-gold" />
            <h2 className="font-serif text-4xl text-brand-blue leading-tight font-semibold">
              Кухня для красивых вечеров
            </h2>
            <p className="font-sans text-brand-blue/70 text-sm leading-relaxed font-light">
              В меню «Пирса» встречаются европейские и кавказские блюда, авторские сочетания, рыба, мясо, десерты и напитки для неспешного ужина у воды.
            </p>
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-blue border-b border-brand-blue/20 pb-1 hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              <span>Открыть меню</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Photo Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Octopus plate (Large block) */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-[24px] h-[450px] shadow-lg group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                  src={octopusPlate} 
                  alt="Осьминог на гриле" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 text-left text-brand-cream opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-serif text-lg italic">Осьминог на гриле с пюре из горошка</span>
                </div>
              </div>

              {/* Cocktail (Small block) */}
              <div className="relative overflow-hidden rounded-[24px] h-[213px] shadow-lg group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                  src={cocktail} 
                  alt="Авторские коктейли" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 text-left text-brand-cream opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-serif text-sm italic">Фирменный лаунж-коктейль</span>
                </div>
              </div>

              {/* Dessert (Small block) */}
              <div className="relative overflow-hidden rounded-[24px] h-[213px] shadow-lg group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                  src={dessert} 
                  alt="Изысканные десерты" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 text-left text-brand-cream opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-serif text-sm italic">Мятный мусс с золотой пыльцой</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits Section */}
      

      {/* 4. Storytelling Block */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Decorative image with custom shape */}
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl h-[450px]">
            <img 
              className="w-full h-full object-cover" 
              src={sunsetLounge} 
              alt="Лаунж зона у воды" 
            />
            <div className="absolute inset-0 bg-brand-blue/10" />
          </div>

          {/* Story contents */}
          <div className="space-y-8 text-left">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
              Философия комфорта
            </span>
            <h2 className="font-serif text-4xl text-brand-blue leading-tight font-semibold">
              Место, где можно никуда не спешить
            </h2>
            <div className="w-12 h-px bg-brand-gold" />
            <p className="font-sans text-brand-blue/70 text-base leading-relaxed font-light">
              «Пирс» - ресторан на набережной Ростова-на-Дону с видом на Дон. Здесь можно провести спокойный вечер на летней веранде, встретиться с близкими, устроить семейный ужин или отметить особенное событие.
            </p>
            <blockquote className="border-l-2 border-brand-gold pl-6 py-1 italic font-serif text-lg text-brand-blue/80">
              «Вода, вечерний свет, живая музыка и блюда, которые хочется разделить с хорошей компанией.»
            </blockquote>
            <Link 
              to="/about"
              className="bg-brand-blue text-brand-cream hover:bg-brand-gold hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[4px] inline-block shadow-sm"
            >
              Подробнее о ресторане
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Horizontal Gallery Carousel */}
      <section id="gallery" className="py-24 bg-brand-blue text-brand-cream/80 overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-8 mb-12 flex justify-between items-end">
          <div className="text-left space-y-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
              Визуальная эстетика
            </span>
            <h2 className="font-serif text-4xl text-brand-cream font-medium">
              Атмосфера ПИРС в кадрах
            </h2>
          </div>
        </div>

        {/* Rolling Images */}
        <div className="flex gap-8 overflow-x-auto px-8 pb-8 no-scrollbar scroll-smooth">
          {[
            { img: sunsetLounge, title: 'Закаты у воды' },
            { img: candleWine, title: 'Романтические ужины' },
            { img: pierNight, title: 'Вечерние огни причала' },
            { img: heroBackground, title: 'Вид на террасу' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[320px] md:min-w-[400px] h-[500px] rounded-[24px] overflow-hidden relative group shadow-2xl flex-shrink-0"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" 
                src={item.img} 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-left">
                <span className="font-serif text-lg italic text-brand-cream">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA & Map Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
                Ждем вас в гости
              </span>
              <h2 className="font-serif text-5xl text-brand-blue font-semibold leading-tight">
                Забронируйте стол у воды
              </h2>
              <p className="font-sans text-brand-blue/70 text-base font-light">
                Проведите вечер на берегу Дона в атмосфере, в которую хочется возвращаться.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-brand-blue font-sans text-sm tracking-wide">Адрес ресторана</p>
                  <p className="text-brand-blue/70 text-sm font-light">Ростов-на-Дону, Береговая улица, 16А</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-brand-blue font-sans text-sm tracking-wide">Режим работы</p>
                  <p className="text-brand-blue/70 text-sm font-light">Уточняйте режим работы по телефону</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/booking"
                className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-[4px] shadow-lg border border-brand-blue hover:border-brand-gold"
              >
                Забронировать стол
              </Link>
              <button 
                onClick={handleBuildRoute}
                className="border border-brand-sand text-brand-blue hover:bg-brand-sand/10 px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 rounded-[4px]"
              >
                Построить маршрут
              </button>
            </div>
          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7">
            <div className="relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-brand-sand/30 group">
              <img 
                className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 group-hover:scale-[1.02]" 
                src={mapImage} 
                alt="Карта проезда к ресторану Пирс" 
              />
              <div className="absolute inset-0 bg-brand-blue/5 pointer-events-none" />
              
              {/* Custom Bouncing Anchor pin over map */}
              <div 
                onClick={handleBuildRoute}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer"
              >
                <div className="w-14 h-14 bg-brand-blue hover:bg-brand-gold rounded-full flex items-center justify-center text-brand-cream hover:text-brand-blue shadow-2xl transition-all duration-300 animate-bounce">
                  <Anchor className="w-6 h-6" />
                </div>
                <div className="mt-4 bg-brand-cream/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-xl border border-brand-sand/30">
                  <p className="font-sans text-[10px] text-brand-blue font-bold uppercase tracking-wider">
                    Пирс
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
