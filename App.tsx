
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ForWorkers from './components/ForWorkers';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingPage from './components/pages/BookingPage';
import WorkerRegistrationPage from './components/pages/WorkerRegistrationPage';
import ServiceDetailPage from './components/pages/ServiceDetailPage';

export type ViewState = 'home' | 'booking' | 'worker-join' | 'service-detail';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigateTo = (view: ViewState, data?: string) => {
    setCurrentView(view);
    if (data) setSelectedService(data);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'booking':
        return <BookingPage onBack={() => setCurrentView('home')} />;
      case 'worker-join':
        return <WorkerRegistrationPage onBack={() => setCurrentView('home')} />;
      case 'service-detail':
        return <ServiceDetailPage serviceId={selectedService} onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <section id="home">
              <Hero onBooking={() => navigateTo('booking')} onJoin={() => navigateTo('worker-join')} />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="services">
              <Services onViewDetail={(id) => navigateTo('service-detail', id)} />
            </section>
            <section id="how-it-works">
              <HowItWorks />
            </section>
            <section id="for-workers" className="bg-emerald-50/50">
              <ForWorkers onJoin={() => navigateTo('worker-join')} />
            </section>
            <section id="why-us">
              <WhyUs />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={(view) => navigateTo(view)} currentView={currentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onNavigate={(view) => navigateTo(view)} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
