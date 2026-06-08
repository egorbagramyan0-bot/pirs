import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Anchor, Navigation, MessageCircle, Send, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';


export default function Contacts() {
  useSEO({
    title: 'Контакты ресторана Пирс | Адрес, телефон, режим работы',
    description: 'Контакты ресторана «Пирс» в Ростове-на-Дону: телефон +7 (928) 195-44-61, адрес Береговая улица, 16А, интерактивная карта, время работы и мессенджеры.',
    keywords: 'телефон ресторан Пирс, адрес Пирс Ростов, Береговая 16А Ростов ресторан, время работы ресторан Пирс'
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleRouteClick = () => {
    window.open('https://yandex.ru/maps/?text=Ростов-на-Дону+Береговая+улица+16А+ресторан+Пирс', '_blank');
  };

  return (
    <div className="bg-brand-cream/40 min-h-screen pb-24">
      {/* 1. Page Header Hero */}
      <section className="relative h-[300px] flex items-center justify-center bg-brand-blue -mt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-blue/70 z-10" />
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB87cqDwH_XCHvz7sPHg--ju4hffHBsk0Pz359P3Wpih_nSyWPSNLVtPIYzQl2B1X-CqKRPlCi3F0Tl3g84u9_U_xlt4ASqTPfS_D9TO5cXKjJtyquEU9zz-UTR2ldxYsaI4EIuR74wdApqB5DnrhmksI1pguLgsORmO2Y4VOs3J37kvvjNQxohXWLcljVg1CoriTvuKZwp9UzWFhRLIlmRFUJlLL6HMKdxTR2VNtcKo1TBz60I3CwR_jKK1v1JIbwpAwNLFiU" 
            alt="Входная группа и фасад премиального ресторана Пирс у реки Дон" 
          />
        </div>
        <div className="relative z-20 text-center space-y-4 max-w-2xl px-8">
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold block">
            Берег Дона
          </span>
          <h1 className="font-serif text-5xl text-brand-cream font-medium italic">
            Ждем вас в «Пирсе»
          </h1>
          <div className="w-16 h-px bg-brand-gold mx-auto" />
          <p className="font-sans text-brand-cream/80 text-sm font-light max-w-md mx-auto">
            Ждем вас в гости на берегу Дона. Удобные способы связи и подробная информация для визита.
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Route Methods */}
      <section className="py-20 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Column Left: Cards Info */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block">
                Сведения
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-blue font-semibold">
                Как с нами связаться
              </h2>
              <div className="w-12 h-px bg-brand-gold" />
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Address */}
              <div className="p-6 bg-brand-cream border border-brand-sand/20 rounded-[20px] shadow-sm space-y-4">
                <div className="w-9 h-9 rounded-full bg-brand-blue/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-blue mb-1">Адрес</h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                    Ростов-на-Дону,<br />
                    Береговая улица, 16А<br />
                    <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider block mt-1">ресторан на набережной</span>
                  </p>
                </div>
              </div>

              {/* Card 2: Phone / Book */}
              <div className="p-6 bg-brand-cream border border-brand-sand/20 rounded-[20px] shadow-sm space-y-4">
                <div className="w-9 h-9 rounded-full bg-brand-blue/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-blue mb-1">Телефон</h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                    Резерв столов и банкеты:<br />
                    <a href="tel:+79281954461" className="hover:text-brand-gold transition-colors font-medium text-brand-blue">+7 (928) 195-44-61</a>
                  </p>
                </div>
              </div>

              {/* Card 3: Clock */}
              <div className="p-6 bg-brand-cream border border-brand-sand/20 rounded-[20px] shadow-sm space-y-4">
                <div className="w-9 h-9 rounded-full bg-brand-blue/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-blue mb-1">Режим работы</h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                    Уточняйте режим работы по телефону<br />
                    <a href="tel:+79281954461" className="text-[10px] text-brand-gold font-semibold uppercase tracking-wider block mt-1 hover:underline">+7 (928) 195-44-61</a>
                  </p>
                </div>
              </div>

              {/* Card 4: Email */}
              <div className="p-6 bg-brand-cream border border-brand-sand/20 rounded-[20px] shadow-sm space-y-4">
                <div className="w-9 h-9 rounded-full bg-brand-blue/5 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold text-brand-blue mb-1">Эл. почта</h3>
                  <p className="text-xs text-brand-blue/70 leading-relaxed font-light">
                    Общие вопросы:<br />
                    <a href="mailto:info@pirs-rostov.ru" className="hover:text-brand-gold transition-colors font-medium text-brand-blue">info@pirs-rostov.ru</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Messaging Section */}
            <div className="p-8 bg-brand-blue text-brand-cream rounded-[24px] border border-white/5 space-y-6">
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-1">Моментальный ответ</span>
                <h3 className="font-serif text-xl font-medium">Напишите нам в мессенджерах</h3>
              </div>
              <p className="text-xs text-brand-cream/60 leading-relaxed font-light">
                Наши хостес оперативно ответят на любые вопросы о наличии свободных столов, бронировании или меню.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/79281954461" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://t.me/pirs_rostov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-[#0088cc] hover:bg-[#0074b3] text-white text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all"
                >
                  <Send className="w-4 h-4 fill-white text-[#0088cc] -translate-x-0.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column Right: Custom styled route instructions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="bg-brand-cream border border-brand-sand/30 rounded-[28px] p-8 md:p-10 shadow-lg space-y-8">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-brand-gold font-bold block mb-1">Маршруты</span>
                <h2 className="font-serif text-2xl md:text-3xl text-brand-blue font-semibold">Как добраться</h2>
                <div className="w-12 h-px bg-brand-gold mt-4" />
              </div>

              {/* Way options */}
              <div className="space-y-6">
                {/* 1. Yacht */}
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full border border-brand-gold/30 bg-brand-blue/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Anchor className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-brand-blue">На речном транспорте</h3>
                    <p className="text-xs text-brand-blue/70 font-light leading-relaxed mt-1">
                      Вы можете причалить к пирсу на реке Дон непосредственно у нашего ресторана и сразу пройти на летнюю террасу. Для согласования места швартовки свяжитесь с администратором заранее.
                    </p>
                  </div>
                </div>

                {/* 2. Car */}
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full border border-brand-gold/30 bg-brand-blue/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Navigation className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-brand-blue">На автомобиле</h3>
                    <p className="text-xs text-brand-blue/70 font-light leading-relaxed mt-1">
                      Удобный подъезд со стороны Береговой улицы. Для гостей ресторана «Пирс» предусмотрена парковка непосредственно у заведения.
                    </p>
                  </div>
                </div>

                {/* 3. Pedestrian */}
                <div className="flex gap-4 items-start">
                  <span className="w-10 h-10 rounded-full border border-brand-gold/30 bg-brand-blue/5 flex items-center justify-center text-brand-gold flex-shrink-0">
                    <Compass className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-brand-blue">Пешком или на такси</h3>
                    <p className="text-xs text-brand-blue/70 font-light leading-relaxed mt-1">
                      Ресторан расположен на набережной Ростова-на-Дону. При вызове такси в качестве адреса прибытия указывайте «Береговая улица, 16А».
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+79281954461"
                  className="bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[6px] shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Позвонить</span>
                </a>
                <Link 
                  to="/booking"
                  className="bg-brand-gold hover:bg-brand-cream text-brand-blue font-bold px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 rounded-[6px] shadow-md hover:shadow-lg text-center flex items-center justify-center"
                >
                  Забронировать стол
                </Link>
                <button
                  onClick={handleRouteClick}
                  className="border border-brand-sand text-brand-blue hover:bg-brand-sand/10 px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-[6px] flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Построить маршрут</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stylized Map Component */}
      <section className="max-w-[1280px] mx-auto px-8 pb-12">
        <div className="bg-brand-blue rounded-[32px] overflow-hidden border border-brand-sand/30 shadow-2xl relative h-[480px]">
          {/* Custom desaturated & high-contrast map style using absolute iframe overlay or direct embed */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none md:pointer-events-auto filter grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?text=Ростов-на-Дону+Береговая+улица+16А+ресторан+Пирс&z=16" 
              className="w-full h-full border-0"
              allowFullScreen={true}
              title="Интерактивная карта ресторана Пирс"
            ></iframe>
          </div>

          {/* Floating custom glassmorphic address marker details */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 bg-brand-blue/90 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-brand-cream space-y-4 text-left z-10">
            <div className="flex items-center gap-2">
              <Anchor className="w-5 h-5 text-brand-gold" />
              <span className="font-serif text-lg font-semibold">Ресторан «Пирс»</span>
            </div>
            <p className="text-xs text-brand-cream/70 font-light leading-relaxed">
              Ростов-на-Дону, Береговая улица, 16А. Ресторан на набережной Ростова-на-Дону с прекрасным панорамным видом на Дон.
            </p>
            <ul className="text-[11px] text-brand-cream/60 font-light leading-relaxed space-y-1 pt-1 border-t border-white/5">
              <li>• Расположение на набережной</li>
              <li>• Вид на Дон и летняя веранда</li>
              <li>• Собственная парковка и Wi-Fi</li>
              <li>• Dog-friendly (маленькие собаки до 35 см)</li>
            </ul>
            <div className="flex justify-between items-center pt-2 border-t border-white/5">
              <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider">Координаты: 47.2185, 39.7233</span>
              <button 
                onClick={handleRouteClick}
                className="text-[10px] uppercase font-bold text-brand-cream hover:text-brand-gold flex items-center gap-1.5 transition-colors duration-300"
              >
                <span>Маршрут</span>
                <Navigation className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feedback Quick Form */}
      <section className="max-w-[800px] mx-auto px-8 pt-12">
        <div className="bg-brand-cream/80 backdrop-blur-md border border-brand-sand/30 rounded-[28px] p-8 md:p-10 text-center space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-brand-blue font-semibold">Остались вопросы?</h2>
            <p className="text-xs text-brand-blue/70 font-light max-w-md mx-auto">
              Заполните форму обратной связи, и менеджер ответит вам на указанную почту в течение нескольких часов.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-b border-brand-sand/40 pb-2">
                  <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Ваше имя</label>
                  <input 
                    type="text" 
                    placeholder="Алексей"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                    required
                  />
                </div>
                <div className="border-b border-brand-sand/40 pb-2">
                  <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Электронная почта</label>
                  <input 
                    type="email" 
                    placeholder="alexey@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                    required
                  />
                </div>
              </div>
              <div className="border-b border-brand-sand/40 pb-2">
                <label className="block text-[9px] uppercase tracking-wider text-brand-blue/60 font-semibold mb-1">Сообщение</label>
                <input 
                  type="text" 
                  placeholder="Задать вопрос по поводу аренды зала, бронированию столов или меню..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-transparent border-0 p-0 text-sm font-semibold text-brand-blue focus:ring-0 w-full placeholder-brand-blue/30"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-brand-gold text-brand-cream hover:text-brand-blue py-3.5 text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-300 rounded-[4px] shadow-md"
              >
                Отправить сообщение
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-semibold text-brand-blue">Сообщение успешно отправлено</h4>
                <p className="text-xs text-brand-blue/60 font-light mt-1 max-w-sm mx-auto">
                  Спасибо, {formData.name}! Мы изучим ваш запрос и ответим на адрес {formData.email} в ближайшее время.
                </p>
              </div>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                className="text-[10px] uppercase tracking-wider font-bold text-brand-blue hover:text-brand-gold transition-colors mt-2"
              >
                Отправить новое сообщение
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
