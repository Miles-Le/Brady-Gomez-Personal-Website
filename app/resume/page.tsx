import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Download, MapPin, Mail, Phone, Calendar } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ResumePage() {
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
              <Link href="/resume" className="text-primary font-medium text-sm sm:text-base">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Resume</h1>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base">
              Download my complete resume or view the details below
            </p>
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              <Download className="w-4 h-4" />
              Download PDF Resume
            </Button>
          </section>

          {/* Professional Summary */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Experienced professional with a proven track record of being goated on the job.
                Skilled in pretty much anything except cooking.
                Dedicated and detail-oriented Facilities Coordinator with a strong background in organizing and managing
                large-scale projects. Proven ability to effectively coordinate resources, streamline operations,
                and enhance facility functionality to support organizational goals. Adept at handling high-pressure
                situations with composure, ensuring timely and efficient project execution. Solid foundation in analytical 
                thinking and strategic decision-making. Committed to fostering a collaborative and productive work environment
                while maintaining a focus on sustainability and community impact.
              </p>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">Work Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-primary pl-4 sm:pl-6 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-2 top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Facilities Coordinator</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    2024 - Present
                  </div>
                </div>
                <p className="text-primary font-medium mb-3 text-sm sm:text-base">Alta • Sacramento, CA</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Led the relocation of an office to a new location, ensuring minimal disruption to operations.</li>
                  <li>• Developed detailed office floor plans to optimize space utilization and enhance workflow.</li>
                  <li>• Collaborated with team members to support project initiatives and improve overall efficiency.</li>
                  <li>• Organized a large-scale event with 1,000 attendees, managing logistics and coordination effectively.</li>
                  <li>• Communicated with contractors to ensure project standards and timelines were met.</li>
                </ul>
              </div>

              <div className="border-l-2 border-secondary pl-4 sm:pl-6 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-2 top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Office Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    2024
                  </div>
                </div>
                <p className="text-secondary font-medium mb-3 text-sm sm:text-base">Alta • Sacramento, CA</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Submitted papers in the office</li>
                  <li>• I have no idea</li>
                </ul>
              </div>

              <div className="border-l-2 border-accent pl-4 sm:pl-6 relative">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-2 top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Retail Associate</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    Jan 2023 - Mar 2024
                  </div>
                </div>
                <p className="text-accent font-medium mb-3 text-sm sm:text-base">IKEA • West Sacramento, CA</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Accepted crackheads returning furniture</li>
                  <li>• Helped people load their furniture into their car</li>
                  <li>• Helped Zendaya load stuff into her car</li>
                </ul>
              </div>

              <div className="border-l-2 border-accent pl-4 sm:pl-6 relative">
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-2 top-1"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">Park Assistant</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    Jan 2023 - Mar 2024
                  </div>
                </div>
                <p className="text-accent font-medium mb-3 text-sm sm:text-base">University of California, Riverside • Riverside, CA</p>
                <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                  <li>• Managed 40 acres of land</li>
                  <li>• And visitor relations</li>
                  <li>• Saved a kid from getting eaten by a mountain lion</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    Bachelor of Science in Managerial Economics
                  </h3>
                  <p className="text-primary font-medium text-sm sm:text-base">Univeristy of California, Davis</p>
                  <p className="text-muted-foreground text-sm">
                    • Business Government Regulation and Society
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Cooperative Business Enterprise
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Economic Development
                  </p>
                  <p className="text-muted-foreground text-sm">
                    • Intermediate Macroeconomic Theory
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                  2019 - 2022
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="mb-6 sm:mb-8">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-foreground">Skills & Competencies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Project Management</Badge>
                    <Badge variant="secondary">Data Analysis</Badge>
                    <Badge variant="secondary">Strategic Planning</Badge>
                    <Badge variant="secondary">Process Improvement</Badge>
                    <Badge variant="secondary">Team Leadership</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Communication</Badge>
                    <Badge variant="outline">Problem Solving</Badge>
                    <Badge variant="outline">Adaptability</Badge>
                    <Badge variant="outline">Critical Thinking</Badge>
                    <Badge variant="outline">Collaboration</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Certifications & Awards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Mastery of Completion | Elden Ring</h4>
                  <p className="text-muted-foreground">Steam</p>
                </div>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">2023</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Excellence Award</h4>
                  <p className="text-muted-foreground">Obama</p>
                </div>
                <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">2022</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2025 Brady Gomez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
