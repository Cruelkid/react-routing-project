import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Welcome page</Link>
                    </li>
                    <li>
                        <Link to="/products">Products page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
