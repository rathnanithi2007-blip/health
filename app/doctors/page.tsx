"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Search, Star, MapPin, Clock, Calendar, Filter } from "lucide-react"

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ years",
    rating: 4.9,
    reviews: 234,
    location: "Building A, Floor 3",
    availability: "Mon, Wed, Fri",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
    about: "Specialist in cardiovascular diseases with expertise in interventional cardiology.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12+ years",
    rating: 4.8,
    reviews: 189,
    location: "Building B, Floor 2",
    availability: "Tue, Thu, Sat",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
    about: "Expert in neurological disorders including stroke, epilepsy, and movement disorders.",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrics",
    experience: "10+ years",
    rating: 4.9,
    reviews: 312,
    location: "Building C, Floor 1",
    availability: "Mon - Fri",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
    about: "Dedicated to providing comprehensive healthcare for children from birth to adolescence.",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "Orthopedics",
    experience: "18+ years",
    rating: 4.7,
    reviews: 276,
    location: "Building A, Floor 4",
    availability: "Mon, Wed, Fri",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop",
    about: "Specializes in joint replacement surgery and sports medicine.",
  },
  {
    id: 5,
    name: "Dr. Lisa Thompson",
    specialty: "Dermatology",
    experience: "8+ years",
    rating: 4.8,
    reviews: 198,
    location: "Building B, Floor 3",
    availability: "Tue, Thu",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop",
    about: "Expert in treating skin conditions including acne, eczema, and skin cancer.",
  },
  {
    id: 6,
    name: "Dr. Robert Kim",
    specialty: "General Medicine",
    experience: "14+ years",
    rating: 4.6,
    reviews: 421,
    location: "Building A, Floor 1",
    availability: "Mon - Sat",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop",
    about: "Provides primary care services including preventive care and chronic disease management.",
  },
  {
    id: 7,
    name: "Dr. Maria Garcia",
    specialty: "Ophthalmology",
    experience: "11+ years",
    rating: 4.9,
    reviews: 156,
    location: "Building C, Floor 2",
    availability: "Wed, Fri, Sat",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&sat=-100",
    about: "Specialist in eye care including cataract surgery and glaucoma treatment.",
  },
  {
    id: 8,
    name: "Dr. David Brown",
    specialty: "Cardiology",
    experience: "20+ years",
    rating: 4.8,
    reviews: 387,
    location: "Building A, Floor 3",
    availability: "Mon, Tue, Thu",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&sat=-100",
    about: "Senior cardiologist with expertise in heart failure and cardiac rehabilitation.",
  },
]

const specialties = [
  "All Specialties",
  "Cardiology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "General Medicine",
  "Ophthalmology",
]

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties")
  const [sortBy, setSortBy] = useState("rating")

  const filteredDoctors = useMemo(() => {
    let result = doctors.filter((doctor) => {
      const matchesSearch = 
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSpecialty = 
        selectedSpecialty === "All Specialties" || 
        doctor.specialty === selectedSpecialty

      return matchesSearch && matchesSpecialty
    })

    // Sort doctors
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "experience") {
      result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience))
    } else if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews - a.reviews)
    }

    return result
  }, [searchQuery, selectedSpecialty, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary/5 py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Find Your Doctor
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Search from our team of 200+ expert doctors across various specializations. 
                Book an appointment with the right specialist for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 border-b border-border bg-card sticky top-16 lg:top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search doctors by name or specialty..."
                  className="pl-10 h-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Specialty Filter */}
              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="w-full lg:w-[200px] h-11">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full lg:w-[180px] h-11">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            {/* Results count */}
            <p className="text-muted-foreground mb-6">
              Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
              {selectedSpecialty !== "All Specialties" && ` in ${selectedSpecialty}`}
            </p>

            {/* Doctors Grid */}
            {filteredDoctors.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredDoctors.map((doctor) => (
                  <Card 
                    key={doctor.id} 
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border"
                  >
                    <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">{doctor.rating}</span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-3">
                        <h3 className="font-semibold text-foreground text-lg mb-1">
                          {doctor.name}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {doctor.specialty}
                        </p>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {doctor.about}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.experience} experience</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{doctor.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{doctor.availability}</span>
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <Link href={`/booking?doctor=${doctor.id}`}>
                          Book Appointment
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No doctors found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedSpecialty("All Specialties")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
