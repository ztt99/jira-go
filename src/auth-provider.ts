import { User } from "./screens/project-list/search-panel"

const localStorageKey = '__auth_provider_token__'

export const getToken = () => window.localStorage.getItem(localStorageKey)


export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(user.token) || '')
}

export const login = (data: { username: string, password: string }) => {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(async res => {
        return handleUserResponse(await res.json())
    })
}

export const logout = async () => {
    window.localStorage.removeItem(localStorageKey)
}