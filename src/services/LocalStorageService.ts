export const getToken = () => {
  let token = localStorage.getItem("token")
  return token
}

export const storeToken = (value:any) => {
  localStorage.setItem("token", value)
}

export const removeToken = (value:any) => {
  localStorage.removeItem(value)
}
