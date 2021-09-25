import { Fragment } from 'react';
import { Route } from 'react-router';

const WelcomePage = () => {
    return (
        <Fragment>
            <h1>Welcome page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome, new user!</p>
            </Route>
        </Fragment>
    );
};

export default WelcomePage;
