
import React from 'react';
import { Home, Baby, CalendarClock } from 'lucide-react';

const services = [
  {
    id: 'cleaning',
    icon: <Home size={32} />,
    title: 'تنظيف المنازل',
    desc: 'خدمات تنظيف شاملة ودورية، غسيل، وترتيب للمساحات المنزلية بأعلى المعايير.',
    image: 'https://i.pinimg.com/1200x/72/f7/cd/72f7cda98699e776884cda05ef2cce90.jpg',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    id: 'babysitting',
    icon: <Baby size={32} />,
    title: 'جليسات الأطفال',
    desc: 'رعاية آمنة وحنونة لأطفالك مع جليسات مؤهلات تم اختيارهن بعناية فائقة.',
    image: 'https://i.pinimg.com/736x/9e/40/a0/9e40a02f33b96fe1c00c124e059f740e.jpg',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 'hourly',
    icon: <CalendarClock size={32} />,
    title: 'مساعدة منزلية بالساعة',
    desc: 'خدمات مرنة تناسب احتياجاتك الطارئة أو المؤقتة، اطلب الخدمة للوقت الذي تحتاجه فقط.',
    image: 'https://i.pinimg.com/736x/88/dd/77/88dd7781c6d8d0cb4ef9341a95ca4f82.jpg',
    color: 'bg-purple-50 text-purple-600'
  }
];

interface ServicesProps {
  onViewDetail: (id: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onViewDetail }) => {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm">خدماتنا المميزة</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">حلول منزلية متكاملة بضغطة زر</h3>
          <p className="text-slate-600 text-lg">نقدم مجموعة متنوعة من الخدمات التي تغطي كافة احتياجات منزلك مع ضمان الاحترافية الكاملة.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-2xl shadow-lg">
                  <div className={`${service.color} p-2 rounded-xl`}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4 flex-grow">
                <h4 className="text-2xl font-bold text-slate-900">{service.title}</h4>
                <p className="text-slate-500 leading-relaxed">{service.desc}</p>
                <button 
                  onClick={() => onViewDetail(service.id)}
                  className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  التفاصيل والأسعار
                  <span className="text-xl">←</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
