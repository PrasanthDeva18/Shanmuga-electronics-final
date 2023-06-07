import React from 'react'
import './product.css'
import Amp from '../../img/amp-b.jpg';
import speaker from '../../img/speaker-f.jpg'
import tele from '../../img/boards.jpg';
// import Zoom from 'react-reveal/Zoom';
const Products = () => {
    return (
        <>
            <div className='products'>
                <h2 className='pro'>OUR LATEST PRODUCTS</h2>
           
                    <div className='gallery'>
                        <img src={Amp} loading='eager' className='amp' />
                        <img src={speaker} className='amp' />
                        <img src={tele} className='amp' />
                    </div>

                <div className='bbb'>
                    <button className='btnp'>VIEW GALLERY</button>
                </div>

            </div>
        </>
    )
}

export default Products