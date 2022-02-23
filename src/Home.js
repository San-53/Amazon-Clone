// import { Slide } from '@material-ui/core';
import React from 'react';
import "./Home.css";
import Product from "./Product";
// import SlideShow from "./Slideshow";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
<style>
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
</style>
function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                {/* <div className='adjust'>
                <SlideShow/>
                </div> */}
                {/* <img className='home__image'
                    src="https://m.media-amazon.com/images/I/61706+PnG9L._SX3000_.jpg" alt=""
                /> */}
                <ImageSlider className='home__image' slides={SliderData} />;

                <div className="home__row">
                    <Product id={123} title="Fire-Boltt SpO2 Full Touch 1.4 inch Smart Watch 400 Nits Peak Brightness Metal Body 8 Days Battery Life with 24*7 Heart Rate monitoring" price="2,499.00"
                        image="https://m.media-amazon.com/images/I/61T28Xx8b5L._SL1500_.jpg" rating={3}
                    />
                    <Product id={900} title="Acer Nitro 5 AN515-57 Intel Core i5-11400H 15.6 inches FHD 144Hz IPS Display Gaming Laptop " image="https://m.media-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg"
                        price="79,999" rating={5} />

                    <Product id={153} title="Xiaomi 11T Pro 5G Hyperphone (Moonlight White, 8GB RAM, 128GB Storage)| SD 888 5G"
                        price="39,999.00" image="https://m.media-amazon.com/images/I/71fgpM7+P0L._SL1500_.jpg" rating={5}
                    />

                </div>

                <div className="home__row">
                    <Product id={6790} title="iQOO Z3 5G (Ace Black, 8GB RAM, 128GB Storage) | India's First SD 768G 5G Processor "
                        image="https://m.media-amazon.com/images/I/61uIgwiP90S._SL1200_.jpg" price="20,990.00" rating={4} />

                    <Product id={923} title="Lorenz Analogue Black Dial Men's Watch & Wayfarer Sunglasses Combo for Men "
                        price="399" image="https://m.media-amazon.com/images/I/81SbqrhpsOL._UL1500_.jpg" rating={4} />

                    <Product id={1290} title="JUAREZ Etéreo 21 Soprano Ukulele, Sapele Top & Body, Aquila Italian Strings, Black Diecast Machine" image="https://m.media-amazon.com/images/I/91uNVVD8WyL._SL1500_.jpg"
                        price="2,309" rating={4} />

                    <Product id={1295} title="pTron Bullet Pro 36W PD Quick Charger, 3 Port Fast Car Charger Adapter" price="349.00 "
                        image="https://m.media-amazon.com/images/I/61aBH+cXL2L._SL1100_.jpg" rating={3} />

                </div>

                <div id={178} className="home__row">

                    <Product id={1245} title="Nikon Z7 Mirrorless Camera Body with 24-70mm Lens Brand: Nikon"
                        price="2,69999" image="https://m.media-amazon.com/images/I/51meQSiQT0L._SL1000_.jpg" rating={4} />

                    <Product id={1234} title="pTron Quinto 5W Wireless Bluetooth 5.0 Speaker with Dynamic Sound, 6Hrs Playtime, Mini Outdoor Speaker"
                        price="749.00" image="https://m.media-amazon.com/images/I/61O6Hwa1LhL._SL1100_.jpg" rating={3} />

                    <Product id={723} title="Amazon Brand - Solimo Elite High Back Mesh Office Chair (Fabric, Black)"
                        price="7,649.00" image="https://m.media-amazon.com/images/I/91Y1QLIoyTS._SL1500_.jpg" rating={5} />
                </div>


                <div id={178} className="home__row">

                    <Product id={9999} title="Desidiya 12 Stars 138 LED Curtain String Lights Window Curtain Lights with 8 Flashing Modes Decoration"
                        price="599.00" image="https://m.media-amazon.com/images/I/51M-0OzscIL.jpg" rating={4} />

                    <Product id={12590} title="Floralbay Special Handle Basket Arrangement of 25 Red Roses Fresh Flowers"
                        price="1,197" image="https://m.media-amazon.com/images/I/51c6RRzKZAL.jpg" rating={3} />
                    <Product id={17770} title="eCraftIndia Golden Handcrafted Palm Buddha Polyresin Showpiece"
                        price="199" image="https://m.media-amazon.com/images/I/714Xn6vemoL._SL1500_.jpg" rating={3} />
                        <Product id={14444} title="Ferrero Rocher Premium Chocolates 24 Pieces, 300 g"
                        price="880" image="https://m.media-amazon.com/images/I/71uNpGYLbnL._SL1100_.jpg" rating={4} />

                </div>


                <div className="home__row">
                    <Product id={1242} title="Amazon Brand - Solimo Paint Brushes for Acrylic and Water Colours"
                        price="568" image="https://m.media-amazon.com/images/I/91Tbb3O5ruL._SL1500_.jpg" rating={3} />

                    <Product id={167} title="Kingston Q500 240GB SATA3 2.5 SSD (SQ500S37/240G)"
                        price="2,598" image="https://m.media-amazon.com/images/I/81vCejH6FxL._SL1500_.jpg" rating={4} />

                    <Product id={2343} title="Photron Stedy PRO 750 Tripod for DSLR, Camera"
                        price="1,449" image="https://m.media-amazon.com/images/I/71QIYBaI-kL._SL1500_.jpg" rating={3} />

                    <Product id={12568} title="IN ONE High Bass Portable Bluetooth Wireless Speaker with Alarm Clock Digital FM Radio TF Card 3.5 mm"
                        price="1,099.00" image="https://m.media-amazon.com/images/I/51cG3kUtrJS._SL1100_.jpg" rating={4} />
                </div>
                <div className='home__row'>
                    <Product id={456} title="boAt Airdopes 121v2 Bluetooth Truly Wireless in Ear Earbuds with Mic (Midnight Blue)" price="1,499"
                        image="https://m.media-amazon.com/images/I/71255RhSmoL._SL1500_.jpg" rating={4} />
                    <Product id={9999} title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
                        price="35,999" image="https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg" rating={5} />
                    <Product id={103} title="Portronics Decibel 21 10W Wireless Bluetooth Soundbar with LED Lights"
                        price="1,299.00" image="https://m.media-amazon.com/images/I/61PZZCIuaSL._SL1200_.jpg" rating={3} />

                </div>
                {/* <div className='home__row'>
                    <Product id={9999} title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
                    price="35,999" image="https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg" rating={5}/>
                </div> */}

            </div>
        </div>
    )
}

export default Home