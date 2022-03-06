const ARTISAN_HANDLE = 'nestoredduardo'
const ARTISAN_LINK = `https://twitter.com/${ARTISAN_HANDLE}`

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 flex items-center justify-center gap-2 border-t-2 border-gray-light p-5">
      <img src="/icon/twitter.svg" alt="Twitter" className="h-4 w-4" />
      <a
        href={ARTISAN_LINK}
        target="_blank"
        rel="noreferrer"
        className="bg-gradient-to-br from-[#00E1C9] to-[#2600FF] bg-clip-text font-semibold text-transparent"
      >
        built by @{ARTISAN_HANDLE}
      </a>
    </footer>
  )
}

export default Footer
