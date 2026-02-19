import React from 'react';
import { motion } from 'motion/react';
import { Compass, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl px-6 py-3 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <div className="w-10 h-10 bg-sunset-600 rounded-xl flex items-center justify-center">
              <Compass className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-savannah-900 tracking-tight font-serif">
              Maasai Mara
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  activeSection === item.id ? 'text-sunset-600' : 'text-savannah-600 hover:text-savannah-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-sunset-600 rounded-full"
                  />
                )}
              </button>
            ))}
            <button 
              onClick={() => setActiveSection('hotels')}
              className="px-5 py-2.5 bg-savannah-900 text-white rounded-xl text-sm font-bold hover:bg-savannah-800 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 px-6"
        >
          <div className="glass rounded-2xl p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left text-lg font-semibold ${
                  activeSection === item.id ? 'text-sunset-600' : 'text-savannah-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setActiveSection('hotels');
                setIsOpen(false);
              }}
              className="w-full py-3 bg-savannah-900 text-white rounded-xl font-bold"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
