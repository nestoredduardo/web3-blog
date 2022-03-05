// TODO: BUILD NAME
const formatName = (title: string, firstName: string, lastName: string) => {
  const titleUppercase = title.charAt(0).toUpperCase() + title.slice(1)

  return `${titleUppercase}. ${firstName} ${lastName}`
}

const formatDate = (dateString: string, type: string) => {
  const date = new Date(dateString)
  let options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }
  date.toLocaleDateString('en-US', options)

  if (type == 'profile') {
    return (
      date.getDate() +
      ' ' +
      date.toLocaleString('en-us', { month: 'short' }) +
      ' ' +
      date.getFullYear()
    )
  } else if (type == 'blog') {
    return (
      date.toLocaleString('en-us', { month: 'short' }) +
      ' ' +
      date.getDate() +
      ' ' +
      date.getFullYear()
    )
  }
}

export { formatName, formatDate }
