import { Github } from 'lucide-react'
import Hero from '../Components/shared/Hero'
import InputBox from '../Components/shared/InputBox'
import Link from 'next/link'

type Props = {}
const page = (props: Props) => {
  return (
    <Hero>
      <div className="flex flex-col items-center">
        <h1 className="max-w-3xl bg-gradient-to-t from-blue-400 to-white to-90% bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          GitHub Timeline
        </h1>
        <div className="mt-4 flex items-center justify-center gap-2 sm:mt-6 md:mt-8">
          <div className="h-[2px] w-24 rounded-r-full bg-gradient-to-l from-[#1CC6FC] via-[#5C38B6] to-[#0b0b10]/30 to-95% sm:w-60"></div>
          <div>
            <Github className="size-4 stroke-[#1CC6FC] shadow-2xl shadow-sky-400" />
          </div>
          <div className="h-[2px] w-24 rounded-l-full bg-gradient-to-r from-[#1CC6FC] via-[#5C38B6] to-[#0b0b10]/30 to-95% sm:w-60"></div>
        </div>
      </div>
      <InputBox />
      <Link
        href={'https://github.com/Rohit-Singh-Rawat/GitHub-Timeline'}
        className="absolute right-0 top-0 m-4 sm:m-10 md:m-20"
      >
        <Github
          className="size-8 text-white hover:animate-shake sm:size-10"
          color="#ffffff"
        />
      </Link>
    </Hero>
  )
}
export default page
