import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Map, Users, ShieldCheck } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HotelCard } from './components/HotelCard';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { HOTELS } from './constants';

export default function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=1920"
                  alt="Maasai Mara Savannah Sunset"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-savannah-950/70 via-savannah-950/30 to-savannah-50"></div>
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-sunset-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
                    Experience the Great Migration
                  </span>
                  <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 font-serif leading-tight">
                    The Heart of <br />
                    <span className="text-sunset-400">African Safari</span>
                  </h1>
                  <p className="text-lg md:text-xl text-savannah-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Discover the untamed beauty of the Maasai Mara. From breathtaking landscapes to 
                    majestic wildlife, your adventure of a lifetime starts here.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <button 
                      onClick={() => setActiveSection('hotels')}
                      className="px-8 py-4 bg-sunset-600 text-white rounded-2xl font-bold text-lg hover:bg-sunset-700 transition-all shadow-xl shadow-sunset-600/30 flex items-center gap-2 group"
                    >
                      Explore Lodges
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2">
                      <Play className="w-5 h-5 fill-white" />
                      Watch Video
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Stats/Features */}
            <section className="py-24 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-savannah-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Map className="w-8 h-8 text-savannah-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">1,510 km²</h3>
                    <p className="text-savannah-600">Of pristine wilderness waiting to be explored in the reserve.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-savannah-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-savannah-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Maasai Culture</h3>
                    <p className="text-savannah-600">Authentic encounters with the legendary guardians of the Mara.</p>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-savannah-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-8 h-8 text-savannah-900" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Safe & Secure</h3>
                    <p className="text-savannah-600">Professional guides and world-class hospitality for your peace of mind.</p>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Featured Hotels Preview */}
            <section className="py-24 px-6 bg-savannah-100/50">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                  <div>
                    <h2 className="text-4xl font-bold text-savannah-900 font-serif mb-4">Luxury Stays</h2>
                    <p className="text-savannah-600 max-w-xl">
                      Hand-picked lodges and camps that offer the perfect blend of comfort and wilderness.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveSection('hotels')}
                    className="text-sunset-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View All Hotels <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {HOTELS.slice(0, 3).map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'hotels':
        return (
          <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-savannah-900 font-serif mb-6">Our Accommodations</h2>
                <p className="text-savannah-600 max-w-2xl mx-auto">
                  From ultra-luxury lodges to authentic eco-camps, find the perfect base for your 
                  Maasai Mara adventure.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {HOTELS.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            </div>
          </section>
        );

      case 'about':
        return (
          <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-bold text-savannah-900 font-serif mb-8">Preserving the Mara</h2>
                  <p className="text-savannah-600 mb-6 leading-relaxed">
                    Visit Maasai Mara is more than just a travel guide. We are dedicated to promoting 
                    sustainable tourism that benefits both the wildlife and the local communities. 
                    The Maasai Mara is one of the most important wildlife conservation and wilderness 
                    areas in Africa, world-renowned for its exceptional populations of lion, African 
                    leopard, cheetah and African bush elephant.
                  </p>
                  <p className="text-savannah-600 mb-8 leading-relaxed">
                    It also hosts the Great Migration, which secured it as one of the Seven Natural 
                    Wonders of Africa, and as one of the ten Wonders of the World.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-3xl font-bold text-sunset-600 mb-2">10+</h4>
                      <p className="text-sm font-semibold text-savannah-700 uppercase tracking-wider">Years Experience</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-sunset-600 mb-2">50k+</h4>
                      <p className="text-sm font-semibold text-savannah-700 uppercase tracking-wider">Happy Travelers</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img
                    src="https://picsum.photos/seed/about-mara/800/1000"
                    alt="Maasai Warriors"
                    className="rounded-3xl shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-savannah-100 max-w-[240px]">
                    <p className="text-savannah-900 font-bold italic">
                      "The Mara is not just a place, it's a feeling of being truly alive."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );

      case 'contact':
        return (
          <section className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
              <ContactForm />
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global Backdrop Texture */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <img 
          src="https://picsum.photos/seed/savannah-texture/1920/1080" 
          alt="" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
