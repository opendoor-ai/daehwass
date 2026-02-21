import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Settings, Info, ClipboardList, Home, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', path: '/', icon: <Home size={18} /> },
    { name: '보유장비', path: '/inventory', icon: <ClipboardList size={18} /> },
    { name: '서비스안내', path: '/service', icon: <Settings size={18} /> },
    { name: '회사소개', path: '/about', icon: <Info size={18} /> },
    { name: '견적문의', path: '/contact', icon: <MessageSquare size={18} /> },
  ];

  const isHome = location.pathname === '/';
  const shouldShowSolid = scrolled || !isHome;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${shouldShowSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Settings className="text-white" size={24} />
            </div>
            <span className={`text-2xl font-black tracking-tighter ${shouldShowSolid ? 'text-primary' : 'text-white'}`}>
              대화상사
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'text-accent'
                    : shouldShowSolid ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:010-6355-8055" className="btn-accent flex items-center space-x-2">
              <Phone size={18} />
              <span>전화상담</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${shouldShowSolid ? 'text-primary' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-lg font-bold ${
                    location.pathname === link.path ? 'text-accent bg-orange-50' : 'text-primary hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {link.icon}
                    <span>{link.name}</span>
                  </div>
                </Link>
              ))}
              <div className="pt-4">
                <a href="tel:010-6355-8055" className="btn-accent w-full flex justify-center items-center space-x-2">
                  <Phone size={20} />
                  <span>지금 바로 전화상담</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
