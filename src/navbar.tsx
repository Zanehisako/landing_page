import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function NavText({ text, href }: { text: string, href: string }) {
  return (
    <a className="text-xl font-poppins uppercase font-bold text-[clamp(0.8rem,2vw,1rem)] " href={href}>{text}</a>
  )
}

export default function NavBar({ className }: { className: string }) {
  const [opened, setOpened] = useState<boolean>(false)

  // const scaleDown = () => gsap.to(".menu-button", { scale: 0.8, ease: "power1", })

  const scaleUp = () => gsap.to(".menu-button", { scale: 1.1, ease: "expo", })

  const scaleOriginal = () => gsap.to(".menu-button", { scale: 1, ease: "expo.out", })


  useGSAP(() => {
    gsap.fromTo(".menu-card", { opacity: 0, y: "+10%", rotateZ: "5%", ease: "power1.in" }, { opacity: 1, y: "0%", rotateZ: "0%" })
  }, [opened])
  return (
    <div className={`${className}`}>
      <button onMouseEnter={() => scaleUp()}
        onMouseLeave={() => scaleOriginal()}
        onClick={() => {
          setOpened(!opened)
        }} style={{ width: 100, height: 50 }}
        className="menu-button font-poppins text-sm font-semibold uppercase rounded-xl bg-white">
        menu:
      </button>
      {
        opened &&
        <div className="absolute menu-card flex flex-col top-15 right-1 gap-5 p-10 rounded-2xl bg-white">
          <NavText text={"about"} href={"about"}></NavText>
          <NavText text={"projects"} href={"projects"}></NavText>
          <NavText text={"reviews"} href={"reviews"}></NavText>
          <NavText text={"contact"} href={"contact"}></NavText>
        </div>
      }
    </div>
  )
}
