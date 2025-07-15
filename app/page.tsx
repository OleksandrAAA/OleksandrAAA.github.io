"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import {
  Download,
  ExternalLink,
  TrendingUp,
  Shield,
  Zap,
  Bitcoin,
  Send,
  Twitter,
  MessageCircle,
  ArrowRight,
  Globe,
  Lock,
  Rocket,
  BarChart3,
  Coins,
  ChevronDown,
  CheckCircle,
  Key,
  Clock,
} from "lucide-react"
import Image from "next/image"

interface Settings {
  heroBackground: {
    enabled: boolean
    opacity: number
    overlay: boolean
  }
  theme: {
    defaultMode: string
  }
  animations: {
    enabled: boolean
    duration: string
  }
}

export default function ChessCoinHomepage() {
  const [scrollY, setScrollY] = useState(0)
  const [settings, setSettings] = useState<Settings>({
    heroBackground: {
      enabled: true,
      opacity: 1.0,
      overlay: true,
    },
    theme: {
      defaultMode: "system",
    },
    animations: {
      enabled: true,
      duration: "normal",
    },
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Load settings from localStorage (simulating JSON config)
    const savedSettings = localStorage.getItem("chesscoin-settings")
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings(parsedSettings)
      } catch (error) {
        console.error("Error parsing settings:", error)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingElements />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Chess Background Image */}
        {settings.heroBackground.enabled && (
          <div className="absolute inset-0 z-0">
            <Image
              src="/chess-bg.png"
              alt="Chess pieces background"
              fill
              className="object-cover"
              style={{ opacity: settings.heroBackground.opacity }}
              priority
            />
            {settings.heroBackground.overlay && (
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60"></div>
            )}
          </div>
        )}

        {/* Animated background */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-shift"></div>
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 py-32 z-20">
          <div className="text-center max-w-6xl mx-auto">
            <Badge className="mb-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30 px-6 py-2 text-sm animate-bounce-in">
              🚀 Blockchain Technology
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-8 leading-tight">
              <span className="block animate-slideInLeft">Built For The Independent Future</span>
              <span className="block gradient-text animate-slideInRight animate-delay-300">With Network Groups</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fadeInUp animate-delay-600">
              Experience the power of ChessCoin 0.32% - A cryptocurrency built on strategic thinking and
              efficient blockchain technology using Proof of Stake mechanism. Become part of the network and load your Wallet and Start blockchain synchronization.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp animate-delay-900">
              <Link href="/wallets">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Wallet
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link
                href="/whitepaper_chesscoin032_with_watermark.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover-lift bg-transparent"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Whitepaper
                </Button>
              </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp animate-delay-1000">
              {[
                { icon: TrendingUp, value: "0.32%", label: "PoS Reward", color: "from-green-500 to-emerald-500" },
                { icon: Clock, value: "5min", label: "Block Time", color: "from-blue-500 to-cyan-500" },
                { icon: CheckCircle, value: "8", label: "Confirmations", color: "from-purple-500 to-pink-500" },
                { icon: Key, value: "scrypt", label: "Algorithm", color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="glass hover-lift animate-scaleIn"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30">
              Why Choose ChessCoin 0.32%
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">Built for the Future</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ChessCoin 0.32% combines strategic thinking with cutting-edge blockchain technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Rocket,
                title: "Lightning Fast",
                description: "21,000 transactions per block with 5-minute confirmation times",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Lock,
                title: "Ultra Secure",
                description: "Advanced Proof of Stake consensus with 8 confirmations",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Coins,
                title: "Strategic Rewards",
                description: "Earn 0.32% rewards through our innovative staking mechanism",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="glass hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft">
              <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30">
                About ChessCoin 0.32%
              </Badge>
              <h3 className="text-4xl font-bold mb-6">Strategic Cryptocurrency for the Future</h3>
              <p className="text-xl text-muted-foreground mb-8">
                ChessCoin 0.32% is a cryptocurrency that uses the PoS (proof of stake) mechanism to create new blocks.
              </p>

              <div className="space-y-4">
                {[
                  "8 confirmations - Blocktime 5min - 0.32% PoS - 21000 transactions per block",
                  "Transactions cost by Wallet 0.0001 Chess per each kb",                  
                  "The Coin Reward is 0.32%",
                  "Consensus Mechanism - Algorithm Scrypt (PoW) + Proof of Stake (PoS)"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slideInRight">
              <Card className="glass p-8 hover-lift">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      {
                        icon: BarChart3,
                        title: "High Performance",
                        desc: "21,000 TPS",
                        color: "from-green-500 to-emerald-500",
                      },
                      {
                        icon: Shield,
                        title: "Secure PoS",
                        desc: "Advanced Security",
                        color: "from-blue-500 to-cyan-500",
                      },
                      { icon: Zap, title: "Fast Blocks", desc: "5 Min Blocks", color: "from-purple-500 to-pink-500" },
                      {
                        icon: Globe,
                        title: "Global Network",
                        desc: "Worldwide Access",
                        color: "from-orange-500 to-red-500",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="text-center group animate-scaleIn"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Information Systems */}
      <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30">
              Ecosystem
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">Information Systems</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access ChessCoin 0.32% through various platforms and tools
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              {
                name: "Blockchain Explorer",
                image: "/blockchain-explorer-icon.png",
                url: "https://chainz.cryptoid.info/chess/",
              },
              {
                name: "CoinGecko",
                image: "/coingecko-icon.png",
                url: "https://www.coingecko.com/en/coins/chesscoin-0-32",
              },
              {
                name: "BSC",
                image: "/coinmarketcap-icon.png",
                url: "https://bscscan.com/token/0x9ca5dfa3b0b187d7f53f4ef83ca435a2ec2e4070",
              },
              {
                name: "CoinPaprika",
                image: "/nomics-icon.png",
                url: "https://coinpaprika.com/coin/chess-chesscoin/exchanges",
              },
              {
                name: "Gecko Terminal",
                image: "/cryptocompare-icon.png",
                url: "https://www.geckoterminal.com/bsc/pools/0xa2e0345ae1b6f81ed9df55a7a29813b33e618da9",
              },
              {
                name: "CMC",
                image: "/terminal-icon.png",
                url: "https://coinmarketcap.com/dexscan/de/bsc/0xa2e0345ae1b6f81ed9df55a7a29813b33e618da9/",
              },
              { name: "GitHub", image: "/github-icon.png", url: "https://github.com/chesscoin032" },
            ].map((item, index) => (
              <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="glass hover-lift animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden bg-background/50">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium group-hover:text-blue-400 transition-colors">{item.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-400 border-pink-500/30">
              Community
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with ChessCoin 0.32% community across social platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Bitcoin Forum",
                icon: Bitcoin,
                color: "from-orange-500 to-yellow-500",
                url: "https://bitcointalk.org/index.php?topic=5275402.0",
              },
              { name: "Telegram Chat", icon: Send, color: "from-blue-500 to-cyan-500", url: "https://t.me/Chess032" },
              {
                name: "Twitter",
                icon: Twitter,
                color: "from-sky-500 to-blue-500",
                url: "https://twitter.com/032ChessCoin",
              },
              {
                name: "Discord",
                icon: MessageCircle,
                color: "from-indigo-500 to-purple-500",
                url: "https://discord.gg/CHyGfjU7Vj",
              },
            ].map((item, index) => (
              <Link key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="glass hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform animate-pulse-glow`}
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Payment System */}
      {/* <section className="py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30">
                Payment Integration
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">Payment System</h2>
              <p className="text-xl text-muted-foreground">
                With{" "}
                <Link
                  href="https://ivendpay.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold underline"
                >
                  IvendPay
                </Link>
                , you can use your ChessCoin 0.32% to pay in real life.
              </p>
            </div>

            <Card className="glass hover-lift">
              <CardContent className="p-8">
                <div className="aspect-video bg-muted/50 rounded-2xl overflow-hidden mb-8 border border-border/50">
                  <iframe
                    src="https://www.youtube.com/embed/HqahnKH4gHI"
                    title="ChessCoin Payment Demo"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Payment Demo Video</h3>
                  <p className="text-muted-foreground">See ChessCoin 0.32% payments in action with IvendPay</p>
                </div>

                <div className="flex justify-center">
                  <Link href="https://ivendpay.com/" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-2xl shadow-lg group-hover:scale-105 transition-transform hover-lift">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                        <Image
                          src="/ivendpay-logo.png"
                          alt="IvendPay"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg">IvendPay</div>
                        <div className="text-blue-100 text-sm">Payment Partner</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-shift"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Download the whitepaper and join the ChessCoin 0.32% Network
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/whitepaper_chesscoin032_with_watermark.pdf"
                download="ChessCoin_Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg animate-pulse-glow"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Whitepaper
                </Button>
              </Link>
              <Link
                href="/whitepaper_chesscoin032_with_watermark.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 hover-lift bg-transparent"
                >
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Whitepaper
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
