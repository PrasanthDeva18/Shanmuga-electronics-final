import React from 'react'
import './service.css'
import tv from '../../img/installation.jpg';
import repair from '../../img/M-works.jpg'
import speaker from '../../img/amp-r.jpg';
// import Zoom from 'react-reveal/Zoom';
const Services = () => {
    return (
        <>
            <div className='services'>
                <h3 className='pro'>OUR SERVICES</h3>
                {/* <Zoom> */}
                    <div className='gallery'>
                        <div className='sercar'>
                            <img src={repair} className='simg' />
                            <p>TELEVISION REPAIR</p>
                        </div>
                        <div className='sercar'>
                            <img src={speaker} className='simg' />
                            <p>AUDIO SYSTEM REPAIR</p>
                        </div>
                        <div className='sercar'>
                            <img src={tv} className='simg' />
                            <p>INSTALLATION</p>
                        </div>
                    </div>
                {/* </Zoom> */}
                <div className='bbb'>
                    <button className='btnp'>VIEW MORE</button>
                </div>
            </div>
        </>
    )
}

export default Services