import { InstagramIcon, Mail, Phone, TwitchIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import Link from "next/link"
import Section from "./Section"

const Contact = () => {
  return (
    <Section>
      <div className="w-full p-24 flex flex-col items-center justify-center">
      <h2 className="text-[4rem] font-bold font-protest-revolution text-center">Contato</h2>
      <div className="flex items-center justify-center text-amber-400 gap-10 mt-10">
        <Link href="https://wa.me/5521981370115" target="_blank" rel="noopener noreferrer"><Phone className="w-14 h-14 hover:text-amber-200 cursor-pointer"/></Link>
        <Link href="mailto:sidepro@gmail.com"><Mail className="w-14 h-14 hover:text-amber-200 cursor-pointer" /></Link>
        <Link href="https://www.youtube.com/@infested_side" target="_blank" rel="noopener noreferrer"><YoutubeIcon className="w-14 h-14 hover:text-amber-200 cursor-pointer" /></Link>
        <Link href="https://twitch.tv/infested_side" target="_blank" rel="noopener noreferrer"><TwitchIcon className="w-14 h-14 hover:text-amber-200 cursor-pointer" /></Link>
        <Link href="https://www.instagram.com/side.ai/" target="_blank" rel="noopener noreferrer"><InstagramIcon className="w-14 h-14 hover:text-amber-200 cursor-pointer" /></Link>
        <Link href="https://twitter.com/InfestedSide" target="_blank" rel="noopener noreferrer"><TwitterIcon className="w-14 h-14 hover:text-amber-200 cursor-pointer" /></Link>
      </div>
    </div>
    </Section>
  )
}

export default Contact