import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Calendar,
  ExternalLink,
  Newspaper,
  Rocket,
  Globe,
  FileText,
  Server,
  Zap,
  Brain,
  ArrowRight,
} from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      date: "Feb. 20, 2025",
      title: "Version 1.5.1 Released",
      description: "Upgraded project with Qt 5.15 framework and OpenSSL 3.4.0 library",
      link: "https://github.com/ChessCoin032/ChessCoin032-Core-x64/releases/tag/v1.5.1",
      icon: Rocket,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "border-blue-500/20",
    },
    {
      date: "Feb. 23, 2025",
      title: "Listing on NonKYC",
      description: "ChessCoin032 now available on NonKYC exchange platform",
      link: "https://nonkyc.io/",
      icon: Globe,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderGradient: "border-green-500/20",
    },
    {
      date: "Mar. 01, 2025",
      title: "Website Update",
      description: "Major website redesign and functionality improvements",
      link: null,
      icon: Globe,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "border-purple-500/20",
    },
    {
      date: "Apr. 01, 2025",
      title: "Version 1.5.2 Release",
      description: "Latest core update with enhanced features and bug fixes",
      link: "https://github.com/ChessCoin032/ChessCoin032-Core-x64/releases/tag/v1.5.2",
      icon: Rocket,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "border-orange-500/20",
    },
    {
      date: "Apr. 19, 2025",
      title: "Electrum Server Upgrade",
      description: "Upgraded Electrum Server to Ubuntu 24.04 for better performance",
      link: null,
      icon: Server,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-500/10 to-cyan-500/10",
      borderGradient: "border-teal-500/20",
    },
    {
      date: "Apr. 19, 2025",
      title: "Live Explorer Upgrade",
      description: "Enhanced blockchain explorer with improved functionality",
      link: "https://liveexplorer.chesscoin032.com/",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      borderGradient: "border-yellow-500/20",
    },
    {
      date: "Apr. 28, 2025",
      title: "Blockchain Snapshot",
      description: "ChessCoin032 blockchain snapshot at block 2,403,626",
      link: "https://mega.nz/file/hMFSDJrZ#UqTA0b_dQk0OpC2dDjCg0ndYRPtr9L9NFWbjBBEpYdQ",
      icon: FileText,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      borderGradient: "border-indigo-500/20",
    },
    {
      date: "May. 08, 2025",
      title: "Block Explorer Update",
      description: "Enhanced block explorer with new features and improved UI",
      link: "https://explorer.chesscoin032.com/",
      icon: Globe,
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      borderGradient: "border-pink-500/20",
    },
    {
      date: "May. 31, 2025",
      title: "Whitepaper Released",
      description: "Official ChessCoin032 whitepaper now available",
      link: "https://e.pcloud.link/publink/show?code=XZrlftZ49NIFLMq9lLEEeLfvYKYubuv2IUXR",
      icon: FileText,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
      borderGradient: "border-emerald-500/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-green-600/10" />
        <div className="absolute inset-0 bg-[url('/chess-bg.png')] bg-cover bg-center opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6 animate-fadeInUp">
              <Newspaper className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Latest Updates</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-fadeInUp animate-delay-200">
              News 2025
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fadeInUp animate-delay-400">
              Stay updated with the latest ChessCoin032 developments, releases, and milestones
            </p>

            {/* Roadmap Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 animate-scaleIn animate-delay-600">
              <Brain className="w-5 h-5 text-amber-400" />
              <span className="text-lg font-semibold text-amber-300">Roadmap 2025 - ChessCoin AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {newsItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    <div className="relative p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        {/* Icon and Date */}
                        <div className="flex items-center gap-4 md:w-64 flex-shrink-0">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${item.bgGradient} border ${item.borderGradient}`}
                          >
                            {/* <IconComponent
                              className={`w-4 h-1 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                            /> */}
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{item.date}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-white transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>

                        {/* Link */}
                        {item.link && (
                          <div className="flex-shrink-0">
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${item.bgGradient} border ${item.borderGradient} text-sm font-medium hover:scale-105 transition-all duration-200 group/link`}
                            >
                              <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                                View Details
                              </span>
                              <ExternalLink
                                className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent group-hover/link:translate-x-0.5 transition-transform`}
                              />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Future Updates Teaser */}
            <div className="mt-16 text-center">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
                    <Brain className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-300">Coming Soon</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">ChessCoin AI Development</h3>

                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    ChessCoin032 is about to unveil a trailblazing AI integration. Expect visionary advancements 
                    that will transform the future of chess and crypto.                    
                  </p>

                  <div className="flex items-center justify-center gap-2 mt-6 text-amber-400">
                    <span className="text-sm font-medium">Follow our progress</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
