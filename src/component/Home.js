import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

        <div className="home__row">
            {/* Product id, title,price, rating, image */}
                <Product
                    id={12321342}
                    title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/417wp10uSeL.jpg"
                />

                <Product
                    id={12321342}
                    title="Mediweave 3 Ply Non-Woven Filter 20 GSM Face Mask-Pack of 50"
                    price={5.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81ghNg%2BDC9L._SL1500_.jpg"
                />
                
        </div>

        <div className="home__row">
            {/* Product id, title,price, rating, image */}
                <Product
                    id={12321342}
                    title="Apple iPhone 12 Pro, 128GB, Graphite - Unlocked (Renewed Premium)"
                    price={809}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SX679_.jpg"
                />

                <Product
                    id={12321342}
                    title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, Space Gray"
                    price={8.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41EsI0Fsf1L.jpg"
                />

                <Product
                    id={12321342}
                    title="Apple Pencil (2nd Generation)"
                    price={145.96}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_SX522_.jpg"
                />
                
        </div>

        <div className="home__row">
            {/* Product id, title,price, rating, image */}
                <Product
                    id={12321342}
                    title="【2022 Upgraded】Ajsaki K9 Gaming Headset,Gaming Headphones with RGB LED Lights, Noise Cancelling, Stereo PS Vita Headset with Microphone, Over-Ear Headphones for PC, PS4, Nintendo Switch, Xbox One, Mac"
                    price={239.00}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61LuEWnMiHL._AC_SX466_.jpg"
                />
        </div>

    </div>
  )
}

export default Home

