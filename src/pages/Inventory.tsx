import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INVENTORY } from '../constants';

const Inventory = () => {
  const [filter, setFilter] = useState<'전체' | '선반' | '밀링' | '프레스' | '기타'>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = INVENTORY.filter(item => {
    const matchesFilter = filter === '전체' || item.category === filter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories: ('전체' | '선반' | '밀링' | '프레스' | '기타')[] = ['전체', '선반', '밀링', '프레스', '기타'];

  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-5xl font-black mb-6">보유 장비 목록</h1>
          <p className="text-lg md:text-xl text-slate-400">대화상사가 엄선한 최상급 중고 기계 리스트입니다.</p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-12 bg-white border-b border-slate-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-bold transition-all ${
                    filter === cat ? 'bg-accent text-white' : 'bg-background text-secondary hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="모델명 또는 제조사 검색"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-secondary font-medium">
            총 <span className="text-primary font-bold">{filteredItems.length}</span>개의 장비가 검색되었습니다.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="relative h-64">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    상태 {item.status}
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-sm text-secondary font-medium mb-1">{item.manufacturer}</div>
                      <h3 className="text-2xl font-bold text-primary">{item.name}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-secondary mb-1">연식</div>
                      <div className="font-bold text-primary">{item.year}년</div>
                    </div>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background p-3 rounded-lg text-center">
                      <div className="text-xs text-secondary mb-1">제조사</div>
                      <div className="text-sm font-bold text-primary">{item.manufacturer}</div>
                    </div>
                    <div className="bg-background p-3 rounded-lg text-center">
                      <div className="text-xs text-secondary mb-1">상태등급</div>
                      <div className="text-sm font-bold text-accent">{item.status}급</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <span className="text-2xl font-black text-accent">{item.price}</span>
                    <Link to="/contact" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
                      상담 예약 <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-32">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={32} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">검색 결과가 없습니다.</h3>
              <p className="text-secondary">다른 검색어를 입력하시거나 필터를 변경해 보세요.</p>
              <button 
                onClick={() => {setFilter('전체'); setSearchQuery('');}}
                className="mt-6 text-accent font-bold underline"
              >
                검색 초기화
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">찾으시는 장비가 없으신가요?</h2>
          <p className="text-lg text-secondary mb-10">
            대화상사의 전국 네트워크를 통해 원하시는 사양의 기계를 빠르게 찾아 드립니다.<br />
            지금 바로 전화로 문의해 주세요.
          </p>
          <a href="tel:010-6355-8055" className="btn-accent inline-flex items-center gap-3 text-xl px-10 py-5">
            <Phone size={24} /> 010-6355-8055
          </a>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
