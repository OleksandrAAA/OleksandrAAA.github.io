"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Download, Smartphone, Monitor, Archive } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WalletsDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const walletCategories = [
    {
      title: "Desktop Wallets",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      wallets: [
        { name: "ChessCoin Core x64 GUI", desc: "Wallet and Staking", url: "#", featured: true },
        { name: "ChessCoin Core x86 GUI", desc: "Wallet and Staking", url: "#" },
        { name: "Electrum Wallet", desc: "Lightweight Client", url: "#" },
      ],
    },
    {
      title: "Mobile Wallets",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      wallets: [{ name: "Google Play Store", desc: "Android App", url: "#" }],
    },
    {
      title: "Blockchain Data",
      icon: Archive,
      color: "from-orange-500 to-red-500",
      wallets: [{ name: "Blockchain Zip File", desc: "Full Node Data", url: "#" }],
    },
  ]

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center space-x-1"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Wallets</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-96 z-50 animate-fadeInUp"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Card className="glass border-border/50 shadow-2xl">
            <CardContent className="p-6">
              <div className="space-y-6">
                {walletCategories.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}
                      >
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-semibold text-sm">{category.title}</h3>
                    </div>
                    <div className="space-y-2 ml-11">
                      {category.wallets.map((wallet, walletIndex) => (
                        <Link
                          key={walletIndex}
                          href="/wallets"
                          className="block p-2 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">
                                  {wallet.name}
                                </span>
                                {wallet.featured && (
                                  <Badge variant="secondary" className="text-xs">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground">{wallet.desc}</p>
                            </div>
                            <Download className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <Link href="/wallets">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    View All Wallets
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
