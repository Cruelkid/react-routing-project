import { Route } from 'react-router';
import MainHeader from './components/MainHeader';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductsPage from './pages/ProductsPage';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <div>
            <MainHeader />
            <main>
                <Route path="/welcome">
                    <WelcomePage />
                </Route>
                <Route path="/products">
                    <ProductsPage />
                </Route>
                <Route path='/product-details/:productId'>
                    <ProductDetailsPage />
                </Route>
            </main>
        </div>
    );
}

export default App;
