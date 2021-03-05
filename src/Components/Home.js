/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react';
import LeftIcon from '../svg/arrow-alt-circle-left-solid.svg';
import RightIcon from '../svg/arrow-alt-circle-right-solid.svg';
import '../css/Home.css';

function Home() {

    const bannerUrl = [
        {
            url: "http://snkrsg.com/thumb/1366x560/1/upload/hinhanh/219007695964179.jpg"
        },
        {
            url:"http://snkrsg.com/thumb/1366x560/1/upload/hinhanh/056364393797418.jpg"
        },
        {
            url:"http://snkrsg.com/thumb/1366x560/1/upload/hinhanh/7801250539118200.jpg"
        }
    ];
    const [current, setCurrent] = useState(0);
    const length = bannerUrl.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if(!Array.isArray(bannerUrl) || bannerUrl.length <= 0){
        return null;
    }

    return (
        <div className="home">
            <div className="home-banner">
                <img className = "home-banner-left-icon" src={LeftIcon} all="" onClick={prevSlide} />
                <img className = "home-banner-right-icon" src={RightIcon} all="" onClick={nextSlide} />
                {bannerUrl.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img className = "home-banner-img" src={slide.url} alt="" />)} 
                        </div>
                    );
                })}
            </div>
            <div className="home-best-seller">
                <h3>BESTSELLER</h3>
            </div>
            <div className="home-new-arrivals">
                <h3>NEW ARRIVALS</h3>
            </div>
        </div>
    )
}

export default Home
