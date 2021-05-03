import {useSelector} from "react-redux";
import {AppRootStateT} from "../bll/store";

export const DetailPage = () => {

    const link = useSelector<AppRootStateT, any>(state => state.link.link)

    return (
        <div><h1>{link.link._id}</h1></div>
    )
}