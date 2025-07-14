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
  Mic,
} from "lucide-react"
import newsData from '@/data/news.json'

// Map icon names to actual components
const iconMap = {
  Rocket,
  Globe,
  Server,
  Zap,
  FileText,
}

interface NewsItem {
  date: string;
  title: string;
  description: string;
  link: string | null;
  icon: string;
  gradient: string;
  bgGradient: string;
  borderGradient: string;
}


export default function NewsPage() {
  // Convert the JSON data to the format expected by the component
  const newsItems = newsData.map((item: NewsItem) => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap] || Globe,
  }))

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
                            <IconComponent
                              className={`w-6 h-6 bg-gradient-to-r ${item.gradient} bg-clip-text`}
                            />
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

            {/* All News */}
            <div className="mt-16 text-center">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
                    <Mic className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-medium text-amber-300">Notification</span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    All news will be updated every day in Chat</h3>
                </div>
              </div>
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
