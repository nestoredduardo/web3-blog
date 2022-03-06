const PageLoader = () => {
  const COMPANY_NAME = 'WEB3 BLOCKS'

  return (
    <div className="fixed flex min-h-screen min-w-full items-center justify-center bg-white">
      <div className="flex text-4xl font-bold text-secondary">
        {COMPANY_NAME.split('').map((char) => {
          return (
            <div className="animate-[textBounce_1s_ease_infinite]">{char}</div>
          )
        })}
      </div>
    </div>
  )
}

export default PageLoader
