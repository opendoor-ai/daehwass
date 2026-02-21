import React from 'react';
import { Phone, Mail, MapPin, Settings, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-white p-1.5 rounded-lg">
                <Settings className="text-primary" size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter">대화상사</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              30년 전통의 중고 기계 매매 전문 기업.<br />
              고객의 성공이 곧 우리의 성공입니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">바로가기</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/inventory" className="hover:text-white transition-colors">보유장비 목록</Link></li>
              <li><Link to="/service" className="hover:text-white transition-colors">정비/검수 시스템</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">견적문의</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">고객지원</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span>010-6355-8055</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span>contact@daehwa.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span>경기도 시흥시 시화벤처로 123<br />대화상사 빌딩 1층</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">상담 가능 시간</h4>
            <div className="bg-slate-800 p-4 rounded-xl">
              <p className="text-sm text-slate-300 mb-2">평일: 09:00 - 18:00</p>
              <p className="text-sm text-slate-300 mb-2">토요일: 09:00 - 13:00</p>
              <p className="text-sm text-slate-300">일요일 및 공휴일 휴무</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 대화상사. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
