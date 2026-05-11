import { Users, Stethoscope, Award, Building } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Patients",
    description: "Trusted care",
  },
  {
    icon: Stethoscope,
    value: "200+",
    label: "Expert Doctors",
    description: "Specialized team",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Proven excellence",
  },
  {
    icon: Building,
    value: "25+",
    label: "Departments",
    description: "Complete care",
  },
]

export function StatsSection() {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="font-medium text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
