import { MoveRight } from 'lucide-react'

type Props = {}
const InputBox = (props: Props) => {
  return (
    <div className="z-10 mt-16 rounded-2xl bg-blue-600/20 p-2 backdrop-blur-3xl">
      <div className="bg-custom-gradient rounded-xl p-5 font-mono font-medium text-[#8193b2]">
        <div>
          <p>Welcome to GitHub Timeline!</p>
          <p>Let’s begin the adventure</p>
        </div>
        <div className="mt-6 flex flex-col">
          <label className="font-bold text-[#00cfc8]">
            Enter Your Github username
          </label>
          <div className="flex items-center gap-3">
            <MoveRight size={20} color="gray" />
            <input
              type="text"
              className="w-96 border-b border-b-blue-500 bg-transparent p-2 outline-none"
            />
            <button className="rounded-md border border-[#8193b2] px-4 py-1">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox
