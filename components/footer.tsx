import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary fill-primary" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full" />
              </div>
              <span className="text-xl font-bold text-background tracking-tight">
                MediCare<span className="text-primary">Plus</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Providing exceptional healthcare services with compassion and expertise. 
              Your health is our priority.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Patient Portal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Health Packages
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Cardiology
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Neurology
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Pediatrics
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Dermatology
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  123 Healthcare Avenue, Medical District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">contact@medicareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              2026 MediCare Plus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-background/50 hover:text-background text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
