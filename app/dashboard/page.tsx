"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Calendar, 
  Clock, 
  User, 
  FileText, 
  Settings,
  Plus,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Activity,
  Pill,
  HeartPulse,
  AlertCircle,
  CheckCircle,
  XCircle,
} from "lucide-react"

// Mock data
const patientData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  dateOfBirth: "January 15, 1985",
  bloodType: "O+",
  allergies: ["Penicillin", "Peanuts"],
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
}

const upcomingAppointments = [
  {
    id: 1,
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    date: "April 10, 2026",
    time: "10:00 AM",
    location: "Building A, Floor 3",
    status: "confirmed",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    doctor: "Dr. Michael Chen",
    specialty: "Neurology",
    date: "April 15, 2026",
    time: "02:30 PM",
    location: "Building B, Floor 2",
    status: "pending",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop",
  },
]

const pastAppointments = [
  {
    id: 3,
    doctor: "Dr. Emily Williams",
    specialty: "General Medicine",
    date: "March 25, 2026",
    time: "11:00 AM",
    location: "Building C, Floor 1",
    status: "completed",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    doctor: "Dr. James Anderson",
    specialty: "Orthopedics",
    date: "March 10, 2026",
    time: "09:30 AM",
    location: "Building A, Floor 4",
    status: "completed",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=100&h=100&fit=crop",
  },
]

const medicalHistory = [
  {
    id: 1,
    type: "Diagnosis",
    title: "Hypertension - Stage 1",
    date: "March 25, 2026",
    doctor: "Dr. Sarah Johnson",
    description: "Blood pressure reading of 140/90 mmHg. Recommended lifestyle modifications and follow-up in 3 months.",
  },
  {
    id: 2,
    type: "Lab Result",
    title: "Complete Blood Count (CBC)",
    date: "March 20, 2026",
    doctor: "Dr. Emily Williams",
    description: "All values within normal range. Hemoglobin: 14.5 g/dL, WBC: 7,500/uL, Platelets: 250,000/uL.",
  },
  {
    id: 3,
    type: "Prescription",
    title: "Lisinopril 10mg",
    date: "March 25, 2026",
    doctor: "Dr. Sarah Johnson",
    description: "Take once daily in the morning. Monitor blood pressure regularly.",
  },
]

const healthMetrics = [
  {
    label: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    status: "normal",
    icon: HeartPulse,
  },
  {
    label: "Heart Rate",
    value: "72",
    unit: "bpm",
    status: "normal",
    icon: Activity,
  },
  {
    label: "Blood Sugar",
    value: "95",
    unit: "mg/dL",
    status: "normal",
    icon: Activity,
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Cancelled</Badge>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Navigation />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={patientData.avatar} alt={patientData.name} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Welcome back, {patientData.name.split(' ')[0]}!
                </h1>
                <p className="text-muted-foreground">
                  Manage your appointments and health records
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/booking">
                <Plus className="mr-2 h-4 w-4" />
                Book New Appointment
              </Link>
            </Button>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-flex">
              <TabsTrigger value="overview" className="gap-2">
                <Activity className="h-4 w-4 hidden sm:block" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="appointments" className="gap-2">
                <Calendar className="h-4 w-4 hidden sm:block" />
                Appointments
              </TabsTrigger>
              <TabsTrigger value="records" className="gap-2">
                <FileText className="h-4 w-4 hidden sm:block" />
                Records
              </TabsTrigger>
              <TabsTrigger value="profile" className="gap-2">
                <User className="h-4 w-4 hidden sm:block" />
                Profile
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              {/* Health Metrics */}
              <div className="grid sm:grid-cols-3 gap-4">
                {healthMetrics.map((metric, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <metric.icon className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                          Normal
                        </Badge>
                      </div>
                      <h3 className="text-sm text-muted-foreground mb-1">{metric.label}</h3>
                      <p className="text-2xl font-bold text-foreground">
                        {metric.value} <span className="text-sm font-normal text-muted-foreground">{metric.unit}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Upcoming Appointments */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-4">
                  <div>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled visits</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="#" onClick={() => setActiveTab("appointments")}>
                      View All
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.length > 0 ? (
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div 
                          key={appointment.id}
                          className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors"
                        >
                          <img
                            src={appointment.image}
                            alt={appointment.doctor}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-foreground truncate">
                                {appointment.doctor}
                              </h4>
                              {getStatusBadge(appointment.status)}
                            </div>
                            <p className="text-sm text-primary mb-1">{appointment.specialty}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {appointment.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {appointment.time}
                              </span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="hidden sm:flex">
                            Reschedule
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">No upcoming appointments</p>
                      <Button asChild>
                        <Link href="/booking">Book an Appointment</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Calendar, label: "Book Appointment", href: "/booking" },
                  { icon: FileText, label: "View Records", href: "#", onClick: () => setActiveTab("records") },
                  { icon: User, label: "Find Doctors", href: "/doctors" },
                  { icon: Settings, label: "Settings", href: "#", onClick: () => setActiveTab("profile") },
                ].map((action, index) => (
                  <Link
                    key={index}
                    href={action.href}
                    onClick={action.onClick}
                    className="p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center gap-3"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <action.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{action.label}</span>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Appointments Tab */}
            <TabsContent value="appointments" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingAppointments.map((appointment) => (
                    <div 
                      key={appointment.id}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border mb-4 last:mb-0"
                    >
                      <img
                        src={appointment.image}
                        alt={appointment.doctor}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                          {getStatusBadge(appointment.status)}
                        </div>
                        <p className="text-sm text-primary mb-2">{appointment.specialty}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {appointment.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {appointment.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm">Reschedule</Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Past Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  {pastAppointments.map((appointment) => (
                    <div 
                      key={appointment.id}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border mb-4 last:mb-0 opacity-75"
                    >
                      <img
                        src={appointment.image}
                        alt={appointment.doctor}
                        className="h-14 w-14 rounded-full object-cover grayscale"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground">{appointment.doctor}</h4>
                          {getStatusBadge(appointment.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{appointment.specialty}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {appointment.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {appointment.time}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Book Again
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Records Tab */}
            <TabsContent value="records" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                  <CardDescription>Your diagnoses, lab results, and prescriptions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalHistory.map((record) => (
                      <div 
                        key={record.id}
                        className="p-4 rounded-xl border border-border"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline">{record.type}</Badge>
                              <span className="text-sm text-muted-foreground">{record.date}</span>
                            </div>
                            <h4 className="font-semibold text-foreground">{record.title}</h4>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{record.description}</p>
                        <p className="text-sm text-primary">By {record.doctor}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your account and health information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={patientData.avatar} alt={patientData.name} />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{patientData.name}</h3>
                      <p className="text-muted-foreground">Patient ID: #12345678</p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Email</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{patientData.email}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Phone</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{patientData.phone}</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Date of Birth</label>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-foreground">{patientData.dateOfBirth}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Blood Type</label>
                        <p className="text-foreground font-medium mt-1">{patientData.bloodType}</p>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Known Allergies</label>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {patientData.allergies.map((allergy, index) => (
                            <Badge key={index} variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-100">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              {allergy}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-border">
                    <Button>Edit Profile</Button>
                    <Button variant="outline">Change Password</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
