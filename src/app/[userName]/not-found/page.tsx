import Link from 'next/link'
import { Home, AlertTriangle } from 'lucide-react'

const UserNotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full animate-fade-in items-center justify-center bg-[#070012] px-4 py-20 font-mono sm:px-6 md:px-10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="z-10 flex flex-col items-center gap-6 text-center">
        <AlertTriangle className="animate-bounce text-red-600" size={64} />
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          User Not Found
        </h1>
        <p className="text-base text-gray-400 sm:text-lg">
          We couldn&apos;t find the user you&apos;re looking for. Please check
          the username and try again.
        </p>
        <Link
          href="/"
          className="mt-4 flex animate-slide-up items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-transform hover:scale-110 hover:bg-blue-700"
        >
          <Home className="text-white" size={20} />
          Go to Home
        </Link>
        <div className="mt-8 flex animate-slide-up flex-col items-center gap-2">
          <p className="text-gray-300">Here are some helpful links:</p>
          <Link
            href="https://github.com/Rohit-Singh-Rawat/GitHub-Timeline"
            className="text-blue-400 hover:text-blue-500"
          >
            GitHub Repository
          </Link>
          <Link
            href="mailto:rohitzrawat2003@gmail.com"
            className="text-blue-400 hover:text-blue-500"
          >
            Contact Admin
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserNotFound
