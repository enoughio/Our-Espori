import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Espori
              </span>
            </Link>
            <p className="text-blue-300 mb-6 max-w-md">
              Espori is a leading software development company dedicated to delivering cutting-edge digital solutions
              that empower businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-800/50">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-800/50">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-800/50">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-blue-300 hover:text-white hover:bg-blue-800/50">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-blue-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-blue-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-blue-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span className="text-blue-300">contact@esporitech.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span className="text-blue-300">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-0.5" />
                <span className="text-blue-300">123 Innovation St, Tech City, USA</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-blue-300 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex flex-col space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-blue-900/50 border-blue-800 text-blue-100 placeholder:text-blue-400 focus-visible:ring-blue-500"
              />
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-400 text-sm">&copy; {new Date().getFullYear()} Espori. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

