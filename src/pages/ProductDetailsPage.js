import { Fragment } from 'react';
import { useParams } from 'react-router';

const ProductDetailsPage = () => {
    const params = useParams();

    return (
        <Fragment>
            <h1>Product details</h1>
            <p>{params.productId}</p>
        </Fragment>
    );
};

export default ProductDetailsPage;
