import { FormEvent } from "react"
import { useAuth } from "../context/auth-context"

export const LoginScreen = () => {

    const { login } = useAuth()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 如果不写as HTMLInputElement那么类型推断会推断为Element类型，as HTMLInputElement 告诉ts，我知道是什么类型
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value
        login({ username, password })

    }
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">用户名</label>
            <input type="text" id='username' />
        </div>
        <div>
            <label htmlFor="password">用户名</label>
            <input type="password" id='password' />
        </div>
        <button>确定</button>
    </form>
}