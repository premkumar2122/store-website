'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Apple, 
  Carrot, 
  Milk, 
  Wheat, 
  Coffee,
  Fish,
  Cookie,
  Flower2,
  ShoppingCart,
  Star
} from 'lucide-react';

const categories = [
  {
    id: 'fruits',
    name: 'Fresh Fruits',
    icon: Apple,
    color: 'bg-red-500',
    gradient: 'from-red-400 via-pink-400 to-orange-400',
    items: ['Apples ₹120/kg', 'Bananas ₹60/kg', 'Oranges ₹80/kg', 'Berries ₹200/kg'],
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🍎'
  },
  {
    id: 'vegetables',
    name: 'Vegetables',
    icon: Carrot,
    color: 'bg-green-500',
    gradient: 'from-green-400 via-emerald-400 to-teal-400',
    items: ['Carrots ₹40/kg', 'Broccoli ₹80/kg', 'Spinach ₹30/kg', 'Tomatoes ₹50/kg'],
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🥕'
  },
  {
    id: 'dairy',
    name: 'Dairy Products',
    icon: Milk,
    color: 'bg-blue-500',
    gradient: 'from-blue-400 via-cyan-400 to-sky-400',
    items: ['Milk ₹60/L', 'Cheese ₹300/kg', 'Yogurt ₹80/cup', 'Butter ₹250/kg'],
    image: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🥛'
  },
  {
    id: 'grains',
    name: 'Grains & Bread',
    icon: Wheat,
    color: 'bg-yellow-500',
    gradient: 'from-yellow-400 via-amber-400 to-orange-400',
    items: ['Bread ₹40/loaf', 'Rice ₹80/kg', 'Pasta ₹120/kg', 'Cereals ₹200/box'],
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🌾'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: Coffee,
    color: 'bg-purple-500',
    gradient: 'from-purple-400 via-violet-400 to-pink-400',
    items: ['Coffee ₹300/kg', 'Tea ₹150/kg', 'Juices ₹80/L', 'Water ₹20/L'],
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '☕'
  },
  {
    id: 'meat',
    name: 'Meat & Seafood',
    icon: Fish,
    color: 'bg-red-600',
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    items: ['Chicken ₹200/kg', 'Mutton ₹600/kg', 'Fish ₹300/kg', 'Prawns ₹500/kg'],
    image: 'https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🐟'
  },
  {
    id: 'snacks',
    name: 'Snacks',
    icon: Cookie,
    color: 'bg-orange-500',
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    items: ['Chips ₹50/pack', 'Cookies ₹80/pack', 'Nuts ₹400/kg', 'Crackers ₹60/pack'],
    image: 'https://images.pexels.com/photos/1998638/pexels-photo-1998638.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🍪'
  },
  {
    id: 'home',
    name: 'Home & Garden',
    icon: Flower2,
    color: 'bg-green-600',
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    items: ['Cleaning ₹150/item', 'Garden ₹200/item', 'Tools ₹300/item', 'Decor ₹500/item'],
    image: 'https://images.pexels.com/photos/1445417/pexels-photo-1445417.jpeg?auto=compress&cs=tinysrgb&w=400',
    emoji: '🌸'
  }
];

export function CategoryExplorer() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="explore" className="py-20 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg px-8 py-3">
            Shop by Category 🛒
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Explore Our Fresh Selection
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover quality groceries organized by category. Hover over each card to see what's available!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group perspective-1000 h-72"
              onMouseEnter={() => {
                setFlippedCard(category.id);
                setHoveredCard(category.id);
              }}
              onMouseLeave={() => {
                setFlippedCard(null);
                setHoveredCard(null);
              }}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === category.id ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <Card className="absolute inset-0 backface-hidden overflow-hidden cursor-pointer group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                  <CardContent className="p-0 h-full relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90`}></div>
                    <img 
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                      <div className="text-4xl mb-3">{category.emoji}</div>
                      <category.icon className="h-12 w-12 mb-4 drop-shadow-lg animate-bounce" />
                      <h3 className="text-xl font-bold drop-shadow-lg">{category.name}</h3>
                      <div className="mt-4 flex items-center space-x-1 bg-white/20 rounded-full px-3 py-1">
                        <Star className="h-4 w-4 fill-yellow-300 text-yellow-300" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back of card */}
                <Card className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-2xl">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <category.icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')}`} />
                        <span className="text-2xl">{category.emoji}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category.name}</h3>
                      <ul className="space-y-3">
                        {category.items.map((item) => (
                          <li key={item} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-3"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className={`w-full mt-4 bg-gradient-to-r ${category.gradient} text-white border-0 hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Shop Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Shopping Tips */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">💡 Shopping Tip</h3>
              <p className="text-lg text-purple-100">
                {hoveredCard ? `${categories.find(c => c.id === hoveredCard)?.name} are freshest in the morning! Visit us early for the best selection.` 
                : 'Hover over categories to see our fresh daily prices and get shopping tips!'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}