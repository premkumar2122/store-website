'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Zap } from 'lucide-react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  const whatsappNumber = '+1234567890'; // Replace with actual WhatsApp number
  const defaultMessage = 'Hi! 👋 I have a question about FreshMart Groceries. Can you help me?';
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Enhanced Tooltip */}
        <div className={`absolute bottom-20 right-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap transition-all duration-300 shadow-xl ${
          isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2 pointer-events-none'
        }`}>
          💬 Chat with us on WhatsApp!
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-green-600 rotate-45"></div>
        </div>

        {/* Enhanced WhatsApp Button */}
        <Button
          onClick={openWhatsApp}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>

        {/* Enhanced Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-1000"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          <Zap className="h-3 w-3" />
        </div>
      </div>
    </div>
  );
}