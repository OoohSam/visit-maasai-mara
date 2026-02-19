import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Our safari experts will get back to you shortly.');
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-savannah-900 mb-6 font-serif">Get in Touch</h2>
        <p className="text-savannah-600 mb-8 leading-relaxed">
          Planning your dream safari? Our team of experts is here to help you craft the perfect
          Maasai Mara experience. From luxury lodges to budget-friendly camps, we have the local
          knowledge to make your trip unforgettable.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sunset-100 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-sunset-600" />
            </div>
            <div>
              <h4 className="font-bold text-savannah-900">Phone</h4>
              <p className="text-savannah-600">+254 700 000 000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sunset-100 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-sunset-600" />
            </div>
            <div>
              <h4 className="font-bold text-savannah-900">Email</h4>
              <p className="text-savannah-600">safari@visitmaasaimara.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-sunset-100 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-sunset-600" />
            </div>
            <div>
              <h4 className="font-bold text-savannah-900">Office</h4>
              <p className="text-savannah-600">Narok Town, Maasai Mara Gateway, Kenya</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-3xl shadow-xl border border-savannah-100"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-savannah-700">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-savannah-50 border border-savannah-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-savannah-700">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 bg-savannah-50 border border-savannah-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-savannah-700">Subject</label>
            <select className="w-full px-4 py-3 bg-savannah-50 border border-savannah-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 transition-all">
              <option>General Inquiry</option>
              <option>Booking Request</option>
              <option>Custom Safari Package</option>
              <option>Partnership</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-savannah-700">Message</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 bg-savannah-50 border border-savannah-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sunset-500 transition-all resize-none"
              placeholder="Tell us about your travel plans..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-sunset-600 text-white rounded-xl font-bold hover:bg-sunset-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-sunset-500/20 active:scale-[0.98]"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};
