"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Calendar,
  ExternalLink,
  GitBranch,
  Code,
  Trophy,
  Rocket,
  Users,
  Globe,
  Clock,
  Star,
  Zap,
  FileText,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Coffee,
  Shield,
  Coins,
  Bot,
  Flame,
  Brain,
  MessageCircle,
  TrendingUp,
  Link2,
  Server,
} from "lucide-react"

import histories from '@/data/histories.json'

// Create a mapping from icon names to actual components
const iconMap = {
  Calendar,
  ExternalLink,
  GitBranch,
  Code,
  Trophy,
  Rocket,
  Users,
  Globe,
  Clock,
  Star,
  Zap,
  FileText,
  Download,
  X,
  Smartphone,
  Coffee,
  Shield,
  Coins,
  Bot,
  Flame,
  Brain,
  MessageCircle,
  TrendingUp,
  Link2,
  Server,
}

interface HistoryEvent {
  date: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  links?: { url: string; text: string }[];
  icon: string | React.ComponentType<{ className?: string }>; // <-- allow both
  color: string;
}

interface HistoryYear {
  year: string;
  events: HistoryEvent[];
}

export default function HistoryPage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 1 // One year per page

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const historyData = histories.map((yearData: HistoryYear) => ({
    ...yearData,
    events: yearData.events.map(event => ({
      ...event,
      icon: iconMap[event.icon as keyof typeof iconMap] || Globe
    }))
  })) as HistoryYear[]

  const reviewText = `In the spring, after the hard fork, ChessCoin 0.32% was almost history and in the last few days of an exchange we were able to download the blockchain and thus ensure its continued existence.

The series of tests were positive until late summer and the conviction that we had stabilized ChessCoin 0.32% made room for itself. Until then, the new version was version 1.1.

From August/September 2020 we could win a developer for the work on ChessCoin 032% who specified the code and we able to roll it out with a new protocol as version 1.2.

Today we have made further progress than we initially thought and we are driving on sight, which offers us a framework for the continued operation of ChessCoin 0.32% without high costs.

ChessCoin 0.32% also gets its chance to take advantage of 0.0001 transaction costs.`

  // Pagination logic
  const totalPages = historyData.length
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = historyData.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingElements />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
          <div className="absolute inset-0 bg-[url('/chess-bg.png')] bg-cover bg-center opacity-20" />
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 px-6 py-2 text-sm animate-bounce-in">
              <Calendar className="w-4 h-4 mr-2" />
              ChessCoin Timeline
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block gradient-text animate-slideInLeft">History</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fadeInUp animate-delay-600">
              Discover the journey of ChessCoin from its genesis block to becoming a strategic cryptocurrency
            </p>

            {/* Pagination Info */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Badge variant="outline" className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </Badge>
              <Badge variant="outline" className="px-4 py-2">
                Year: {currentData[0]?.year}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {currentData.map((yearData, yearIndex) => (
              <div
                key={yearData.year}
                className="mb-20 animate-fadeInUp"
                style={{ animationDelay: `${yearIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-12">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">{yearData.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent ml-8"></div>
                </div>

                <div className="space-y-8 ml-8">
                  {yearData.events.map((event, eventIndex) => (
                    <Card
                      key={eventIndex}
                      className="glass hover-lift group animate-slideInRight"
                      style={{ animationDelay: `${yearIndex * 0.2 + eventIndex * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <event.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {event.date}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{event.description}</p>
                            {event.link && (
                              <Link
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                              >
                                {event.linkText || "View Link"}
                                <ExternalLink className="w-4 h-4 ml-1" />
                              </Link>
                            )}
                            {event.links && (
                              <div className="flex flex-wrap gap-4">
                                {event.links.map((linkItem, linkIndex) => (
                                  <Link
                                    key={linkIndex}
                                    href={linkItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                                  >
                                    {linkItem.text}
                                    <ExternalLink className="w-4 h-4 ml-1" />
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Review Section for 2019 */}
            {currentData[0]?.year === "2019" && (
              <Card className="glass mb-12 animate-fadeInUp">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold ml-4">Development Review</h3>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{reviewText}</p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center space-x-4 mt-16">
              <Button
                variant="outline"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex items-center space-x-2 bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className="w-10 h-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="flex items-center space-x-2 bg-transparent"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
