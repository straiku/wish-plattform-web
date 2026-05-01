const AvatarNameHeader = (name: string) => {
  const upperName = name.toUpperCase()
  const parts = upperName.trim().split(' ')

  if (parts.length == 1) {
    return `${parts[0].charAt(0)}${parts[0].charAt(1)}`
  }

  const firstName = parts[0]
  const lastName = parts[1]

  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export default AvatarNameHeader
