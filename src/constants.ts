export interface Hotel {
  id: string;
  name: string;
  location: string;
  price: string;
  rating: number;
  description: string;
  image: string;
  amenities: string[];
}

export const HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'Angama Mara',
    location: 'Oloololo Escarpment',
    price: '$1,250',
    rating: 5,
    description: 'Perched high above the Maasai Mara on the very site where some of Out of Africa’s most memorable scenes were filmed.',
    image: 'https://picsum.photos/seed/angama/800/600',
    amenities: ['Infinity Pool', 'Private Deck', 'Safari Walks', 'Hot Air Ballooning'],
  },
  {
    id: '2',
    name: 'Mara Serena Safari Lodge',
    location: 'Mara Triangle',
    price: '$450',
    rating: 4.8,
    description: 'Located at the very center of the "Mara Triangle" in the world-renowned Maasai Mara National Reserve.',
    image: 'https://picsum.photos/seed/serena/800/600',
    amenities: ['Spa', 'Traditional Dances', 'Bush Dining', 'Game Drives'],
  },
  {
    id: '3',
    name: 'Keekorok Lodge',
    location: 'Southern Maasai Mara',
    price: '$320',
    rating: 4.5,
    description: 'The first property in the Maasai Mara Game Reserve, Keekorok Lodge offers traditional charm and prime wildlife viewing.',
    image: 'https://picsum.photos/seed/keekorok/800/600',
    amenities: ['Hippo Bar', 'Pool', 'Gift Shop', 'Conference Center'],
  },
  {
    id: '4',
    name: 'Governor’s Camp',
    location: 'Musiara Marsh',
    price: '$680',
    rating: 4.9,
    description: 'Tucked into the forest along the winding banks of the Mara River, its waters teeming with birdlife, hippo and crocodile.',
    image: 'https://picsum.photos/seed/governors/800/600',
    amenities: ['River Views', 'Classic Tents', 'Expert Guides', 'Bird Watching'],
  },
  {
    id: '5',
    name: 'Basecamp Masai Mara',
    location: 'Talek River',
    price: '$280',
    rating: 4.7,
    description: 'An eco-friendly camp that provides an authentic safari experience while supporting the local Maasai community.',
    image: 'https://picsum.photos/seed/basecamp/800/600',
    amenities: ['Eco-friendly', 'Maasai Guides', 'Tree Plantation', 'Solar Power'],
  },
  {
    id: '6',
    name: 'Sand River Masai Mara',
    location: 'Sand River',
    price: '$850',
    rating: 4.9,
    description: 'Located on the banks of the river from which it takes its name, Sand River Masai Mara replicates the heyday of exclusive 1920s safaris.',
    image: 'https://picsum.photos/seed/sandriver/800/600',
    amenities: ['Billiard Room', 'Private Butler', 'Vintage Decor', 'River Frontage'],
  },
];
