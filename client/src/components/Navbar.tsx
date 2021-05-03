import {NavLink} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {AppDispatchT} from "../bll/store";
import {logout} from "../bll/reducers/auth-reducer";

export const Navbar = () => {

    const dispatch = useDispatch<AppDispatchT>()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <nav>
            <div>
                <a href="#">Logo</a>
                <ul>
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                </ul>
                <button onClick={logoutHandler}>Выйти</button>
            </div>
        </nav>
    )
}