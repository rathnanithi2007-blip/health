import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Baby, Bone, Stethoscope, Eye, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care including diagnostics, treatment, and preventive cardiology services.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for neurological conditions including stroke, epilepsy, and movement disorders.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents with compassionate care.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Advanced treatment for bones, joints, and muscles with surgical and non-surgical options.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary healthcare services for routine checkups, illness treatment, and health maintenance.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Complete eye care services including vision correction, cataract surgery, and glaucoma treatment.",
    color: "bg-teal-50 text-teal-600",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer a wide range of medical services to meet all your healthcare needs 
            with state-of-the-art facilities and experienced specialists.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${service.color} mb-5`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  href="/doctors" 
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/doctors">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
