import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/Pages/Home/HomePage';
import UserData from '../components/Pages/User/UserData';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/Users-Task' component={HomePage}></Route>
                <Route path='/UserData/:id' component={UserData}></Route>
            </Switch>
        </div>
    )
}
export default AppRouter
