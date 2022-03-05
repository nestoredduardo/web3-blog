const Loading = () => {
  return (
    <div className="loader-dots relative mx-auto mt-2 block h-5 w-20">
      <div className="absolute top-0 mt-1 h-3 w-3 rounded-full bg-secondary"></div>
      <div className="absolute top-0 mt-1 h-3 w-3 rounded-full bg-primary"></div>
      <div className="absolute top-0 mt-1 h-3 w-3 rounded-full bg-secondary"></div>
      <div className="absolute top-0 mt-1 h-3 w-3 rounded-full bg-primary"></div>
    </div>
  )
}

export default Loading
