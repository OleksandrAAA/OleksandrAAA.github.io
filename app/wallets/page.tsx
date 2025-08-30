"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "@/components/floating-elements"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Download,
  Monitor,
  Smartphone,
  Archive,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  Calendar,
  HardDrive,
  Cpu,
  AppWindow, 
  Cog,
} from "lucide-react"

export default function WalletsPage() {
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
              💼 ChessCoin 0.32% Wallets
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 gradient-text animate-fadeInUp">
              Secure Your ChessCoin
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp animate-delay-300">
              Choose from our range of secure wallets to store, stake, and manage your ChessCoin safely
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            {[
              {
                icon: Shield,
                title: "Secure",
                desc: "Scrypt-powered encryption for protection",
                color: "from-green-500 to-emerald-500",
              },
              { icon: Zap, title: "Fast", desc: "Quick synchronization for smooth experience", color: "from-blue-500 to-cyan-500" },
              { icon: Users, title: "Transfer", desc: "Moving it instantly, transparently", color: "from-purple-500 to-pink-500" },
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

      {/* Wallets Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* ChessCoin Core x64 GUI */}
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">ChessCoin Core x64 GUI (Wallet and Staking)</h2>
                  <Badge className="mt-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-blue-400 border-yellow-500/30">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </div>

              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">ChessCoin GUI</h3>
                        <Badge variant="secondary">1.5.3</Badge>
                        <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                                Latest
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Full-featured desktop wallet with staking capabilities for Windows x64 systems
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Staking Rewards", "Full Node", "Advanced Security", "GUI Interface"].map(
                          (feature, index) => (
                            <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <HardDrive className="w-4 h-4" />
                          <span>~150MB</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Cpu className="w-4 h-4" />
                          <span>Windows x64, Ubuntu, MacOs</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="https://github.com/ChessCoin032/ChessCoin032-Core-x64/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group-hover:scale-105 transition-transform">
                          <Download className="mr-2 w-4 h-4" />
                          Download from GitHub
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Electrum Wallet */}
            <div className="animate-fadeInUp animate-delay-200">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Electrum (Wallet)</h2>
                </div>
              </div>

              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">Electrum</h3>
                        <Badge variant="secondary">1.0.2</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Lightweight wallet with fast synchronization and advanced features
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Quick Sync", "Hardware Wallet Support", "Multi-Signature", "Cross-Platform"].map(
                          (feature, index) => (
                            <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <HardDrive className="w-4 h-4" />
                          <span>~50MB</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Cpu className="w-4 h-4" />
                          <span>Windows x64, Ubuntu, MacOs</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="https://github.com/ChessCoin032/ChessCoin032-Electrum-Clients/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group-hover:scale-105 transition-transform">
                          <Download className="mr-2 w-4 h-4" />
                          Download from GitHub
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Mobile Wallet */}
            <div className="animate-fadeInUp animate-delay-400">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Google (Smartphone and Chromebook)</h2>
                </div>
              </div>

              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                          Google Play (aab)
                        </h3>
                        <Badge variant="secondary">1.1.1</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Mobile wallet for Android devices and Chromebooks with full functionality
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Mobile Staking", "QR Code Scanner", "Push Notifications", "Touch ID"].map(
                          (feature, index) => (
                            <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>{feature}</span>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <HardDrive className="w-4 h-4" />
                          <span>~25MB</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Cpu className="w-4 h-4" />
                          <span>Android 8.0+</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="https://play.google.com/store/apps/details?id=com.electrum.chess032wallet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group-hover:scale-105 transition-transform">
                          <Download className="mr-2 w-4 h-4" />
                          Get on Play Store
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blockchain Zip File */}
            <div className="animate-fadeInUp animate-delay-600">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <Archive className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Blockchain zip file</h2>
                </div>
              </div>

              <Card className="glass hover-lift group">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                          ChessCoin 0.32% Blockchain Data
                        </h3>
                        <Badge variant="secondary">Apr.28.2025</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        Complete blockchain data for fast node synchronization and bootstrap
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <strong>Filename:</strong> ChessCoin032_blk.2403626_Apr.28.2025
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Full Blockchain", "Fast Sync", "Node Bootstrap", "All Platforms"].map((feature, index) => (
                          <div key={index} className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <HardDrive className="w-4 h-4" />
                          <span>~2.5GB</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Cpu className="w-4 h-4" />
                          <span>All Platforms</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Link
                        href="https://mega.nz/file/hMFSDJrZ#UqTA0b_dQk0OpC2dDjCg0ndYRPtr9L9NFWbjBBEpYdQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white group-hover:scale-105 transition-transform">
                          <Download className="mr-2 w-4 h-4" />
                          Download from MEGA
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ChessCoin Core x86 GUI */}
            <div className="animate-fadeInUp animate-delay-800">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">ChessCoin Core x86 GUI (Wallet and Staking)</h2>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">As Apr. 28, 2025</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    version: "1.4.5",
                    latest: true,
                    desc: "Latest x86 version with enhanced features",
                    url: "https://github.com/ChessCoin032/ChessCoin032-Core-x86/releases/tag/v1.4.5",
                  },
                  {
                    version: "1.4.4",
                    desc: "Stable release with bug fixes",
                    url: "https://github.com/ChessCoin032/ChessCoin032-Core-x86/releases/tag/v1.4.4",
                  },
                  {
                    version: "1.4.3",
                    desc: "Previous stable version",
                    url: "https://github.com/ChessCoin032/ChessCoin032-Core-x86/releases/tag/v1.4.3",
                  },
                  {
                    version: "1.4.2",
                    desc: "Legacy version for compatibility",
                    url: "https://github.com/ChessCoin032/ChessCoin032-Core-x86/releases/tag/v1.4.2",
                  },
                  {
                    version: "1.4.1",
                    desc: "Older stable release",
                    url: "https://github.com/ChessCoin032/ChessCoin032-Core-x86/releases/tag/v1.4.1",
                  },
                ].map((wallet, index) => (
                  <Card key={index} className="glass hover-lift group">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-3 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">
                              ChessCoin {wallet.version}
                            </h3>
                            <Badge variant="secondary">{wallet.version}</Badge>
                            {wallet.latest && (
                              <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30">
                                Latest
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-3">{wallet.desc}</p>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {["Staking Rewards", "Full Node", "GUI Interface"].map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-1 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-3 h-3 text-green-400" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <HardDrive className="w-4 h-4" />
                              <span>~140MB</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Cpu className="w-4 h-4" />
                              <span>Windows x86, Ubuntu, MacOs</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <Link href={wallet.url} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white group-hover:scale-105 transition-transform"
                            >
                              <Download className="mr-2 w-4 h-4" />
                              Download
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
