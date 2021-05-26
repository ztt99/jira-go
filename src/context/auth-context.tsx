import React, { ReactNode, useState } from 'react'
import * as auth from '../auth-provider'
import { User } from '../screens/project-list/search-panel'

interface AuthForm {
    username: string;
    password: string;
}

const AuthContext = React.createContext<{
    user: User | null,
    login: (form: AuthForm) => Promise<any>,
    logout: () => Promise<void>
} | undefined>(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const login = (form: AuthForm) => auth.login(form).then(user => setUser)
    const logout = () => auth.logout().then(user => setUser(null))

    return < AuthContext.Provider children={children} value={{ user, login, logout }} />
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth必须在AuthContext中使用')
    }
    return context
}


