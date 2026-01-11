
import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';


  const whatsappNumber = "+201552267098"; 
  const message = encodeURIComponent("مرحباً ابونون، أود الاستفسار عن خدماتكم.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            {/* Info Section */}
            <div className="lg:w-1/3 bg-emerald-600 p-12 lg:p-16 text-white space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold">تواصل معنا</h3>
                <p className="text-emerald-100">نحن هنا للإجابة على جميع استفساراتكم بخصوص خدماتنا أو الانضمام لفريقنا.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Phone size={24} /></div>
                  <div>
                    <div className="font-bold">رقم الهاتف</div>
                    <div className="text-emerald-50">00201035276967</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><Mail size={24} /></div>
                  <div>
                    <div className="font-bold">البريد الإلكتروني</div>
                    <div className="text-emerald-50">info@rawadservice.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl"><MapPin size={24} /></div>
                  <div>
                    <div className="font-bold">الموقع الرئيسي</div>
                    <div className="text-emerald-50">الجيزه - فيصل - الطوابق - شارع الشهيد احمد حمدي - غرب مدرسة الطائف</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex gap-4">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-emerald-600 p-4 rounded-2xl flex items-center justify-center gap-2 font-bold w-full hover:bg-emerald-50 transition-colors"
                      aria-label="Contact us on WhatsApp"
                    >
                          واتساب سريع
                      <MessageCircle size={30} fill="currentColor" />
                    </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
