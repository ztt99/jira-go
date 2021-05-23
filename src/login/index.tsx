import { FormEvent } from "react"

export const LoginScreen = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // 如果不写as HTMLInputElement那么类型推断会推断为Element类型，as HTMLInputElement 告诉ts，我知道是什么类型
        const username = (e.currentTarget.elements[0] as HTMLInputElement).value
        const password = (e.currentTarget.elements[1] as HTMLInputElement).value


        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        }).then(async res => {
            console.log(await res.json());

        })
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