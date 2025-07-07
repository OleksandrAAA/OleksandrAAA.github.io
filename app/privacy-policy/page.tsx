import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Shield, Server, Database, UserCheck, AlertTriangle, Mail, Globe, Lock, Eye, FileText } from "lucide-react"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "access-hosting",
      title: "Access Data and Hosting",
      icon: Server,
      gradient: "from-blue-500 to-cyan-500",
      content: {
        main: "You can visit our website without providing any personal information. Each time a website is called up, the web server merely automatically saves a so-called server log file which, for example, contains the name of the requested file, your IP address, date and time of the call, the amount of data transmitted and the requesting provider (access data) and documents the call.",
        additional:
          "These access data are evaluated exclusively for the purpose of ensuring trouble-free operation of the site and improving our services. This serves to protect our legitimate interests in a correct presentation of our offer, which predominate within the scope of a balancing of interests. All access data will be deleted no later than seven days after the end of your visit to the site.",
        subsection: {
          title: "Third-party hosting services",
          content: [
            "As part of processing on our behalf, a third party provider provides us with hosting and website presentation services. This serves to protect our legitimate interests in a correct presentation of our offer, which predominate within the scope of a balancing of interests. All data collected in connection with the use of this website is processed on its servers. Processing on other servers only takes place in the framework described here.",
            "This service provider is located within a country of the European Union.",
          ],
        },
      },
    },
    {
      id: "data-collection",
      title: "Data Collection and Use for Contract Processing",
      icon: Database,
      gradient: "from-green-500 to-emerald-500",
      content: {
        main: "We collect personal data when you provide it to us as part of an order or when contacting us, e.g. by e-mail. We use the data provided by you to process contracts and your enquiries. After complete processing of the contract, your data will be restricted for further processing and deleted after expiry of any retention periods under tax and commercial law, unless you have expressly consented to further use of your data or we reserve the right to use data beyond this, which is permitted by law and about which we inform you in this declaration.",
      },
    },
    {
      id: "contact-rights",
      title: "Contact Possibilities and Your Rights",
      icon: UserCheck,
      gradient: "from-purple-500 to-violet-500",
      content: {
        main: "You have a right to free information about your personal data stored by us and, if applicable, a right to correction, restriction of processing, data transferability or deletion of this data.",
        additional:
          "If you have any questions regarding the collection, processing or use of your personal data, information, correction, blocking or deletion of data or revocation of consent given or objection to a specific use of data, please contact us directly via the contact data in our legal notice.",
        note: "In addition, you have a right of appeal to the competent data protection supervisory authority.",
      },
    },
    {
      id: "right-objection",
      title: "Right of Objection",
      icon: AlertTriangle,
      gradient: "from-orange-500 to-red-500",
      content: {
        main: "Insofar as we process personal data as described above in order to protect our legitimate interests, which predominate within the scope of a balance of interests, you can object to this processing with effect for the future. If the data is processed for direct marketing purposes, you can exercise this right at any time as described above. If the processing takes place for other purposes, you are only entitled to a right of objection if there are reasons arising from your particular situation.",
        additional:
          "After exercising your right of objection, we will not process your personal data further for these purposes, unless we can prove compelling reasons worthy of protection for the processing, which outweigh your interests, rights and freedoms, or if the processing serves to assert, exercise or defend legal claims.",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-blue-600/5 to-purple-600/10" />
        <div className="absolute inset-0 bg-[url('/chess-bg.png')] bg-cover bg-center opacity-5" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium animate-fadeInUp">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-fadeInUp animate-delay-200">
              Data Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp animate-delay-400">
              Thank you for your interest in our website. Below we inform you in detail about the handling of your data.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Privacy Overview */}
          <Card className="glass hover-lift mb-12 animate-fadeInUp animate-delay-600">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Commitment to Privacy</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <Eye className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">Clear information about data collection and usage</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Protection</h3>
                  <p className="text-sm text-muted-foreground">Secure handling of your personal information</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                  <UserCheck className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                  <p className="text-sm text-muted-foreground">Full control over your data and privacy settings</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon
              return (
                <Card
                  key={section.id}
                  className="glass hover-lift animate-fadeInUp"
                  style={{ animationDelay: `${800 + index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${section.gradient} flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          Section {index + 1}
                        </Badge>
                        <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">{section.content.main}</p>

                      {section.content.additional && (
                        <>
                          <Separator className="my-4" />
                          <p className="text-muted-foreground leading-relaxed">{section.content.additional}</p>
                        </>
                      )}

                      {section.content.subsection && (
                        <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50">
                          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            {section.content.subsection.title}
                          </h3>
                          <div className="space-y-3">
                            {section.content.subsection.content.map((paragraph, idx) => (
                              <p key={idx} className="text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {section.content.note && (
                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                          <p className="text-sm text-blue-300">
                            <strong>Important:</strong> {section.content.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Section */}
          <Card className="glass hover-lift mt-12 animate-fadeInUp animate-delay-1600">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Contact for Privacy Matters</h2>
              </div>

              <div className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">For privacy-related inquiries</p>
                  <a
                    href="mailto:chesscoin032@gmail.com"
                    className="text-xl font-semibold text-pink-400 hover:text-pink-300 transition-all duration-300 hover:underline"
                  >
                    chesscoin032@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/50 flex items-start gap-3">
                <FileText className="w-5 h-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    <strong>Last Updated:</strong> This privacy policy was last updated on December 2024. We may update
                    this policy from time to time to reflect changes in our practices or legal requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
