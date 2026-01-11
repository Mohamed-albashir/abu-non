
import React from 'react';
import { ShieldCheck, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold text-emerald-900">ابونون</span>
            </button>
            <p className="text-slate-500 leading-relaxed">
              منصة ابونون الرائدة لتنظيم الخدمات المنزلية. نهدف لبناء مجتمع قائم على الثقة والجودة والاحترافية.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-600 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-slate-500 hover:text-emerald-600 transition-colors">الرئيسية</button></li>
              <li><button onClick={() => onNavigate('booking')} className="text-slate-500 hover:text-emerald-600 transition-colors">احجز الآن</button></li>
              <li><button onClick={() => onNavigate('worker-join')} className="text-slate-500 hover:text-emerald-600 transition-colors">انضمي كعاملة</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-6">الخدمات</h4>
            <ul className="space-y-4">
              {['تنظيف منازل', 'جليسات أطفال', 'مساعدة شخصية'].map((item, i) => (
                <li key={i}>
                  <button className="text-slate-500 hover:text-emerald-600 transition-colors">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© 2024 ابونون. جميع الحقوق محفوظة.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-600">سياسة الخصوصية</a>
            <a href="#" className="hover:text-emerald-600">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
