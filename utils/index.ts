// TODO: BUILD NAME
const formatName = (title: string, firstName: string, lastName: string) => {
  const titleUppercase = title.charAt(0).toUpperCase() + title.slice(1)

  return `${titleUppercase}. ${firstName} ${lastName}`
}

export { formatName }
