const Page = async () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#070012] py-20 font-mono">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="z-10 flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="size-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        <h1 className="text-4xl text-white sm:text-5xl">Generating</h1>
        <h2 className="text-lg text-gray-400 sm:text-2xl">
          Please wait while we prepare everything for you...
        </h2>
        <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-400 sm:w-64">
          <div className="h-full animate-progress bg-gradient-to-r from-blue-400 to-purple-800"></div>
        </div>
        <p className="text-base text-gray-400 sm:text-lg">
          This may take a few moments. Thank you for your patience!
        </p>
      </div>
    </div>
  )
}

export default Page
