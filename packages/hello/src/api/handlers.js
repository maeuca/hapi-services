export async function infoPost(request, h) {
  const payload = request.payload
  return JSON.stringify({payload})
}

export async function infoGet(request, h) {
  const query = request.query
  return JSON.stringify({query})
}