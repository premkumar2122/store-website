'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Users, Calendar } from 'lucide-react';

const ownerStories = [
  {
    id: 'sivaiah',
    name: 'B Sivaiah',
    role: 'Founder',
    image: '/owner1.jpg',
    shortBio: 'Passionate about bringing the freshest produce to our community',
    fullStory: `Sivaiah grew up on his grandmother's farm in rural Iowa, where he learned the value of fresh, quality produce. After moving to the city for college, he noticed how difficult it was to find truly fresh, locally-sourced groceries. 

In 1985, he and his family decided to open FreshMart with a simple mission: bring farm-fresh quality to the neighborhood. Sivaiah personally visits local farms every week, building relationships with growers and ensuring every piece of produce meets his high standards.

"I taste-test everything before it goes on our shelves," Sivaiah says with a smile. "If I wouldn't serve it to my own family, we don't sell it to yours."`,
    achievements: ['35+ Local Farm Partnerships', 'Certified Organic Specialist', 'Community Choice Award 2023'],
    funFact: 'Sivaiah can identify over 200 varieties of apples by taste alone!'
  },
  {
    id: 'premkumar',
    name: 'B Premkumar',
    role: 'CEO',
    image: '/owner2.jpg',
    shortBio: 'Dedicated to serving our community with a personal touch',
    fullStory: `Premkumar brings the heart of hospitality to FreshMart. A software developer, he understands the importance of building genuine relationships with each customer. His warm smile and encyclopedic knowledge of every product in the store have made him a neighborhood favorite.

Premkumar handles all the behind-the-scenes work that keeps FreshMart running smoothly - from inventory management to community outreach. He organizes our annual charity drives, sponsors local sports teams, and makes sure every customer feels like family.

"We're not just selling groceries," Premkumar explains. "We're providing a service that brings people together. I know customers' names, their kids' birthdays, and exactly which brand of coffee they prefer."`,
    achievements: ['$50k+ Raised for Local Charities', 'Small Business Leader Award', '1,200+ Regular Customers'],
    funFact: 'Premkumar remembers the shopping preferences of over 500 regular customers!'
  }
];

export function OwnersStory() {
  const [expandedStory, setExpandedStory] = useState<string | null>(null);

  return (
    <section id="story" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Meet the Family
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Heart Behind FreshMart
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know the passionate people who make FreshMart more than just a grocery store
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {ownerStories.map((owner) => (
            <Card 
              key={owner.id} 
              className={`overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                expandedStory === owner.id ? 'transform scale-102 ring-2 ring-blue-200 dark:ring-blue-800' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={owner.image}
                    alt={owner.name}
                    className="w-40 h-56 mx-auto object-cover object-center rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{owner.name}</h3>
                    <p className="text-blue-200">{owner.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {owner.shortBio}
                  </p>

                  {expandedStory === owner.id && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="prose prose-gray dark:prose-invert max-w-none">
                        {owner.fullStory.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award className="h-5 w-5 mr-2 text-yellow-500" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {owner.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-300 flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2 flex items-center">
                          <Heart className="h-5 w-5 mr-2 text-red-500" />
                          Fun Fact
                        </h4>
                        <p className="text-blue-800 dark:text-blue-300 italic">{owner.funFact}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    variant={expandedStory === owner.id ? "outline" : "default"}
                    onClick={() => setExpandedStory(expandedStory === owner.id ? null : owner.id)}
                    className="w-full mt-4 transition-all duration-200"
                  >
                    {expandedStory === owner.id ? 'Show Less' : 'Read Full Story'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact Stats */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Our Community Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <Users className="h-8 w-8 mx-auto text-blue-500" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">1,200+</p>
              <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <Calendar className="h-8 w-8 mx-auto text-green-500" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">39</p>
              <p className="text-gray-600 dark:text-gray-300">Years of Service</p>
            </div>
            <div className="space-y-2">
              <Heart className="h-8 w-8 mx-auto text-red-500" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">$50k+</p>
              <p className="text-gray-600 dark:text-gray-300">Charity Donations</p>
            </div>
            <div className="space-y-2">
              <Award className="h-8 w-8 mx-auto text-yellow-500" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">35+</p>
              <p className="text-gray-600 dark:text-gray-300">Local Partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}