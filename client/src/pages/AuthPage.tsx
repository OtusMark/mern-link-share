import {ChangeEvent, useState} from "react";
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {

    const {loading, error, request} = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (err) {

        }
    }

    return (
        <div>
            <h1>Сократи ссылку</h1>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email"
                       placeholder="Введите Email"
                       type="text"
                       name="email"
                       onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input id="password"
                       placeholder="Введите Пароль"
                       type="password"
                       name="password"
                       onChange={changeHandler}/>
            </div>
            <button disabled={loading}
            >
                Войти
            </button>
            <button onClick={registerHandler}
                    disabled={loading}
            >
                Зарегистрироваться
            </button>
        </div>
    )
}