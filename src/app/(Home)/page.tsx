import { Github } from 'lucide-react'
import Hero from '../Components/shared/Hero'
import InputBox from '../Components/shared/InputBox'

type Props = {}
const page = (props: Props) => {
  return (
    <Hero>
      <div>
        <h1 className="max-w-3xl bg-gradient-to-t from-blue-400 to-white to-40% bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          GitHub Timeline
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[2px] w-60 rounded-r-full bg-gradient-to-l from-[#1CC6FC] via-[#5C38B6] to-[#0b0b10]/30 to-95%"></div>
          <div>
            <Github className="size-4 stroke-[#1CC6FC] shadow-2xl shadow-sky-400" />
          </div>
          <div className="h-[2px] w-60 rounded-l-full bg-gradient-to-r from-[#1CC6FC] via-[#5C38B6] to-[#0b0b10]/30 to-95%"></div>
        </div>
      </div>
      <InputBox />
    </Hero>
  )
}
export default page
