import { FlipLink } from "./FlipLink"

export default function Contact() {
  return (
    <div className="flex flex-col h-dvh w-full justify-center items-center bg-blue-200">
      <FlipLink children={"Contact ↗"} href="contact"></FlipLink>
    </div>
  )
}
