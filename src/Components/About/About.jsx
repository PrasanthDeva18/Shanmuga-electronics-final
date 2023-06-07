import React, { useEffect, useState } from 'react'
import './About.css'
import owner from '../../img/M-works.jpg'
import raj from '../../img/installation.jpg'
import Footer from '../Footer/Footer'
const About = () => {



    const [index, setIndex] = useState(0);
    const [autoSlideInterval, setAutoSlideInterval] = useState(null);

    const showSlide = (i) => {
        setIndex((prevIndex) => {
            let newIndex = prevIndex + i;

            const images = document.getElementsByClassName("image");

            for (let i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }

            if (newIndex > images.length - 1) {
                newIndex = 0;
            }

            if (newIndex < 0) {
                newIndex = images.length - 1;
            }

            images[newIndex].style.display = "block";

            return newIndex;
        });
    };

    useEffect(() => {
        const autoSlide = () => {
            showSlide(1);
        };
        const interval = setInterval(autoSlide, 9000); // Change the duration as needed
        setAutoSlideInterval(interval);
        return () => {
            clearInterval(autoSlideInterval);
        };
    }, [index]);

    useEffect(() => {
        showSlide(index);
    }, []);

    return (
        <div>
            <div className='ab-out'>
                <h1 className='ab-txt'>ABOUT US</h1>
                <div className='abt-cc'>
                    <div>
                        <div className='image fade'>
                            <img src={owner} className='abt-i' />
                        </div>
                        <div className='image fade'>
                            <img src={raj} className='abt-i' />
                        </div>
                    </div>
                    <div className='bottom'>

                        <div className='abt-con'>
                            <h2>What we do </h2>
                            <p className='abt-c-1'>Welcome to Shanmuga Electronics!</p>
                            <p className='abt-c-2'>
                                At Shanmuga Electronics, we pride ourselves on being a trusted provider of high-quality home appliances and electronic solutions. With a wide range of products and services, we strive to meet all your electronic needs under one roof. Whether you're in the market for a new TV, home theatre system, amplifier, or looking for expert repairs and maintenance for your devices, we've got you covered.
                                Our commitment to excellence begins with our carefully curated selection of products. We understand that each customer has unique requirements and preferences, which is why we offer a diverse range of options to suit every budget and taste. From cutting-edge smart TVs with stunning visuals to powerful amplifiers that elevate your audio experience, we bring you the latest innovations from top brands in the industry.
                                Come visit Shanmuga Electronics today, and let us enhance your electronic experience to new heights!</p>
                        </div>
                        <div className='de'>
                            <h2>Details :</h2>
                            <div className='de-1'>
                                <h3>Owner :</h3>
                                <p className='d-1'>RAMASAMY ESWARAMURTHY is popularly known as SRI SHANMUGA ELECTRONICS. It is a Proprietorship with its office registered in Tamil Nadu . The company carries out its major operations from Tamil Nadu.</p>
                            </div>
                            <div className='de-1'>
                                <h3>Service options :</h3>
                                <p className='d-1'>In-store shopping · Delivery</p>
                            </div>
                            <div className='de-1'>
                                <h3>Timings</h3>
                                <p className='d-1'>Mon - Sat 9:30 am - 7:00 pm</p>
                                <p className='d-1'>Sun Closed - Closed(Sometimes store is open on Sundays, but please call the owner for confirmation.)</p>
                                <br />
                                <hr />
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default About