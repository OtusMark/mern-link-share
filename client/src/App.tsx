import React from 'react';
import {Routes} from "./components/Routes";
import {useSelector} from "react-redux";
import {AppRootStateT} from "./bll/store";
import {Navbar} from "./components/Navbar";

function App() {

    // Need to make real token authentication!!!
    const token = useSelector<AppRootStateT, string>(state => state.auth.token)

    return (
        <div>
            <Navbar/>
            <Routes isAuthenticated={!!token}/>
        </div>

    );
}

export default App;
