import React,{useState, useEffect} from 'react';
import TopIcon from '../svg/to-top.png';
import '../css/ScrollTop.css'

function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        if(window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    }, []);

    return (
        <div className="sroll-top">
            {isVisible && 
                <div onClick={scrollTop}>
                    <img src={TopIcon} alt="Go to top" width="50px"/>
                </div>
            }
        </div>
    )
}

export default ScrollTop
