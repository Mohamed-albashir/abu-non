
import React from 'react';
import { ShieldAlert, BarChart3, Star, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldAlert className="w-8 h-8" />,
    title: 'الأمان والموثوقية',
    desc: 'لا نتعامل بالعشوائية. جميع العاملات يخضعن لفحص أمني وتدريب مهني دقيق قبل قبولهم.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'تنظيم واحترافية',
    desc: 'نظام إدارة مهام متطور يضمن متابعة الجودة وتفاصيل كل مهمة من البداية للنهاية.'
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'جودة مضمونة',
    desc: 'تقييم مستمر لكل خدمة. إذا لم تكن راضياً، سنعمل فوراً على تصحيح الأمر.'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'التزام تام بالمواعيد',
    desc: 'نقدر قيمة وقتك. العاملات يصلن في الموعد المحدد والمهام تُنجز بكفاءة عالية.'
  }
];

const WhyUs: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest">لماذا يختارنا العملاء؟</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">نعيد صياغة مفهوم الخدمة المنزلية برؤية عصرية</h3>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              نحن ندرك حجم التحديات في العثور على مساعدة منزلية موثوقة. لذلك، صممنا نظاماً يحمي العميل من العشوائية، ويحمي العاملة من الاستغلال، لنخلق بيئة عمل يسودها الاحترام والجودة.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-500">التزام بالدقة</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">+30</div>
                <div className="text-sm text-slate-500">عاملة مختارة</div>
              </div>
              <div className="w-px h-12 bg-slate-700" />
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">2026</div>
                <div className="text-sm text-slate-500">هدفنا لـ 1500 عميل</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-all">
                <div className="text-emerald-400 mb-6">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
