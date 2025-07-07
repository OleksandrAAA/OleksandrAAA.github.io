import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, User, Building } from "lucide-react"

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-orange-600/10" />
        <div className="absolute inset-0 bg-[url('/chess-bg.png')] bg-cover bg-center opacity-5" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium animate-fadeInUp">
              Legal Information
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fadeInUp animate-delay-200">
              Legal Notice
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-400">
              Transparency and compliance information for ChessCoin 0.32%
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Responsibility Section */}
          <Card className="glass hover-lift mb-8 animate-fadeInUp animate-delay-600">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Website Responsibility</h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                The following entity is responsible for the content and operation of this website:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Person */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Responsible Person</p>
                      <p className="text-lg font-semibold text-foreground">Dipl.-Päd. Uwe Woelke</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <div className="space-y-1">
                        <p className="text-lg font-medium text-foreground">Kurmainzerstr 117</p>
                        <p className="text-lg font-medium text-foreground">65936 Frankfurt am Main</p>
                        <p className="text-sm text-muted-foreground">Germany</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="glass hover-lift animate-fadeInUp animate-delay-800">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Address</p>
                  <a
                    href="mailto:chesscoin032@gmail.com"
                    className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-all duration-300 hover:underline"
                  >
                    chesscoin032@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This contact information is provided for legal compliance and general
                  inquiries. For technical support or specific questions about ChessCoin, please use the appropriate
                  channels.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
