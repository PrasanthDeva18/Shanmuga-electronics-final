import React from 'react'
import q from '../../images/q.svg'
import './reviews.css'
// import Fade from 'react-reveal/Fade';
const Reviews = () => {
    return (
        // <Fade left>
            <div className='reviews'>
                <div >
                    <h2 className='cc'>CUSTOMER REVIEWS</h2>
                </div>
                <div className='rr'>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>The home theater system I bought from this electronic shop completely transformed my entertainment setup with its impressive audio quality and immersive surround sound.</p>
                            </div>
                        <div>
                            <p>- Prasanth D</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>You have Good quality products. I like your shop..... I will suggest to my friends and neighbors for your shop. Thank you... keep rocking...</p>
                        </div>
                        <div>
                            <p>- Madhan Raj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <img src={q} />
                        </div>
                        <div>
                            <p>Its nice... Worth for money of any electronical products.... Audio systems , video systems and also any kind of electrical thinks are availble here...</p>
                        </div>
                        <div>
                            <p>- Balamurugan Meyappan</p>
                        </div>
                    </div>
                </div>
            </div>
        // </Fade>

    )
}

export default Reviews