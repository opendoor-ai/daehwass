import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Users, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INVENTORY } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://loremflickr.com/1920/1080/factory,machine?lock=10"
            alt="Hero Background"
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1 rounded-full text-sm font-bold mb-6">
              30년 전통 중고기계 매매 전문
            </span>
            <h1 className="text-3xl md:text-7xl font-black text-white leading-tight mb-8">
              새 기계 같은 성능,<br />
              <span className="text-accent">중고의 합리적 가격.</span><br />
              대화상사가 보증합니다.
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-10 leading-relaxed">
              엄격한 12단계 검수 과정을 거친 최상급 중고 기계만을 취급합니다.<br />
              구매부터 설치, 사후 관리까지 전문가가 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/inventory" className="btn-accent text-lg py-4 px-8 flex items-center justify-center gap-2">
                보유 장비 보기 <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
                무료 견적 상담
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">왜 대화상사인가?</h2>
            <p className="section-subtitle">고객님이 믿고 구매하실 수 있는 3가지 약속</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck size={48} className="text-accent" />,
                title: "30년 경력 전문가 정비",
                desc: "베테랑 엔지니어가 직접 분해 소거 및 정밀도 검수를 진행하여 신품급 컨디션을 유지합니다."
              },
              {
                icon: <CheckCircle2 size={48} className="text-accent" />,
                title: "6개월 무상 A/S 보장",
                desc: "중고 기계도 안심하고 사용하세요. 구매 후 6개월간 주요 부품에 대해 무상 수리를 지원합니다."
              },
              {
                icon: <Truck size={48} className="text-accent" />,
                title: "전국 안전 운송 및 설치",
                desc: "전용 운송 차량과 전문 설치팀이 공장 내부 안착부터 시운전까지 완벽하게 책임집니다."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-background border border-slate-100 shadow-sm"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="section-title">추천 매물</h2>
              <p className="text-secondary text-lg">지금 바로 출고 가능한 최상의 컨디션 장비들입니다.</p>
            </div>
            <Link to="/inventory" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
              전체 매물 보기 <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INVENTORY.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    상태 {item.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-secondary mb-2">{item.manufacturer} | {item.year}년식</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-black text-lg">{item.price}</span>
                    <Link to="/contact" className="text-primary font-bold text-sm border-b-2 border-primary/20 hover:border-accent hover:text-accent transition-all">
                      상세문의
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">믿음직한 매물 관리 프로세스</h2>
            <p className="section-subtitle">대화상사는 보이지 않는 곳까지 꼼꼼하게 관리합니다.</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "입고 및 분해", desc: "기계 입고 즉시 주요 부품을 분해하여 마모 상태를 점검합니다." },
                { step: "02", title: "정밀 세척/도장", desc: "산업용 세척제로 기름때를 제거하고 외관을 새것처럼 도장합니다." },
                { step: "03", title: "부품 교체 및 정비", desc: "노후된 베어링, 벨트 등 소모품을 정품으로 전면 교체합니다." },
                { step: "04", title: "최종 시운전", desc: "8시간 연속 가동 테스트를 통해 정밀도와 소음을 최종 확인합니다." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                  <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객님들의 생생한 후기</h2>
            <p className="text-slate-400">이미 많은 제조업체 대표님들이 대화상사를 선택하셨습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "김철수 대표",
                company: "(주)정밀금형",
                text: "중고 선반이라 걱정했는데, 외관부터 성능까지 새 기계나 다름없네요. 특히 설치 후 시운전까지 꼼꼼하게 봐주셔서 정말 만족합니다.",
                stars: 5
              },
              {
                name: "이영희 이사",
                company: "대일테크",
                text: "급하게 밀링기가 필요해서 연락드렸는데, 당일 상담부터 다음 날 배송까지 일사천리로 진행됐습니다. 사후 관리도 확실해서 믿음이 가요.",
                stars: 5
              },
              {
                name: "박준형 팀장",
                company: "성진공업",
                text: "가격 거품 없이 정직하게 매물을 보여주시는 모습에 감동했습니다. 벌써 세 번째 거래인데 항상 만족스러운 기계만 보내주시네요.",
                stars: 5
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-10 rounded-3xl border border-slate-700">
                <div className="flex mb-6">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 text-slate-300 leading-relaxed">"{item.text}"</p>
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                지금 바로 전문가와<br />상담하세요.
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-0">
                원하시는 기계의 종류와 예산을 알려주시면<br />최적의 매물을 추천해 드립니다.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a href="tel:010-6355-8055" className="bg-white text-accent px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                <Phone size={24} /> 010-6355-8055
              </a>
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-primary/90 transition-all flex items-center justify-center">
                온라인 견적 문의
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
