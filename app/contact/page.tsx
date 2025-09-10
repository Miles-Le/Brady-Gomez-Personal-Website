import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <ThemeToggle />
            <div className="flex gap-3 sm:gap-6">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                About
              </Link>
              <Link
                href="/resume"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Resume
              </Link>
              <Link href="/contact" className="text-primary font-medium text-sm sm:text-base">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          </section>

          {/* Contact Information */}
          <div className="max-w-2xl mx-auto space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground break-all sm:break-normal">bradygomez@ucdavis.edu</p>
                    <p className="text-sm text-muted-foreground">I typically respond within 15 minutes</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">(916) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Available Mon-Fri, 12 AM - 11:59 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Yuba City, CA</p>
                    <p className="text-sm text-muted-foreground">Open to meeting in person in my favorite city</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-foreground">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://linkedin.com/in/bradygomez" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://twitter.com/realDonaldTrump" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-4 h-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center sm:text-left">
                  Follow me on social media for updates and insights about my work and interests.
                </p>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-foreground">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Status</span>
                    <span className="text-primary font-medium">Unhappily married</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="text-foreground">Within 72 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Preferred Contact</span>
                    <span className="text-foreground">Email</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2025 Brady Gomez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
