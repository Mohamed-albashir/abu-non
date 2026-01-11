
import React from 'react';
import { ArrowLeft, Sparkles, UserPlus, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onBooking: () => void;
  onJoin: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBooking, onJoin }) => {
  return (
    <div className="relative pt-20 pb-24 md:pt-40 md:pb-48 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full gradient-bg -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-8 animate-in fade-in slide-in-from-right duration-700">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold">
              <Sparkles size={16} />
              <span>خدمة منزلية موثوقة بنظام مهام مرن</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              بيتك يستحق <span className="text-emerald-600">العناية الأفضل</span> مع ضمان الراحة والأمان
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl">
              نحن حلقة الوصل الموثوقة بينك وبين أفضل العاملات المحترفات. تنظيم، جودة، ومرونة تامة في اختيار المهام والأوقات.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button 
                onClick={onBooking}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 group"
              >
                احجز خدمتك الآن
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onJoin}
                className="flex items-center justify-center gap-2 bg-white text-emerald-600 border-2 border-emerald-100 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-50 transition-all"
              >
                <UserPlus size={20} />
                انضمي كعاملة
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-reverse -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white object-cover"
                    src={`https://picsum.photos/seed/${i + 15}/100/100`}
                    alt="Team member"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="font-bold text-slate-900">في 2026 نتطلع لإرضاء 1500 عميل</div>
                <div className="text-slate-500">نبدأ اليوم معكم بخطوات واثقة</div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-left duration-1000">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.pinimg.com/1200x/90/d4/d0/90d4d0065e59e8bd69fc97595f3b779a.jpg" 
                alt="Home Service" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">ضمان الجودة</div>
                  <div className="text-lg font-bold text-slate-900">أمان كامل 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
