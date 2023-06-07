import React from 'react'
import './shop.css'
import Amplifier from '../../img/amp-b.jpg'
import speaker from '../../img/speakers-c.jpg'
import tele from '../../images/tele.png';
import remote from '../../img/Gadgets.jpg';
import homet from '../../img/HomeTheatre.jpg';
// import Fade from 'react-reveal/Fade';
const Shop = () => {
    return (
        <>
            <div className='out'>
                <div >
                    <h2 className='txt'>SHOP BY ELECTRONICS</h2>
                </div>
                {/* <Fade Left big> */}
                    <div className='img'>
                        <div className='img1'>
                            <img src={Amplifier} className='images-s' />
                            <p>Amplifier</p>
                        </div>
                        <div className='img1'>
                            <img src={speaker} className='images-s' />
                            <p>Speaker</p>
                        </div>
                        <div className='img1'>
                            <img src={homet} className='images-s' />
                            <p>Home Theatre</p>
                        </div>
                        <div className='img1'>
                            <img src={remote} className='images-s' />
                            <p>Gadgets</p>
                        </div>
                        <div className='img1'>
                            <img src={tele} className='images-s' />
                            <p>Television</p>
                        </div>
                    </div>
                {/* </Fade> */}
            </div>
        </>
    )
}

export default Shop