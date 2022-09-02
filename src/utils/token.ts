export const GetToken = () => localStorage.getItem('@token')

export const SetToken = (token: string) => localStorage.setItem('@token', token)

export const ClearToken = () => localStorage.removeItem('@token')
