'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Calendar, 
  Gift, 
  Users, 
  Megaphone,
  Heart,
  Star,
  Clock
} from 'lucide-react';

const notices = [
  {
    id: 1,
    type: 'special',
    icon: Gift,
    title: 'Thanksgiving Week Special',
    message: 'Free-range turkeys now available for pre-order! Plus 20% off all baking supplies through Nov 25th.',
    date: '2025-01-15',
    badge: 'Limited Time',
    priority: 'high'
  },
  {
    id: 2,
    type: 'event',
    icon: Users,
    title: 'Community Recipe Exchange',
    message: 'Join us Saturday 2PM for our monthly recipe sharing! This month\'s theme: Comfort Foods.',
    date: '2025-01-20',
    badge: 'This Saturday',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'announcement',
    icon: Clock,
    title: 'Extended Holiday Hours',
    message: 'We\'ll be open until 10PM Dec 20-23 for your last-minute shopping convenience!',
    date: '2025-01-18',
    badge: 'Holiday Hours',
    priority: 'low'
  },
  {
    id: 4,
    type: 'charity',
    icon: Heart,
    title: 'Food Drive Success!',
    message: 'Thanks to YOUR generosity, we collected 500+ items for the local food bank. You\'re amazing!',
    date: '2025-01-12',
    badge: 'Thank You',
    priority: 'medium'
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'border-l-red-500 bg-red-50 dark:bg-red-900/10';
    case 'medium': return 'border-l-orange-500 bg-orange-50 dark:bg-orange-900/10';
    case 'low': return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/10';
    default: return 'border-l-gray-500 bg-gray-50 dark:bg-gray-900/10';
  }
};

const getBadgeColor = (type: string) => {
  switch (type) {
    case 'special': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'event': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'announcement': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'charity': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

export function CommunityBoard() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            Community Updates
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Community Notice Board
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay connected with the latest news, events, and special offers from your neighborhood FreshMart
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {notices.map((notice) => (
            <Card 
              key={notice.id} 
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg border-l-4 ${getPriorityColor(notice.priority)}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
                      <notice.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {notice.title}
                      </h3>
                      <Badge className={getBadgeColor(notice.type)}>
                        {notice.badge}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                      {notice.message}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(notice.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      
                      {notice.type === 'special' && (
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                          <Star className="h-4 w-4 mr-1" />
                          Learn More
                        </Button>
                      )}
                      
                      {notice.type === 'event' && (
                        <Button size="sm" variant="outline">
                          <Users className="h-4 w-4 mr-1" />
                          RSVP
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <CardContent className="p-8 text-center">
            <Bell className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Stay in the Loop!</h3>
            <p className="text-purple-100 mb-6">
              Get the latest updates, special offers, and community news delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 bg-white/90 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6">
                <Megaphone className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}