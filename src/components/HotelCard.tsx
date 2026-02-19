import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Star, Wifi, Coffee, Wind, Waves } from 'lucide-react';
import { Hotel } from '../constants';

interface HotelCardProps {
  hotel: Hotel;
}

const amenityIcons: Record<string, React.ReactNode> = {
  'Infinity Pool': <Waves className="w-4 h-4" />,
  'Pool': <Waves className="w-4 h-4" />,
  'Private Deck': <Wind className="w-4 h-4" />,
  'Safari Walks': <MapPin className="w-4 h-4" />,
  'Eco-friendly': <Wind className="w-4 h-4" />,
  'Spa': <Coffee className="w-4 h-4" />,
};

export const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-savannah-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-4 h-4 text-sunset-500 fill-sunset-500" />
          <span className="text-sm font-semibold text-savannah-900">{hotel.rating}</span>
        </div>
        <div className="absolute bottom-4 left-4 bg-sunset-600 text-white px-3 py-1 rounded-lg font-medium shadow-lg">
          {hotel.price} <span className="text-xs opacity-80">/ night</span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-savannah-500 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-xs font-medium uppercase tracking-wider">{hotel.location}</span>
        </div>
        <h3 className="text-xl font-bold text-savannah-900 mb-3 group-hover:text-sunset-600 transition-colors">
          {hotel.name}
        </h3>
        <p className="text-savannah-600 text-sm leading-relaxed mb-6 line-clamp-2">
          {hotel.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <span
              key={amenity}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-savannah-50 text-savannah-700 rounded-md text-xs font-medium"
            >
              {amenityIcons[amenity] || <Wifi className="w-3 h-3" />}
              {amenity}
            </span>
          ))}
        </div>

        <button className="w-full py-3 bg-savannah-900 text-white rounded-xl font-semibold hover:bg-savannah-800 transition-colors active:scale-[0.98]">
          View Details
        </button>
      </div>
    </motion.div>
  );
};
