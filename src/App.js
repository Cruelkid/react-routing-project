import { Redirect, Route, Switch } from 'react-router';
import MainHeader from './components/MainHeader';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/welcome" />
                    </Route>
                    <Route path="/welcome">
                        <WelcomePage />
                    </Route>
                    <Route path="/products" exact>
                        <ProductsPage />
                    </Route>
                    <Route path="/products/:productId">
                        <ProductDetailsPage />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
