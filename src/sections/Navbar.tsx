import Image from 'next/image'
import logoImage from '@/assets/logosaas.png'
import { Menu } from 'lucide-react'

export function Navbar() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
            <Image
              src={logoImage}
              alt="Saas logo"
              className="size-12 relative"
            />
          </div>
          <div className="border border-white/30 size-10 inline-flex justify-center items-center rounded-lg md:hidden">
            <Menu className="text-white" />
          </div>
          <nav className="hidden md:flex text-white/60 gap-6 items-center">
            <a href="#" className="hover:text-white">
              About
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Updates
            </a>
            <a href="#" className="hover:text-white">
              Help
            </a>
            <a href="#" className="hover:text-white">
              Customers
            </a>
            <button className="bg-white py-2 px-4 text-black rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
