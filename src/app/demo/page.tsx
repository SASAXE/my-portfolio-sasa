import { BeamsBackground } from "@/components/ui/beams-background"

export default function DemoPage() {
  return (
    <BeamsBackground intensity="medium">
      <div className="max-w-2xl mx-auto p-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-white/80 mb-8">
          This is a beautiful animated background using the BeamsBackground component.
          You can place your content here and it will appear on top of the animated background.
        </p>
      </div>
    </BeamsBackground>
  )
}
