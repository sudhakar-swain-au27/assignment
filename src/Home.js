import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img src="https://gousto.ie/wp-content/uploads/2022/02/New-York-City-Healthy-Meals-Fresh-And-Delicious.jpg" alt="" className="home__image" />

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Ovenstory Pizza"
                        price={23.96}
                        rating={5}
                        image="https://b.zmtcdn.com/data/pictures/chains/1/18412861/fe8c80fa162c790264a597b45e7e6580.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                    />
                    <Product
                        id="49538094"
                        title="Hatcch Chile Smash Burger"
                        price={239.0}
                        rating={4}
                        image="https://www.foodandwine.com/thmb/taMB2JzkagHAPDB5UCtRe7tLqXU=/1600x1200/filters:fill(auto,1)/hatch-chile-smash-burgers-FT-seo-RECIPE0719_0-183c980af99541528d6cfa7f40ca2c21.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Hamburger And Fries With Cock"
                        price={1094.98}
                        rating={4}
                        image="https://wallpaperaccess.com/full/1747340.jpg"
                    />
                </div>
            </div>   
        </div> 
    )
}

export default Home;
