import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MessageSquare, Send, CheckCircle2, HelpCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-5xl font-black mb-6">견적 및 상담 문의</h1>
          <p className="text-lg md:text-xl text-slate-400">궁금하신 점을 남겨주시면 전문가가 신속하게 답변해 드립니다.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-background p-12 rounded-[3rem] text-center border border-slate-100"
                >
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} className="text-accent" />
                  </div>
                  <h2 className="text-3xl font-black text-primary mb-4">문의가 접수되었습니다!</h2>
                  <p className="text-lg text-secondary mb-10">
                    담당자가 내용을 확인한 후 24시간 이내에<br />순차적으로 연락드리겠습니다. 감사합니다.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    새 문의 작성하기
                  </button>
                </motion.div>
              ) : (
                <div className="bg-background p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm">
                  <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                    <MessageSquare className="text-accent" /> 상세 견적 요청
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">성함 / 담당자명 *</label>
                        <input
                          required
                          type="text"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">연락처 *</label>
                        <input
                          required
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none"
                          placeholder="010-0000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">회사명</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none"
                        placeholder="(주)대화기계"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">문의 종류 *</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none appearance-none bg-white">
                        <option>구매 상담</option>
                        <option>매각 문의</option>
                        <option>A/S 및 정비 요청</option>
                        <option>기타 문의</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">관심 기계 / 예산 범위</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none"
                        placeholder="예: 범용 선반 / 1,000만원 내외"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">문의 내용 *</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent/50 outline-none resize-none"
                        placeholder="문의하실 내용을 상세히 적어주시면 더 정확한 상담이 가능합니다."
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3 mb-6">
                      <input required type="checkbox" id="privacy" className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-secondary">
                        개인정보 수집 및 이용에 동의합니다. (필수)
                      </label>
                    </div>
                    <button type="submit" className="btn-accent w-full py-4 text-lg flex items-center justify-center gap-2">
                      <Send size={20} /> 견적 요청 보내기
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* FAQ & Quick Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                  <HelpCircle className="text-accent" /> 자주 묻는 질문
                </h3>
                <div className="space-y-4">
                  {[
                    { q: "기계를 직접 가서 볼 수 있나요?", a: "네, 경기도 시흥시에 위치한 대화상사 전시장에 방문하시면 모든 보유 장비를 직접 확인하고 시운전해 보실 수 있습니다." },
                    { q: "할부나 리스 구매도 가능한가요?", a: "네, 협력 금융사를 통해 저금리 할부 및 리스 프로그램을 안내해 드리고 있습니다." },
                    { q: "사용하던 기계를 대차할 수 있나요?", a: "기존에 사용하시던 기계의 상태를 확인한 후, 적정가에 매입하여 신규 구매 기계 대금에서 차감해 드리는 대차 서비스가 가능합니다." }
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-background p-6 rounded-2xl border border-slate-100">
                      <div className="font-bold text-primary mb-2">Q. {faq.q}</div>
                      <p className="text-secondary text-sm leading-relaxed">A. {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary p-10 rounded-[3rem] text-white">
                <h3 className="text-2xl font-bold mb-6">빠른 전화 상담</h3>
                <p className="text-slate-400 mb-8">
                  글로 남기기 번거로우시다면 지금 바로 전화 주세요.<br />
                  전문 상담원이 친절하게 안내해 드립니다.
                </p>
                <a href="tel:010-6355-8055" className="flex items-center gap-4 group">
                  <div className="bg-accent p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">직통 번호</div>
                    <div className="text-3xl font-black">010-6355-8055</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
