"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                <Image
                  src="/chesscoin-logo.png"
                  alt="ChessCoin Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold gradient-text">ChessCoin 0.32%</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/explorers"
              className={`relative font-medium group ${
                isActive("/explorers") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              Explorers
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive("/explorers") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/exchanges"
              className={`relative font-medium group ${
                isActive("/exchanges") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              Exchanges
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive("/exchanges") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/history"
              className={`relative font-medium group ${
                isActive("/history") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              History
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive("/history") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/news"
              className={`relative font-medium group ${
                isActive("/news") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              News
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive("/news") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/wallets"
              className={`relative font-medium group ${
                isActive("/wallets") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              } transition-colors`}
            >
              Wallets
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  isActive("/wallets") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-fadeInUp">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/explorers"
                className={`font-medium ${
                  isActive("/explorers") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Explorers
              </Link>
              <Link
                href="/exchanges"
                className={`font-medium ${
                  isActive("/exchanges") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Exchanges
              </Link>
              <Link
                href="/history"
                className={`font-medium ${
                  isActive("/history") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                History
              </Link>
              <Link
                href="/news"
                className={`font-medium ${
                  isActive("/news") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="/wallets"
                className={`font-medium ${
                  isActive("/wallets") ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Wallets
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
