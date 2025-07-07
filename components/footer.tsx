import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-background border border-border rounded-lg flex items-center justify-center shadow-sm">
                <Image src="/chesscoin-logo.png" alt="ChessCoin Logo" width={24} height={24} className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold gradient-text">ChessCoin 0.32%</span>
              <div className="text-xs text-muted-foreground">Strategic Cryptocurrency</div>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            {/* <Link href="/legal-notice" className="hover:text-foreground transition-colors">
              Legal Notice
            </Link> */}
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Data Privacy Policy
            </Link>
            <span>© {currentYear} ChessCoin 0.32%. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
