import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
    return (
        <Fragment>
            <h1>Products page</h1>
            <ul>
                <li><Link to='/products/guitar'>Guitar</Link></li>
                <li><Link to='/products/drums'>Drums</Link></li>
                <li><Link to='/products/piano'>Piano</Link></li>
            </ul>
        </Fragment>
    );
};

export default ProductsPage;
