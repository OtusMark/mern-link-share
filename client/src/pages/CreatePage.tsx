import {ChangeEvent, KeyboardEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatchT} from "../bll/store";
import {generateLink} from "../bll/reducers/link-reducer";
import {useHistory} from "react-router-dom";

export const CreatePage = () => {

    const dispatch = useDispatch<AppDispatchT>()

    const history = useHistory()

    const [link, setLink] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value)
    }

    const pressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(generateLink({link, history}))
        }
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Enter a link" id="link" value={link} onChange={onChangeHandler} onKeyPress={pressHandler}/>
                <label htmlFor="link">Enter a link</label>
            </div>
        </div>
    )
}