
import React from 'react';
import { ArrowRight, Check, ShieldCheck, Clock, Zap } from 'lucide-react';
import Contact from '../Contact';

interface ServiceDetailPageProps {
  serviceId: string | null;
  onBack: () => void;
}

const servicesData: Record<string, any> = {
  'cleaning': {
    title: 'تنظيف المنازل الشامل',
    desc: 'نحن لا نقوم بالتنظيف السطحي فقط، بل نعتني بكل زاوية في منزلك. تشمل الخدمة تنظيف الأرضيات، النوافذ، المطبخ، وترتيب الغرف بشكل احترافي.',
    image: 'https://picsum.photos/seed/clean-detail/800/500',
    points: ['إزالة الغبار والأتربة الشاملة', 'تعقيم الأسطح والمقابض', 'ترتيب الخزائن حسب الطلب', 'استخدام منظفات صديقة للبيئة'],
    price: 'يبدأ من 150 ريال / المهمة'
  },
  'babysitting': {
    title: 'جليسات الأطفال المحترفات',
    desc: 'رعاية أطفالك أمانة في أعناقنا. جليساتنا مؤهلات للتعامل مع مختلف الأعمار وضمان وقت ممتع وآمن لأطفالك في غيابك.',
    image: 'https://picsum.photos/seed/baby-detail/800/500',
    points: ['مراقبة الأطفال وتلبية احتياجاتهم', 'المساعدة في الواجبات المدرسية', 'تحضير الوجبات الخفيفة الصحية', 'أنشطة ترفيهية وتعليمية'],
    price: 'يبدأ من 50 ريال / الساعة'
  },
  'hourly': {
    title: 'مساعدة منزلية بالساعة',
    desc: 'الحل المثالي للمهام السريعة أو المساعدة المؤقتة. اطلب المساعدة لساعة أو أكثر حسب حاجتك الفعلية دون التزامات طويلة.',
    image: 'https://picsum.photos/seed/hourly-detail/800/500',
    points: ['مرونة عالية في اختيار الوقت', 'تحديد المهام بدقة مع العاملة', 'مناسب للحفلات والمناسبات الخاصة', 'دفع آلي مقابل ساعات العمل فقط'],
    price: 'يبدأ من 40 ريال / الساعة'
  }
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId, onBack }) => {
  const service = servicesData[serviceId || 'cleaning'] || servicesData['cleaning'];

  return (
    <div className="pt-32 pb-24 bg-white animate-in slide-in-from-left duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowRight size={20} />
          العودة للخدمات
        </button>

        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.desc}
            </p>

            <div className="space-y-4">
              {service.points.map((point: string, i: number) => (
                <div key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="bg-emerald-100 text-emerald-600 p-1 rounded-full"><Check size={16} /></div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 inline-block">
              <div className="text-sm text-slate-500 mb-1">الأسعار التقريبية</div>
              <div className="text-2xl font-bold text-emerald-600">{service.price}</div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <img src={service.image} className="rounded-[2.5rem] shadow-2xl object-cover w-full h-[400px]" alt={service.title} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-slate-50 rounded-3xl text-center space-y-4">
            <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-emerald-600"><Clock size={28} /></div>
            <h4 className="font-bold text-slate-900">سرعة الاستجابة</h4>
            <p className="text-sm text-slate-500">نصل إليك في الوقت المحدد تماماً دون تأخير.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl text-center space-y-4">
            <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-emerald-600"><ShieldCheck size={28} /></div>
            <h4 className="font-bold text-slate-900">أمان كامل</h4>
            <p className="text-sm text-slate-500">جميع عاملاتنا موثقات ومدربات على أعلى مستوى.</p>
          </div>
          <div className="p-8 bg-slate-50 rounded-3xl text-center space-y-4">
            <div className="inline-flex p-4 bg-white rounded-2xl shadow-sm text-emerald-600"><Zap size={28} /></div>
            <h4 className="font-bold text-slate-900">تنفيذ ذكي</h4>
            <p className="text-sm text-slate-500">نهتم بالتفاصيل الصغيرة التي تصنع الفرق الكبير.</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
           <h3 className="text-3xl font-bold text-center mb-12">اطلب هذه الخدمة الآن</h3>
           <Contact />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
