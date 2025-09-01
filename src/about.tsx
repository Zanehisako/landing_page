import { FlipLink } from "./FlipLink";

export default function About() {
  return (
    <div className="flex flex-col h-dvh w-full bg-lime-200 items-center justify-center">
      <FlipLink children={"About ↗"} href="about"></FlipLink>
    </div>
  )
}
