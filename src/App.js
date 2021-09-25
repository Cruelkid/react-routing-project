import { Route } from 'react-router';
import ProductsPage from './pages/ProductsPage';
import WelcomePage from './pages/WelcomePage';

function App() {
    return (
        <div>
            <Route path="/welcome">
                <WelcomePage />
            </Route>
            <Route path="/products">
                <ProductsPage />
            </Route>
        </div>
    );
}

export default App;
