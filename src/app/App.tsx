import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Hammer,
  Home,
  PaintBucket,
  Fence,
  Ruler,
  CheckCircle2,
  Clock,
  Euro,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight
} from 'lucide-react';
import NordixLogo from './components/NordixLogo';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Tak for din henvendelse! Vi kontakter dig snarest.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const services = [
    {
      icon: <Home className="size-8" />,
      title: 'Gulvlægning',
      description: 'Professionel montering af parket, laminat, vinyl og alle typer gulve. Vi sikrer et perfekt resultat.'
    },
    {
      icon: <Ruler className="size-8" />,
      title: 'Fodlister & Finish',
      description: 'Præcis montering af fodlister og finpudsning af detaljer for et harmonisk udtryk.'
    },
    {
      icon: <PaintBucket className="size-8" />,
      title: 'Vinduesmontering',
      description: 'Faglig installation af vinduer og døre med fokus på energieffektivitet og æstetik.'
    },
    {
      icon: <Hammer className="size-8" />,
      title: 'Renovering',
      description: 'Totalrenovering og reetablering af boliger, fra små projekter til større ombygninger.'
    },
    {
      icon: <Fence className="size-8" />,
      title: 'Udendørs Arbejde',
      description: 'Opsætning af hegn, terrasser og alle former for udendørs tømrerarbejde.'
    },
    {
      icon: <Award className="size-8" />,
      title: 'Specialløsninger',
      description: 'Skræddersyede loft- og væginstallationer samt specialdesignede tømrerløsninger.'
    }
  ];

  const gallery = [
    {
      image: 'https://images.unsplash.com/photo-1624574470112-46944be68409?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Parketgulv Installation'
    },
    {
      image: 'https://images.unsplash.com/photo-1772797583328-f83bc3f94f80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Moderne Interiør'
    },
    {
      image: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Komplet Renovering'
    },
    {
      image: 'https://images.unsplash.com/photo-1630184604932-665d42cfcc69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Skandinavisk Design'
    },
    {
      image: 'https://images.unsplash.com/photo-1560184897-1ee3713708ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Lyse Trægulve'
    },
    {
      image: 'https://images.unsplash.com/photo-1774438663714-7f9150fb36a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      title: 'Moderne Belysning'
    }
  ];

  const whyChooseUs = [
    { icon: <Clock className="size-6" />, title: 'Hurtig Service', description: 'Vi kommer hurtigt ud og leverer til tiden' },
    { icon: <Euro className="size-6" />, title: 'Fair Priser', description: 'Konkurrencedygtige priser uden skjulte omkostninger' },
    { icon: <Award className="size-6" />, title: 'Høj Kvalitet', description: 'Vi bruger kun de bedste materialer og teknikker' },
    { icon: <Users className="size-6" />, title: 'Erfarne Håndværkere', description: 'Dygtige fagfolk med mange års erfaring' },
    { icon: <CheckCircle2 className="size-6" />, title: 'Pålidelig Kommunikation', description: 'Altid tilgængelige og løbende opdateringer' }
  ];

  const reviews = [
    {
      name: 'Marie Andersen',
      location: 'København',
      rating: 5,
      text: 'Fantastisk arbejde med vores nye gulv! Professionelle, punktlige og resultatet er over al forventning. Kan varmt anbefales.'
    },
    {
      name: 'Henrik Nielsen',
      location: 'Aarhus',
      rating: 5,
      text: 'Renoverede hele vores stue og køkken. Rigtig godt håndværk og god kommunikation hele vejen igennem. Super tilfreds!'
    },
    {
      name: 'Sofie Larsen',
      location: 'Odense',
      rating: 5,
      text: 'Fik sat nye vinduer i. Gjorde det flot, hurtigt og til en god pris. Vil helt klart bruge dem igen til fremtidige projekter.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <NordixLogo size="small" className="transition-all duration-300" />
          <div className="flex gap-4">
            <button className={`px-6 py-2 rounded-lg transition-all hidden sm:block ${
              isScrolled
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}>
              Få et tilbud
            </button>
            <a href="tel:+4512345678" className={`px-6 py-2 rounded-lg transition-all ${
              isScrolled
                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                : 'bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30'
            }`}>
              Ring nu
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#EDE8E3]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EDE8E3] via-[#F0EBE6] to-[#E8E3DE]"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl"></div>

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <NordixLogo className="px-6" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-600 text-sm flex flex-col items-center gap-2"
          >
            <span>Scroll ned</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Vores Ydelser</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi tilbyder professionelle håndværkertjenester til både private og erhverv
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="size-16 bg-gray-900 text-white rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">Erfaring og Kvalitet Siden Dag Ét</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vi er et dansk håndværkerfirma med passion for kvalitet og præcision. Med mange års erfaring i branchen tilbyder vi alt fra gulvlægning til komplette renoveringer.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Hos os får du altid en personlig og professionel service. Vi bruger kun kvalitetsmaterialer, holder deadlines, og sikrer at du er tilfreds med resultatet. Din bolig fortjener det bedste - og det leverer vi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl mb-2">15+</div>
                  <div className="text-gray-600">Års erfaring</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="text-4xl mb-2">500+</div>
                  <div className="text-gray-600">Glade kunder</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Professional craftsman at work"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Vores Projekter</h2>
            <p className="text-xl text-gray-600">
              Se eksempler på vores arbejde og lad dig inspirere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Hvorfor Vælge Os?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi sætter en ære i at levere den bedste service og kvalitet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="size-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Hvad Siger Vores Kunder?</h2>
            <p className="text-xl text-gray-300">
              Læs anmeldelser fra tilfredse kunder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div>
                  <div className="text-lg">{review.name}</div>
                  <div className="text-gray-400 text-sm">{review.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Kontakt Os</h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                Har du brug for et tilbud eller har du spørgsmål? Udfyld formularen, så kontakter vi dig hurtigst muligt.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <div className="text-lg mb-1">Ring til os</div>
                    <a href="tel:+4512345678" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +45 12 34 56 78
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <div className="text-lg mb-1">Send en mail</div>
                    <a href="mailto:kontakt@haandvaerk.dk" className="text-gray-600 hover:text-gray-900 transition-colors">
                      kontakt@haandvaerk.dk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <div className="text-lg mb-1">Besøg os</div>
                    <div className="text-gray-600">
                      Hovedgaden 123<br />
                      2000 Frederiksberg<br />
                      Danmark
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Fulde navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all"
                      placeholder="Dit navn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all"
                      placeholder="din@email.dk"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all"
                      placeholder="+45 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                      Hvilken service er du interesseret i?
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all"
                    >
                      <option value="">Vælg en service</option>
                      <option value="gulvlaegning">Gulvlægning</option>
                      <option value="vinduesmontering">Vinduesmontering</option>
                      <option value="renovering">Renovering</option>
                      <option value="hegn">Hegn og udendørs</option>
                      <option value="toemmererarbejde">Tømrerarbejde</option>
                      <option value="andet">Andet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                      Besked
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 outline-none transition-all resize-none"
                      placeholder="Fortæl os om dit projekt..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                  >
                    Send besked
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-4 brightness-0 invert">
                <NordixLogo size="small" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professionel gulvlægning, renovering og tømrerarbejde i hele Danmark.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-4">Ydelser</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Gulvlægning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vinduesmontering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovering</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Udendørs arbejde</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-4">Information</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Om os</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projekter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anmeldelser</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hovedgaden 123</li>
                <li>2000 Frederiksberg</li>
                <li>Danmark</li>
                <li className="pt-2">
                  <a href="tel:+4512345678" className="hover:text-white transition-colors">
                    +45 12 34 56 78
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Nordix Byg. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
