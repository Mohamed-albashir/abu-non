
import React from 'react';
import { Target, Users, Handshake, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://i.pinimg.com/736x/9e/40/a0/9e40a02f33b96fe1c00c124e059f740e.jpg"
                alt="About 1" 
                className="rounded-2xl shadow-lg mt-8"
              />
              <img
                src="https://i.pinimg.com/736x/ed/38/66/ed38663596cc2b9472742b68c40b455b.jpg" 
                alt="About 2" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl border-8 border-white">
              <span className="text-2xl font-bold">3+</span>
              <span className="text-xs">سنوات خبرة</span>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-emerald-600 font-bold tracking-wider uppercase text-sm">من نحن</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              نحن لسنا مجرد شركة توظيف، نحن شريكك في تنظيم حياتك اليومية
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              تعمل منصة "ابونون" كوسيط منظم يجمع بين الحاجة لخدمات منزلية احترافية وبين الرغبة في عمل مرن ومحترم. نحن نتولى كافة تفاصيل التنسيق، المتابعة، وضمان الحقوق المالية والقانونية لجميع الأطراف.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                { icon: <Target className="text-emerald-600" />, title: 'رسالتنا', desc: 'تنظيم سوق العمل المنزلي باحترافية.' },
                { icon: <Users className="text-blue-600" />, title: 'مجتمعنا', desc: 'عاملات محترفات وعملاء يثقون بنا.' },
                { icon: <Handshake className="text-amber-600" />, title: 'دورنا', desc: 'وسيط ذكي يضمن الجودة والعدالة.' },
                { icon: <CheckCircle2 className="text-emerald-500" />, title: 'التزامنا', desc: 'حماية خصوصية الجميع وحقوقهم.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
