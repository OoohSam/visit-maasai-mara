import React from 'react';
import { Compass, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-savannah-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-8 h-8 text-sunset-500" />
              <span className="text-2xl font-bold font-serif">Visit Maasai Mara</span>
            </div>
            <p className="text-savannah-300 max-w-md leading-relaxed">
              Your ultimate guide to the world's most spectacular wildlife destination. We provide 
              curated experiences and the best accommodation options for your African safari.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sunset-400">Quick Links</h4>
            <ul className="space-y-4 text-savannah-300">
              <li><a href="#" className="hover:text-white transition-colors">Safari Packages</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wildlife Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conservation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sunset-400">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-savannah-900 rounded-full flex items-center justify-center hover:bg-sunset-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-savannah-900 rounded-full flex items-center justify-center hover:bg-sunset-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-savannah-900 rounded-full flex items-center justify-center hover:bg-sunset-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-savannah-900 rounded-full flex items-center justify-center hover:bg-sunset-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-savannah-900 flex flex-col md:row justify-between items-center gap-6 text-savannah-400 text-sm">
          <p>© 2026 Visit Maasai Mara. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
