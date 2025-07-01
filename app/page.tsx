'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Mic, 
  MicOff, 
  Star, 
  Heart, 
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Download,
  Bell,
  Users,
  MapPin,
  Clock,
  Phone,
  Sparkles
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { VoiceSearch } from '@/components/VoiceSearch';
import { CategoryExplorer } from '@/components/CategoryExplorer';
import { TodaysPicks } from '@/components/TodaysPicks';
import { OwnersStory } from '@/components/OwnersStory';
import { CommunityBoard } from '@/components/CommunityBoard';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { PWAInstallPrompt } from '@/components/PWAInstallPrompt';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 via-blue-50 to-green-100 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900 transition-all duration-500">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-float opacity-20"></div>
        <div className="absolute top-1/3 right-20 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-float-delayed opacity-20"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-float-slow opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-float opacity-15"></div>
        <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-float-delayed opacity-20"></div>
      </div>

      <Navigation />
      
      {/* Enhanced Header with Prominent Shop Name */}
      <header className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        <div className="flex justify-between items-start">
          <div className="flex-1"></div>
          <div className="text-center">
            {/* Main Shop Name - Much More Prominent */}
            <div className="relative mb-6">
              <h1 className="text-6xl md:text-8xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient leading-tight">
                SHIVA FANCY
              </h1>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mt-2">
                Groceries
              </h2>
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-bounce">
                <Sparkles className="h-8 w-8" />
              </div>
              <div className="absolute -bottom-2 -left-2 text-pink-400 animate-pulse">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium mb-6">Your Neighborhood's Fresh Choice</p>
            {/* Contact Us Button */}
            <div className="mb-8">
              <a href="#contact" className="inline-block">
                <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-bold transition-all duration-200">
                  Contact Us
                </Button>
              </a>
            </div>
            {/* Owners Section - Right Below Shop Name */}
            <div className="flex justify-center items-center space-x-16 mb-8">
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src="/owner1.jpg"
                    alt="Owner"
                    className="w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-pink-400 to-purple-400 shadow-2xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Owner</h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">Owner</p>
              </div>
              <div className="text-6xl text-pink-500 animate-bounce">❤️</div>
              <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src="/owner2.jpg"
                    alt="Owner"
                    className="w-48 h-48 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-green-400 shadow-2xl group-hover:shadow-2xl transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">Owner</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">Owner</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg px-6 py-2 animate-pulse">
              Family Owned Since 1985 ✨
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Welcome to Your 
              <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Neighborhood Market
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Meet the Bellamkonda Family! We're proud to serve our community with the freshest produce, 
              quality groceries, and that personal touch you won't find in big box stores.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
              <ShoppingCart className="mr-3 h-6 w-6" />
              Explore Our Store
            </Button>
            <VoiceSearch />
          </div>

          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-pink-500 to-red-500 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">1,200+</p>
                <p className="text-pink-100">Happy Customers</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">4.9★</p>
                <p className="text-blue-100">Customer Rating</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500 to-emerald-500 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">39</p>
                <p className="text-green-100">Years of Service</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Bell className="h-8 w-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">Daily</p>
                <p className="text-purple-100">Fresh Deliveries</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <CategoryExplorer />

      {/* Today's Picks */}
      <TodaysPicks />

      {/* Community Board */}
      <CommunityBoard />

      {/* Owner's Story */}
      <OwnersStory />

      {/* Enhanced Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-purple-700 via-blue-700 to-green-700 text-white py-24 rounded-t-3xl shadow-2xl mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Visit Us Today!</h2>
          <p className="text-2xl text-purple-100 mb-12 font-medium">Experience the SHIVA FANCY difference in person</p>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <Card className="bg-white/20 backdrop-blur-lg border-white/30 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <CardContent className="p-10 text-center">
                <MapPin className="h-14 w-14 mb-4 mx-auto text-pink-200" />
                <h3 className="text-2xl font-semibold mb-2">Address</h3>
                <p className="text-purple-100 text-lg">vaddepalem, juvvaladinne,<br />nellore, 524152</p>
              </CardContent>
            </Card>
            <Card className="bg-white/20 backdrop-blur-lg border-white/30 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <CardContent className="p-10 text-center">
                <Clock className="h-14 w-14 mb-4 mx-auto text-green-200" />
                <h3 className="text-2xl font-semibold mb-2">Hours</h3>
                <p className="text-purple-100 text-lg">Everyday: 6:30 AM - 9:00 PM</p>
              </CardContent>
            </Card>
            <Card className="bg-white/20 backdrop-blur-lg border-white/30 text-white transform hover:scale-105 transition-all duration-300 shadow-xl">
              <CardContent className="p-10 text-center">
                <Phone className="h-14 w-14 mb-4 mx-auto text-blue-200" />
                <h3 className="text-2xl font-semibold mb-2">Contact</h3>
                <p className="text-purple-100 text-lg">8106445078<br />bkpremkumar2244@gmail.com</p>
                <a href="tel:8106445078" className="inline-block mt-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-6 py-3 rounded-full shadow-md text-base font-bold transition-all duration-200">
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SHIVA FANCY
              </h3>
              <p className="text-gray-300 mt-2">Serving our community with love since 1985</p>
            </div>
          </div>
          {/* Owners at the bottom */}
          <div className="flex justify-center items-center space-x-16 mt-12">
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src="/owner1.jpg"
                  alt="Owner"
                  className="w-40 h-40 rounded-full object-cover border-4 border-gradient-to-r from-pink-400 to-purple-400 shadow-2xl group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">Owner</h3>
            </div>
            <div className="text-5xl text-pink-500 animate-bounce">❤️</div>
            <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src="/owner2.jpg"
                  alt="Owner"
                  className="w-40 h-40 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-green-400 shadow-2xl group-hover:shadow-2xl transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">Owner</h3>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SHIVA FANCY. All rights reserved. Made with ❤️ for our community</p>
        </div>
      </footer>

      {/* Floating Components */}
      <WhatsAppButton />
      <PWAInstallPrompt />
    </div>
  );
}