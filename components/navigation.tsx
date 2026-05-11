"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Phone, Clock, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:underline">Patient Portal</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary fill-primary" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                MediCare<span className="text-primary">Plus</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Services <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/doctors">Cardiology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors">Neurology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors">Pediatrics</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors">Orthopedics</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/doctors">Dermatology</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link 
                href="/doctors" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Doctors
              </Link>
              <Link 
                href="/booking" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Appointments
              </Link>
              <Link 
                href="/dashboard" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Dashboard
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/booking">Book Appointment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </Link>
              <Link 
                href="/doctors" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Services
              </Link>
              <Link 
                href="/doctors" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Doctors
              </Link>
              <Link 
                href="/booking" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Appointments
              </Link>
              <Link 
                href="/dashboard" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Dashboard
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/booking">Book Appointment</Link>
                </Button>
              </div>
              <div className="pt-4 border-t border-border text-sm text-muted-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>Emergency: +1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
