
import React from 'react';
import { ShieldCheck, Heart, Clock, Wallet } from 'lucide-react';

const benefits = [
  { icon: <Clock className="text-blue-500" />, title: 'مرونة تامة', desc: 'اختاري المهام والأوقات التي تناسب جدول حياتك الخاص.' },
  { icon: <Wallet className="text-emerald-500" />, title: 'دخل مضمون', desc: 'نحن نضمن تحصيل أتعابك في موعدها دون تأخير أو عناء.' },
  { icon: <ShieldCheck className="text-amber-500" />, title: 'بيئة آمنة', desc: 'نتعامل مع عملاء موثوقين ونتابع سير العمل لضمان سلامتك.' },
  { icon: <Heart className="text-rose-500" />, title: 'تقدير واحترام', desc: 'نؤمن بكرامة العمل ونحفظ حقوقك المهنية والإنسانية.' }
];

interface ForWorkersProps {
  onJoin: () => void;
}

const ForWorkers: React.FC<ForWorkersProps> = ({ onJoin }) => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 p-12 lg:p-20 space-y-8">
            <h2 className="text-emerald-600 font-bold uppercase text-sm">فرص عمل مرنة</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">هل تبحثين عن فرصة عمل محترمة ومنظمة؟</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              انضمي إلى عائلة "ابونون". نحن لا نوظفك بشكل تقليدي، بل نفتح لك آفاقاً لعمل حر ومنظم يضمن لك دخلاً إضافياً مع الحفاظ على كامل خصوصيتك وحقوقك.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-50 rounded-lg">{benefit.icon}</div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={onJoin}
              className="bg-emerald-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg"
            >
              سجلي الآن كعاملة محترفة
            </button>
          </div>
          
          <div className="lg:w-1/2 bg-emerald-600 relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
               <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWorkers;
