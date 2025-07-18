"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import {
  ExternalLink,
  TrendingUp,
  AlertTriangle,
  Shield,
  Wallet,
  DollarSign,
  BarChart3,
  Activity,
  XCircle,
} from "lucide-react"
import Link from "next/link"

export default function ExchangesPage() {
  const activeExchanges = [
    {
      name: "NonKYC.io",
      pair: "CHESS/USDC",
      url: "https://nonkyc.io/market/CHESS_USDC",
      type: "DEX",
      color: "from-blue-500 to-cyan-500",
      features: ["No KYC", "Privacy Focused", "USDC Pair"],
    },
    {
      name: "NonKYC.io",
      pair: "CHESS/USDT",
      url: "https://nonkyc.io/market/CHESS_USDT",
      type: "DEX",
      color: "from-green-500 to-emerald-500",
      features: ["No KYC", "Privacy Focused", "USDT Pair"],
    },
    {
      name: "Nofinex",
      pair: "CHESS/BTC",
      url: "https://www.nofinex.com/market/pair/CHESS-BTC.html",
      type: "CEX",
      color: "from-teal-500 to-cyan-500",
      features: ["BTC Pair", "Centralized", "High Liquidity"],
    },
    {
      name: "Nofinex",
      pair: "CHESS/USDT",
      url: "https://www.nofinex.com/market/pair/CHESS-USDT.html",
      type: "CEX",
      color: "from-blue-500 to-cyan-500",
      features: ["USDT Pair", "Centralized", "High Liquidity"],
    },
    {
      name: "Latoken",
      pair: "CHESS032/USDT",
      url: "https://latoken.com/exchange/CHESS032_USDT",
      type: "CEX",
      color: "from-purple-500 to-pink-500",
      features: ["USDT Pair", "Global Exchange", "Mobile App"],
    },
    {
      name: "Latoken",
      pair: "CHESS032/LA",
      url: "https://latoken.com/exchange/CHESS032_LA",
      type: "CEX",
      color: "from-indigo-500 to-purple-500",
      features: ["LA Token Pair", "Native Token", "Low Fees"],
    },
    {
      name: "Qutrade",
      pair: "CHESS/USDT",
      url: "https://qutrade.io/en/?market=chess_usdt",
      type: "CEX",
      color: "from-teal-500 to-cyan-500",
      features: ["USDT Pair", "Professional Trading", "API Access"],
    },
    {
      name: "Qutrade",
      pair: "CHESS/BTC",
      url: "https://qutrade.io/en/?market=chess_btc",
      type: "CEX",
      color: "from-yellow-500 to-orange-500",
      features: ["BTC Pair", "Advanced Charts", "Stop Orders"],
    },
    {
      name: "PancakeSwap",
      pair: "CHESS/BNB",
      url: "https://pancakeswap.finance/",
      type: "DEX",
      color: "from-pink-500 to-rose-500",
      features: ["BSC Network", "AMM", "Yield Farming"],
    },
    {
      name: "Uniswap",
      pair: "CHESS/ETH",
      url: "https://app.uniswap.org/",
      type: "DEX",
      color: "from-violet-500 to-purple-500",
      features: ["Ethereum", "Decentralized", "Liquidity Pools"],
    },
    {
      name: "Yobit",
      pair: "CHESS/BTC",
      url: "https://yobit.net/en/trade/CHESS/BTC",
      type: "CEX",
      color: "from-red-500 to-pink-500",
      features: ["BTC Pair", "Established Exchange", "High Volume"],
    },
  ]

  const closedExchanges = [
    { name: "Coinexchange", url: "https://www.coinexchange.io", status: "Closed" },
    { name: "Poswallet", url: "https://poswallet.com", status: "Closed" },
    { name: "Wallet Investors", url: "https://walletinvestors.com", status: "Closed" },
    { name: "Cryptopia", url: "https://www.cryptopia.co.nz", status: "Hacked/Closed" },
    { name: "Novaexchange", url: "https://novaexchange.com", status: "Closed" },
    { name: "Livecoin", url: "https://www.livecoin.net", status: "Closed" },
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
            <Badge className="mb-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border-green-500/30 px-6 py-2 animate-bounce-in">
              💱 Trading Platforms
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text animate-fadeInUp">ChessCoin Exchanges</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-300">
              Trade ChessCoin on various centralized and decentralized exchanges worldwide
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              {
                icon: TrendingUp,
                title: "Active Trading",
                desc: "Multiple pairs",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: DollarSign,
                title: "Fiat & Crypto",
                desc: "Various pairs",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: BarChart3,
                title: "High Liquidity",
                desc: "Major exchanges",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Activity,
                title: "24/7 Trading",
                desc: "Global markets",
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

      {/* Active Exchanges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 gradient-text">Active Exchanges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trade ChessCoin on these verified and active cryptocurrency exchanges
            </p>
          </div>

          <div className="grid gap-6 max-w-6xl mx-auto">
            {activeExchanges.map((exchange, index) => (
              <Card
                key={index}
                className="glass hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${exchange.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                              {exchange.name}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {exchange.type}
                            </Badge>
                            <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                              Active
                            </Badge>
                          </div>
                          <p className="text-lg font-semibold text-muted-foreground mb-3">{exchange.pair}</p>
                          <div className="flex flex-wrap gap-2">
                            {exchange.features.map((feature, featureIndex) => (
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
                      <Link href={exchange.url} target="_blank" rel="noopener noreferrer">
                        <Button
                          className={`w-full bg-gradient-to-r ${exchange.color} hover:opacity-90 text-white group-hover:scale-105 transition-transform`}
                        >
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Trade Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Warning Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-orange-500/20 bg-orange-500/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">Keep the coins in your own wallet</h3>
                    <p className="text-muted-foreground mb-4 text-lg">
                      Do not keep your ChessCoins on an exchange! Load a wallet and save it!
                    </p>
                    <p className="text-muted-foreground mb-6">
                      I don't know how many ChessCoins have already been lost, but it can be millions since 2016!
                    </p>
                    <div className="flex items-center space-x-4">
                      <Link href="/wallets">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          <Wallet className="mr-2 w-4 h-4" />
                          Download Wallet
                        </Button>
                      </Link>
                      <div className="flex items-center space-x-2 text-orange-400">
                        <Shield className="w-5 h-5" />
                        <span className="font-semibold">Your keys, your coins</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closed Exchanges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Closed/Defunct Exchanges</h3>
              <p className="text-muted-foreground">
                These exchanges are no longer operational. This serves as a reminder of why you should always use your
                own wallet.
              </p>
            </div>

            <Card className="glass">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {closedExchanges.map((exchange, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border/30">
                      <div className="flex items-center space-x-3">
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="line-through text-muted-foreground">{exchange.name}</span>
                      </div>
                      <Badge variant="destructive" className="text-xs">
                        {exchange.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 font-semibold text-center">
                    Load a wallet and save it! Don't trust exchanges with your coins.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
