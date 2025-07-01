'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Zap } from 'lucide-react';

const todaysPicks = [
  {
    id: 1,
    name: 'Organic Strawberries',
    price: '₹249',
    originalPrice: '₹349',
    image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Fresh Today',
    rating: 4.8,
    description: 'Sweet, juicy organic strawberries picked this morning',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    id: 2,
    name: 'Farm Fresh Eggs',
    price: '₹175',
    originalPrice: '₹249',
    image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Local Farm',
    rating: 4.9,
    description: 'Free-range eggs from Johnson Family Farm',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    id: 3,
    name: 'Artisan Sourdough',
    price: '₹299',
    originalPrice: '₹399',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Baked Today',
    rating: 4.7,
    description: 'Handcrafted sourdough bread, still warm from the oven',
    gradient: 'from-amber-400 to-orange-600'
  },
  {
    id: 4,
    name: 'Organic Avocados',
    price: '₹149',
    originalPrice: '₹199',
    image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Perfect Ripeness',
    rating: 4.6,
    description: 'Perfectly ripe avocados, ready to eat today',
    gradient: 'from-green-400 to-emerald-500'
  },
  {
    id: 5,
    name: 'Local Honey',
    price: '₹449',
    originalPrice: '₹549',
    image: 'https://images.pexels.com/photos/33817/honey-yellow-sugar-syrup.jpg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Wildflower',
    rating: 4.9,
    description: 'Pure wildflower honey from local beekeepers',
    gradient: 'from-yellow-500 to-amber-600'
  },
  {
    id: 6,
    name: 'Fresh Mangoes',
    price: '₹199',
    originalPrice: '₹299',
    image: 'https://images.pexels.com/photos/918327/pexels-photo-918327.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Seasonal Special',
    rating: 4.8,
    description: 'Sweet Alphonso mangoes, perfectly ripe',
    gradient: 'from-orange-400 to-red-500'
  }
];

export function TodaysPicks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % todaysPicks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % todaysPicks.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + todaysPicks.length) % todaysPicks.length);
    setIsAutoPlaying(false);
  };

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % todaysPicks.length;
      items.push(todaysPicks[index]);
    }
    return items;
  };

  return (
    <section id="picks" className="py-20 bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-lg px-8 py-3 animate-pulse">
            Today's Special ⚡
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Today's Fresh Picks
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Handpicked selections with special pricing, available only today!
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 shadow-xl transform hover:scale-110 transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 shadow-xl transform hover:scale-110 transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Enhanced Carousel Items */}
          <div className="grid md:grid-cols-3 gap-8 px-20">
            {getVisibleItems().map((item, index) => (
              <Card 
                key={`${item.id}-${currentIndex}`} 
                className={`overflow-hidden transition-all duration-700 hover:shadow-2xl group cursor-pointer ${
                  index === 1 ? 'transform scale-110 ring-4 ring-purple-300 dark:ring-purple-700 shadow-2xl' : 'hover:scale-105'
                }`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg">
                      {item.badge}
                    </Badge>
                    
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 shadow-lg">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`w-10 h-10 rounded-full transition-all duration-300 ${
                          likedItems.includes(item.id)
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-white/90 text-gray-600 hover:bg-red-50 hover:text-red-500'
                        }`}
                        onClick={() => toggleLike(item.id)}
                      >
                        <Heart className={`h-5 w-5 ${likedItems.includes(item.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

                    {/* Discount Badge */}
                    <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {Math.round(((parseInt(item.originalPrice.slice(1)) - parseInt(item.price.slice(1))) / parseInt(item.originalPrice.slice(1))) * 100)}% OFF
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                        <span className="text-lg text-gray-500 line-through">{item.originalPrice}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      Add to Cart
                      <Zap className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {todaysPicks.map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-300 dark:hover:bg-purple-700 hover:scale-110'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}