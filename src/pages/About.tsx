import React from 'react';
import { motion } from 'motion/react';
import { History, Users, MapPin, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-5xl font-black mb-6">대화상사 소개</h1>
          <p className="text-lg md:text-xl text-slate-400">30년, 기계에 대한 진심 하나로 걸어왔습니다.</p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <img
                src="https://loremflickr.com/800/800/businessman,office?lock=30"
                alt="CEO"
                className="rounded-3xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-accent font-bold text-lg mb-4 block">CEO 인사말</span>
              <h2 className="text-4xl font-black text-primary mb-8 leading-tight">
                "고객의 공장이 멈추지 않도록,<br />최고의 장비만을 약속합니다."
              </h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  안녕하십니까, 대화상사 대표입니다. 1996년 작은 매장에서 시작한 대화상사가 어느덧 30년의 세월을 맞이했습니다.
                </p>
                <p>
                  저희는 단순히 중고 기계를 사고파는 곳이 아닙니다. 기계 한 대가 한 기업의 생존과 직결된다는 것을 누구보다 잘 알기에, 
                  저희 손을 거치는 모든 장비에 '정직'과 '책임'을 담습니다.
                </p>
                <p>
                  앞으로도 대화상사는 대한민국 제조업의 든든한 파트너로서, 합리적인 가격과 신뢰할 수 있는 품질로 보답하겠습니다. 
                  언제든 편하게 방문해 주십시오. 따뜻한 차 한 잔과 함께 고객님의 고민을 나누겠습니다.
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-slate-100">
                <div className="text-2xl font-black text-primary">대화상사 대표이사 배상</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title">대화상사 연혁</h2>
            <p className="section-subtitle">신뢰로 쌓아온 30년의 기록입니다.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              { year: "2024", title: "시화 벤처단지 신사옥 이전 및 전시장 확장", desc: "고객 편의를 위해 대규모 실내 전시장을 구축했습니다." },
              { year: "2018", title: "중고기계 품질 보증 시스템 도입", desc: "업계 최초로 6개월 무상 A/S 정책을 시행했습니다." },
              { year: "2010", title: "전국 네트워크 유통망 구축", desc: "전국 어디든 24시간 이내 배송 가능한 시스템을 완성했습니다." },
              { year: "2002", title: "대화상사 법인 전환", desc: "전문성을 강화하고 기업형 매매 시스템을 도입했습니다." },
              { year: "1996", title: "대화기계 설립", desc: "중고 선반/밀링 매매를 시작으로 첫발을 내디뎠습니다." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">
                    {item.year}
                  </div>
                  {idx !== 4 && <div className="w-0.5 h-full bg-slate-200 mt-4"></div>}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-secondary text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">오시는 길</h2>
            <p className="section-subtitle">언제든 방문하여 기계를 직접 확인해 보세요.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-slate-100 rounded-3xl h-[500px] relative overflow-hidden">
              <img 
                src="https://loremflickr.com/1200/800/map,city?lock=40" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4">
                  <div className="bg-accent p-3 rounded-full text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary">대화상사 본사</div>
                    <div className="text-sm text-secondary">경기도 시흥시 시화벤처로 123</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <MapPin size={20} className="text-accent" /> 주소 안내
                </h4>
                <p className="text-secondary leading-relaxed">
                  경기도 시흥시 시화벤처로 123<br />
                  (정왕동, 시화공단 3나 405호)<br />
                  <span className="text-sm text-slate-400 mt-2 block">* 주차 공간 넉넉합니다.</span>
                </p>
              </div>
              <div className="bg-background p-8 rounded-3xl border border-slate-100">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Phone size={20} className="text-accent" /> 연락처
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">대표전화</span>
                    <span className="font-bold text-primary">010-6355-8055</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">직통번호</span>
                    <span className="font-bold text-accent">010-6355-8055</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-secondary">이메일</span>
                    <span className="font-bold text-primary">info@daehwa.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
