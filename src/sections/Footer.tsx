import InstaIcon from '@/assets/insta.svg'
import TiktokIcon from '@/assets/tiktok.svg'
import XSocialIcon from '@/assets/x-social.svg'
import YoutubeIcon from '@/assets/youtube.svg'

export function Footer() {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="text-center">
            &copy; 2024 Your Company, Inc. All rights resserved
          </div>
          <ul className="flex gap-2.5 justify-center">
            <li>
              <XSocialIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
