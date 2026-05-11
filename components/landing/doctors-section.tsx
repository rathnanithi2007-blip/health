import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ years",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Pediatrician",
    experience: "10+ years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. James Anderson",
    specialty: "Orthopedic Surgeon",
    experience: "18+ years",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop",
  },
]

export function DoctorsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Our Doctors
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
              Meet Our Expert Medical Team
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team of highly qualified doctors are dedicated to providing 
              exceptional care with years of experience in their respective fields.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 self-start lg:self-auto">
            <Link href="/doctors">
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium text-foreground">{doctor.rating}</span>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {doctor.specialty}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {doctor.experience} experience
                </p>
                <Button size="sm" className="w-full" asChild>
                  <Link href="/booking">Book Appointment</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
