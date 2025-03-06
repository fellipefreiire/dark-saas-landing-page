import { ArrowRight } from 'lucide-react'
import { CursorImageMotion } from '@/components/CursorImageMotion'
import { MessageImageMotion } from '@/components/MessageImageMotion'

export function Hero() {
  return (
    <div className="text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] md:py-24 relative overflow-clip">
      <div className="absolute h-[375px] md:h-[768px] lg:h-[1200px] w-[750px] md:w-[1536px] lg:w-[2400px] rounded-[100%] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] left-1/2 -translate-x-1/2 border border-[#B48CDE] top-[calc(100%-96px)] md:top-[calc(100%-120px)]" />
      <div className="container relative">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent [-webkit-background-clip:text]">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowRight className="size-4" />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-center inline-flex flex-col">
              One Task
              <b /> at a Time
            </h1>
            <CursorImageMotion />
            <MessageImageMotion />
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black rounded-lg py-3 px-5 font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
