import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      band: "Band 8.0",
      role: "Student",
      content: "The AI-powered feedback system helped me identify my weak areas. I improved from 6.5 to 8.0 in just 3 months!",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Rahul Kumar",
      band: "Band 7.5",
      role: "Professional",
      content: "Excellent mock tests and speaking practice sessions. The trainers are very experienced and supportive.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      band: "Band 8.5",
      role: "Doctor",
      content: "Best IELTS preparation institute! The personalized study plan made all the difference for me.",
      rating: 5,
      avatar: "👩‍⚕️"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Student Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dream scores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <p className="text-sm text-slate-600">{testimonial.role}</p>
                      <span className="text-slate-400">•</span>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                        {testimonial.band}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}