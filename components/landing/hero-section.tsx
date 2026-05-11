import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Shield, Clock, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Trusted by 50,000+ patients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Your Health,{" "}
              <span className="text-primary">Our Priority</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Experience world-class healthcare with our team of expert doctors. 
              We combine advanced medical technology with compassionate care to provide 
              you with the best treatment possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="text-base h-12 px-8">
                <Link href="/booking">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base h-12 px-8">
                <Link href="/doctors">
                  Find a Doctor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">24/7</p>
                  <p className="text-xs text-muted-foreground">Emergency</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="h-10 w-10 rounded-lg bg-secondary/30 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">100%</p>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                  <CalendarDays className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Easy</p>
                  <p className="text-xs text-muted-foreground">Booking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=1000&fit=crop"
                  alt="Professional doctor in modern medical facility"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-xl border border-border p-4 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-secondary/30 flex items-center justify-center">
                    <CalendarDays className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg">1,200+</p>
                    <p className="text-xs text-muted-foreground">Daily Appointments</p>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl border border-border p-4">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-bold text-foreground">4.9/5</p>
                <p className="text-xs text-muted-foreground">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
