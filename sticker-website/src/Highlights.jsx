
import './Highlights.css'

import sticker_1 from './assets/row-assets/pigeon.png'
import sticker_2 from './assets/row-assets/blue.png'
import sticker_3 from './assets/row-assets/glass.png'
import sticker_4 from './assets/row-assets/yellow.png'

import poster_1 from './assets/row-assets/505.png'
import poster_2 from './assets/row-assets/blonde.png'
import poster_3 from './assets/row-assets/cusco.png'
import poster_4 from './assets/row-assets/chinese.png'





function Highlights(){
    return(
        <>
            <div className='highlights-container'>
                <h1>HIGHLIGHTS</h1>
                <p>
                    Thoughtfully designed to add a personal touch to your space. Soft tones or
                    bold accents, each piece is easy to place and made to feel right at home.
                    Whether on your journal, wall, or desk.
                </p>


                <h2>STICKERS</h2>
                <div className='display-container'>
                    <div className="rows row-1">
                        <div className='row-item'>
                            <img src={sticker_1} alt="" />
                        </div>
                        <div className='row-item'>
                            <div className='image-container'><img src={sticker_2} alt="" /></div>
                        </div>
                        <div className='row-item'>
                            <div className='image-container'><img src={sticker_3} alt="" /></div>
                        </div>
                        <div className='row-item'>
                            <div className='image-container'><img src={sticker_4} alt="" /></div>
                        </div>
                    </div>

                    <h2>POSTERS</h2>
                    <div className="rows row-2">
                        <div className='row-item'>
                            <img src={poster_1} alt="" />
                        </div>
                        <div className='row-item'>
                            <img src={poster_2} alt="" />
                        </div>
                        <div className='row-item'>
                           <img src={poster_3} alt="" />
                        </div>
                        <div className='row-item'>
                           <img src={poster_4} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Highlights;