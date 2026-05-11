import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarDays, Phone, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            Schedule an appointment with our expert doctors today. 
            Your journey to better health starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              asChild 
              className="text-base h-12 px-8"
            >
              <Link href="/booking">
                <CalendarDays className="mr-2 h-5 w-5" />
                Book Appointment
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild 
              className="text-base h-12 px-8 bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="tel:+15551234567">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>Available 24/7 for emergencies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span>Same-day appointments available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
