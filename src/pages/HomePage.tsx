import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import AboutSection from '@/components/AboutSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        <section id="servicios">
          <ServicesSection />
        </section>
        <section id="sobre-mi">
          <AboutSection />
        </section>
        <section id="testimonios">
          <TestimonialsSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
