import React from 'react'
import Amp1 from '../../img/amplifier-mini.jpg'
import Amp2 from '../../img/amp-med.jpg'
import Amp3 from '../../img/amp-b.jpg'
import amps from '../../img/amp-mm-back.jpg'
import speaker1 from '../../img/speakers-c.jpg'
import speaker2 from '../../img/speaker-f.jpg'
import speaker3 from '../../img/s-back.jpg'
import speaker4 from '../../img/speaker2.jpg'
import board1 from '../../img/boards.jpg'
import borad2 from '../../img/raj-b.jpg'
import board3 from '../../img/shan.jpg'
import board4 from '../../img/pack.jpg'
import g1 from '../../img/Gadgets.jpg'
import g2 from '../../img/wires.jpg'
import g3 from '../../img/sbox.jpg'
import g4 from '../../img/products.jpg'
import './gallery.css'
import Footer from '../Footer/Footer'

const Gallery = () => {

  return (
    <div className='o-g'>
      <div className='gallery1'>
        <h2>Amplifiers</h2>
        <div className='gallery-a'>
          <img src={Amp1} className='iiiii' />
          <img src={Amp2} className='iiiii' />
          {/* style={{ width: '20%',height:'20%' }} */}
          <img src={Amp3} className='iiiii' />
          <img src={amps} className='iiiii' />
        </div>
      </div>
      <div className='gallery1'>
        <h2>Speakers</h2>
        <div className='gallery-a'>
          <img src={speaker1} className='iiiii' />
          <img src={speaker2} className='iiiii' />
          <img src={speaker4} className='iiiii' />
          <img src={speaker3} className='iiiii' />
        </div>

      </div>
      <div className='gallery1'>
        <h2>Boards</h2>
        <div className='gallery-a'>
          <img src={board1} className='iiiii' />
          <img src={borad2} className='iiiii' />
          <img src={board3} className='iiiii' />
          <img src={board4} className='iiiii' />
        </div>
      </div>
      <div className='gallery1'>
        <h2>Gadgets</h2>
        <div className='gallery-a'>
          <img src={g1} className='iiiii' />
          <img src={g2} className='iiiii' />
          <img src={g3} className='iiiii' />
          <img src={g4} className='iiiii' />
        </div>

      </div>
      <Footer/>

    </div>
  )
}

export default Gallery