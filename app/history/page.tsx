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

export default function HistoryPage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 1 // One year per page

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const historyData = [
    {
      year: "2016",
      events: [
        {
          date: "June 5, 2016",
          title: "First Block",
          description: "Genesis block of ChessCoin was mined",
          link: "https://chainz.cryptoid.info/chess/block.dws?000003129e4a9316e84d8f04e98ce252697230058a3d2bcfae16ed58b21252a6.htm",
          linkText: "View Genesis Block",
          icon: Rocket,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "June 7, 2016",
          title: "First Source Code Release",
          description: "ChessCoin 1.0 was released",
          link: "https://github.com/COINFORCHESS/ChessCoin",
          linkText: "View on GitHub",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "June 13, 2016",
          title: "First Message",
          description: "Initial community announcement on BitcoinTalk",
          link: "https://bitcointalk.org/index.php?topic=1510517.msg15194368#msg15194368",
          linkText: "View Original Post",
          icon: Users,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "July 3, 2016",
          title: "New Design & Logo",
          description: "ChessCoin 1.0 design was published and secured on GitHub",
          link: "https://github.com/AKKPP/CHESS_OLD_GUI/releases",
          linkText: "View Releases",
          icon: Star,
          color: "from-orange-500 to-red-500",
        },
      ],
    },
    {
      year: "2019",
      events: [
        {
          date: "Sept. 28, 2019",
          title: "Hard Fork to ChessCoin 1.1",
          description: "Major protocol upgrade implemented",
          icon: GitBranch,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Protocol Conversion",
          title: "OpenSSL 1.0.1l Upgrade",
          description: "Berkeley DB 4.8.30 - Enhanced security and performance",
          icon: Zap,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Block 1999793",
          title: "Automatic Match",
          description: "All blocks before hard fork automatically match to ChessCoin 0.32%",
          icon: Globe,
          color: "from-green-500 to-teal-500",
        },
      ],
    },
    {
      year: "2020",
      events: [
        {
          date: "Aug./Sept. 2020",
          title: "ChessCoin 1.2 Release",
          description: "New design and logo for ChessCoin 1.2 - Source Code",
          link: "https://github.com/AKKPP/ChessCoin",
          linkText: "View Repository",
          icon: Star,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Protocol Update",
          title: "OpenSSL 1.0.2u Upgrade",
          description: "Berkeley DB 6.0.20 - libpng 1.6.15 - boost 1.57.0",
          icon: Zap,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Cooperation",
          title: "Client Cooperation",
          description: "Enhanced client cooperation features",
          link: "https://github.com/AKKPP/ChessCoin/releases/tag/v1.2.1",
          linkText: "View Release v1.2.1",
          icon: Users,
          color: "from-emerald-500 to-green-500",
        },
      ],
    },
    {
      year: "2021",
      events: [
        {
          date: "Feb. 2021",
          title: "Maximum Supply Announcement",
          description:
            "The maximum supply for organization / groups / members is 350,000 ChessCoins for free.Chess-Computer moneysupply ~48 Mio. Chess.",
          icon: Trophy,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Feb. 24, 2021",
          title: "New Website & Chess Computer",
          description: "Chess Computer online launch",
          icon: Globe,
          color: "from-purple-500 to-indigo-500",
        },
        {
          date: "Mar. 19, 2021",
          title: "ChessCoin032 Team on Lichess",
          description: "Official team presence established on Lichess platform",
          link: "https://lichess.org/team/chesscoin032",
          linkText: "Join Team on Lichess",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Mar. 28, 2021",
          title: "Wallet with Blockchain",
          description: "Integrated wallet solution included",
          link: "https://github.com/AKKPP/ChessCoin/releases",
          linkText: "Download Wallet",
          icon: Zap,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "May 21, 2021",
          title: "ChessCoin032 Team Arena",
          description: "First official tournament on Lichess platform",
          link: "https://lichess.org/tournament/vHtOSOG1",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "June 18, 2021",
          title: "ChessCoin032 Team Arena",
          description: "Second official tournament on Lichess platform",
          link: "https://lichess.org/tournament/x7pMM9CQ",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-red-500 to-pink-500",
        },
        {
          date: "June 30, 2021",
          title: "Semi-annual Report",
          description: "Comprehensive mid-year progress report and statistics",
          link: "https://docs.google.com/spreadsheets/d/126C15Drx1fLh54KWmM4T3q5Lm0Ip3J6-WY9f2YnkwQ8/edit#gid=1235817287",
          linkText: "View Report",
          icon: FileText,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Sep. 06, 2021",
          title: "New Tournament Organization",
          description: "1st round - New tournament structure implemented",
          link: "https://lichess.org/tournament/0sXjtyrs",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-purple-500 to-blue-500",
        },
        {
          date: "Sep. 20, 2021",
          title: "Tournament - 2nd Round",
          description: "Second round of the new tournament series",
          link: "https://lichess.org/tournament/ovVRANcd",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Sep. 25, 2021",
          title: "First Birthday",
          description: "ChessCoin 1.2 has been active for a year - Milestone celebration",
          icon: Star,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Sep. 27, 2021",
          title: "Tournament - 3rd Round",
          description: "Third round of the tournament series",
          link: "https://lichess.org/tournament/wmLUJR7u",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Sep. 28, 2021",
          title: "Second Block Explorer",
          description: "Second block explorer has started on GitHub",
          links: [
            {
              url: "http://explorer.chesscoin032.com/",
              text: "Visit Explorer",
            },
            {
              url: "https://github.com/AKKPP/eiquidus",
              text: "View on GitHub",
            },
          ],
          icon: Globe,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Oct. 04, 2021",
          title: "Tournament - 4th Round",
          description: "Fourth round of the tournament series",
          link: "https://lichess.org/tournament/1J7DQXUM",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-pink-500 to-red-500",
        },
        {
          date: "Oct. 11, 2021",
          title: "Tournament - 5th Round",
          description: "Fifth round of the tournament series",
          link: "https://lichess.org/tournament/AId5Jhu0",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-orange-500 to-yellow-500",
        },
        {
          date: "Oct. 18, 2021",
          title: "Tournament - 6th Round",
          description: "Sixth round of the tournament series",
          link: "https://lichess.org/tournament/gIxH4973",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-teal-500 to-green-500",
        },
        {
          date: "Oct. 21, 2021",
          title: "ChessCoin 1.3 Released",
          description: "Major version update with enhanced features",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.3.1",
          linkText: "View Release",
          icon: Code,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Oct. 25, 2021",
          title: "Tournament - 7th Round",
          description: "Seventh round of the tournament series",
          link: "https://lichess.org/tournament/IxKdCJ7O",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Nov. 01, 2021",
          title: "Tournament - 8th Round",
          description: "Eighth round of the tournament series",
          link: "https://lichess.org/tournament/05bh6BRD",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-red-500 to-orange-500",
        },
        {
          date: "Nov. 08, 2021",
          title: "Tournament - 9th Round",
          description: "Ninth round of the tournament series",
          link: "https://lichess.org/tournament/xAiiFIxf",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-yellow-500 to-green-500",
        },
        {
          date: "Nov. 11, 2021",
          title: "ChessCoin 1.4 Released",
          description: "Latest version with improved stability and features",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.1",
          linkText: "View Release",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Nov. 15, 2021",
          title: "Tournament - 10th Round",
          description: "Tenth round cancelled",
          link: "https://lichess.org/tournament/KVUSf3zJ",
          linkText: "View Tournament (Cancelled)",
          icon: X,
          color: "from-gray-500 to-gray-600",
        },
        {
          date: "Dec. 1, 2021",
          title: "ChessCoin Bootstrap Release",
          description: "ChessCoin032_bootstrap_blk2139021_Nov_30_2021.zip for ChessCoin 1.2.1",
          link: "https://mega.nz/file/EBNhQKbC#4HdKoE63vnIZ7Rwb5bAPHf9UD2Xjktu0Y5hIyF_MKy4",
          linkText: "Download Bootstrap",
          icon: Download,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Dec. 18, 2021",
          title: "ChessCoin 1.4.1 Bootstrap",
          description: "ChessCoin032_1.4.1_blk.2142779_Dec.18.2021.zip for ChessCoin 1.4.1",
          link: "https://mega.nz/file/5E9SCT7Q#8H7-BTwqaM4F89Z0n9qzquHlMV1tJkBvhIA8o4nbnWM",
          linkText: "Download Bootstrap",
          icon: Download,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Dec. 21, 2021",
          title: "ChessCoin 1.4.1 Released",
          description: "Final release of the year with bug fixes and optimizations",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.1",
          linkText: "View Release",
          icon: Code,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Dec. 30, 2021",
          title: "Chess Coin as Currency",
          description: "ChessCoin 032 is simple, practical and pragmatic!",
          icon: Star,
          color: "from-pink-500 to-purple-500",
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          date: "Dec. 18, 2021",
          title: "ChessCoin032_1.4.1_blk2142779_Dec.18.2021.zip",
          description: "Bootstrap file for ChessCoin 1.4.1",
          link: "https://mega.nz/file/5E9SCT7Q#8H7-BTwqaM4F89Z0n9qzquHlMV1tJkBvhIA8o4nbnWM",
          linkText: "Download",
          icon: Download,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Dec. 21, 2021",
          title: "ChessCoin 1.4.1 Released",
          description: "Final version release with improvements",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.1",
          linkText: "View Release",
          icon: Code,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Dec. 30, 2021",
          title: "Chess Coin as Currency",
          description: "ChessCoin 032 is simple, practical and pragmatic!",
          icon: Coins,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Jan. 14, 2022",
          title: "Added coinpaprika",
          description: "ChessCoin listed on CoinPaprika platform",
          link: "https://coinpaprika.com/de/coin/chess-chesscoin/",
          linkText: "View on CoinPaprika",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Jan. 14, 2022",
          title: "Added cryptoid",
          description: "Enhanced blockchain explorer integration",
          link: "https://chainz.cryptoid.info/chess/",
          linkText: "View Explorer",
          icon: Globe,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Feb. 17, 2022",
          title: "First Deposit to Electrum Client",
          description: "First deposit to the Electrum client on Block 2155459",
          link: "https://chainz.cryptoid.info/chess/block.dws?2155459.htm",
          linkText: "View Block",
          icon: Zap,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Mar. 03, 2022",
          title: "First Android Client Transaction",
          description: "First deposit and withdrawal to the Android client on Block 2158228",
          link: "https://chainz.cryptoid.info/chess/address.dws?CUwn4Sk7RCTNJfSrFmVqKJo3vEtKsoxLa1.htm",
          linkText: "View Block",
          icon: Smartphone,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Mar. 15, 2022",
          title: "Update on GitHub",
          description: "Major repository updates and improvements",
          link: "https://github.com/AKKPP?tab=repositories",
          linkText: "View Updates",
          icon: Code,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Mar. 23, 2022",
          title: "Listed on Dex Trade",
          description: "ChessCoin now available for trading on Dex Trade exchange",
          icon: Globe,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Mar. 31, 2022",
          title: "ChessCoin032_Version_1.4_blk2164200_Mar.31.2022.zip",
          description: "Bootstrap update for version 1.4",
          link: "https://mega.nz/file/oJ8BQKpB#Cej_efQJ6jxm7aOyteWD5ezaHi6zlb8u24YXjZ48okY",
          linkText: "Download Bootstrap",
          icon: Download,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Mar. 31, 2022",
          title: "ChessCoin032 Electrum Wallet",
          description: "Lightweight Electrum wallet implementation",
          link: "https://github.com/ChessCoin032/ChessCoin032-Electrum-Clients/releases/tag/v1.0.1",
          linkText: "Download Wallet",
          icon: Shield,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Mar. 31, 2022",
          title: "Android Wallet (apk)",
          description: "Mobile Android wallet application released",
          link: "https://github.com/AKKPP/ChessCoin032-Smartphone-Wallet-for-Android-and-iOS-/releases/tag/v1.0.1",
          linkText: "Download APK",
          icon: Smartphone,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Mar. 31, 2022",
          title: "Google Play (aab)",
          description: "ChessCoin wallet available on Google Play Store",
          link: "https://play.google.com/store/apps/details?id=org.electrum.chesscoin",
          linkText: "View on Play Store",
          icon: Smartphone,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Apr. 03, 2022",
          title: "Online Wallet with PoS Staking",
          description: "Web-based wallet with integrated staking functionality",
          link: "https://beehivewallet.link/",
          linkText: "Access Wallet",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Apr. 11, 2022",
          title: "Beehive Multi-Coin Wallet Users",
          description: "Airdrop for all Beehive Multi-Coin Wallet Users (1789 Active Users)",
          link: "https://beehivewallet.link/",
          linkText: "Learn More",
          icon: Users,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "May 03, 2022",
          title: "Website Dark Mode Update",
          description: "Update website to dark mode for better user experience",
          icon: Globe,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "May 14, 2022",
          title: "STEX.com Delisting Announcement",
          description: "Announcement that ChessCoin 032 will be delisted from STEX.com",
          link: "https://app.stex.com/en/login",
          linkText: "View Exchange",
          icon: Globe,
          color: "from-red-500 to-pink-500",
        },
        {
          date: "May 31, 2022",
          title: "Push Server Implementation",
          description: "Push Server built, installed, tested and started!",
          icon: Zap,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "June 16, 2022",
          title: "ChessCoin032_bootstrap1.4_blk2180204_June16.2022.zip",
          description: "Latest bootstrap file for faster synchronization",
          link: "https://mega.nz/file/4BkXEY6L#NkBOCsxh0dg0QL3PxmEnG1UK_8Fcvzt9RO4ENOx-by0",
          linkText: "Download Bootstrap",
          icon: Download,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "June 18, 2022",
          title: "Chess Tournament Sponsorship",
          description: "ChessCoin032 is a sponsor of a chess tournament! Live tournament",
          link: "https://www.chessmail.de/forum/topic.html?key=8392331208824783&sv=8",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "June 30, 2022",
          title: "Chromebook App Completion",
          description: "We have now also finished our app for the Chromebook too - Chromebook too",
          link: "https://play.google.com/store/apps/details?id=com.electrum.chess032wallet",
          linkText: "View Chrome App",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Aug. 20, 2022",
          title: "Google Play Update",
          description: "Google Play (aab) + Chromebook Update... blp21 module...",
          link: "https://play.google.com/store/apps/details?id=com.electrum.chess032wallet",
          linkText: "View Update",
          icon: Smartphone,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Aug. 30, 2022",
          title: "Added on IvendPay",
          description: "ChessCoin032 integrated with IvendPay payment system",
          link: "https://ivendpay.com/",
          linkText: "View IvendPay",
          icon: Coins,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Sept. 03, 2022",
          title: "Version 1.4.2 Released",
          description: "Latest version with bug fixes and improvements",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.2",
          linkText: "Download v1.4.2",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Sept. 14, 2022",
          title: "Added to blockspot.io",
          description: "ChessCoin032 listed on blockspot.io platform",
          link: "https://blockspot.io/coin/chesscoin-0-32/",
          linkText: "View on Blockspot",
          icon: Globe,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Sept. 18, 2022",
          title: "Google Play Dark Mode Upgrade",
          description: "Upgrade (Dark Mode) Google Play (aab)",
          link: "https://play.google.com/store/apps/details?id=com.electrum.chess032wallet",
          linkText: "View App",
          icon: Smartphone,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Oct. 17, 2022",
          title: "First Coffee Purchase with ChessCoin",
          description: "First Coffee with ChessCoin at a Shop...",
          link: "https://www.youtube.com/watch?v=HqahnKH4gHI",
          linkText: "View",
          icon: Coffee,
          color: "from-orange-500 to-yellow-500",
        },
        {
          date: "Sept-Oct. 2022",
          title: "Raspberry Pi & iOS Development",
          description: "Debian version for Raspberry, and iOS version with Apple Watch, both not finished yet.",
          icon: Code,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Nov. 22, 2022",
          title: "Wallet Upgrade - RPC IP Addresses",
          description: "Wallet Upgrade Updated to allow IP addresses for RPC",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.3",
          linkText: "View Release v1.4.3",
          icon: Zap,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Nov. 22, 2022",
          title: "Coinsbit.io Listing",
          description: "Listing on Coinsbit.io exchange",
          link: "https://coinsbit.io/de/trade/CHESS_USDT",
          linkText: "Trade on Coinsbit",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Dec. 02, 2022",
          title: "Latoken Listing",
          description: "Listing on Latoken exchange",
          link: "https://latoken.com/exchange/CHESS032_USDT",
          linkText: "Trade on Latoken",
          icon: Globe,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Dec. 09, 2022",
          title: "Latoken Staking Available",
          description: "Stake ChessCoin (Chess032) on Latoken",
          link: "https://latoken.com/staking/fixed/CHESS032_fixed",
          linkText: "Start Staking",
          icon: Coins,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Dec. 25, 2022",
          title: "ExchangeAssets Listing",
          description: "Listing on ExchangeAssets platform",
          link: "https://exchange-assets.com/en/?market=chess_usdt",
          linkText: "Trade on ExchangeAssets",
          icon: Globe,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Dec. 25, 2022",
          title: "Cryptkeyper Payment Integration",
          description: "ChessCoin was accepted as a payment method on cryptkeyper",
          link: "https://cryptkeyper.org/",
          linkText: "Visit Cryptkeyper",
          icon: Coins,
          color: "from-pink-500 to-rose-500",
        },
      ],
    },
    {
      year: "2023",
      events: [
        {
          date: "Jan. 05, 2023",
          title: "POS pool on ExchangeAssets",
          description: "ChessCoin staking pool launched on ExchangeAssets platform",
          link: "https://exchange-assets.com/en/?pospool",
          linkText: "View POS Pool",
          icon: Coins,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Jan. 13, 2023",
          title: "Chinese Community Video",
          description: "For the Chinese community",
          link: "https://www.youtube.com/watch?v=4Z031LFCpCE",
          linkText: "Watch Video",
          icon: Globe,
          color: "from-red-500 to-pink-500",
        },
        {
          date: "Jan. 22, 2023",
          title: "Japanese Community Video",
          description: "For the Japanese community",
          link: "https://www.youtube.com/watch?v=d6Gv69u32HQ",
          linkText: "Watch Video",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Jan. 23, 2023",
          title: "Version 1.4.4 Released",
          description: "Latest version with improvements and bug fixes",
          link: "https://github.com/AKKPP/ChessCoin032/releases/tag/v1.4.4",
          linkText: "Download v1.4.4",
          icon: Code,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Jan. 27, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/0pHVImKd",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Jan. 30, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/hxOtIrNP",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Feb. 06, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/p6WyLk2g",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Feb. 07, 2023",
          title: "iOS Smartphone Wallet TestFlight",
          description:
            "iOS Smartphone Wallet (no watchOS) with TestFlight (beta version) - Apple account required for beta testing",
          icon: Smartphone,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Feb. 13, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/xMLiaWY1",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Feb. 19, 2023",
          title: "Android App v1.0.6",
          description: "Fixed screen capture bug and implemented with CoinGecko integration",
          link: "https://play.google.com/store/apps/details?id=com.electrum.chess032wallet",
          linkText: "Download from Play Store",
          icon: Smartphone,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Feb. 20, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/qNyfIovE",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Feb. 27, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/DIchctKo",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Mar. 06, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/CiWWQ9Bb",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Mar. 13, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/dylTq0ji",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-teal-500 to-green-500",
        },
        {
          date: "Mar. 20, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/qTAh4YLM",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-red-500 to-pink-500",
        },
        {
          date: "Mar. 27, 2023",
          title: "ChessCoin032 Chill Out Arena",
          description: "Matchday tournament event",
          link: "https://lichess.org/tournament/ObEucFrY",
          linkText: "View Tournament",
          icon: Trophy,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "May 15, 2023",
          title: "Version 1.4.5 Testing",
          description: "Since March - testing version 1.4.5 in both 32-bit and 64-bit version with cache setting",
          icon: Code,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "May 15, 2023",
          title: "New Bootstrap Created",
          description: "Created new bootstrap blk.2251600_May.15.2023",
          icon: Download,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "July 10, 2023",
          title: "New Windows Version 1.4.5",
          description: "New Windows version released with new features",
          link: "https://github.com/AKKPP/1.4.5-ChessCoin032-x86/releases/tag/v1.4.5",
          linkText: "Download v1.4.5 x86",
          icon: Code,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "July 12, 2023",
          title: "Version 1.4.5 x64 Release",
          description: "64-bit version released",
          link: "https://github.com/AKKPP/1.4.5-ChessCoin032-x64/releases/tag/v1.4.5",
          linkText: "Download v1.4.5 x64",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Aug. 01, 2023",
          title: "Raspberry Wallet Completed",
          description: "Raspberry Wallet Version 1.4.5.5 x64 and Version 1.4.5.5 x86 (32 bit) completed",
          links: [
            {
              url: "https://github.com/AKKPP/1.4.5-ChessCoin032-x64/releases/tag/v1.4.5",
              text: "Download x64",
            },
            {
              url: "https://github.com/AKKPP/1.4.5-ChessCoin032-x86/releases/tag/v1.4.5",
              text: "Download x86",
            },
          ],
          icon: Shield,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Aug. 19, 2023",
          title: "Google Play Update v1.0.6",
          description: "Update Version 1.0.6 Google Play (aab) + Chromebook",
          link: "https://play.google.com/store/apps/details?id=com.electrum.chess032wallet&pcampaignid=web_share",
          linkText: "View on Play Store",
          icon: Smartphone,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Aug. 25, 2023",
          title: "Electrum Version 1.0.2",
          description: "Update Electrum Version 1.0.2",
          link: "https://github.com/ChessCoin032/ChessCoin032-Electrum-Clients/releases/tag/v1.0.2",
          linkText: "Download Electrum v1.0.2",
          icon: Zap,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Sep. 13, 2023",
          title: "Second ChessCoin Explorer",
          description: "Second ChessCoin 0.32% Explorer eIquidus Explorer v1.10.0 tested and released",
          link: "http://explorer.chesscoin032.com/",
          linkText: "Visit Explorer",
          icon: Globe,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Sep. 20, 2023",
          title: "Block Explorer Update",
          description: "Another Block Explorer with new features released",
          link: "https://liveexplorer.chesscoin032.com/",
          linkText: "View Live Explorer",
          icon: Globe,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Oct. 28, 2023",
          title: "ChessCoinWeb Browser Ubuntu",
          description: "The final ChessCoinWeb browser has been completed for Ubuntu",
          link: "https://github.com/AKKPP/ChessCoinWeb-Browser",
          linkText: "View ChessCoinWeb Browser",
          icon: Globe,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Nov. 11, 2023",
          title: "ChessCoinWeb Browser Mac Apple Chip",
          description: "ChessCoinWeb browser for Macs with Apple Chip",
          link: "https://github.com/AKKPP/ChessCoinWeb-Browser/releases/tag/v1.0.0",
          linkText: "Download for Mac Apple Chip",
          icon: Globe,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Nov. 21, 2023",
          title: "ChessCoinWeb Browser Mac Intel",
          description: "ChessCoinWeb browser for Macs with Intel Chip",
          links: [
            {
              url: "https://github.com/AKKPP/ChessCoinWeb-Browser/releases/tag/v1.0.0",
              text: "GitHub Release",
            },
            {
              url: "https://update.chesscoin032.com:1032/downloads/",
              text: "Direct Download",
            },
          ],
          icon: Globe,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Nov. 21, 2023",
          title: "Bootstrap Update",
          description: "Created new bootstrap blk.2291961_Nov.22.2023.zip",
          link: "https://mega.nz/file/kR1TgTzB#YOsD7ITKTw05OrK3VT4OyM2uSN4OlJA2hKv9gIIkIl4",
          linkText: "Download Bootstrap",
          icon: Download,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Dec. 08, 2023",
          title: "ChessCoinWeb Windows",
          description: "ChessCoinWeb browser for Windows",
          link: "https://github.com/AKKPP/ChessCoinWeb-Browser/releases/tag/v1.0.0",
          linkText: "Download for Windows",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Dec. 15, 2023",
          title: "Electrum Client Mac Update",
          description: "Update Electrum Client for Mac with Intel Chip and Mac with Apple Chip",
          link: "https://github.com/ChessCoin032/ChessCoin032-Electrum-Clients/releases/tag/v1.0.2",
          linkText: "Download Mac Electrum",
          icon: Zap,
          color: "from-cyan-500 to-blue-500",
        },
      ],
    },
    {
      year: "2024",
      events: [
        {
          date: "Jan. 01, 2024",
          title: "Happy New Year 2024",
          description: "Celebrating the new year with exciting developments ahead for ChessCoin",
          icon: Star,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Jan. 06, 2024",
          title: "Coinsbit.io Support Partnership",
          description: "Support of Coinsbit.io was hired by ChessCoin for enhanced exchange services",
          icon: Users,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Feb. 14, 2024",
          title: "ChessCoin032 GUI 1.0.0 for Ubuntu",
          description: "ChessCoin032 GUI 1.0.0 was completed and realized for Ubuntu operating system",
          link: "https://ibb.co/WvQxZkH",
          linkText: "View Screenshot",
          icon: Code,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Mar. 07, 2024",
          title: "ChessCoin032 GUI 1.0.0 for Mac Intel",
          description: "ChessCoin032 GUI 1.0.0 was completed and realized for Mac with Intel Chip",
          link: "https://ibb.co/Kq2X2kh",
          linkText: "View Screenshot",
          icon: Code,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Mar. 07, 2024",
          title: "Version 1.4.6 Update Check",
          description: "Checkup for updates and improvements in version 1.4.6",
          link: "https://github.com/AKKPP/1.4.6-ChessCoin032-with-chess-engines",
          linkText: "View Repository",
          icon: Zap,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Mar. 15, 2024",
          title: "ChessCoin GUI for Windows",
          description: "ChessCoin GUI for Windows completed and realized",
          link: "https://ibb.co/Gch3qKR",
          linkText: "View Screenshot",
          icon: Code,
          color: "from-blue-500 to-indigo-500",
        },
        {
          date: "Mar. 19, 2024",
          title: "ChessCoin032 to BSC Chain",
          description: "ChessCoin032 successfully bridged to Binance Smart Chain (BSC)",
          link: "https://bscscan.com/token/0x9Ca5DFa3b0b187d7F53f4ef83CA435a2Ec2e4070",
          linkText: "View on BSCScan",
          icon: Link2,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Mar. 19, 2024",
          title: "Bridge ChessCoin032 to BSC Telegram Bot",
          description: "Telegram bot for bridging ChessCoin032 to BSC Chain launched",
          link: "https://t.me/DragonWalletBot",
          linkText: "Access Bot",
          icon: Bot,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Mar. 23, 2024",
          title: "Update to Version 1.4.6 Ubuntu",
          description: "Ubuntu version updated to 1.4.6 with enhanced features",
          link: "https://github.com/AKKPP/1.4.6-ChessCoin032-with-chess-engines/releases/tag/v1.4.6",
          linkText: "Download v1.4.6",
          icon: Code,
          color: "from-green-500 to-teal-500",
        },
        {
          date: "Apr. 01, 2024",
          title: "XeggeX CHESS/USDT Trading Pair",
          description: "ChessCoin listed on XeggeX exchange with CHESS/USDT trading pair",
          link: "https://xeggex.com/market/CHESS_USDT",
          linkText: "Trade CHESS/USDT",
          icon: TrendingUp,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Apr. 01, 2024",
          title: "XeggeX CHESS/BNB Trading Pair",
          description: "ChessCoin listed on XeggeX exchange with CHESS/BNB trading pair",
          link: "https://xeggex.com/market/CHESS_BNB",
          linkText: "Trade CHESS/BNB",
          icon: TrendingUp,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Apr. 08, 2024",
          title: "ChessCoin032 GUI 1.0.0 for Mac Apple Chip",
          description: "ChessCoin032 GUI 1.0.0 completed and realized for Mac with Apple Chip",
          link: "https://ibb.co/DYKnb9v",
          linkText: "View Screenshot",
          icon: Code,
          color: "from-pink-500 to-rose-500",
        },
        {
          date: "Apr. 19, 2024",
          title: "Version 1.4.6 Release",
          description: "Official release of ChessCoin version 1.4.6 with chess engines integration",
          link: "https://github.com/AKKPP/1.4.6-ChessCoin032-with-chess-engines/releases/tag/v1.4.6",
          linkText: "Download v1.4.6",
          icon: Rocket,
          color: "from-blue-500 to-cyan-500",
        },
        {
          date: "Jun. 03, 2024",
          title: "ChessCoin-qt Version 1.4.7 with NTP and Chat",
          description: "ChessCoin-qt Version 1.4.7 released with NTP synchronization and integrated chat features",
          link: "https://github.com/AKKPP/-1.4.7-ChessCoin032-ChessEngine-NTP-Chat/releases/tag/v1.4.7",
          linkText: "Download v1.4.7",
          icon: MessageCircle,
          color: "from-indigo-500 to-purple-500",
        },
        {
          date: "Aug. 21, 2024",
          title: "ChessCoin AI Deep Learning Development",
          description: "ChessCoin AI Deep Learning project is currently in development process",
          icon: Brain,
          color: "from-violet-500 to-purple-500",
        },
        {
          date: "Aug. 21, 2024",
          title: "ChessCoin032 Burn Process Initiated",
          description: "Burned ChessCoin032 process has been initiated to reduce total supply",
          icon: Flame,
          color: "from-red-500 to-orange-500",
        },
        {
          date: "Sep. 14, 2024",
          title: "ChessCoin-qt Version 1.4.8 Burn and Memory Pool",
          description: "ChessCoin-qt Version 1.4.8 released with burn functionality and memory pool improvements",
          link: "https://github.com/AKKPP/1.4.8-Burn-ChessCoins-and-Memory-Pool",
          linkText: "View Repository",
          icon: Code,
          color: "from-cyan-500 to-blue-500",
        },
        {
          date: "Sep. 23, 2024",
          title: "ChessCoin Burn Address Created",
          description: "CHESSCoinBurnNotSendMeDEV2WTYt9T6X burn address established for token burning",
          link: "https://chainz.cryptoid.info/chess/address.dws?145064.htm",
          linkText: "View Burn Address",
          icon: Flame,
          color: "from-orange-500 to-red-500",
        },
        {
          date: "Sep. 23, 2024",
          title: "ChessCoin Burn on BSC Chain",
          description: "ChessCoin burn mechanism implemented on Binance Smart Chain",
          link: "https://bscscan.com/token/0x9ca5dfa3b0b187d7f53f4ef83ca435a2ec2e4070?a=0x000000000000000000000000000000000000dead",
          linkText: "View BSC Burn",
          icon: Flame,
          color: "from-red-500 to-pink-500",
        },
        {
          date: "Nov. 24, 2024",
          title: "Version 1.4.9 Beta Release",
          description: "ChessCoin v1.4.9 Beta version released for testing and feedback",
          link: "https://github.com/AKKPP/1.4.9/releases/tag/v1.4.9",
          linkText: "Download Beta v1.4.9",
          icon: Code,
          color: "from-yellow-500 to-orange-500",
        },
        {
          date: "Dec. 16, 2024",
          title: "Version 1.5.0 Explorer and Checkpoint",
          description: "Version 1.5.0 released with integrated explorer and checkpoint functionality",
          link: "https://github.com/ChessCoin032/ChessCoin032-Core-x64/releases/tag/v1.5.0",
          linkText: "Download v1.5.0",
          icon: Server,
          color: "from-green-500 to-emerald-500",
        },
        {
          date: "Dec. 22, 2024",
          title: "Website and Discord Update",
          description: "Major website update and Discord community enhancement",
          link: "https://discord.gg/CHyGfjU7Vj",
          linkText: "Join Discord",
          icon: Globe,
          color: "from-purple-500 to-pink-500",
        },
        {
          date: "Dec. 22, 2024",
          title: "BitcoinTalk and Discord Community Update",
          description: "Updated BitcoinTalk thread and Discord community with latest developments",
          links: [
            {
              url: "https://bitcointalk.org/index.php?topic=5275402.msg64873881#msg64873881",
              text: "View BitcoinTalk",
            },
            {
              url: "https://discord.gg/CHyGfjU7Vj",
              text: "Join Discord",
            },
          ],
          icon: Users,
          color: "from-blue-500 to-cyan-500",
        },
      ],
    },
  ]

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
