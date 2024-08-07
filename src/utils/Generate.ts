export const genNumber = (length: number) => {
  let result  = ''
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const charactersLength = characters.length
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}