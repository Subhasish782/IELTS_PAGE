import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Features from '@/components/ui/Features'
import Testimonials from '@/components/ui/Testimonials'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
      {/* Additional sections like Features, Testimonials, Footer can be added same like upper */}
     {/* <h1>IELTS Institute - Coming Soon!</h1>   */}
    </div>
  )
}