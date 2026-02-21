import React from 'react';
import { motion } from 'motion/react';
import { Settings, ShieldCheck, Zap, PenTool, CheckCircle2, Award, Clock, Users } from 'lucide-react';

const Service = () => {
  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-5xl font-black mb-6">정비 및 검수 시스템</h1>
          <p className="text-lg md:text-xl text-slate-400">대화상사만의 깐깐한 기준이 중고 기계의 가치를 바꿉니다.</p>
        </div>
      </section>

      {/* Process Infographic */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="section-title">12단계 정밀 검수 프로세스</h2>
            <p className="section-subtitle">입고부터 출고까지, 단 하나의 오차도 허용하지 않습니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "1단계: 입고 정밀 진단",
                icon: <Settings className="text-accent" size={40} />,
                items: ["주요 구동부 소음/진동 측정", "전기 계통 절연 저항 테스트", "유압/공압 라인 누설 점검"]
              },
              {
                title: "2단계: 오버홀 및 부품 교체",
                icon: <PenTool className="text-accent" size={40} />,
                items: ["노후 베어링 및 벨트 전면 교체", "슬라이드 면 정밀 연마", "오일 펌프 및 필터 교체"]
              },
              {
                title: "3단계: 최종 성능 검증",
                icon: <ShieldCheck className="text-accent" size={40} />,
                items: ["8시간 연속 무부하 가동 테스트", "가공 정밀도(공차) 측정", "안전 장치 작동 유무 확인"]
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="bg-background p-10 rounded-3xl border border-slate-100"
              >
                <div className="mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-6">{step.title}</h3>
                <ul className="space-y-4">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary">
                      <CheckCircle2 size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="https://loremflickr.com/800/1000/engineer,repair?lock=20"
                  alt="Expert Engineer"
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
                  <div className="text-accent font-black text-4xl mb-2">30+</div>
                  <div className="text-primary font-bold">전문 엔지니어 경력</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="section-title">장인 정신으로 빚어내는<br />기계의 새 생명</h2>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                "중고 기계는 단순히 닦고 조이는 것이 아닙니다. 기계의 심장인 모터부터 미세한 기어의 맞물림까지, 
                사용자가 현장에서 바로 수익을 창출할 수 있도록 완벽한 컨디션을 만드는 것이 저희의 임무입니다."
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary">국가 공인 정비 자격 보유</div>
                    <div className="text-sm text-secondary">전문 기술진이 모든 공정을 책임집니다.</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-primary">신속한 현장 대응</div>
                    <div className="text-sm text-secondary">문제 발생 시 24시간 이내 현장 방문을 원칙으로 합니다.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AS Policy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-black mb-8">대화상사만의<br />무상 A/S 보증 정책</h2>
                  <p className="text-xl text-slate-300 mb-10">
                    중고 기계 구매 후 가장 큰 걱정인 고장 문제, 대화상사가 해결해 드립니다. 
                    업계 최장 수준의 보증 기간으로 안심하고 사용하세요.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                      <div className="text-accent font-bold mb-2">보증 기간</div>
                      <div className="text-2xl font-black">구매 후 6개월</div>
                    </div>
                    <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                      <div className="text-accent font-bold mb-2">보증 범위</div>
                      <div className="text-2xl font-black">주요 구동부 및 모터</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white text-primary p-10 rounded-3xl shadow-2xl w-full md:w-80 text-center">
                  <ShieldCheck size={64} className="text-accent mx-auto mb-6" />
                  <div className="text-2xl font-black mb-2">품질 보증서 발급</div>
                  <p className="text-secondary text-sm mb-6">모든 출고 장비에 대해 대화상사 직인이 찍힌 보증서를 발급합니다.</p>
                  <button className="btn-accent w-full">보증 정책 상세 보기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
