import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
import Footer from './Footer';
import '../styles/home.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className='home'>
            <h3 className='home__laptops-category'>Office Laptop</h3>
            <SearchBar onSearch={handleSearch} />
            <ProductList searchTerm={searchTerm} />
            <Footer />
        </div>
    );
};

export default Home;
