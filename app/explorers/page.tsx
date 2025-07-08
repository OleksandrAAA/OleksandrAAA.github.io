"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import {
  ExternalLink,
  Search,
  Globe,
  Activity,
  Database,
  TrendingUp,
  Eye,
  Clock,
  Blocks,
  Network,
  Loader2,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExplorersPage() {

  const explorers = [
    {
      name: "ChessCoin 0.32% Blockchain Explorer",
      description: "Primary blockchain explorer with comprehensive transaction and block data",
      url: "https://chainz.cryptoid.info/chess/",
      type: "Crypto ID",
      icon: Database,
      logo: "/cryptoid-logo.png",
      color: "from-blue-500 to-cyan-500",
      features: ["Transaction History", "Block Details", "Address Lookup", "Network Stats"],
      status: "Active",
    },
    {
      name: "ChessCoin 0.32% Blockchain Explorer",
      description: "Alternative explorer with advanced features and modern interface",
      url: "http://explorer.chesscoin032.com/",
      type: "elquidus",
      icon: Search,
      logo: "/chesscoin-logo.png",
      color: "from-purple-500 to-pink-500",
      features: ["Advanced Search", "API Access", "Real-time Updates", "Mobile Friendly"],
      status: "Active",
    },
    {
      name: "Block Explorer with new features",
      description: "Enhanced block explorer with cutting-edge functionality",
      url: "https://liveexplorer.chesscoin032.com/",
      type: "Block Explorer",
      icon: Blocks,
      logo: "/chesscoin-logo.png",
      color: "from-green-500 to-emerald-500",
      features: ["New Features", "Enhanced UI", "Fast Performance", "Developer Tools"],
      status: "Active",
    },
    {
      name: "Bep-20",
      description: "BEP-20 token explorer for ChessCoin on Binance Smart Chain",
      url: "https://bscscan.com/token/0x9Ca5DFa3b0b187d7F53f4ef83CA435a2Ec2e4070",
      type: "BSC Explorer",
      icon: Network,
      logo: "/bscscan-logo.png",
      color: "from-orange-500 to-red-500",
      features: ["BSC Network", "Token Analytics", "Smart Contracts", "DeFi Integration"],
      status: "Active",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingElements />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
        <div className="absolute inset-0 bg-[url('/chess-bg.png')] bg-cover bg-center opacity-20" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 px-6 py-2 animate-bounce-in">
              🔍 Blockchain Explorers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text animate-fadeInUp">Explore ChessCoin</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-300">
              Discover transactions, blocks, and network statistics with our comprehensive blockchain explorers
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: Globe,
                title: "Live Network",
                desc: "Real-time data",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Activity,
                title: "Active Blocks",
                desc: "Continuous mining",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Eye,
                title: "Transparent",
                desc: "Open blockchain",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Clock,
                title: "5min Blocks",
                desc: "Fast confirmation",
                color: "from-orange-500 to-red-500",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="glass hover-lift animate-scaleIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{stat.title}</h3>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explorers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-6xl mx-auto">
            {explorers.map((explorer, index) => (
              <Card
                key={index}
                className="glass hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-3">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0">
                          {explorer.logo ? (
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                              <Image
                                src={explorer.logo || "/placeholder.svg"}
                                alt={`${explorer.name} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                              />
                            </div>
                          ) : (
                            <div
                              className={`w-16 h-16 bg-gradient-to-br ${explorer.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                            >
                              <explorer.icon className="w-8 h-8 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                              {explorer.name}
                            </h3>
                            <Badge
                              variant="default"
                              className="bg-gradient-to-r from-yellow-500/20 to-white-500/20 text-emerald-400 border-green-500/30"
                            >
                              {explorer.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{explorer.description}</p>
                          <div className="flex items-center space-x-2 mb-4">
                            <Badge variant="outline" className="text-xs">
                              {explorer.type}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {explorer.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-1 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link href={explorer.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`w-full bg-gradient-to-r ${explorer.color} hover:opacity-90 text-white group-hover:scale-105 transition-transform`}
                        >
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Open Explorer
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Section - Now only contains Explorer Features card */}
          <div className="mt-20">
            <div className="max-w-3xl mx-auto">
              <Card className="glass hover-lift animate-fadeInUp animate-delay-800">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Explorer Features</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Real-time transaction monitoring",
                      "Detailed block information",
                      "Address balance lookup",
                      "Network hash rate tracking",
                      "Rich list and statistics",
                      "API access for developers",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}