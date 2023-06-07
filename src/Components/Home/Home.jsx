import React from 'react'
import './Home.css'
import homet from '../../img/store1.jpg';
// import Slide from 'react-reveal/Slide';
const Home = () => {
    return (
        <>

            <div className='outer'>
                <div className='hero'>
                    {/* <Slide left> */}
                        <div className='left'>
                            <div>
                                <h3 className='con'>
                                    Experience the ultimate in convenience and quality with our wide selection of top-of-the-line electronics.
                                </h3>
                            </div>
                            <div>
                                <button className='btn'>View More</button>
                            </div>

                        </div>
                    {/* </Slide> */}
                    <div className='right'>
                        <img src={homet} style={{ 'width': '32rem', 'height': '24rem' }} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home