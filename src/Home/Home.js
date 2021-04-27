import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg" alt=""/>
            <div className="home__row">
                {/* 2 products */}
                <Product
                title="New Apple MacBook Pro (13-inch, 16GB RAM, 1TB SSD Storage, Magic Keyboard) - Space Gray"
                price ={3200}
                image = "https://m.media-amazon.com/images/I/71bElkQQ7LL._AC_UY218_.jpg"
                rating ={5}
                id = {1}
                />
                <Product 
                title="Sony XBR-55A9G 55 Inch TV: MASTER Series BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility"
                price = {1200}
                image = "https://m.media-amazon.com/images/I/91j8ZfpDC1L._AC_UL320_.jpg"
                rating = {5}
                id={2}/>
                
            </div>
            <div className="home__row">
                {/* 3 products */}
                <Product
                title="Microsoft Surface Pro 7 12.3 (Latest Model) 10th Gen Core i7-1065G7 IRIS 512GB SSD 16GB RAM 2736X1834 12.3 Touch Win 10 Pro PVU-00015"
                price = {1030}
                image = "https://m.media-amazon.com/images/I/51q9Sk2WUBL._AC_UY218_.jpg"
                rating = {5}
                id={3}
                 />
                <Product
                title="Instant Zest 8 Cup Rice Cooker, Steamer, Cooks Rice, Grains, Quinoa and Oatmeal"
                price = {30}
                image = "https://m.media-amazon.com/images/I/61gBiCCUO-L._AC_UY218_.jpg"
                rating = {4}
                id={5}
                />
                <Product
                title="Cuisinart WAF-F10 Maker Waffle Iron, Single, Stainless steel"
                price = {60}
                image = "https://m.media-amazon.com/images/I/81zVBpMowQL._AC_UY218_.jpg"
                rating = {3} 
                id={6}/>
                
            </div>
            <div className="home__row">
                {/* 1 product */}
                <Product
                title="Educated: A Memoir"
                price = {14}
                image = "https://m.media-amazon.com/images/I/81XR45UdqkL._AC_UL320_.jpg"
                rating = {5}
                 />
            </div>
            </div>  
        </div>
    );
};

export default Home;