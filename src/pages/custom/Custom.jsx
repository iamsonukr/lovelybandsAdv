import React, { useState } from 'react';
import './custom.css'

const Custom = () => {
  const [selectedWristband, setSelectedWristband] = useState({ id: 1, image: './lanyard/lanyard1.webp' });

  const [name,setName]=useState('Your Name');

  const Custom = [
    { id: 0, image: './lanyard/lanyard0.png' },
    { id: 1, image: './lanyard/lanyard1.webp' },
    { id: 2, image: './lanyard/lanyard2.webp' },
    { id: 3, image: './lanyard/lanyard3.webp' },
    { id: 4, image: './lanyard/lanyard4.webp' },
    { id: 5, image: './lanyard/lanyard5.webp' },
    { id: 6, image: './lanyard/lanyard6.webp' },
    { id: 7, image: './lanyard/lanyard7.webp' },
    { id: 8, image: './lanyard/lanyard8.webp' },
    { id: 9, image: './lanyard/lanyard9.webp' },
    { id: 10, image: './lanyard/lanyard10.webp' },
    { id: 11, image: './lanyard/lanyard11.webp' },
    { id: 12, image: './lanyard/lanyard12.webp' },

    // Add more wristband options here
  ];

  const handleWristbandClick = (wristband) => {
    setSelectedWristband(wristband);
  };

  return (
    <div>
      {/* <h2>Choose a Wristband Style</h2> */}
      <div className="formOptions">
        <div className="display">
          <WristbandPreview selectedWristband={selectedWristband} name={name}/>
          </div>
        <div className='formItems'>
          {/* Type */}
          <div className="SelectType">
            <p className='FormHeadTitle'>1. Please Select the type of band you want</p>
            <div className='selectBand'>
              {Custom.map((wristband) => (
                <img className='optionImg'
                  key={wristband.id}
                  src={wristband.image}
                  alt={`Wristband ${wristband.id}`}
                  onClick={() => handleWristbandClick(wristband)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </div>

          <p className='FormHeadTitle'>2. Customize your message</p>
          <div className="custom-message">
            {/* msg line one */}
            <div className="message-row">
              <div className="msg">
                <p>Your Message Here</p>
                <input type="text" className="msgBox" onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className="select-font">
                <p>Choose your font .</p>
                <select name="" id="" placeholder="select font">
                  <option value="">Aerial</option>
                  <option value="">Roboto</option>
                  <option value="">Cambria</option>
                </select>

              </div>
            </div>
            {/* msg line two */}
            <div className="message-row">
              <div className="select-font">
                <p>Select Start Icon</p>
                <select name="" id="" placeholder="select font">
                  <option value="">😎</option>
                  <option value="">🐲</option>
                  <option value="">🎨</option>
                </select>
              </div>
              <div className="select-font">
                <p>Select End Icon</p>
                <select name="" id="" placeholder="select font">
                  <option value="">😎</option>
                  <option value="">🐲</option>
                  <option value="">🎨</option>
                </select>

              </div>
            </div>
            {/* message line three */}
            <div className="message-row">
              <div className="select-font">
                <p>Imprint Options</p>
                <select name="" id="" placeholder="select font">
                  <option value="">One Side</option>
                  <option value="">Two Side</option>
                  {/* <option value="">🎨</option> */}
                </select>
              </div>
              <div className="select-font">
                <p>Number of Impring Colors</p>
                <select name="" id="" placeholder="select font">
                  <option value="">One Color</option>
                  <option value="">two Color</option>
                  <option value="">Three Color</option>
                </select>

              </div>
            </div>
            {/* message line four */}
            <div className="message-row">
              <div className="select-font">
                <p>Imprint Color</p>
                <select name="" id="" placeholder="select font">
                  <option value="">Green</option>
                  <option value="">Yellow</option>
                </select>
              </div>
            </div>

            <div className="message-row">
              <p>Order Notes</p>
              <br />
              <textarea name="" id="">

              </textarea>
            </div>

          </div>
        

          {/* Choose color */}
          <p className='FormHeadTitle'>3. Please select the color you want</p>
          <div className='color'>
            <div className="color1">
              <div className="gold"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="black"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="brown"></div>
              <input type="text" placeholder='quantity' />

            </div>
            <div className="color1">
              <div className="pink"></div>
              <input type="text" placeholder='quantity' />

            </div>

          </div>

          

            {/* select Size */}
            <div className="lanSize">
            <p className='FormHeadTitle'>4. Please Select the size you want</p>
            <p><pre>Width</pre></p>
            <div className="lanWidth">
              <div className="landW1">
                <p>1 inch <span className='SUnit'>25 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>3/4 inch <span className='SUnit'>20 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>5/8 inch <span className='SUnit'>15 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
              <div className="landW1">
                <p>7/8 inch <span className='SUnit'>11 mm</span></p>
                <input type="radio" name="width" className="radio-input" />
              </div>
            </div>

            {/* Lenght */}
            <p>Length</p>
            <div className="lanLenght">
              <div className="landL1">
                <p>Small <span className='SUnit'>30 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Standard <span className='SUnit'>36 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Large <span className='SUnit'>42 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
              <div className="landL1">
                <p>Extra Large <span className='SUnit'>48 inch</span></p>
                <input type="radio" name="length" className="radio-input" />
              </div>
            </div>
          </div>
          {/* size end here */}
         
          {/* Attachment Style */}
          <p className='FormHeadTitle'>5. Please select the Attachment you want</p>
          <div className='color'>
            <div className="attachment1">
              <img src="./attacchment/attact1.webp" alt="hello" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact2.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact3.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>
            <div className="attachment1">
              <img src="./attacchment/attact4.webp" alt="" />
              <input type="radio" name="attachment" placeholder='quantity' />

            </div>

          </div>

        </div>
      </div>

    </div >
  );
};

// WristbandPreview.js
const WristbandPreview = ({ selectedWristband,name }) => {
  return (
    <div>
      {/* <h2>Preview</h2> */}
      {selectedWristband.id==0 ? (
        <>
        <img src={selectedWristband.image} alt="Selected Wristband" />
        <p className='name1'>{name}</p>
        <p className='name2'>{name}</p>
        <p className='name3'>{name}</p>
        </>
      ) : (
        <img src={selectedWristband.image} alt="Selected Wristband" />
      )}
    </div>
  );
};

export default Custom;