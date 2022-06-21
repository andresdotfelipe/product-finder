import SearchBar from '../SearchBar';
import productsList from '../../utils/Products.json';

const Header = ({handleCurrentProducts}) => {

    const onChange = e => {
        const searchString = e.target.value.toLowerCase();
        handleCurrentProducts(productsList.filter(product => product.title.toLowerCase().includes(searchString)));
    }

    return (
        <header>
            <h1>The Product Finder</h1>
            <SearchBar onChange={onChange} />
        </header>
    );
}

export default Header;