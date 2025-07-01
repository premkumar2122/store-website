type SpeechRecognition = any;
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff, Search, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
export function VoiceSearch() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onstart = () => {
        setIsListening(true);
      };

      recognitionInstance.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
        };

      recognitionInstance.onend = () => {
        setIsListening(false);
        if (transcript) {
          // Simulated search functionality
          alert(`🔍 Searching for: "${transcript}" in our fresh inventory!`);
          setTranscript('');
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, [transcript]);

  const startListening = () => {
    if (recognition) {
      recognition.start();
    } else {
      alert('🎤 Voice search is not supported in your browser. Try Chrome or Edge!');
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={isListening ? stopListening : startListening}
        className={`rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
          isListening 
            ? 'bg-gradient-to-r from-red-500 to-pink-500 border-red-300 text-white hover:from-red-600 hover:to-pink-600 animate-pulse shadow-lg' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600 shadow-lg'
        }`}
      >
        {isListening ? (
          <>
            <MicOff className="mr-3 h-6 w-6 animate-pulse" />
            Listening... 🎧
          </>
        ) : (
          <>
            <Mic className="mr-3 h-6 w-6" />
            Voice Search 🎤
            <Sparkles className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      
      {transcript && (
        <Badge className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-blue-500 text-white animate-fade-in px-4 py-2 text-sm">
          "🗣️ {transcript}"
        </Badge>
      )}
      
      {isListening && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      )}
    </div>
  );
}
