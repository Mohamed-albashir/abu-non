
import React from 'react';
import { Search, UserCheck, PlayCircle, CreditCard } from 'lucide-react';

const steps = [
  { icon: <Search />, title: 'طلب الخدمة', desc: 'حدد نوع الخدمة والوقت المناسب لك عبر الموقع أو التطبيق.' },
  { icon: <UserCheck />, title: 'اختيار العاملة', desc: 'نقوم بترشيح أفضل العاملات المتاحات والمناسبات للمهمة.' },
  { icon: <PlayCircle />, title: 'تنفيذ المهمة', desc: 'تصل العاملة في الموعد المحدد لتبدأ عملها تحت إشرافنا التنظيمي.' },
  { icon: <CreditCard />, title: 'الدفع الميسر', desc: 'يتم دفع الأجر للشركة بكل أمان لضمان حقوق العاملة والعميل.' }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-600 font-bold mb-4">بساطة في التعامل، دقة في التنفيذ</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">كيف نضمن لك تجربة مثالية؟</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center p-8 rounded-3xl bg-slate-50 hover:bg-emerald-600 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white text-emerald-600 shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {React.cloneElement(step.icon as React.ReactElement, { size: 36 })}
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white">{step.title}</h4>
              <p className="text-slate-500 group-hover:text-emerald-50 transition-colors leading-relaxed">
                {step.desc}
              </p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 translate-y-[-50%] text-slate-200 group-hover:text-emerald-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
