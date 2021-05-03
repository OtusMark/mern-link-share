import {ChangeEvent, useState} from "react";
import {login, register} from "../bll/reducers/auth-reducer";
import {useDispatch} from "react-redux";
import {AppDispatchT} from "../bll/store";

export const AuthPage = () => {

    const dispatch = useDispatch<AppDispatchT>()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const registerHandler = async () => {
        dispatch(register(form))
    }

    const loginHandler = async () => {
        dispatch(login(form))
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
                       value={form.email}
                       onChange={changeHandler}/>
            </div>
            <div>
                <label htmlFor="password">Пароль</label>
                <input id="password"
                       placeholder="Введите Пароль"
                       type="password"
                       name="password"
                       value={form.password}
                       onChange={changeHandler}/>
            </div>
            <button onClick={loginHandler}
                    // disabled={loading}
            >
                Войти
            </button>
            <button onClick={registerHandler}
                    // disabled={loading}
            >
                Зарегистрироваться
            </button>
        </div>
    )
}