const SearchBar = ({onChange}) => {
    return (
        <input type='text' className='search-bar' placeholder='Type something...' onChange={onChange}/>
    );
}

export default SearchBar;