import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { HeadphonesIcon, FileText, Brain, Target } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-600" />,
      title: "Speaking Practice",
      description: "One-on-one speaking sessions with certified trainers to boost your confidence and fluency.",
      badge: "Live Sessions"
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Mock Tests",
      description: "Realistic IELTS mock tests with detailed feedback and performance analysis.",
      badge: "15+ Tests"
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: "AI Band Score",
      description: "Get instant AI-powered band scores for writing and speaking with personalized feedback.",
      badge: "AI Powered"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-600" />,
      title: "Target Training",
      description: "Customized study plans based on your current level and target band score.",
      badge: "Personalized"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose IELTS Pro?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive preparation program combines cutting-edge AI technology with expert human guidance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}