
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "+249117005726"; 
  const message = encodeURIComponent("مرحباً ابونون، أود الاستفسار عن خدماتكم.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce [animation-iteration-count:3]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={30} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
