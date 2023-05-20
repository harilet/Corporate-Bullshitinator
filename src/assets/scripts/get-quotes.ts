async function getQuote() {
  const response = await fetch('https://corporatebs-generator.sameerkumar.website/')
  const responseJson = await response.json()
  return responseJson['phrase']
}

export { getQuote }
