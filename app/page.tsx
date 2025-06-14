"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Users,
  BookOpen,
  Globe,
  ArrowRight,
  Star,
  Clock,
  Award,
  Menu,
} from "lucide-react"
import Link from "next/link"

// Custom WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
  </svg>
)

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hi GlobalEdge Consultancy! I'm interested in studying in Italy.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interest: ${formData.course}
Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/393508282714?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#procedure", label: "Procedure" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  GlobalEdge
                </h1>
                <p className="text-xs text-gray-600 font-medium">Consultancy</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              {/* WhatsApp Button */}
              <Button
                onClick={() => window.open("https://wa.me/393508282714", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(true)}
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          GlobalEdge
                        </h2>
                        <p className="text-xs text-gray-600">Consultancy</p>
                      </div>
                    </div>
                  </div>

                  <nav className="space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-lg transition-all duration-300 font-medium"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-8 space-y-4">
                    <Button
                      onClick={() => {
                        window.open("https://wa.me/393508282714", "_blank")
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      <WhatsAppIcon className="h-4 w-4 mr-2" />
                      Contact via WhatsApp
                    </Button>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-lg text-white text-center">
                      <p className="text-sm font-medium">🎓 Free Consultation</p>
                      <p className="text-xs mt-1 opacity-90">Get expert guidance for Italy admissions</p>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 animate-pulse px-4 py-2 text-sm">
              🇮🇹 Italy Education Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in leading-tight">
              Your Gateway to
              <span className="block text-5xl md:text-7xl lg:text-8xl mt-2 cursor-default">ITALY</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your dreams into reality with our expert guidance for studying in Italy. From application to
              admission - we handle everything!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                onClick={() => document.getElementById("procedure")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Procedure
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-4 md:left-10 animate-bounce">
          <div className="bg-blue-500 rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-32 right-4 md:right-10 animate-bounce delay-1000">
          <div className="bg-indigo-500 rounded-full p-3 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
            <Globe className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "500+", label: "Students Placed", color: "text-blue-600" },
              { number: "50+", label: "Universities", color: "text-indigo-600" },
              { number: "95%", label: "Success Rate", color: "text-purple-600" },
              { number: "5+", label: "Years Experience", color: "text-green-600" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div
                  className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive support for your Italian education journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: BookOpen,
                title: "Course Selection",
                description:
                  "Expert guidance in choosing the right course and university based on your interests and career goals.",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: Users,
                title: "Application Support",
                description:
                  "Complete assistance with application forms, document preparation, and submission processes.",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: Award,
                title: "Visa Assistance",
                description: "Step-by-step guidance for student visa application and interview preparation.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Globe,
                title: "Pre-Departure",
                description: "Comprehensive briefing about Italian culture, accommodation, and essential preparations.",
                gradient: "from-green-500 to-teal-500",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Continuous support throughout your journey, from application to graduation.",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Star,
                title: "Scholarship Guidance",
                description: "Information and assistance with scholarship applications and financial aid options.",
                gradient: "from-blue-500 to-cyan-500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`bg-gradient-to-r ${service.gradient} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Section */}
      <section id="procedure" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Application Procedure
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Simple steps to start your Italian education journey
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Free consultation to understand your goals, preferences, and academic background.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Course & University Selection",
                  description:
                    "We help you choose the best course and university that matches your profile and career aspirations.",
                  icon: BookOpen,
                },
                {
                  step: "03",
                  title: "Document Preparation",
                  description:
                    "Assistance with preparing and organizing all required documents including transcripts, certificates, and translations.",
                  icon: Award,
                },
                {
                  step: "04",
                  title: "Application Submission",
                  description:
                    "We handle the complete application process and ensure timely submission to your chosen universities.",
                  icon: CheckCircle,
                },
                {
                  step: "05",
                  title: "Visa Processing",
                  description:
                    "Complete guidance for student visa application, interview preparation, and documentation.",
                  icon: Globe,
                },
                {
                  step: "06",
                  title: "Pre-Departure Support",
                  description:
                    "Final preparations including accommodation, travel arrangements, and cultural orientation.",
                  icon: MapPin,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group"
                >
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-all duration-300 shadow-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl group-hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <item.icon className="h-6 w-6 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose GlobalEdge?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed px-4">
              We are Pakistan's leading education consultancy specializing in Italian universities. Our team of experts
              has helped hundreds of students achieve their dreams of studying in Italy.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: CheckCircle,
                  title: "Proven Track Record",
                  description: "95% success rate in university admissions",
                  gradient: "from-blue-500 to-indigo-500",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description: "Experienced counselors and Italian education specialists",
                  gradient: "from-indigo-500 to-purple-500",
                },
                {
                  icon: Award,
                  title: "End-to-End Support",
                  description: "From application to graduation - we're with you",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div
                    className={`bg-gradient-to-r ${item.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Start Your Journey Today
              </h2>
              <p className="text-lg md:text-xl text-gray-600 px-4">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-3xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Get Free Consultation</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out this form and we'll send you details via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-lg hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-lg hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-lg hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <Input
                        name="course"
                        placeholder="Course/Field of Interest"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="h-12 text-lg hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your goals and any questions you have..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="text-lg hover:border-blue-400 focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white h-12 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <WhatsAppIcon className="mr-2 h-5 w-5" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    icon: WhatsAppIcon,
                    title: "WhatsApp",
                    content: "+39 350 828 2714",
                    action: "Chat Now →",
                    gradient: "from-green-50 to-teal-50",
                    iconBg: "bg-green-500",
                    onClick: () => window.open("https://wa.me/393508282714", "_blank"),
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+39 350 828 2714",
                    subtitle: "Available 9 AM - 9 PM",
                    gradient: "from-blue-50 to-indigo-50",
                    iconBg: "bg-blue-500",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "globaledgeconsultancy1@gmail.com",
                    subtitle: "We reply within 2 hours",
                    gradient: "from-purple-50 to-pink-50",
                    iconBg: "bg-purple-500",
                  },
                ].map((contact, index) => (
                  <Card
                    key={index}
                    className={`shadow-lg border-0 bg-gradient-to-br ${contact.gradient} hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                    onClick={contact.onClick}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`${contact.iconBg} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
                        >
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{contact.title}</h3>
                          <p className="text-gray-600 font-medium">{contact.content}</p>
                          {contact.subtitle && <p className="text-sm text-gray-500">{contact.subtitle}</p>}
                          {contact.action && (
                            <Button
                              variant="link"
                              className="p-0 h-auto text-green-600 hover:text-green-700 font-semibold"
                            >
                              {contact.action}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                  <h3 className="text-xl font-bold mb-2">🎓 Free Consultation</h3>
                  <p className="mb-4 opacity-90">
                    Book your free 30-minute consultation session with our Italy education experts!
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                    onClick={() =>
                      window.open(
                        "https://wa.me/393508282714?text=I want to book a free consultation for studying in Italy",
                        "_blank",
                      )
                    }
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">GlobalEdge</h3>
                  <p className="text-sm text-gray-400">Consultancy</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Pakistani students to achieve academic excellence in Italy. Your success is our mission -
                transforming aspirations into achievements.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {["University Selection", "Application Support", "Visa Assistance", "Pre-Departure Guidance"].map(
                  (service) => (
                    <li
                      key={service}
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {service}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  +39 350 828 2714
                </p>
                <p className="flex items-center hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  globaledgeconsultancy1@gmail.com
                </p>
                {/*<p className="flex items-center hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 mr-2" />
                  Pakistan
                </p>*/}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GlobalEdge Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50 flex items-center space-x-3">
        <Button
          onClick={() => window.open("https://wa.me/393508282714", "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl animate-pulse hover:animate-none hover:scale-110 transition-all duration-300"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </Button>

        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-xl hover:scale-110 transition-all duration-300"
        >
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </Button>
      </div>
    </div>
  )
}
