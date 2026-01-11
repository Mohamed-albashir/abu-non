
import React from 'react';
import { ArrowRight, Star, Heart, Shield, Award } from 'lucide-react';
import Contact from '../Contact';

interface WorkerRegistrationPageProps {
  onBack: () => void;
}

const WorkerRegistrationPage: React.FC<WorkerRegistrationPageProps> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowRight size={20} />
          العودة للرئيسية
        </button>

        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            انضمي لفريق <span className="text-emerald-600">ابونون</span>
          </h1>
          <p className="text-xl text-slate-600">
            نحن نبحث عن التميز والاحترافية. إذا كنتِ تمتلكين الخبرة في الخدمات المنزلية وترغبين في عمل يحترم حقوقك، فأنتِ في المكان الصحيح.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Shield className="text-blue-500" />, title: 'حماية كاملة', desc: 'نضمن لك بيئة عمل آمنة وعقوداً واضحة.' },
            { icon: <Star className="text-amber-500" />, title: 'نظام مكافآت', desc: 'حوافز مالية للعاملات الأكثر التزاماً وتميزاً.' },
            { icon: <Heart className="text-rose-500" />, title: 'دعم مستمر', desc: 'فريقنا متاح لدعمك وحل أي مشكلة تواجهك.' },
            { icon: <Award className="text-emerald-500" />, title: 'تطوير مهني', desc: 'دورات تدريبية مستمرة لتحسين مهاراتك.' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
              <div className="inline-flex p-4 bg-slate-50 rounded-2xl mb-6">{benefit.icon}</div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">{benefit.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-white mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">خطوات الانضمام</h3>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="bg-white text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
                  <p className="text-lg">تعبئة نموذج الطلب ببياناتك الصحيحة.</p>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
                  <p className="text-lg">إجراء مقابلة شخصية لتقييم المهارات.</p>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
                  <p className="text-lg">حضور دورة التدريب الأساسية في "ابونون".</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://i.pinimg.com/1200x/ed/99/3f/ed993fc1ded124bbd315cb3798595c88.jpg" className="rounded-3xl shadow-2xl border-4 border-white/20" alt="Join us" />
            </div>
          </div>
        </div>
           <Contact />
      </div>
    </div>
  );
};

export default WorkerRegistrationPage;
