import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const phoneNumber = '010-6355-8055';

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* 1. Phone Consultation - Mobile Only */}
      <a
        href={`tel:${phoneNumber}`}
        className="md:hidden flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-lg hover:bg-accent/90 transition-all active:scale-95"
        aria-label="전화 상담"
      >
        <Phone size={24} />
      </a>

      {/* 2. SMS Inquiry - Mobile Only */}
      <a
        href={`sms:${phoneNumber}`}
        className="md:hidden flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        aria-label="문자 문의"
      >
        <MessageSquare size={24} />
      </a>

      {/* 3. Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="flex items-center justify-center w-14 h-14 bg-white text-primary border border-slate-200 rounded-full shadow-lg hover:bg-slate-50 transition-all active:scale-95"
            aria-label="맨 위로 이동"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 4. Scroll to Bottom */}
      <button
        onClick={scrollToBottom}
        className="flex items-center justify-center w-14 h-14 bg-white text-primary border border-slate-200 rounded-full shadow-lg hover:bg-slate-50 transition-all active:scale-95"
        aria-label="맨 아래로 이동"
      >
        <ChevronDown size={28} />
      </button>
    </div>
  );
};

export default FloatingButtons;
