import React, { useState } from 'react';
import './lanyard.css'

const Lanyard = () => {
  const [selectedWristband, setSelectedWristband] = useState({ id: 1, image: './popularProducts/custom-balloon.webp' });

  const Lanyard = [
    { id: 1, image: './popularProducts/custom-balloon.webp' },
    { id: 2, image: './popularProducts/custom-banner.webp' },
    { id: 2, image: './popularProducts/custom-button.webp' },
    { id: 2, image: './popularProducts/custom-cansleeve.webp' },
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
          <WristbandPreview selectedWristband={selectedWristband} />
        </div>
        <div className='formItems'>
          {/* Type */}
          <div className="SelectType">
            <p>1. Please Select the type of band you want</p>
            <div className='selectBand'>
              {Lanyard.map((wristband) => (
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
          {/* select Size */}
          <div className="lanSize">
            <p>2. Please Select the size you want</p>
            <p><pre>Width</pre></p>
            <div className="lanWidth">
              <div className="landW1">
                <p>10cm</p>
                <p>10cm</p>
              </div>
              <div className="landW1">
                <p>20cm</p>
                <p>20cm</p>
              </div>
              <div className="landW1">
                <p>30cm</p>
                <p>30cm</p>
              </div>
              <div className="landW1">
                <p>40cm</p>
                <p>40cm</p>
              </div>

            </div>
            <p>Length</p>
            <div className="lanLenght">
              <div className="landL1">
                <p>10cm</p>
                <p>10cm</p>
              </div>
              <div className="landL1">
                <p>20cm</p>
                <p>20cm</p>
              </div>
              <div className="landL1">
                <p>30cm</p>
                <p>30cm</p>
              </div>
              <div className="landL1">
                <p>40cm</p>
                <p>40cm</p>

              </div>
            </div>
          </div>
          {/* size end here */}

          {/* Choose color */}
          <p>3. Please select the color you want</p>
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
          <p>4. Customize your message</p>
          <div className="custom-message">
            {/* msg line one */}
            <div className="message-row">
              <div className="msg">
                <p>Your Message Here</p>
                <input type="text" className="msgBox" />
              </div>
              <div className="select-font">
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
              <textarea name="" id="">

              </textarea>
            </div>

          </div>
          {/* Attachment Style */}
          <p>5. Please select the Attachment you want</p>
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
const WristbandPreview = ({ selectedWristband }) => {
  return (
    <div>
      {/* <h2>Preview</h2> */}
      {selectedWristband ? (
        <img src={selectedWristband.image} alt="Selected Wristband" />
      ) : (
        <p>No wristband selected</p>
      )}
    </div>
  );
};

export default Lanyard;