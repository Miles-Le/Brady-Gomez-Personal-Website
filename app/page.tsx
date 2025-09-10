"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, TrendingUp, Award, Mail, Linkedin, Github, MapPin, Heart, Target, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

export default function HomePage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const galleryPhotos = [
    "uc-davis-campus-graduation-photo.jpg",
    "economics-research-presentation.jpg",
    "hiking-trail-nature-photography.jpg",
    "swim.jpg",
    "nascar.jpg",
    "disabled.jpg",
    "uc-davis.jpg",
    "manager.jpg",
    "kayak.jpg",
  ]

  return (
    <div className="min-h-screen bg-background">
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPhoto(null)} />
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            <img
              src={selectedPhoto || "/placeholder.svg"}
              alt="Gallery photo"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <ThemeToggle />
            <div className="flex gap-3 sm:gap-6">
              <Link href="/" className="text-primary font-medium text-sm sm:text-base">
                About
              </Link>
              <Link
                href="/resume"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Personal Introduction Section */}
      <section className="py-10 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Brady Gomez</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-6">
              Facilities Coordinator
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Transforming operational challenges into efficient solutions. <br></br>
                UC Davis Economics graduate passionate about hands-on, on-the-ground work in management.
                Committed to maintaining day-to-day operations and ensuring a productive workplace environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/resume">View Resume</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">About Me</h2>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start mb-12">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full border-4 border-border bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src="brady-headshot.jpg"
                        alt="Brady Gomez - Professional headshot"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full border-2 border-background"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground text-center">Gallery</h3>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-sm mx-auto lg:max-w-none">
                    {galleryPhotos.map((photo, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg border-2 border-border bg-muted overflow-hidden cursor-pointer hover:border-primary transition-colors"
                        onClick={() => setSelectedPhoto(photo)}
                      >
                        <img
                          src={photo || "/placeholder.svg"}
                          alt={`Gallery photo ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-6">
                {/* Personal Story */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Background</h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
                    Hi, I'm Brady. I was born and raised in Yuba City, where I cultivated a strong sense of community and a passion for leadership.
                    I earned my degree in Managerial Economics from UC Davis, which provided me with a solid foundation in analytical
                    thinking and strategic decision-making. With a keen interest in managing projects and leading teams, I am dedicated
                    to driving successful outcomes and fostering collaboration in dynamic environments.
                  </p>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    I currently work as a Facilities Coordinator at Atla, a nonprofit organization dedicated to assisting disabled children.
                    In my role, I manage the maintenance and operations of our facilities to ensure a safe and welcoming environment for
                    our staff and the families we serve. I collaborate with various teams to optimize our space for programs and events,
                    contributing to our mission of providing essential support and resources to children with disabilities. My focus is on
                    creating an accessible and functional environment that enhances the overall experience for our community.
                  </p>
                </div>

                {/* Interests and Hobbies */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4"></h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-base">

                  </p>
                </div>
              </div>
            </div>

            {/* Values and Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Interests and Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground">Competitive Swim</h4>
                    <p className="text-sm text-muted-foreground">
                      My fastest lap time is 25 seconds.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Kayaking</h4>
                    <p className="text-sm text-muted-foreground">
                      I go to the wilderness a few times a year and paddle.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Formula 1</h4>
                    <p className="text-sm text-muted-foreground">
                      I love fast car! Vroom vroom.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">NFL</h4>
                    <p className="text-sm text-muted-foreground">
                      I'm a 49ers fan.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-secondary" />
                    Long-Term Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    My goal is to leverage my skills and experience in management to contribute
                    to the innovative projects and strategic initiatives of a Fortune 500 company. I
                    am passionate about aligning investment strategies with organizational objectives
                    and believe that working in such a dynamic environment would provide an unparalleled
                    opportunity to drive impactful results and contribute to meaningful growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Background Information - Education */}
            <Card className="border-border mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Educational Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">University of California, Davis</h3>
                  <p className="text-primary font-medium">Bachelor of Science in Managerial Economics</p>
                  <p className="text-sm text-muted-foreground">Graduated: 2022 • GPA: 3.7/4.0 • Cum Laude</p>
                </div>
              </CardContent>
            </Card>

            {/* Professional Achievements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Professional Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Award className="w-5 h-5 text-primary" />
                      Notable Accomplishments
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Elliot Ranch Rockets Honor Society Member</li>
                      <li>• Award Winning Senior Thesis:
                        <br/>&nbsp;&nbsp;"Why Bidenism is Based"</li>
                      <li>• Economics and Business Student Association
                        <br/>&nbsp;&nbsp;Competition Finalist</li>
                      <li>• IKEA Employee of the Month</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Key Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Econometric Modeling & Statistical Analysis</li>
                      <li>• Data Visualization (R, Python, Tableau)</li>
                      <li>• Financial Analysis & Forecasting</li>
                      <li>• Market Research & Consumer Behavior</li>
                      <li>• Policy Analysis & Economic Impact Assessment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-border bg-muted/30">
              <CardHeader>
                <CardTitle className="text-center text-xl sm:text-2xl">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground text-base sm:text-lg">
                  I'm always interested discussing work and new opportunities.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <Button asChild className="w-full sm:w-auto">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Contact Me
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                    <Link href="https://linkedin.com/in/bradygomez" className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Yuba City, California</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
