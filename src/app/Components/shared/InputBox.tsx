'use client'
import { Loader, MoveRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {}

const InputBox = (props: Props) => {
  const [username, setUserName] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleGenerate = () => {
    if (username.trim().length > 0) {
      setLoading(true)
      router.push(`/${username}/timeline`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleGenerate()
  }

  return (
    <div className="z-10 mx-4 mt-16 rounded-2xl bg-blue-600/20 p-2 backdrop-blur-3xl sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      <div className="rounded-xl bg-custom-gradient p-5 font-mono font-medium text-[#8193b2]">
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
              className="w-full border-b border-b-blue-500 bg-transparent p-2 outline-none sm:w-96"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              onKeyDown={handleKeyPress}
            />
            <button
              className="rounded-md border border-[#8193b2] px-3 py-1 text-xs hover:border-[#2d4774] hover:bg-[#e1e2e3]/10 hover:text-[#2f4b7c] md:px-4 md:text-base"
              onClick={handleGenerate}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center text-xs md:text-base">
                  <Loader
                    color="#473e3e"
                    className="size-3 animate-spin md:mr-2 md:size-5"
                  />
                  Generating...
                </div>
              ) : (
                'Generate'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputBox
