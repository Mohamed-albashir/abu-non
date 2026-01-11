
import React from 'react';
import { ArrowRight, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';
import Contact from '../Contact';

interface BookingPageProps {
  onBack: () => void;
}

const BookingPage: React.FC<BookingPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowRight size={20} />
          العودة للرئيسية
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              احجز خدمتك المنزلية <span className="text-emerald-600">بكل سهولة</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              نظام الحجز لدينا مصمم ليمنحك الراحة التامة. اختر الوقت، نوع الخدمة، ودع الباقي علينا. نضمن لك جودة العمل وأمان منزلك.
            </p>

            <div className="space-y-6">
              {[
                { title: 'أسعار واضحة', desc: 'لا توجد رسوم خفية، ادفع مقابل الوقت والخدمة فقط.', icon: <CheckCircle className="text-emerald-500" /> },
                { title: 'مرونة في المواعيد', desc: 'يمكنك تعديل موعدك حتى قبل 24 ساعة من المهمة.', icon: <Calendar className="text-emerald-500" /> },
                { title: 'ضمان كامل', desc: 'تأمين شامل على المهام لضمان راحة بالك.', icon: <ShieldCheck className="text-emerald-500" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full -mr-16 -mt-16 blur-2xl" />
             <div className="relative z-10 space-y-6">
               <h3 className="text-2xl font-bold text-emerald-900">لماذا الحجز المسبق؟</h3>
               <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-emerald-800">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                   ضمان توفر أفضل العاملات في وقتك المفضل.
                 </li>
                 <li className="flex items-center gap-3 text-emerald-800">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                   الحصول على خصومات الحجز المبكر.
                 </li>
                 <li className="flex items-center gap-3 text-emerald-800">
                   <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                   ترتيب جدول مهامك الأسبوعي بوضوح.
                 </li>
               </ul>
               <img src="https://i.pinimg.com/1200x/5e/5e/44/5e5e44129a808586f52edb225a05355e.jpg" className="rounded-2xl shadow-lg border-4 border-white" alt="Booking" />
             </div>
          </div>
        </div>

        <div id="booking-form">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
