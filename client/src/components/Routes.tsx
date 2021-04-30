import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import {LinksPage} from "../pages/LinksPage";
import {CreatePage} from "../pages/CreatePage";
import {DetailPage} from "../pages/DetailPage";
import {AuthPage} from "../pages/AuthPage";

export const Routes: React.FC<PropsT> = (props) => {

    const {
        isAuthenticated
    } = props

    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/details/:id">
                    <DetailPage/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}

// Types
type PropsT = {
    isAuthenticated: boolean
}