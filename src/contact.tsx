import { FlipLink } from "./FlipLink"

export default function Contact() {
  return (
    <div className="flex flex-col h-dvh w-full justify-center items-center bg-blue-200">
      <FlipLink className="z-0 relative" children={"Contact ↗"} href="contact"></FlipLink>
    </div>
  )
}
