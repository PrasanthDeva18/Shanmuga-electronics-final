import React from 'react'
import './black.css';

const Black = () => {
    return (
        <>
            <div className='black'>
                <div className='le'>
                    <h1 className='con1'>HAND MADE AMPLIFIERS WE DO.</h1>
                    <p className='con2'>We also firmly believed that our customers deserved more choices, straightforward information and legendary service.</p>
                    <button className='btnn'>View More</button>
                </div>
                {/* <Zoom> */}
                    <div className='ved-b'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ME5dTIkW-2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                {/* </Zoom> */}

            </div>
        </>
    )
}
export default Black