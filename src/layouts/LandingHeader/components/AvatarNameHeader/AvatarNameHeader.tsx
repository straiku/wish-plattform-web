
const AvatarNameHeader=(name:string)=>{

  const parts = name.trim().split(' ') 
  const firstName = parts[0] 
  const lastName = parts[1] || '' 
    
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase() 
}

export default AvatarNameHeader
